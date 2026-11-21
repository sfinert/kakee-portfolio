# Re-exports the work models with their Substance Painter textures for the web viewer.
# The Maya UVs use UDIM tiles (1001, 1002, ...), which glTF cannot express, so faces are
# split per tile into their own material and their UVs moved back into 0-1.
#
# blender -b --factory-startup --python scripts/asset-prep/export-textured-models.py -- \
#   --maya-projects C:/SORO_3D_STUDY/Maya/Projects --output exports/textured keychain game-controller jonglu lantern
import argparse
import math
import re
import sys
from pathlib import Path

import bpy
from mathutils import Vector

ROOT = Path(__file__).resolve().parents[2]
MAYA = ROOT / 'source-assets' / 'maya'
JOBS = {
    'keychain': dict(fbx='KSY23_H37_Keychain/scenes/assetsforexport.fbx', project='KSY23_H37_Keychain',
                     prefix='md', skip=r'pSphere\d*(?:\.\d+)?', size=3.0, limit=110000),
    'game-controller': dict(fbx='KSY23_H38_GameController/scenes/scene.fbx', project='KSY23_H38_GameController',
                            prefix='scene', skip=r'room', size=3.0, limit=110000),
    # Jonglu's Maya material names do not follow its UDIM tiles; its texture sets are named per tile.
    'jonglu': dict(fbx='KSY_SM_Jonglu/scenes/jonglu_fin.fbx', project='KSY_SM_Jonglu',
                   prefix='Jonglu', skip=None, size=3.0, limit=110000, by_tile=True, texture_size=1536),
    'lantern': dict(fbx='KSY23_h32_Lantern/scenes/lantern.fbx', project='KSY23_h32_Lantern',
                    prefix='lantern', skip=None, size=2.7, limit=95000, texture_size=1024,
                    # Glass bulbs, the gauge dome and the chimney are cut out by Substance opacity maps.
                    opacity=True, image_format='WEBP'),
}
TEXTURE_SIZE = 2048


def find_texture(folder, prefix, material, channel, tile):
    pattern = f'{prefix}_{material}_{channel}.{tile}.png'
    found = [path for path in folder.rglob(pattern) if 'before' not in path.parts and '.vrayThumbs' not in path.parts]
    return max(found, key=lambda path: path.stat().st_mtime) if found else None


def load_image(path, cache):
    key = str(path)
    if key not in cache:
        image = bpy.data.images.load(key)
        width, height = image.size
        if max(width, height) > cache['size']:
            factor = cache['size'] / max(width, height)
            image.scale(max(1, round(width * factor)), max(1, round(height * factor)))
            # The glTF exporter re-reads the file on disk, so write the reduced copy out first.
            reduced = Path(bpy.app.tempdir) / f'reduced_{len(cache)}_{path.name}'
            image.filepath_raw = str(reduced)
            image.file_format = 'PNG'
            image.save()
        cache[key] = image
    return cache[key]


def build_material(name, maps, cache):
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    nodes = material.node_tree.nodes
    links = material.node_tree.links
    shader = nodes['Principled BSDF']
    shader.inputs['Roughness'].default_value = .65
    shader.inputs['Metallic'].default_value = 0
    if not maps:
        shader.inputs['Base Color'].default_value = (.42, .43, .46, 1)
        return material

    def texture(channel, colorspace):
        node = nodes.new('ShaderNodeTexImage')
        node.image = load_image(maps[channel], cache)
        node.image.colorspace_settings.name = colorspace
        return node

    if 'BaseColor' in maps:
        links.new(texture('BaseColor', 'sRGB').outputs['Color'], shader.inputs['Base Color'])
    if 'Roughness' in maps:
        links.new(texture('Roughness', 'Non-Color').outputs['Color'], shader.inputs['Roughness'])
    if 'Metallic' in maps:
        links.new(texture('Metallic', 'Non-Color').outputs['Color'], shader.inputs['Metallic'])
    if 'Normal' in maps:
        normal = nodes.new('ShaderNodeNormalMap')
        links.new(texture('Normal', 'Non-Color').outputs['Color'], normal.inputs['Color'])
        links.new(normal.outputs['Normal'], shader.inputs['Normal'])
    if 'Emissive' in maps:
        links.new(texture('Emissive', 'sRGB').outputs['Color'], shader.inputs['Emission Color'])
        shader.inputs['Emission Strength'].default_value = 1
    if 'Opacity' in maps:
        links.new(texture('Opacity', 'Non-Color').outputs['Color'], shader.inputs['Alpha'])
        for attribute, value in (('blend_method', 'BLEND'), ('surface_render_method', 'BLENDED')):
            if hasattr(material, attribute):
                setattr(material, attribute, value)
    return material


def assign_tiles(obj, job, folder, materials, cache, face_materials):
    mesh = obj.data
    uv = mesh.uv_layers.active
    mesh.materials.clear()
    slots = {}
    for polygon in mesh.polygons:
        loops = list(polygon.loop_indices)
        u = sum(uv.data[index].uv.x for index in loops) / len(loops) if uv else .5
        v = sum(uv.data[index].uv.y for index in loops) / len(loops) if uv else .5
        du, dv = math.floor(u), math.floor(v)
        tile = 1001 + du + 10 * dv
        source = f'UV{tile - 1000}' if job.get('by_tile') else face_materials[polygon.index]
        key = (source, tile)
        if key not in materials:
            maps = {}
            channels = ['BaseColor', 'Normal', 'Roughness', 'Metallic', 'Emissive'] + (['Opacity'] if job.get('opacity') else [])
            for channel in channels:
                path = find_texture(folder, job['prefix'], source, channel, tile)
                # Substance writes flat (all-black emissive, all-white opacity) maps as tiny files; skip those.
                if path and not (channel in ('Emissive', 'Opacity') and path.stat().st_size < 60000):
                    maps[channel] = path
            materials[key] = build_material(f'{source}_{tile}', maps, cache)
            print('MATERIAL', key, sorted(maps), flush=True)
        if key not in slots:
            mesh.materials.append(materials[key])
            slots[key] = len(mesh.materials) - 1
        polygon.material_index = slots[key]
        if uv and (du or dv):
            for index in loops:
                uv.data[index].uv.x -= du
                uv.data[index].uv.y -= dv


def export(key, job, projects, output):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.fbx(filepath=str(MAYA / job['fbx']), use_custom_props=False, use_image_search=False)
    sources = [obj for obj in bpy.context.scene.objects if obj.type == 'MESH' and len(obj.data.polygons)]
    if job['skip']:
        sources = [obj for obj in sources if not re.fullmatch(job['skip'], obj.name)]

    graph = bpy.context.evaluated_depsgraph_get()
    model = []
    face_materials = {}
    for obj in sources:
        # Record each face's source material before baking: one Maya mesh can carry two texture
        # sets inside the same UDIM tile, and the baked copy loses the per-face slot names.
        names = [slot.material.name if slot.material else 'none' for slot in obj.material_slots] or ['none']
        per_face = [names[min(p.material_index, len(names) - 1)] for p in obj.data.polygons]
        evaluated = obj.evaluated_get(graph)
        mesh = bpy.data.meshes.new_from_object(evaluated, depsgraph=graph)
        if len(mesh.polygons) != len(per_face):
            raise RuntimeError(f'{obj.name}: face count changed while baking')
        instance = bpy.data.objects.new(obj.name, mesh)
        bpy.context.collection.objects.link(instance)
        instance.matrix_world = evaluated.matrix_world
        face_materials[instance.name] = per_face
        model.append(instance)
    for obj in list(bpy.context.scene.objects):
        if obj not in model:
            bpy.data.objects.remove(obj, do_unlink=True)

    folder = projects / job['project'] / 'sourceimages'
    materials, cache = {}, {'size': job.get('texture_size', TEXTURE_SIZE)}
    for obj in model:
        for attribute in list(obj.data.color_attributes):
            obj.data.color_attributes.remove(attribute)
        assign_tiles(obj, job, folder, materials, cache, face_materials[obj.name])

    # Separate per material so mesh reduction never collapses across texture sets.
    bpy.ops.object.select_all(action='DESELECT')
    for obj in model:
        obj.select_set(True)
    bpy.context.view_layer.objects.active = model[0]
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.separate(type='MATERIAL')
    bpy.ops.object.mode_set(mode='OBJECT')
    model = [obj for obj in bpy.context.scene.objects if obj.type == 'MESH' and len(obj.data.polygons)]

    triangles = sum(sum(len(p.vertices) - 2 for p in obj.data.polygons) for obj in model)
    ratio = min(1, job['limit'] / max(1, triangles))
    for obj in model:
        if ratio < 1 and len(obj.data.polygons) > 300:
            bpy.context.view_layer.objects.active = obj
            modifier = obj.modifiers.new('Web mesh reduction', 'DECIMATE')
            modifier.ratio = max(.02, ratio)
            bpy.ops.object.modifier_apply(modifier=modifier.name)

    bpy.context.view_layer.update()
    corners = [obj.matrix_world @ Vector(corner) for obj in model for corner in obj.bound_box]
    low = Vector([min(p[i] for p in corners) for i in range(3)])
    high = Vector([max(p[i] for p in corners) for i in range(3)])
    center = (low + high) * .5
    scale = job['size'] / max(high - low)
    bpy.ops.object.select_all(action='DESELECT')
    for obj in model:
        obj.location = (obj.location - center) * scale
        obj.scale *= scale
        obj.select_set(True)
    bpy.context.view_layer.update()

    target = output / f'{key}.glb'
    options = dict(filepath=str(target), export_format='GLB', use_selection=True, export_yup=True,
                   export_animations=False, export_materials='EXPORT', export_texcoords=True,
                   export_normals=True, export_image_format=job.get('image_format', 'JPEG'))
    available = bpy.ops.export_scene.gltf.get_rna_type().properties.keys()
    for name in ('export_image_quality', 'export_jpeg_quality'):
        if name in available:
            options[name] = 82
    bpy.ops.export_scene.gltf(**options)
    after = sum(sum(len(p.vertices) - 2 for p in obj.data.polygons) for obj in model)
    print('EXPORTED', key, target.stat().st_size, 'bytes', after, 'tris', len(materials), 'materials', flush=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--maya-projects', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('keys', nargs='+', choices=JOBS)
    opts = parser.parse_args(sys.argv[sys.argv.index('--') + 1:])
    opts.output.mkdir(parents=True, exist_ok=True)
    for key in opts.keys:
        try:
            export(key, JOBS[key], opts.maya_projects, opts.output.resolve())
        except Exception as error:
            print('EXPORTERROR', key, repr(error), flush=True)


main()
