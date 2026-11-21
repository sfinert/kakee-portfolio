import json
import random
import sys
from pathlib import Path

import bpy
from mathutils import Matrix, Vector


asset = Path(sys.argv[sys.argv.index('--') + 1]).resolve()
data = json.loads(asset.read_text(encoding='utf8'))
scene = bpy.context.scene
bpy.context.window.view_layer = scene.view_layers['CeilingM']
depsgraph = bpy.context.evaluated_depsgraph_get()
conversion = Matrix(((1, 0, 0, 0), (0, 0, 1, 0), (0, -1, 0, 0), (0, 0, 0, 1)))
fixtures = []
centers = []
for instance in depsgraph.object_instances:
    obj = instance.object
    if not instance.is_instance or not instance.parent or obj.type != 'MESH':
        continue
    if instance.parent.original.name != 'UberCeiling_M' or not obj.name.startswith('uc_2x1_lensed_troffer'):
        continue
    mesh = obj.data
    lens = {i for i, material in enumerate(mesh.materials) if material and 'Troffer Lens' in material.name}
    world = conversion @ instance.matrix_world
    mesh.calc_loop_triangles()
    count = 0
    for tri in mesh.loop_triangles:
        if tri.material_index not in lens:
            continue
        vertices = [world @ mesh.vertices[index].co for index in tri.vertices]
        if (vertices[1] - vertices[0]).cross(vertices[2] - vertices[0]).length_squared < 1e-12:
            continue
        fixtures.append([round(value, 4) for vertex in vertices for value in vertex])
        count += 1
    if count:
        centers.append([round(value, 4) for value in world.translation])
if len(centers) != 19:
    raise RuntimeError(f'Expected 19 CeilingM fixtures, obtained {len(centers)}')
fixtures = list(dict.fromkeys(tuple(tri) for tri in fixtures))
if not fixtures or len(fixtures) > 4500:
    raise RuntimeError(f'Unexpected lens triangle count {len(fixtures)}')
ceiling = next(mesh for mesh in data['meshes'] if mesh['kind'] == 'ceiling')
ceiling_faces = [ceiling['positions'][i:i + 9] for i in range(0, len(ceiling['positions']), 9)]
ceiling['positions'] = [v for face in random.Random(3138).sample(ceiling_faces, len(ceiling_faces) - len(fixtures)) for v in face]
data['meshes'].append(dict(kind='fixture', positions=[value for tri in fixtures for value in tri]))
data['corridor']['fixtureLayer'] = 'CeilingM'
data['corridor']['fixtureCenters'] = centers
asset.write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')), encoding='utf8')
print('FIXTURES', len(centers), len(fixtures), centers, flush=True)
