import bisect
import json
import math
import random
import sys
from collections import Counter, defaultdict
from itertools import accumulate
from pathlib import Path

import bpy
from mathutils import Matrix, Vector


SCENE_TO_WEB = Matrix(((1, 0, 0, 0), (0, 0, 1, 0), (0, -1, 0, 0), (0, 0, 0, 1)))
RNG = random.Random(8972)


def vec(values):
    return [round(v, 4) for v in values]


def box(points):
    points = list(points)
    return [[round(reducer(p[axis] for p in points), 4) for axis in range(3)] for reducer in (min, max)]


def choose_kind(owner, obj, center, materials):
    text = (owner + ' ' + obj.name).lower()
    mat = ' '.join(materials).lower()
    if 'mirror_end_hallway_wall' in text:
        return 'mirror'
    if 'volumn' in text or 'leaks' in text or 'leakage' in mat or 'shadow' in mat:
        return None
    if owner == 'floor':
        return 'floor'
    if 'uberceiling' in text or 'uc_' in text or 'uberceiling' in mat:
        return 'light' if any(x in mat for x in ['bulb', 'lens']) else 'ceiling'
    if 'door' in text or 'door' in mat:
        return 'door'
    if 'wall' in text or 'wall' in mat or (owner.startswith('Plane') and abs(center.x + 1) > 2):
        return 'wall'
    return 'detail'


def subject_cloud(obj, depsgraph):
    evaluated = obj.evaluated_get(depsgraph)
    mesh = evaluated.to_mesh()
    transform = SCENE_TO_WEB @ evaluated.matrix_world
    vertices = [transform @ v.co for v in mesh.vertices]
    bounds = box(vertices)
    mesh.calc_loop_triangles()
    tris = [tuple(t.vertices) for t in mesh.loop_triangles]
    cumulative = list(accumulate(t.area for t in mesh.loop_triangles))
    cloud = []
    for _ in range(24000):
        tri = tris[bisect.bisect(cumulative, RNG.random() * cumulative[-1])]
        a, b, c = (vertices[index] for index in tri)
        u, v = RNG.random(), RNG.random()
        if u + v > 1:
            u, v = 1 - u, 1 - v
        p = a + u * (b - a) + v * (c - a)
        cloud.extend(vec(p))
    evaluated.to_mesh_clear()
    return dict(position=vec(transform.translation),
                center=vec((Vector(bounds[0]) + Vector(bounds[1])) / 2),
                bounds=bounds, points=cloud, sourceMesh=obj.name)


def collect_geometry(depsgraph, layer):
    output = defaultdict(list)
    stats = Counter()
    cache = {}
    kept_owners = Counter()
    for instance in depsgraph.object_instances:
        obj = instance.object
        owner = instance.parent.original if instance.is_instance and instance.parent else obj.original
        if obj.type != 'MESH' or owner.hide_render or owner.name == 'node_0':
            continue
        if instance.is_instance and not owner.visible_get(view_layer=layer):
            continue
        if not instance.is_instance and (not owner.visible_get(view_layer=layer) or not instance.show_self):
            continue
        transform = SCENE_TO_WEB @ instance.matrix_world
        corner_points = [transform @ Vector(corner) for corner in obj.bound_box]
        bounds = box(corner_points)
        center = (Vector(bounds[0]) + Vector(bounds[1])) / 2
        if bounds[0][0] > 6.6 or bounds[1][0] < -7.2 or bounds[0][2] > 5.7 or bounds[1][2] < -28.0:
            continue
        if bounds[0][1] > 4.25 or bounds[1][1] < -.65:
            continue
        mats = [slot.material.name for slot in obj.material_slots if slot.material]
        kind = choose_kind(owner.name, obj, center, mats)
        if kind is None:
            continue
        key = obj.data.as_pointer()
        if key not in cache:
            mesh = obj.data
            mesh.calc_loop_triangles()
            verts = [v.co.copy() for v in mesh.vertices]
            if not verts:
                continue
            # Keep intact coarse surfaces, then retain useful facets of dense decorative meshes.
            limit = 360 if instance.is_instance else {'wall': 2500, 'ceiling': 6500, 'door': 1200,
                'floor': 2500, 'detail': 700, 'light': 380, 'mirror': 24}[kind]
            triangles = mesh.loop_triangles[:]
            if len(triangles) > limit:
                ranked = sorted(triangles, key=lambda t: t.area, reverse=True)
                large = limit * 3 // 4
                triangles = ranked[:large] + RNG.sample(ranked[large:], limit - large)
            cache[key] = verts, [(tuple(t.vertices), t.material_index) for t in triangles]
        vertices, triangles = cache[key]
        if not triangles:
            continue
        points = [transform @ v for v in vertices]
        kept_owners[owner.name] += 1
        for tri, material_index in triangles:
            group = kind
            if kind in ('light', 'ceiling'):
                material = obj.material_slots[material_index].material if material_index < len(obj.material_slots) else None
                mat = material.name.lower() if material else ''
                group = 'light' if any(word in mat for word in ('bulb', 'lens')) else 'ceiling'
            a, b, c = (points[index] for index in tri)
            if (b - a).cross(c - a).length_squared < 1e-12:
                continue
            output[group].append(tuple(vec(a) + vec(b) + vec(c)))
            stats[group] += 1
    print('GEOMETRY', dict(stats), 'owners', dict(kept_owners), flush=True)

    limits = {'floor': 5500, 'mirror': 80, 'wall': 18000, 'door': 14500,
              'ceiling': 18500, 'light': 4500, 'detail': 4500}
    groups = []
    for kind, triangles in output.items():
        triangles = list(dict.fromkeys(triangles))
        if len(triangles) > limits[kind]:
            triangles = RNG.sample(triangles, limits[kind])
        groups.append(dict(kind=kind, positions=[coord for tri in triangles for coord in tri]))
    return groups


def main():
    output = Path(sys.argv[sys.argv.index('--') + 1]).resolve()
    scene = bpy.context.scene
    scene.frame_set(1)
    print('LAYERS', [layer.name for layer in scene.view_layers], flush=True)
    layer = next((layer for layer in scene.view_layers if layer.name.lower().replace(' ', '') == 'ceilingbasic'), bpy.context.view_layer)
    bpy.context.window.view_layer = layer
    depsgraph = bpy.context.evaluated_depsgraph_get()
    print('SELECTED_LAYER', layer.name, 'visible', [obj.name for obj in layer.objects if obj.visible_get(view_layer=layer)], flush=True)
    camera = scene.camera.evaluated_get(depsgraph)
    # The local camera coordinate system is already Y-up, facing -Z on both sides.
    matrix = SCENE_TO_WEB @ camera.matrix_world
    position = matrix.translation
    rotation = matrix.to_quaternion()
    forward = rotation @ Vector((0, 0, -1))
    lens = camera.data.lens
    aspect = scene.render.resolution_x / scene.render.resolution_y
    sensor_height = camera.data.sensor_height if camera.data.sensor_fit == 'VERTICAL' else camera.data.sensor_width / aspect
    info = dict(position=vec(position), target=vec(position + forward * 10),
        quaternion=vec((rotation.x, rotation.y, rotation.z, rotation.w)), verticalFov=round(math.degrees(2 * math.atan(sensor_height / (2 * lens))), 5),
        clip=[round(camera.data.clip_start, 4), round(camera.data.clip_end, 4)],
        aspect=round(aspect, 8), object=scene.camera.name, frame=scene.frame_current, lens=lens,
        sensorFit=camera.data.sensor_fit)
    floor = scene.objects['floor'].evaluated_get(depsgraph)
    mirror = scene.objects['mirror_end_hallway_wall'].evaluated_get(depsgraph)
    floor_bounds = box((SCENE_TO_WEB @ floor.matrix_world) @ v.co for v in floor.data.vertices)
    mirror_bounds = box((SCENE_TO_WEB @ mirror.matrix_world) @ v.co for v in mirror.data.vertices)
    subject = subject_cloud(scene.objects['node_0'], depsgraph)
    print('CAMERA', info, 'FLOOR', floor_bounds, 'MIRROR', mirror_bounds, 'SUBJECT', subject['bounds'], flush=True)
    groups = collect_geometry(depsgraph, layer)
    corridor = dict(floorBounds=floor_bounds, mirrorBounds=mirror_bounds,
                    walkBounds=dict(min=[-4.15, 0, mirror_bounds[0][2] + 1.0], max=[2.27, 3.0, position.z]),
                    sourceLayer=layer.name, units='Blender units, Three.js Y-up')
    output.write_text(json.dumps(dict(camera=info, corridor=corridor, subject=subject, meshes=groups),
                                 ensure_ascii=False, separators=(',', ':')), encoding='utf8')
    print('EXPORTED', output, 'total facets', sum(len(group['positions']) // 9 for group in groups), flush=True)


main()
