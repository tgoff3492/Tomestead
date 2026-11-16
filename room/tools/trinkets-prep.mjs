// Shrinks the chosen Poly Haven models into room/models/trinkets/<key>.glb
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld, simplify, textureCompress, meshopt, flatten, transformMesh, getBounds } from '@gltf-transform/functions';
import { MeshoptSimplifier, MeshoptEncoder } from 'meshoptimizer';
import sharp from 'sharp';
import { mat4, quat } from 'gl-matrix';
import fs from 'fs';

const OUT = process.argv[2];
const PICKS = {
  pottedplant:      { id: 'potted_plant_01', ratio: 0.08, err: 0.02, tex: 512 },
  aloe:  { id: 'potted_plant_04', ratio: 0.8, tex: 256 },
  bookstack:      { id: 'book_encyclopedia_set_01', books: ['book02', 'book09', 'book15'], ratio: 0.5, tex: 256 },
  camera:     { id: 'Camera_01', ratio: 0.3, tex: 256 },
  compass:    { id: 'seadogs_compass', ratio: 0.5, tex: 256 },
  binoculars: { id: 'vintage_binocular', ratio: 0.35, tex: 256 },
  horse:      { id: 'horse_statue_01', ratio: 0.5, tex: 256 },
  bust:       { id: 'marble_bust_01', ratio: 0.45, tex: 256 },
  lion:       { id: 'lion_head', ratio: 0.3, tex: 256 },
  photo:      { id: 'standing_picture_frame_02', tex: 512, art: process.argv[3] },
  stonecat:        { id: 'concrete_cat_statue', ratio: 0.8, tex: 256 },
  oillantern:    { id: 'Lantern_01', ratio: 0.35, tex: 256 },
  seashell:      { id: 'lambis_shell', ratio: 0.6, tex: 256 },
  brassvase:  { id: 'brass_vase_03', tex: 256 },
  chinavase:  { id: 'antique_ceramic_vase_01', tex: 256 },
  // the reading desk (models/desk/)
  desklamp:   { id: 'industrial_pipe_lamp', ratio: 0.5, tex: 256, dir: 'desk' },
  teapot:     { id: 'tea_set_01', keep: ['teapot_01', 'teapot_01_lid'], ratio: 0.6, tex: 256, dir: 'desk' },
  glasses:    { id: 'round_spectacles', glass: true, tex: 256, dir: 'desk' },
  magnifier:  { id: 'magnifying_glass_01', glass: true, ratio: 0.6, tex: 256, dir: 'desk' },
  watch:      { id: 'vintage_pocket_watch', glass: true, ratio: 0.6, tex: 256, dir: 'desk' },
  journal:    { id: 'binder_notebook', keep: ['binder_notebook'], tex: 512, dir: 'desk' },
  apple:      { id: 'food_apple_01', ratio: 0.5, tex: 256, dir: 'desk' },
};
const only = process.argv.slice(4);
await MeshoptSimplifier.ready; await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder });
const tris = (doc) => doc.getRoot().listMeshes().reduce((t, m) => t + m.listPrimitives().reduce((s, p) => s + (p.getIndices() ? p.getIndices().getCount() : p.getAttribute('POSITION').getCount()) / 3, 0), 0);
for (const [key, o] of Object.entries(PICKS)) {
  if (only.length && !only.includes(key)) continue;
  const doc = await io.read(`/tmp/ph/${o.id}/${o.id}.gltf`);
  const root = doc.getRoot(), scene = root.getDefaultScene() || root.listScenes()[0];
  if (o.keep) scene.listChildren().filter((n) => !o.keep.some((k) => n.getName().endsWith(k))).forEach((n) => n.dispose());
  if (o.glass) for (const m of root.listMaterials()) if (/glass|lense/.test(m.getName())) m.setBaseColorTexture(null).setBaseColorFactor([0.94, 0.96, 1, 0.14]).setAlphaMode('BLEND').setMetallicFactor(0).setRoughnessFactor(0.05);
  if (o.books) {
    // three volumes from the set, laid flat in a slightly uneven stack
    const keep = scene.listChildren().filter((n) => o.books.some((b) => n.getName().endsWith(b)));
    scene.listChildren().filter((n) => !keep.includes(n)).forEach((n) => n.dispose());
    let y = 0; const turns = [0.06, -0.09, 0.17], shifts = [[0, 0], [0.012, -0.006], [-0.008, 0.009]];
    keep.forEach((n, i) => {
      const world = n.getWorldMatrix();
      const b = getBounds(n); const c = [(b.min[0] + b.max[0]) / 2, (b.min[1] + b.max[1]) / 2, (b.min[2] + b.max[2]) / 2];
      const th = b.max[0] - b.min[0];
      const M = mat4.create();
      mat4.translate(M, M, [shifts[i][0], y + th / 2, shifts[i][1]]);
      mat4.rotateY(M, M, turns[i]);
      mat4.rotateZ(M, M, Math.PI / 2);      // the spine's height now runs along x: the book lies on its back cover
      mat4.translate(M, M, [-c[0], -c[1], -c[2]]);
      mat4.multiply(M, M, world);
      transformMesh(n.getMesh(), M);
      n.setTranslation([0, 0, 0]).setRotation([0, 0, 0, 1]).setScale([1, 1, 1]);
      y += th;
    });
  }
  if (o.art) {
    const mat = root.listMaterials().find((m) => /artwork/.test(m.getName()));
    const img = await sharp(o.art).resize(512, 680, { fit: 'cover' }).jpeg({ quality: 88 }).toBuffer();
    const t = doc.createTexture('artwork').setImage(new Uint8Array(img)).setMimeType('image/jpeg');
    mat.setBaseColorTexture(t).setBaseColorFactor([1, 1, 1, 1]).setEmissiveFactor([0, 0, 0]).setMetallicFactor(0).setRoughnessFactor(0.6);
    // the glass pane draws as solid black in a browser: take it out so the picture shows
    for (const m of root.listMeshes()) for (const p of m.listPrimitives()) if (/glass/.test(p.getMaterial() && p.getMaterial().getName())) p.dispose();
  }
  const before = tris(doc);
  await doc.transform(flatten(), dedup(), weld(), ...(o.ratio ? [simplify({ simplifier: MeshoptSimplifier, ratio: o.ratio, error: o.err || 0.003 })] : []), prune(),
    textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [o.tex, o.tex], quality: 82 }), meshopt({ encoder: MeshoptEncoder, level: 'medium' }));
  const out = o.dir ? `${OUT}/../${o.dir}` : OUT; fs.mkdirSync(out, { recursive: true });
  await io.write(`${out}/${key}.glb`, doc);
  console.log(key, Math.round(before), '→', Math.round(tris(doc)), 'tris', Math.round(fs.statSync(`${out}/${key}.glb`).size / 1024), 'KB');
}
