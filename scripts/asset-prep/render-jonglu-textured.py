# Renders a textured presentation still of Jonglu from the web GLB (no textured render existed).
# blender -b --factory-startup --python scripts/asset-prep/render-jonglu-textured.py -- <glb> <hdri.exr> <out.png>
import math
import sys

import bpy
from mathutils import Vector

glb, hdri, out = sys.argv[sys.argv.index('--') + 1:][:3]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=glb)
scene = bpy.context.scene
meshes = [o for o in scene.objects if o.type == 'MESH']
corners = [o.matrix_world @ Vector(c) for o in meshes for c in o.bound_box]
low = Vector([min(p[i] for p in corners) for i in range(3)])
high = Vector([max(p[i] for p in corners) for i in range(3)])
center = (low + high) / 2

# HDRI lights the scene; the camera itself sees a dark studio gradient instead of the patio.
world = bpy.data.worlds.new('World')
scene.world = world
world.use_nodes = True
nodes, links = world.node_tree.nodes, world.node_tree.links
nodes.clear()
env = nodes.new('ShaderNodeTexEnvironment')
env.image = bpy.data.images.load(hdri)
mapping = nodes.new('ShaderNodeMapping')
mapping.inputs['Rotation'].default_value[2] = math.radians(140)
coords = nodes.new('ShaderNodeTexCoord')
links.new(coords.outputs['Generated'], mapping.inputs['Vector'])
links.new(mapping.outputs['Vector'], env.inputs['Vector'])
lit = nodes.new('ShaderNodeBackground')
lit.inputs['Strength'].default_value = .9
links.new(env.outputs['Color'], lit.inputs['Color'])
dark = nodes.new('ShaderNodeBackground')
dark.inputs['Color'].default_value = (.012, .013, .016, 1)
path = nodes.new('ShaderNodeLightPath')
mix = nodes.new('ShaderNodeMixShader')
links.new(path.outputs['Is Camera Ray'], mix.inputs['Fac'])
links.new(lit.outputs['Background'], mix.inputs[1])
links.new(dark.outputs['Background'], mix.inputs[2])
output = nodes.new('ShaderNodeOutputWorld')
links.new(mix.outputs['Shader'], output.inputs['Surface'])

sun = bpy.data.lights.new('Key', 'SUN')
sun.energy = 3.2
sun.color = (1, .9, .78)
sun.angle = math.radians(2.5)
key = bpy.data.objects.new('Key', sun)
scene.collection.objects.link(key)
key.rotation_euler = (math.radians(52), 0, math.radians(-38))

bpy.ops.mesh.primitive_plane_add(size=60, location=(center.x, center.y, low.z - .002))
floor = bpy.context.object
floor.is_shadow_catcher = True

size = max(high - low)
bpy.ops.object.camera_add(location=center + Vector((size * 1.5, -size * 2.05, size * .62)))
camera = bpy.context.object
camera.data.lens = 50
direction = (center + Vector((0, 0, -size * .04))) - camera.location
camera.rotation_euler = direction.to_track_quat('-Z', 'Y').to_euler()
scene.camera = camera

scene.render.engine = 'CYCLES'
prefs = bpy.context.preferences.addons['cycles'].preferences
for backend in ('OPTIX', 'CUDA'):
    try:
        prefs.compute_device_type = backend
        prefs.get_devices()
        if any(d.type == backend for d in prefs.devices):
            for device in prefs.devices:
                device.use = device.type == backend
            scene.cycles.device = 'GPU'
            break
    except TypeError:
        continue
scene.cycles.samples = 256
scene.cycles.use_denoising = True
scene.render.film_transparent = False
scene.render.resolution_x = 2048
scene.render.resolution_y = 1280
scene.view_settings.view_transform = 'AgX'
try:
    scene.view_settings.look = 'AgX - Medium High Contrast'
except TypeError:
    pass
scene.render.image_settings.file_format = 'PNG'
scene.render.filepath = out
bpy.ops.render.render(write_still=True)
print('RENDERED', out, scene.cycles.device)
