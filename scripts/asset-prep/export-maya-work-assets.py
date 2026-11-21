import argparse
import json
import re
import sys
from pathlib import Path

import bpy
from mathutils import Vector


MAYA = Path(__file__).resolve().parents[2] / "source-assets" / "maya"
SOURCE = {
    "keychain": "KSY23_H37_Keychain/scenes/assetsforexport.fbx",
    "game-controller": "KSY23_H38_GameController/scenes/scene.fbx",
    "jonglu": "KSY_SM_Jonglu/scenes/jong_high.obj",
    "jonglu-scene": "KSY_SM_Jonglu/scenes/jonglu_fin.fbx",
    "guitar": "Personal_Projects/Guitar/scenes/guitar_all.fbx"
}


def open_asset(key):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    source = str(MAYA / SOURCE[key])
    if source.endswith(".obj"):
        bpy.ops.wm.obj_import(filepath=source, forward_axis="NEGATIVE_Z", up_axis="Y", validate_meshes=False)
    else:
        bpy.ops.import_scene.fbx(filepath=source, use_custom_props=False, use_image_search=False)
    bpy.context.view_layer.update()
    return [obj for obj in bpy.context.scene.objects if obj.type == "MESH" and len(obj.data.polygons)]


def describe(objects):
    result = []
    for obj in objects:
        obj.data.calc_loop_triangles()
        result.append(dict(
            name=obj.name,
            tris=len(obj.data.loop_triangles),
            dimensions=[round(v, 3) for v in obj.dimensions],
            center=[round(v, 3) for v in obj.matrix_world.translation],
            materials=[slot.name for slot in obj.material_slots[:6]],
            polygons=len(obj.data.polygons),
        ))
    return sorted(result, key=lambda entry: -entry["tris"])


def export_model(key, objects, output):
    if not objects:
        raise ValueError("The asset has no mesh: " + key)
    if key == 'keychain':
        objects = [obj for obj in objects if not re.fullmatch(r'pSphere\d*(?:\.\d+)?', obj.name)]
    if key == 'game-controller':
        objects = [obj for obj in objects if obj.name != 'room']
    if key == 'guitar':
        objects = [obj for obj in objects if obj.name != 'guitar_glass']

    # Capture evaluated geometry before dropping nodes such as armatures and render cameras.
    graph = bpy.context.evaluated_depsgraph_get()
    model = []
    for obj in objects:
        evaluated = obj.evaluated_get(graph)
        mesh = bpy.data.meshes.new_from_object(evaluated, preserve_all_data_layers=False, depsgraph=graph)
        instance = bpy.data.objects.new(obj.name, mesh)
        bpy.context.collection.objects.link(instance)
        instance.matrix_world = evaluated.matrix_world
        model.append(instance)
    for obj in list(bpy.context.scene.objects):
        if obj not in model:
            bpy.data.objects.remove(obj, do_unlink=True)

    triangles = sum(entry["tris"] for entry in describe(model))
    ratio = 1 if key == 'jonglu' else min(1, 110000 / max(1, triangles))
    for obj in model:
        obj.data.materials.clear()
        for attribute in list(obj.data.color_attributes):
            obj.data.color_attributes.remove(attribute)
        if ratio < 1 and len(obj.data.polygons) > 500:
            bpy.context.view_layer.objects.active = obj
            decimate = obj.modifiers.new("Web mesh reduction", "DECIMATE")
            decimate.ratio = max(.01, ratio)
            bpy.ops.object.modifier_apply(modifier=decimate.name)

    bpy.context.view_layer.update()
    corners = [obj.matrix_world @ Vector(vertex) for obj in model for vertex in obj.bound_box]
    low = Vector([min(p[i] for p in corners) for i in range(3)])
    high = Vector([max(p[i] for p in corners) for i in range(3)])
    center = (low + high) * .5
    scale = 3.0 / max(high - low)
    for obj in model:
        obj.location = (obj.location - center) * scale
        obj.scale *= scale
        obj.select_set(True)
    bpy.context.view_layer.update()
    print("MODELEXPORT", key, len(model), sum(entry["tris"] for entry in describe(model)),
          tuple(round(v, 4) for v in high - low), flush=True)
    if key != 'jonglu':
        target = str(output / (key + ".glb"))
        bpy.ops.export_scene.gltf(
            filepath=target, export_format="GLB", use_selection=True, export_yup=True,
            export_animations=False, export_materials="NONE", export_texcoords=False, export_normals=True,
        )
    return model, (high - low) * scale


def render_preview(key, model, dimensions, output):
    scene = bpy.context.scene
    scene.world = bpy.data.worlds.new('Studio')
    scene.world.use_nodes = True
    background = scene.world.node_tree.nodes['Background']
    background.inputs['Color'].default_value = (.065, .084, .12, 1)
    background.inputs['Strength'].default_value = .37

    def material(name, color, roughness, metallic):
        mat = bpy.data.materials.new(name)
        mat.use_nodes = True
        shader = mat.node_tree.nodes['Principled BSDF']
        shader.inputs['Base Color'].default_value = (*color, 1)
        shader.inputs['Roughness'].default_value = roughness
        shader.inputs['Metallic'].default_value = metallic
        return mat

    clay = material('Clay', (.38, .395, .42), .62, .08)
    for obj in model:
        obj.data.materials.append(clay)

    bpy.ops.mesh.primitive_plane_add(size=200, location=(0, 0, -dimensions.z * .5 - .025))
    plane = bpy.context.object
    plane.data.materials.append(material('Studio floor', (.024, .031, .046), .83, 0))

    def aim(obj, point):
        obj.rotation_euler = (Vector(point) - obj.location).to_track_quat('-Z', 'Y').to_euler()

    for name, position, energy, size, color in [
        ('Soft box', (2.5, -4, 5.3), 690, 4.5, (.83, .91, 1)),
        ('Side fill', (-4, -1, 2.3), 275, 4, (.78, .84, 1)),
        ('Rim', (-2.2, 3.5, 4.3), 845, 3.6, (1, .86, .76)),
    ]:
        data = bpy.data.lights.new(name, 'AREA')
        data.energy, data.size, data.color = energy, size, color
        light = bpy.data.objects.new(name, data)
        scene.collection.objects.link(light)
        light.location = position
        aim(light, (0, 0, 0))

    bpy.ops.object.camera_add(location=((4.8, 4.1, 2.15) if key == 'jonglu' else (4.2, -5.6, 3.2)))
    scene.camera = bpy.context.object
    scene.camera.data.lens = 46
    aim(scene.camera, (0, 0, .05))
    scene.render.engine = 'CYCLES'
    scene.cycles.device = 'CPU'
    scene.cycles.samples = 18
    scene.cycles.use_denoising = True
    scene.render.resolution_x = 1440
    scene.render.resolution_y = 1080
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = 'JPEG'
    scene.render.image_settings.quality = 94
    scene.render.filepath = str(output / ('jonglu-bell.jpg' if key == 'jonglu' else 'jonglu.jpg'))
    bpy.ops.render.render(write_still=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path)
    parser.add_argument("--previews", action="store_true")
    parser.add_argument("keys", nargs="+", choices=SOURCE)
    opts = parser.parse_args(sys.argv[sys.argv.index("--") + 1:])
    if opts.output:
        opts.output.mkdir(parents=True, exist_ok=True)
    for key in opts.keys:
        try:
            objects = open_asset(key)
            summary = describe(objects)
            line = dict(key=key, parts=len(objects), total=sum(x["tris"] for x in summary), meshes=summary)
            print("MODELINFO", json.dumps(line, ensure_ascii=False), flush=True)
            if opts.output:
                model, dimensions = export_model(key, objects, opts.output)
                if opts.previews and key in ('jonglu', 'jonglu-scene'):
                    render_preview(key, model, dimensions, opts.output)
        except Exception as error:
            print("MODELERROR", key, repr(error), flush=True)


main()
