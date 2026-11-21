from pathlib import Path
import sys

import bpy
from mathutils import Vector


source, target = [str(Path(name).resolve()) for name in sys.argv[sys.argv.index('--') + 1:]]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.wm.obj_import(filepath=source, forward_axis='NEGATIVE_Z', up_axis='Y', use_split_objects=True)
meshes = [obj for obj in bpy.context.scene.objects if obj.type == 'MESH' and len(obj.data.polygons)]
if set(obj.name for obj in meshes) != {'Feet', 'Body', 'Hand_1', 'Tail'}:
    raise RuntimeError('Expected all four Nomad Sculpt parts')

neutral = bpy.data.materials.new('Nyarlathotep neutral sculpture')
neutral.use_nodes = True
shader = neutral.node_tree.nodes.get('Principled BSDF')
shader.inputs['Base Color'].default_value = (0.53, 0.55, 0.59, 1)
shader.inputs['Roughness'].default_value = 0.72
for mesh in meshes:
    if mesh.data.validate(verbose=False, clean_customdata=True):
        print('CLEANED', mesh.name, 'collapsed OBJ faces/edges', flush=True)
    mesh.data.update()
    mesh.data.calc_loop_triangles()
large_surfaces = sum(len(obj.data.loop_triangles) for obj in meshes if len(obj.data.loop_triangles) > 16000)
small_surfaces = sum(len(obj.data.loop_triangles) for obj in meshes if len(obj.data.loop_triangles) <= 16000)
ratio = min(1, (155000 - small_surfaces) / max(1, large_surfaces))

lo = [min((obj.matrix_world @ Vector(pt))[index] for obj in meshes for pt in obj.bound_box) for index in range(3)]
hi = [max((obj.matrix_world @ Vector(pt))[index] for obj in meshes for pt in obj.bound_box) for index in range(3)]
mid = (Vector(lo) + Vector(hi)) * .5
scale = 2.7 / max(Vector(hi) - Vector(lo))

for obj in meshes:
    obj.data.materials.clear()
    obj.data.materials.append(neutral)
    for poly in obj.data.polygons:
        poly.use_smooth = True
    if ratio < 1 and len(obj.data.loop_triangles) > 16000:
        bpy.context.view_layer.objects.active = obj
        mod = obj.modifiers.new('Browser geometry reduction', 'DECIMATE')
        mod.ratio = ratio
        bpy.ops.object.modifier_apply(modifier=mod.name)
        if obj.data.validate(verbose=False, clean_customdata=True):
            print('CLEANED', obj.name, 'degenerate reduction faces/edges', flush=True)
        obj.data.update()
    obj.location = (obj.location - mid) * scale
    obj.scale *= scale
    obj.select_set(True)
    obj.data.calc_loop_triangles()
    print('PART', obj.name, len(obj.data.vertices), len(obj.data.loop_triangles), flush=True)
bpy.context.view_layer.update()

bpy.ops.export_scene.gltf(filepath=target, export_format='GLB', use_selection=True,
                         export_yup=True, export_animations=False, export_materials='EXPORT',
                         export_texcoords=False, export_normals=True,
                         export_draco_mesh_compression_enable=False)
print('EXPORTED', target, flush=True)
