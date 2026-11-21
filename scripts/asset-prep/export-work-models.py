import argparse
import sys
from pathlib import Path

import bpy
from mathutils import Vector


def inspect(objects):
    for obj in objects:
        obj.data.calc_loop_triangles()
        dims = tuple(round(v, 3) for v in obj.dimensions)
        print('MESH', obj.name, len(obj.data.vertices), len(obj.data.loop_triangles), dims)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('source')
    parser.add_argument('target', nargs='?')
    parser.add_argument('--limit', type=int, default=95000)
    opts = parser.parse_args(sys.argv[sys.argv.index('--') + 1:])
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.fbx(filepath=opts.source, use_custom_props=False, use_image_search=False)
    objects = [obj for obj in bpy.context.scene.objects if obj.type == 'MESH' and len(obj.data.polygons)]
    if not objects:
        raise RuntimeError('FBX yielded no meshes')
    inspect(objects)
    if not opts.target:
        return

    # Keep world orientation and scale, with no camera, lamps, or texture dependencies.
    original_world = {obj: obj.matrix_world.copy() for obj in objects}
    for obj in objects:
        obj.animation_data_clear()
        obj.parent = None
        obj.matrix_world = original_world[obj]
    for obj in list(bpy.context.scene.objects):
        if obj not in objects:
            bpy.data.objects.remove(obj, do_unlink=True)
    bpy.context.view_layer.update()

    color_map = ((0.66, 0.61, 0.52, 1), (0.36, 0.42, 0.43, 1), (0.48, 0.54, 0.52, 1))
    materials = []
    for index, color in enumerate(color_map):
        mat = bpy.data.materials.new('Sculpture surface ' + str(index + 1))
        mat.use_nodes = True
        shader = mat.node_tree.nodes.get('Principled BSDF')
        shader.inputs['Base Color'].default_value = color
        shader.inputs['Roughness'].default_value = 0.63
        shader.inputs['Metallic'].default_value = 0.15
        materials.append(mat)

    triangles = sum(len(obj.data.loop_triangles) for obj in objects)
    ratio = min(1, opts.limit / triangles)
    for index, obj in enumerate(sorted(objects, key=lambda obj: -len(obj.data.polygons))):
        obj.data.materials.clear()
        obj.data.materials.append(materials[index % len(materials)])
        for layer in list(obj.data.uv_layers):
            obj.data.uv_layers.remove(layer)
        for layer in list(obj.data.color_attributes):
            obj.data.color_attributes.remove(layer)
        if ratio < 1 and len(obj.data.polygons) > 100:
            bpy.context.view_layer.objects.active = obj
            modifier = obj.modifiers.new('Web sculpture reduction', 'DECIMATE')
            modifier.ratio = ratio
            bpy.ops.object.modifier_apply(modifier=modifier.name)

    bpy.context.view_layer.update()
    corners = [obj.matrix_world @ Vector(corner) for obj in objects for corner in obj.bound_box]
    minima = Vector(tuple(min(pt[axis] for pt in corners) for axis in range(3)))
    maxima = Vector(tuple(max(pt[axis] for pt in corners) for axis in range(3)))
    center = (minima + maxima) * 0.5
    scale = 2.7 / max(maxima - minima)
    for obj in objects:
        obj.location = (obj.location - center) * scale
        obj.scale *= scale
        obj.select_set(True)
    bpy.context.view_layer.update()
    inspect(objects)
    bpy.ops.export_scene.gltf(
        filepath=str(Path(opts.target).resolve()), export_format='GLB',
        use_selection=True, export_yup=True, export_animations=False,
        export_materials='EXPORT', export_texcoords=False, export_normals=True,
        export_draco_mesh_compression_enable=False,
    )


main()
