# A glazed purple ceramic frog figurine (sitting), sculpted from metaballs. Exports frog.glb.
# Units: modelled ~10 units tall, scaled to metres at the end. Blender: Z up, the frog faces -Y.
import bpy, bmesh, math, random, sys
from mathutils import Vector, Euler, Matrix, noise

OUT = sys.argv[sys.argv.index('--') + 1] if '--' in sys.argv else '/tmp/frog.glb'
bpy.ops.wm.read_factory_settings(use_empty=True)
scn = bpy.context.scene


D = math.radians
parts = []
def blob(c, r, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=24, ring_count=12, radius=1, location=c, rotation=rot)
    o = bpy.context.active_object; o.scale = r; parts.append(o)
def limb(pts, rads, flat=1.0, steps=10):
    # a tapered tube through pts (spheres along it; the remesh fuses them)
    for i in range(len(pts) - 1):
        a, b = Vector(pts[i]), Vector(pts[i + 1])
        for k in range(steps + 1):
            t = k / steps
            p = a.lerp(b, t); r = rads[i] + (rads[i + 1] - rads[i]) * t
            blob(tuple(p), (r, r, r * flat))
# body, sitting back on its haunches with the chest raised
blob((0, 0.8, 2.9), (3.1, 3.6, 2.55), (D(-24), 0, 0))
blob((0, 2.5, 2.1), (2.75, 2.1, 1.95))
# head: broad and flat, with a rounded jaw
blob((0, -2.2, 4.75), (2.95, 2.45, 1.7), (D(-10), 0, 0))
blob((0, -3.4, 4.35), (2.3, 1.45, 1.25))
for s in (-1, 1):
    blob((s * 1.75, -2.35, 6.0), (1.1, 1.1, 1.1))           # eye bumps
for s in (-1, 1):
    # hind leg: hip → knee forward along the flank → ankle tucked back → long foot out front
    limb([(s * 2.2, 2.7, 2.5), (s * 3.25, -0.5, 1.55), (s * 3.05, 2.1, 0.62)], [1.35, 0.95, 0.62])
    limb([(s * 3.05, 2.1, 0.42), (s * 3.75, -1.3, 0.34)], [0.62, 0.5], flat=0.5)
    tip = Vector((s * 3.75, -1.3, 0.3))
    for a in (-38, -8, 22):
        ang = D(a) - s * D(18)
        d = Vector((math.sin(ang) * s, -math.cos(ang), 0))
        e = tip + d * 1.5
        limb([tuple(tip), tuple(e)], [0.36, 0.24], flat=0.6, steps=6)
        blob(tuple(e), (0.36, 0.36, 0.24))
    # front leg: shoulder → elbow → wrist, hand splayed
    limb([(s * 1.85, -2.0, 3.1), (s * 2.45, -2.9, 1.75), (s * 2.3, -3.75, 0.45)], [0.85, 0.65, 0.55])
    w = Vector((s * 2.3, -3.75, 0.3))
    for a in (-45, -5, 35):
        ang = D(a) * s
        d = Vector((math.sin(ang) * s * s, -math.cos(ang), 0))
        d.x *= s
        e = w + d * 1.05
        limb([tuple(w), tuple(e)], [0.32, 0.22], flat=0.6, steps=5)
        blob(tuple(e), (0.32, 0.32, 0.22))
bpy.ops.object.select_all(action='DESELECT')
for o in parts: o.select_set(True)
bpy.context.view_layer.objects.active = parts[0]
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
bpy.ops.object.join()
body = bpy.context.active_object; body.name = 'frog'
rm = body.modifiers.new('rm', 'REMESH'); rm.mode = 'VOXEL'; rm.voxel_size = float(__import__('os').environ.get('VOX', '0.14'))
bpy.ops.object.modifier_apply(modifier='rm')
sm = body.modifiers.new('sm', 'SMOOTH'); sm.factor = 0.9; sm.iterations = int(__import__('os').environ.get('SMI', '6'))
bpy.ops.object.modifier_apply(modifier='sm')
# cut flat underneath so it stands
bm = bmesh.new(); bm.from_mesh(body.data)
bmesh.ops.bisect_plane(bm, geom=bm.verts[:] + bm.edges[:] + bm.faces[:], plane_co=(0, 0, 0.05), plane_no=(0, 0, 1), clear_inner=True)
edges = [e for e in bm.edges if e.is_boundary]
if edges: bmesh.ops.holes_fill(bm, edges=edges)
bmesh.ops.triangulate(bm, faces=[f for f in bm.faces if len(f.verts) > 4])
for v in bm.verts: v.co.z -= 0.05
bm.to_mesh(body.data); bm.free()

# smooth it into a cast, glazed shape
bm = bmesh.new(); bm.from_mesh(body.data)
bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.01)
bm.normal_update()
# the smile: a groove around the front of the head, corners turned up
mouth = []
for v in bm.verts:
    x, y, z = v.co
    if y < -1.2 and z > 3.2:
        w = min(1.0, abs(x) / 3.0)
        target = 4.35 + 0.45 * w ** 2.2
        dz = z - target
        front = max(0.0, min(1.0, (-y - 1.2) / 1.6))
        g = math.exp(-(dz / 0.17) ** 2) * front
        if g > 0.02:
            v.co -= v.normal * 0.16 * g
            mouth.append((v.index, g))
# nostrils: two tiny dimples
for v in bm.verts:
    for s in (-1, 1):
        d = (v.co - Vector((s * 0.5, -4.7, 4.95))).length
        if d < 0.3: v.co -= v.normal * 0.0 * (1 - d / 0.3)
near = set()
idx = {i for i, g in mouth}
bm.verts.ensure_lookup_table()
for i in idx:
    near.add(bm.verts[i])
    for e2 in bm.verts[i].link_edges: near.add(e2.other_vert(bm.verts[i]))
for _ in range(3):
    bmesh.ops.smooth_vert(bm, verts=list(near), factor=0.5, use_axis_x=True, use_axis_y=True, use_axis_z=True)
bm.normal_update()
bm.to_mesh(body.data); bm.free()
mouth = dict(mouth)

me = body.data
for p in me.polygons: p.use_smooth = True

# colour: deep violet glaze, lighter lilac throat and belly, glaze breaking paler on the raised edges,
# darker where it pools, a few fine speckles
col = me.color_attributes.new('Col', 'FLOAT_COLOR', 'POINT')
random.seed(7)
me.update()
def mix(a, b, t): return tuple(a[i] + (b[i] - a[i]) * t for i in range(3))
VIOLET = (0.15, 0.03, 0.30)
DEEP = (0.075, 0.012, 0.16)
LILAC = (0.42, 0.25, 0.58)
for v in me.vertices:
    x, y, z = v.co; n = v.normal
    c = VIOLET
    # top of the back and head a touch deeper
    c = mix(c, DEEP, max(0.0, n.z) * 0.35)
    # throat and belly: lighter where the surface faces forward/down at the front, low on the chest
    belly = max(0.0, -n.y) * max(0.0, 1 - abs(x) / 2.2) * max(0.0, min(1.0, (4.4 - z) / 2.0)) * (1.0 if y < 0.5 else 0.0)
    belly = max(belly, max(0.0, -n.z) * 0.6)
    c = mix(c, LILAC, min(1.0, belly * 1.15))
    # glaze pooling (fine noise)
    nz = noise.noise(Vector((x, y, z)) * 1.4)
    c = mix(c, DEEP, max(0.0, nz) * 0.35)
    # speckles
    sp = noise.noise(Vector((x, y, z)) * 9.0)
    if sp > 0.6: c = mix(c, (0.05, 0.01, 0.08), 0.35)
    if v.index in mouth: c = mix(c, (0.06, 0.01, 0.10), min(1.0, mouth[v.index] * 1.4))
    col.data[v.index].color = (*c, 1.0)
me.color_attributes.active_color = col

def glaze(name, rough=0.22, coat=0.7):
    m = bpy.data.materials.new(name); m.use_nodes = True
    nt = m.node_tree; bsdf = nt.nodes['Principled BSDF']
    bsdf.inputs['Base Color'].default_value = (1, 1, 1, 1)
    bsdf.inputs['Roughness'].default_value = rough
    bsdf.inputs['Coat Weight'].default_value = coat
    bsdf.inputs['Coat Roughness'].default_value = 0.06
    m.use_backface_culling = True
    vc = nt.nodes.new('ShaderNodeVertexColor'); vc.layer_name = 'Col'
    nt.links.new(vc.outputs['Color'], bsdf.inputs['Base Color'])
    return m
body.data.materials.append(glaze('frog_glaze'))
bpy.context.view_layer.objects.active = body


# eyes: glossy gold domes with a black slit pupil, set into the eye bumps and looking forward and out
eyes = []
for s in (-1, 1):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=32, ring_count=16, radius=0.78, location=(s * 1.92, -2.95, 6.25))
    e = bpy.context.active_object; e.name = 'eye'
    for p in e.data.polygons: p.use_smooth = True
    look = Vector((s * 0.55, -1.0, 0.25)).normalized()
    # paint the eye into a texture: rasterise each triangle in UV space, colour by its direction on the sphere
    import numpy as np
    W, H = 512, 256
    img = np.zeros((H, W, 3)); img[:] = (0.16, 0.035, 0.30)
    side = Vector((look.y, -look.x, 0)).normalized(); up = side.cross(look).normalized()
    uvl = e.data.uv_layers.active.data
    def colour(d):
        f = d.dot(look); a = d.dot(side); b = d.dot(up)
        r = (a / 0.7) ** 2 + (b / 0.7) ** 2
        if f <= 0.05 or r >= 1: return (0.16, 0.035, 0.30)
        if (a / 0.42) ** 2 + (b / 0.2) ** 2 < 1: return (0.01, 0.01, 0.012)
        t = r ** 0.5   # iris: deeper gold toward the rim, a thin dark ring at the edge
        c = (0.78 - 0.25 * t, 0.48 - 0.2 * t, 0.06)
        if t > 0.9: c = (0.25, 0.1, 0.03)
        return c
    for p in e.data.polygons:
        li = list(p.loop_indices)
        for k in range(1, len(li) - 1):
            tri = [li[0], li[k], li[k + 1]]
            uv = [Vector(uvl[i].uv) for i in tri]
            P = [e.data.vertices[e.data.loops[i].vertex_index].co.normalized() for i in tri]
            xs = [u.x * W for u in uv]; ys = [u.y * H for u in uv]
            x0, x1 = int(max(0, min(xs) - 1)), int(min(W - 1, max(xs) + 1)); y0, y1 = int(max(0, min(ys) - 1)), int(min(H - 1, max(ys) + 1))
            (ax, ay), (bx, by), (cx, cy) = zip(xs, ys)
            den = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy)
            if abs(den) < 1e-9: continue
            for py in range(y0, y1 + 1):
                for px in range(x0, x1 + 1):
                    X, Y = px + 0.5, py + 0.5
                    l1 = ((by - cy) * (X - cx) + (cx - bx) * (Y - cy)) / den
                    l2 = ((cy - ay) * (X - cx) + (ax - cx) * (Y - cy)) / den
                    l3 = 1 - l1 - l2
                    if min(l1, l2, l3) < -0.08: continue
                    d = (P[0] * l1 + P[1] * l2 + P[2] * l3).normalized()
                    img[py, px] = colour(d)
    im = bpy.data.images.new('eye%d' % s, W, H)
    lin = np.where(img <= 0.0031308, img * 12.92, 1.055 * img ** (1 / 2.4) - 0.055)   # store sRGB
    im.pixels = np.concatenate([lin, np.ones((H, W, 1))], axis=2).ravel().tolist()
    im.file_format = 'PNG'; im.pack()
    m = bpy.data.materials.new('eye_glaze%d' % s); m.use_nodes = True
    bs = m.node_tree.nodes['Principled BSDF']
    bs.inputs['Roughness'].default_value = 0.08; bs.inputs['Coat Weight'].default_value = 1.0; bs.inputs['Coat Roughness'].default_value = 0.04
    tx = m.node_tree.nodes.new('ShaderNodeTexImage'); tx.image = im
    m.node_tree.links.new(tx.outputs['Color'], bs.inputs['Base Color'])
    uvn = m.node_tree.nodes.new('ShaderNodeUVMap'); uvn.uv_map = e.data.uv_layers.active.name
    m.node_tree.links.new(uvn.outputs['UV'], tx.inputs['Vector'])
    m.use_backface_culling = True
    e.data.materials.append(m)
    eyes.append(e)

# join, scale to metres (10 units → 9.5 cm tall at its eyes), apply
bpy.ops.object.select_all(action='DESELECT')
for o in [body, *eyes]: o.select_set(True)
bpy.context.view_layer.objects.active = body
bpy.ops.object.join()
frog = bpy.context.active_object
ca = frog.data.color_attributes['Col']
for p in frog.data.polygons:
    if p.material_index > 0:
        for vi in p.vertices: ca.data[vi].color = (1, 1, 1, 1)
h = max(v.co.z for v in frog.data.vertices)
frog.scale = (0.095 / h,) * 3
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
print('tris', sum(len(p.vertices) - 2 for p in frog.data.polygons), 'dims', tuple(round(d, 3) for d in frog.dimensions))
bpy.ops.export_scene.gltf(filepath=OUT, export_format='GLB', use_selection=False, export_vertex_color='ACTIVE', export_all_vertex_colors=False, export_normals=True, export_yup=True)
