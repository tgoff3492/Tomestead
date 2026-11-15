/* Tomestead · The Reading Room (prototype)
   A small 3D room with three stations: the bookcase (your real books, if this
   device has them), the desk, and a magic tome for recommendations.
   Built with three.js; see ../README.md for how it's built and kept fast. */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const T0 = performance.now();
const TEX = '../../tex/';

// ---------------------------------------------------------------- your library
const PALETTE = [
  ['#6E1F24', '#F3E3C3'], ['#1F3350', '#F0DDB0'], ['#4F6B3A', '#F4E7C8'], ['#C2902F', '#2B1C0E'],
  ['#5B2F4A', '#F1DDBF'], ['#2E5E5E', '#F1E3C2'], ['#9A4A25', '#F7E6C6'], ['#3A3A3F', '#E9CF8F'],
  ['#A57A4E', '#24170C'], ['#D9CBA8', '#3A2614'], ['#2F4A33', '#E8C766'], ['#8B3A3A', '#F5E2C0'],
];
const WOODS = {
  walnut: ['#8d6440', '#7a5232', '#5a3a22', '#3b2415', '#2a190e', '#2c1a0f'],
  oak: ['#c99d66', '#b48654', '#95693d', '#6e4b2a', '#4f3520', '#3a2a1a'],
  cherry: ['#ad5b3e', '#8f4530', '#6f3222', '#4c2116', '#331610', '#2c130d'],
  ebony: ['#57504b', '#3a3532', '#2a2624', '#1b1817', '#121010', '#141110'],
  sage: ['#9cad92', '#7f9277', '#67795f', '#4d5c47', '#38432f', '#2b3328'],
  white: ['#eee6d6', '#d4c8b2', '#b9ab93', '#968872', '#7a6d59', '#4a4236'],
};
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function readJSON(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } }
function loadLibrary() {
  let uid = null;
  try { uid = localStorage.getItem('tomestead.uid'); } catch {}
  const suffix = uid ? ':' + uid : '';
  let books = readJSON('tomestead.books.v1' + suffix);
  if (!Array.isArray(books) || !books.length) {
    books = [];
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k || !k.startsWith('tomestead.books.v1')) continue;
        const a = readJSON(k);
        if (Array.isArray(a) && a.length > books.length) books = a;
      }
    } catch {}
  }
  books = (books || []).filter((b) => b && b.id && b.title);
  const prefs = readJSON('tomestead.prefs.v1' + suffix) || readJSON('tomestead.prefs.v1') || {};
  return { books, theme: prefs.theme || {}, trophies: prefs.trophies || {}, sample: false };
}
const SAMPLE = [
  ['The Hobbit', 'J.R.R. Tolkien', 310, 5, 'read'], ['Jane Eyre', 'Charlotte Brontë', 532, 4, 'read'],
  ['Dune', 'Frank Herbert', 688, 5, 'read'], ['Little Women', 'Louisa May Alcott', 449, 4, 'read'],
  ['Persuasion', 'Jane Austen', 249, 5, 'read'], ['The Name of the Wind', 'Patrick Rothfuss', 662, 4, 'reading'],
  ['Middlemarch', 'George Eliot', 880, 0, 'want'], ['Piranesi', 'Susanna Clarke', 272, 0, 'want'],
  ['Rebecca', 'Daphne du Maurier', 410, 4, 'read'], ['East of Eden', 'John Steinbeck', 601, 5, 'read'],
  ['Emma', 'Jane Austen', 474, 3, 'read'], ['The Secret Garden', 'Frances Hodgson Burnett', 331, 4, 'read'],
  ['Circe', 'Madeline Miller', 393, 5, 'read'], ['A Wizard of Earthsea', 'Ursula K. Le Guin', 183, 4, 'read'],
  ['Les Misérables', 'Victor Hugo', 1232, 0, 'want'], ['The Count of Monte Cristo', 'Alexandre Dumas', 1276, 5, 'read'],
  ['Anne of Green Gables', 'L.M. Montgomery', 320, 4, 'read'], ['Frankenstein', 'Mary Shelley', 280, 3, 'read'],
  ['The Night Circus', 'Erin Morgenstern', 387, 4, 'read'], ['Wuthering Heights', 'Emily Brontë', 416, 3, 'read'],
  ['North and South', 'Elizabeth Gaskell', 521, 0, 'want'], ['Watership Down', 'Richard Adams', 476, 4, 'read'],
  ['The Hound of the Baskervilles', 'Arthur Conan Doyle', 256, 4, 'read'], ['Mansfield Park', 'Jane Austen', 507, 3, 'read'],
  ['Great Expectations', 'Charles Dickens', 544, 4, 'read'], ['Treasure Island', 'Robert Louis Stevenson', 292, 4, 'read'],
  ['The Remains of the Day', 'Kazuo Ishiguro', 258, 5, 'read'], ['Howl’s Moving Castle', 'Diana Wynne Jones', 329, 5, 'reading'],
  ['Moby-Dick', 'Herman Melville', 720, 0, 'want'], ['The Wind in the Willows', 'Kenneth Grahame', 224, 4, 'read'],
  ['Pride and Prejudice', 'Jane Austen', 432, 5, 'read'], ['Kindred', 'Octavia E. Butler', 287, 5, 'read'],
  ['The Princess Bride', 'William Goldman', 456, 4, 'read'], ['Stardust', 'Neil Gaiman', 248, 4, 'read'],
];
function sampleLibrary() {
  const books = SAMPLE.map(([title, author, pages, rating, status], i) => ({
    id: 's' + i, title, author, pages, rating, status, addedAt: 1e12 - i * 1e7,
    progress: status === 'reading' ? Math.round(pages * (i % 2 ? 0.62 : 0.31)) : undefined,
    finished: status === 'read' ? `2026-${String(1 + (i % 10)).padStart(2, '0')}-1${i % 9}` : undefined,
  }));
  return { books, theme: {}, sample: true };
}
const lib = (() => { const l = loadLibrary(); return l.books.length && params.get('sample') !== '1' ? l : Object.assign(sampleLibrary(), { theme: l.theme }); })();
const wood = WOODS[lib.theme.wood] || WOODS.oak;
const pagesOf = (b) => (b.format === 'audio' && b.hours ? b.hours * 30 : Number(b.pages) || 0);
const colorOf = (b) => PALETTE[(((Number.isInteger(b.color) ? b.color : hash(b.id + b.title) % 12) % 12) + 12) % 12];

function lightNow(m) {
  if (m === 'day' || m === 'night') return m;
  if (m === 'clock') {
    const d = new Date(), h = d.getHours() + d.getMinutes() / 60, mo = d.getMonth();
    const [rise, set] = mo >= 3 && mo <= 8 ? [6.5, 20.25] : mo === 2 || mo === 9 ? [7.25, 19.25] : [7.25, 17.75];
    return h >= rise && h < set ? 'day' : 'night';
  }
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
}
let mode = params.get('t') === 'night' || params.get('t') === 'day' ? params.get('t') : lightNow(lib.theme.light || 'system');

// ---------------------------------------------------------------- renderer
const canvas = $('scene');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
} catch (err) {
  console.error('WebGL renderer failed:', err && err.message);
  $('nogl').hidden = false; $('veil').remove();
  throw new Error('WebGL unavailable');
}
const isPhone = matchMedia('(pointer: coarse)').matches;
let dpr = Math.min(window.devicePixelRatio || 1, isPhone ? 2 : 1.75);
renderer.setPixelRatio(dpr);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.shadowMap.autoUpdate = false;     // the room doesn't move: shadows are drawn once ("baked")
const maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());

const scene = new THREE.Scene();
scene.background = new THREE.Color('#140d08');
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
pmrem.dispose();

const camera = new THREE.PerspectiveCamera(50, 1, 0.05, 30);

// ---------------------------------------------------------------- textures
const loadImg = (src) => new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
function canvasTex(c, { repeat = true, srgb = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = maxAniso;
  return t;
}
function mkCanvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
// the app's textures are grey detail maps: tint them with a color (the same way the app does in CSS)
function tinted(img, color, alpha = 0.85) {
  const [c, x] = mkCanvas(img ? img.width : 64, img ? img.height : 64);
  x.fillStyle = color; x.fillRect(0, 0, c.width, c.height);
  if (img) { x.globalCompositeOperation = 'overlay'; x.globalAlpha = alpha; x.drawImage(img, 0, 0); }
  return c;
}
// world-space UVs in meters, so a texture keeps the same scale on every piece
function worldUV(g) {
  const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    if (ax >= ay && ax >= az) uv.setXY(i, p.getZ(i) * Math.sign(n.getX(i) || 1) * -1, p.getY(i));
    else if (ay >= az) uv.setXY(i, p.getX(i), p.getZ(i));
    else uv.setXY(i, p.getX(i) * Math.sign(n.getZ(i) || 1), p.getY(i));
  }
  uv.needsUpdate = true;
  return g;
}
function tile(tex, w, h) { const t = tex.clone(); t.repeat.set(1 / w, 1 / h); t.needsUpdate = true; return t; }

// ---------------------------------------------------------------- free assets (Poly Haven, CC0; see CREDITS.md)
const extra = {};
const texLoader = new THREE.TextureLoader();
function loadTex(n, srgb) {
  return new Promise((res) => texLoader.load('tex/' + n + '.webp', (t) => {
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = maxAniso; res(t);
  }, undefined, () => res(null)));
}
async function loadSet(id) {
  const [map, normal, arm] = await Promise.all([loadTex(id + '_diff', true), loadTex(id + '_nor'), loadTex(id + '_arm')]);
  return map ? { map, normal, arm } : null;
}
// a material from a texture set, tiled in meters (the room's geometry has world-scale UVs)
function pbrMat(set, w, h, { color = '#ffffff', rot = false, normalScale = 1, roughness = 1 } = {}) {
  const t = (tex) => { if (!tex) return null; const c = tex.clone(); c.repeat.set(1 / w, 1 / h); if (rot) { c.rotation = Math.PI / 2; } c.needsUpdate = true; return c; };
  const arm = t(set.arm);
  return std({ map: t(set.map), normalMap: t(set.normal), normalScale: new THREE.Vector2(normalScale, normalScale), roughnessMap: arm, aoMap: arm, aoMapIntensity: 0.7, roughness, color });
}
const MODELS = ['deskchair', 'armchair', 'ottoman', 'sidetable', 'oillamp', 'chandelier', 'plant', 'teacup', 'painting', 'grandfather', 'clock', 'candlestick', 'vase', 'elephant'];
const gltfLoader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
function loadModel(n) {
  return gltfLoader.loadAsync('models/' + n + '.glb').then((g) => g.scene).catch((e) => { console.warn('model failed', n, e && e.message); return null; });
}
function placeModel(obj, x, y, z, ry = 0, s2 = 1, { cast = true } = {}) {
  if (!obj) return null;
  obj.position.set(x, y, z); obj.rotation.y = ry; obj.scale.setScalar(s2);
  obj.traverse((o) => { if (o.isMesh) { o.castShadow = cast; o.receiveShadow = true; o.userData.model = true; } });
  scene.add(obj);
  return obj;
}
function placeFurniture(MOD, M) {
  const lights = [];
  // the reading corner: armchair, ottoman with a tea tray, a tall side table with an oil lamp, a painting above
  placeModel(MOD.armchair, 1.75, 0, -2.0, -0.5, 1);
  placeModel(MOD.ottoman, 1.2, 0, -1.2, -0.4, 0.8);
  let steam = null;
  if (MOD.teacup) {
    // the cup and its saucer sit apart in the source file: stack them
    MOD.teacup.updateMatrixWorld(true);
    for (const o of [...MOD.teacup.children]) { const c = new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3()); o.position.x -= c.x; o.position.z -= c.z; }
    placeModel(MOD.teacup, 2.47, 0.762, -2.3, 2.2, 1);
    steam = buildSteam(); steam.position.set(2.47, 0.83, -2.3); scene.add(steam);
  }
  placeModel(MOD.sidetable, 2.55, 0, -2.38, 0, 1);
  placeModel(MOD.painting, 1.85, 1.78, -2.69, 0, 1.6, { cast: false });
  let oilGlow = null, flameMats = [], shadeMat = null;
  if (MOD.oillamp) {
    placeModel(MOD.oillamp, 2.61, 0.761, -2.44, 0.4, 0.9);
    MOD.oillamp.traverse((o) => { if (!o.isMesh) return; if (/flame/.test(o.material.name)) flameMats.push(o.material); if (/glass/.test(o.material.name)) o.visible = false; });
    oilGlow = new THREE.PointLight('#ffae55', 0, 3.4, 2); oilGlow.position.set(2.58, 1.2, -2.38); scene.add(oilGlow);
    // a pleated linen shade over the chimney
    shadeMat = std({ map: canvasTex(shadeTex(), { repeat: false }), roughness: 0.9, side: THREE.DoubleSide, emissive: '#ffb86b', emissiveIntensity: 0 });
    const shade = mesh(new THREE.CylinderGeometry(0.075, 0.165, 0.17, 40, 1, true), shadeMat, scene, { cast: true, recv: false });
    shade.position.set(2.61, 0.761 + 0.72 * 0.62, -2.44);
    for (const [y, r] of [[0.085, 0.075], [-0.085, 0.165]]) { const rim = mesh(new THREE.TorusGeometry(r, 0.004, 6, 40).rotateX(Math.PI / 2), M.brass, scene, { cast: false }); rim.position.copy(shade.position).add(new THREE.Vector3(0, y, 0)); }
  }
  // the grandfather clock and the big plant in the back-left corner
  if (placeModel(MOD.grandfather, -1.6, 0, -2.5, 0, 0.95)) {
    MOD.grandfather.traverse((o) => { if (o.isMesh && /glass/.test(o.material.name)) { o.material.transparent = true; o.material.opacity = 0.18; o.material.depthWrite = false; o.castShadow = false; } });
  }
  placeModel(MOD.plant, -2.5, 0, -2.25, 0.6, 1.3);
  // a brass chandelier over the rug
  let chand = null, chandGlow = null, bulbs = [];
  if (MOD.chandelier) {
    placeModel(MOD.chandelier, 0, 2.97 - 0.908 * 0.85, 0.05, 0, 0.85, { cast: false });
    MOD.chandelier.traverse((o) => { if (o.isMesh && /bulb/.test(o.material.name)) bulbs.push(o.material); });
    chand = new THREE.PointLight('#ffc27a', 0, 7, 2); chand.position.set(0, 2.35, 0.05); scene.add(chand);
    const gm = new THREE.SpriteMaterial({ map: canvasTex(glowTex(), { repeat: false }), color: '#ffcf8a', blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
    chandGlow = new THREE.Sprite(gm); chandGlow.scale.set(1.1, 1.1, 1); chandGlow.position.set(0, 2.42, 0.05); scene.add(chandGlow);
  }
  const hearth = buildFireplace(MOD);
  return {
    hearth,
    tick(t) { if (steam) steam.material.uniforms.uTime.value = t; hearth.tick(t); },
    setLight(L) {
      hearth.setLight(L);
      if (oilGlow) oilGlow.intensity = L.oil;
      if (shadeMat) shadeMat.emissiveIntensity = L.oil ? 0.55 : 0;
      if (steam) steam.material.uniforms.uA.value = mode === 'night' ? 0.7 : 0.65;
      flameMats.forEach((m) => { m.emissive && m.emissive.set('#ffb35c'); m.emissiveIntensity = L.oil ? 3 : 0.4; });
      if (chand) chand.intensity = L.chand;
      if (chandGlow) chandGlow.visible = L.chand > 0;
      bulbs.forEach((m) => { m.emissive && m.emissive.set('#ffd9a0'); m.emissiveIntensity = L.chand ? 2.5 : 0.1; });
    },
  };
}

// ---------------------------------------------------------------- helpers
const statics = [];
function mesh(geo, mat, parent = scene, { cast = true, recv = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast; m.receiveShadow = recv;
  parent.add(m);
  return m;
}
// a box placed at (x, y, z) with world-scale texture coordinates
function box(w, h, d, mat, x, y, z, parent = scene, opts) {
  const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z); worldUV(g);
  return mesh(g, mat, parent, opts);
}
function lathe(pts, seg = 28) { return new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg); }
const std = (o) => new THREE.MeshStandardMaterial(o);

// ---------------------------------------------------------------- build
async function build() {
  const fontReady = Promise.race([
    document.fonts ? document.fonts.load('40px "IM Fell English"').catch(() => {}) : Promise.resolve(),
    new Promise((r) => setTimeout(r, 1800)),
  ]);
  const woodSet = { oak: 'oak_veneer_01', walnut: 'walnut_veneer', cherry: 'lacquered_cherry_wood' }[lib.theme.wood || 'oak'] || 'oak_veneer_01';
  const SETS = ['herringbone_parquet', 'plastered_wall', 'wooden_panels', 'dark_wooden_planks', woodSet, 'bark_willow_02', 'marble_01', 'castle_brick_07', 'slate_floor_03'];
  const [imgs, sets, MOD] = await Promise.all([
    Promise.all(['floor', 'wood-v', 'wood-h', 'plaster', 'cloth', 'leather'].map((n) => loadImg(TEX + n + '.webp'))),
    Promise.all(SETS.map(loadSet)).then((a) => Object.fromEntries(SETS.map((k, i) => [k, a[i]]))),
    Promise.all(MODELS.map(loadModel)).then((a) => Object.fromEntries(MODELS.map((k, i) => [k, a[i]]))),
    Promise.all([loadTex('wool_boucle_nor'), loadTex('brown_leather_nor'), loadTex('faux_fur_geometric_nor')]).then(([w, l, f]) => { extra.wool = w; extra.leather = l; extra.fur = f; }),
  ]);
  const [floorImg, woodV, woodH, plaster, cloth, leather] = imgs;
  $('veil-sub').textContent = 'Shelving the books…';

  // ----- materials
  const woodVT = canvasTex(tinted(woodV, wood[1], 0.55));
  const woodHT = canvasTex(tinted(woodH, wood[1], 0.55));
  const woodDarkV = canvasTex(tinted(woodV, wood[3], 0.6));
  const woodDarkH = canvasTex(tinted(woodH, wood[3], 0.6));
  const M = {
    caseSide: std({ map: tile(woodVT, 0.5, 2.0), roughness: 0.55 }),
    caseShelf: std({ map: tile(woodHT, 1.6, 0.3), roughness: 0.55 }),
    caseDark: std({ map: tile(woodDarkV, 0.5, 2.0), roughness: 0.6 }),
    recess: std({ color: wood[5], roughness: 0.9 }),
    trim: std({ map: tile(woodDarkH, 1.6, 0.3), roughness: 0.5 }),
    beam: std({ map: tile(woodDarkH, 2.4, 0.45), roughness: 0.75 }),
    brass: std({ color: '#c9a15b', metalness: 1, roughness: 0.32 }),
    gold: std({ color: '#e0b860', metalness: 1, roughness: 0.22 }),
    ceramic: std({ color: '#f1ead9', roughness: 0.25 }),
    paper: std({ color: '#efe3c8', roughness: 0.9 }),
    candle: std({ color: '#efe6cf', roughness: 0.6, emissive: '#ffb35c', emissiveIntensity: 0 }),
    velvet: std({ color: '#2f4a33', roughness: 0.92, side: THREE.DoubleSide }),
    terracotta: std({ color: '#a4593a', roughness: 0.85 }),
    leaf: std({ color: '#3f6b35', roughness: 0.7, side: THREE.DoubleSide }),
    stone: std({ map: tile(canvasTex(tinted(plaster, '#7b8092', 0.9)), 0.6, 0.6), roughness: 0.75 }),
    tomeLeather: std({ map: canvasTex(tinted(leather, '#3b2350', 0.9)), roughness: 0.6 }),
    dark: std({ color: '#1b120b', roughness: 0.8 }),
  };
  const W = sets[woodSet];
  if (W) {
    const tint = { oak: '#f0c890', walnut: '#ffffff', cherry: '#ffffff' }[lib.theme.wood || 'oak'] || wood[0];
    M.caseSide = pbrMat(W, 0.7, 1.4, { color: tint, roughness: 1 });
    M.caseShelf = pbrMat(W, 0.7, 1.4, { color: tint, rot: true });
    M.caseDark = pbrMat(W, 0.7, 1.4, { color: new THREE.Color(tint).multiplyScalar(0.55) });
    M.trim = pbrMat(W, 0.7, 1.4, { color: new THREE.Color(tint).multiplyScalar(0.5), rot: true });
    M.recessWood = pbrMat(W, 0.5, 1.4, { color: new THREE.Color(tint).multiplyScalar(0.2) });
  }
  if (sets.dark_wooden_planks) M.beam = pbrMat(sets.dark_wooden_planks, 2.2, 2.2, { color: '#b9a48c' });
  if (extra.leather) { M.tomeLeather.normalMap = tile(extra.leather, 0.15, 0.15); M.tomeLeather.needsUpdate = true; }
  M.bark = sets.bark_willow_02 ? pbrMat(sets.bark_willow_02, 0.3, 0.6, { color: '#b49a80' }) : std({ color: '#5a4430', roughness: 0.9 });
  M.logs = sets.bark_willow_02 ? pbrMat(sets.bark_willow_02, 0.3, 0.6, { color: '#6d5a48' }) : std({ color: '#3a2a1c', roughness: 0.9 });
  M.stoneSurround = sets.marble_01 ? pbrMat(sets.marble_01, 1.0, 1.0, { color: '#f4e6d0' }) : std({ color: '#cbbd9f', roughness: 0.7 });
  M.firebrick = sets.castle_brick_07 ? pbrMat(sets.castle_brick_07, 0.7, 0.7, { color: '#6a4a3e' }) : std({ color: '#3a2420', roughness: 0.9 });
  M.slate = sets.slate_floor_03 ? pbrMat(sets.slate_floor_03, 0.9, 0.9, { color: '#bdb2a6' }) : std({ color: '#3c3a38', roughness: 0.6 });
  M.iron = std({ color: '#1c1a19', roughness: 0.55, metalness: 0.8 });
  const floorT = canvasTex(floorImg || tinted(null, '#8e5f35'));
  const floorMat = sets.herringbone_parquet ? pbrMat(sets.herringbone_parquet, 1.5, 1.5, { color: '#f2dcc2' }) : std({ map: tile(floorT, 2.2, 0.52), roughness: 0.62 });
  const plasterT = canvasTex(tinted(plaster, '#c7ab82', 0.9));
  const starT = canvasTex(starChart());
  const PW = sets.plastered_wall;
  const wallMat = PW ? pbrMat(PW, 2.2, 2.2, { color: '#ecc995', normalScale: 0.6 }) : std({ map: tile(plasterT, 1.6, 1.6), roughness: 0.92 });
  const wallDay = wallMat.map, wallNight = tile(starT, 1.8, 1.8);
  const panelMat = sets.wooden_panels ? pbrMat(sets.wooden_panels, 1.2, 1.2, { color: '#d9b48f' }) : std({ map: canvasTex(panelTex(woodH)), roughness: 0.6 });
  if (!sets.wooden_panels) panelMat.map.repeat.set(1 / 1.2, 1 / 0.9);

  // ----- the room: 6m wide, 5.4m deep, 3m tall
  const floor = mesh(new THREE.PlaneGeometry(6, 5.4).rotateX(-Math.PI / 2), floorMat, scene, { cast: false });
  worldUV(floor.geometry);
  box(6.2, 0.1, 5.6, M.beam, 0, 3.05, 0);                         // ceiling
  for (const x of [-2.25, -0.75, 0.75, 2.25]) box(0.18, 0.22, 5.4, M.beam, x, 2.89, 0);
  box(6.2, 3.1, 0.1, wallMat, 0, 1.5, -2.75);                      // back wall
  box(0.1, 3.1, 5.6, wallMat, 3.05, 1.5, 0);                       // right wall
  box(6.2, 3.1, 0.1, wallMat, 0, 1.5, 2.75);                       // front wall
  // left wall, with the window opening (z −1.3…0.1, y 0.85…2.45)
  const WIN = { z0: -1.3, z1: 0.1, y0: 0.85, y1: 2.45 };
  box(0.1, WIN.y0, 5.6, wallMat, -3.05, WIN.y0 / 2, 0);
  box(0.1, 3.1 - WIN.y1, 5.6, wallMat, -3.05, (WIN.y1 + 3.1) / 2, 0);
  box(0.1, WIN.y1 - WIN.y0, 2.8 + WIN.z0, wallMat, -3.05, (WIN.y0 + WIN.y1) / 2, (-2.8 + WIN.z0) / 2);
  box(0.1, WIN.y1 - WIN.y0, 2.8 - WIN.z1, wallMat, -3.05, (WIN.y0 + WIN.y1) / 2, (2.8 + WIN.z1) / 2);
  // wainscot panels and a rail along the walls
  box(6, 0.9, 0.03, panelMat, 0, 0.45, -2.685);
  box(0.03, 0.9, 5.4, panelMat, 2.985, 0.45, 0);
  box(0.03, 0.82, 5.4, panelMat, -2.985, 0.41, 0);
  box(6, 0.045, 0.06, M.trim, 0, 0.92, -2.67);
  box(0.06, 0.045, 5.4, M.trim, 2.97, 0.92, 0);
  box(0.06, 0.045, 5.4, M.trim, -2.97, 0.84, 0);

  // ----- window
  const winMid = (WIN.z0 + WIN.z1) / 2, winW = WIN.z1 - WIN.z0, winH = WIN.y1 - WIN.y0;
  box(0.08, 0.1, winW + 0.24, M.trim, -2.97, WIN.y1 + 0.05, winMid);
  box(0.09, 0.04, winW + 0.3, M.trim, -2.965, WIN.y0 - 0.02, winMid);
  box(0.08, winH, 0.1, M.trim, -2.97, (WIN.y0 + WIN.y1) / 2, WIN.z0 - 0.05);
  box(0.08, winH, 0.1, M.trim, -2.97, (WIN.y0 + WIN.y1) / 2, WIN.z1 + 0.05);
  box(0.04, winH, 0.035, M.trim, -3.04, (WIN.y0 + WIN.y1) / 2, winMid);
  for (const y of [WIN.y0 + winH / 3, WIN.y0 + (2 * winH) / 3]) box(0.04, 0.035, winW, M.trim, -3.04, y, winMid);
  const skyMat = new THREE.MeshBasicMaterial({ map: canvasTex(skyTex('day'), { repeat: false }) });
  const sky = mesh(new THREE.PlaneGeometry(2.6, 2.4).rotateY(Math.PI / 2), skyMat, scene, { cast: false, recv: false });
  sky.position.set(-3.6, 1.65, winMid);
  // curtains on a brass rod
  const rod = mesh(new THREE.CylinderGeometry(0.018, 0.018, winW + 1.5, 12).rotateX(Math.PI / 2), M.brass);
  rod.position.set(-2.9, WIN.y1 + 0.2, winMid);
  for (const [z, w] of [[WIN.z0 - 0.33, 0.48], [WIN.z1 + 0.33, 0.48]]) {
    const g = new THREE.PlaneGeometry(w, 2.15, 28, 1).rotateY(Math.PI / 2);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) p.setX(i, 0.035 * Math.sin(p.getZ(i) * 38) + 0.015 * Math.sin(p.getZ(i) * 97));
    g.computeVertexNormals();
    const c = mesh(g, M.velvet); c.position.set(-2.88, WIN.y1 + 0.18 - 1.075, z);
  }

  // ----- the arched bookcase
  const books = buildBookcase(M, { cloth, leather });
  // ----- the desk under the window
  const desk = buildDesk(M, woodH, MOD);
  buildFireplace.M = M;
  const furniture = placeFurniture(MOD, M);
  // ----- the magic tome
  const tome = buildTome(M);
  // ----- a rug, a plant, a star map
  const rug = mesh(new THREE.PlaneGeometry(2.8, 1.9).rotateX(-Math.PI / 2), std({ map: canvasTex(rugTex(), { repeat: false }), roughness: 0.96, normalMap: extra.wool ? tile(extra.wool, 0.18, 0.18) : null, normalScale: new THREE.Vector2(0.6, 0.6) }), scene, { cast: false });
  rug.position.set(0, 0.004, -0.35);
  const map = mesh(new THREE.PlaneGeometry(1.0, 1.25).rotateY(-Math.PI / 2), std({ map: canvasTex(starChart(true), { repeat: false }), roughness: 0.8 }), scene, { cast: false });
  map.position.set(2.985, 1.75, 0.1);
  box(0.04, 0.05, 1.12, M.gold, 2.98, 2.4, 0.1); box(0.04, 0.05, 1.12, M.gold, 2.98, 1.1, 0.1);
  box(0.04, 1.35, 0.05, M.gold, 2.98, 1.75, -0.45); box(0.04, 1.35, 0.05, M.gold, 2.98, 1.75, 0.65);

  // ----- light
  const hemi = new THREE.HemisphereLight('#ffe6c4', '#4a3020', 1);
  scene.add(hemi);
  const sunDir = new THREE.Vector3(1, -0.62, -0.3).normalize();
  const sunTarget = new THREE.Vector3(-1.0, 0.3, -1.1);
  const sun = new THREE.DirectionalLight('#ffb26b', 4);
  sun.position.copy(sunTarget).addScaledVector(sunDir, -8);
  sun.target.position.copy(sunTarget);
  sun.castShadow = true;
  const sm = isPhone ? 1024 : 2048;
  sun.shadow.mapSize.set(sm, sm);
  Object.assign(sun.shadow.camera, { left: -4, right: 4, top: 4, bottom: -4, near: 2, far: 16 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sun.shadow.radius = 3;
  scene.add(sun, sun.target);
  const bounce = new THREE.PointLight('#ffb87a', 1, 5, 2);   // sunlight bouncing off the floor
  bounce.position.set(-0.9, 0.35, -1.0);
  scene.add(bounce);
  const shelfGlow = new THREE.PointLight('#ffa64d', 0, 3.2, 2);   // candlelight on the bookcase after dark
  shelfGlow.position.set(0.55, 1.6, -1.7);
  scene.add(shelfGlow);
  const fill = new THREE.PointLight('#ffd9a8', 1, 7, 2);     // soft fill so the far corners aren't black
  fill.position.set(0.6, 2.4, 1.2);
  scene.add(fill);

  const beam = buildBeam(WIN, sunDir);
  const motes = buildMotes(WIN, sunDir);

  const LOOK = {
    day: { hemi: ['#ffe8c8', '#4a3020', 0.55], sun: ['#ffb46b', 8.5], bounce: 3.0, fill: 1.3, fillC: '#ffd9a8', lamp: 0.6, candle: 0, tome: 0.5, shelf: 0, oil: 0, chand: 0,
      env: 0.3, exposure: 1.0, beam: [1, 0.78, 0.5], beamA: 0.85, mote: [1, 0.9, 0.7], moteA: 1, wall: wallDay, wallC: '#ffffff', sky: 'day', bg: '#140d08' },
    night: { hemi: ['#6f86c0', '#120c10', 0.32], sun: ['#8fa8ff', 1.1], bounce: 0.25, fill: 0.7, fillC: '#8094d0', lamp: 3.4, candle: 1.6, tome: 1.6, shelf: 1.2, oil: 2.8, chand: 5.5,
      env: 0.08, exposure: 1.08, beam: [0.55, 0.66, 1], beamA: 0.22, mote: [0.9, 0.75, 0.5], moteA: 0.45, wall: wallNight, wallC: '#ffffff', sky: 'night', bg: '#07080e' },
  };
  const skyCanvases = { day: skyMat.map, night: canvasTex(skyTex('night'), { repeat: false }) };
  function applyLook() {
    const L = LOOK[mode];
    hemi.color.set(L.hemi[0]); hemi.groundColor.set(L.hemi[1]); hemi.intensity = L.hemi[2];
    sun.color.set(L.sun[0]); sun.intensity = L.sun[1];
    bounce.intensity = L.bounce; bounce.color.set(mode === 'day' ? '#ffb87a' : '#7d90d0');
    fill.intensity = L.fill; fill.color.set(L.fillC); shelfGlow.intensity = L.shelf;
    desk.setLight(L.lamp, L.candle);
    furniture.setLight(L);
    tome.setLight(L.tome);
    scene.environmentIntensity = L.env;
    renderer.toneMappingExposure = L.exposure;
    beam.material.uniforms.uColor.value.set(...L.beam); beam.material.uniforms.uA.value = L.beamA;
    motes.material.uniforms.uColor.value.set(...L.mote); motes.material.uniforms.uA.value = L.moteA;
    wallMat.map = L.wall; wallMat.needsUpdate = true;
    skyMat.map = skyCanvases[L.sky]; skyMat.needsUpdate = true;
    scene.background.set(L.bg);
    $('light').textContent = mode === 'day' ? '☾' : '☀';
    $('light').setAttribute('aria-label', mode === 'day' ? 'Switch to night' : 'Switch to day');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', L.bg);
  }

  await fontReady;
  books.paint();     // spine lettering needs the font
  applyLook();

  // nothing in the room moves on its own except a few small things: freeze the rest,
  // and fuse every still piece that shares a material into one mesh (fewer draw calls)
  mergeStatics();
  scene.traverse((o) => { if (o.isMesh && !o.userData.dyn) { o.updateMatrix(); o.matrixAutoUpdate = false; } });
  renderer.shadowMap.needsUpdate = true;
  return { books, desk, tome, beam, motes, applyLook, furniture };
}

function mergeStatics() {
  scene.updateMatrixWorld(true);
  const buckets = new Map();
  scene.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material) || !o.material.visible || Object.keys(o.userData).length) return;
    for (let p = o.parent; p; p = p.parent) if (p.userData && p.userData.dyn) return;
    const key = o.material.uuid + (o.castShadow ? 'c' : '') + (o.receiveShadow ? 'r' : '');
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(o);
  });
  for (const list of buckets.values()) {
    if (list.length < 2) continue;
    const geos = list.map((o) => {
      const g2 = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      g2.applyMatrix4(o.matrixWorld);
      for (const k of Object.keys(g2.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g2.deleteAttribute(k);
      g2.clearGroups();
      return g2;
    });
    const merged = mergeGeometries(geos, false);
    if (!merged) continue;
    const m = new THREE.Mesh(merged, list[0].material);
    m.castShadow = list[0].castShadow; m.receiveShadow = list[0].receiveShadow;
    scene.add(m);
    for (const o of list) { o.parent.remove(o); o.geometry.dispose(); }
  }
}

// ---------------------------------------------------------------- painted textures
function rng(seed) { let s = seed >>> 0; return () => ((s = Math.imul(s ^ (s >>> 15), 1 | s) + 0x6D2B79F5 >>> 0) / 4294967296); }
function starChart(framed) {
  const S = framed ? 512 : 1024;
  const [c, x] = mkCanvas(S, framed ? 640 : S);
  const r = rng(framed ? 9 : 7);
  x.fillStyle = '#0f1a2b'; x.fillRect(0, 0, c.width, c.height);
  const g = x.createRadialGradient(c.width / 2, c.height / 2, 10, c.width / 2, c.height / 2, c.width * 0.8);
  g.addColorStop(0, 'rgba(60,80,130,.35)'); g.addColorStop(1, 'rgba(0,0,0,.25)');
  x.fillStyle = g; x.fillRect(0, 0, c.width, c.height);
  x.strokeStyle = 'rgba(201,161,91,.18)'; x.lineWidth = 1.5;
  if (framed) {
    for (const rad of [120, 180, 240]) { x.beginPath(); x.arc(256, 320, rad, 0, Math.PI * 2); x.stroke(); }
    for (let a = 0; a < 12; a++) { x.beginPath(); x.moveTo(256, 320); x.lineTo(256 + Math.cos(a * Math.PI / 6) * 240, 320 + Math.sin(a * Math.PI / 6) * 240); x.stroke(); }
  } else {
    x.beginPath(); x.arc(S / 2, S / 2, S * 0.42, 0, Math.PI * 2); x.stroke();
    x.beginPath(); x.moveTo(0, S / 2); x.lineTo(S, S / 2); x.stroke();
  }
  for (let i = 0; i < (framed ? 260 : 520); i++) {
    const px = r() * c.width, py = r() * c.height, s = r() < 0.08 ? 2.4 : r() * 1.3 + 0.4;
    x.fillStyle = r() < 0.25 ? 'rgba(230,200,134,.9)' : 'rgba(239,227,200,.8)';
    x.beginPath(); x.arc(px, py, s, 0, Math.PI * 2); x.fill();
  }
  x.strokeStyle = 'rgba(230,200,134,.45)'; x.lineWidth = 1.2;
  for (let k = 0; k < (framed ? 5 : 7); k++) {
    let px = r() * c.width, py = r() * c.height;
    x.beginPath(); x.moveTo(px, py);
    for (let j = 0; j < 4; j++) { px += (r() - 0.5) * 140; py += (r() - 0.5) * 140; x.lineTo(px, py); }
    x.stroke();
  }
  return c;
}
function skyTex(which) {
  const [c, x] = mkCanvas(512, 512);
  const g = x.createLinearGradient(0, 0, 0, 512);
  if (which === 'day') { g.addColorStop(0, '#f7c98d'); g.addColorStop(0.55, '#ffdca6'); g.addColorStop(1, '#f2a35e'); }
  else { g.addColorStop(0, '#08102a'); g.addColorStop(0.6, '#15244a'); g.addColorStop(1, '#25335c'); }
  x.fillStyle = g; x.fillRect(0, 0, 512, 512);
  const r = rng(3);
  if (which === 'day') {
    const s = x.createRadialGradient(330, 300, 5, 330, 300, 220);
    s.addColorStop(0, 'rgba(255,250,230,1)'); s.addColorStop(0.15, 'rgba(255,230,170,.8)'); s.addColorStop(1, 'rgba(255,200,120,0)');
    x.fillStyle = s; x.fillRect(0, 0, 512, 512);
  } else {
    for (let i = 0; i < 120; i++) { x.fillStyle = `rgba(255,255,240,${0.3 + r() * 0.6})`; x.fillRect(r() * 512, r() * 330, 1.6, 1.6); }
    x.fillStyle = '#f4efd8'; x.beginPath(); x.arc(170, 150, 34, 0, Math.PI * 2); x.fill();
    x.fillStyle = 'rgba(244,239,216,.12)'; x.beginPath(); x.arc(170, 150, 80, 0, Math.PI * 2); x.fill();
  }
  // tree line and a far hill
  x.fillStyle = which === 'day' ? 'rgba(120,90,60,.55)' : 'rgba(10,14,30,.9)';
  x.beginPath(); x.moveTo(0, 430); x.quadraticCurveTo(250, 360, 512, 420); x.lineTo(512, 512); x.lineTo(0, 512); x.fill();
  x.fillStyle = which === 'day' ? 'rgba(70,60,35,.85)' : '#05070f';
  for (let i = 0; i < 22; i++) { const tx = i * 25 + r() * 10, th = 50 + r() * 70; x.beginPath(); x.ellipse(tx, 470 - th / 3, 18 + r() * 10, th / 2, 0, 0, Math.PI * 2); x.fill(); }
  x.fillRect(0, 465, 512, 47);
  return c;
}
function panelTex(woodH) {
  const [c, x] = mkCanvas(512, 384);
  x.fillStyle = wood[2]; x.fillRect(0, 0, 512, 384);
  if (woodH) { x.globalCompositeOperation = 'overlay'; x.globalAlpha = 0.8; x.drawImage(woodH, 0, 0, 1024, 192, 0, 0, 512, 384); x.globalCompositeOperation = 'source-over'; x.globalAlpha = 1; }
  // a raised panel with a shadowed groove and a lit edge
  x.strokeStyle = 'rgba(0,0,0,.4)'; x.lineWidth = 10; x.strokeRect(46, 46, 420, 292);
  x.strokeStyle = 'rgba(255,230,190,.18)'; x.lineWidth = 4; x.strokeRect(58, 58, 396, 268);
  x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(0, 0, 8, 384); x.fillRect(504, 0, 8, 384);
  return c;
}
function rugTex() {
  // a plain claret wool rug with a darker band and one fine cream line
  const [c, x] = mkCanvas(1024, 696);
  x.fillStyle = '#6a2128'; x.fillRect(0, 0, 1024, 696);
  const r = rng(11);
  for (let i = 0; i < 14000; i++) { x.fillStyle = `rgba(${r() < 0.5 ? '20,4,6' : '150,70,70'},${r() * 0.07})`; x.fillRect(r() * 1024, r() * 696, 3, 2); }
  x.strokeStyle = '#4a1419'; x.lineWidth = 64; x.strokeRect(32, 32, 960, 632);
  x.strokeStyle = '#e3cfa8'; x.lineWidth = 4; x.strokeRect(78, 78, 868, 540);
  x.strokeStyle = 'rgba(201,161,91,.55)'; x.lineWidth = 2; x.strokeRect(88, 88, 848, 520);
  return c;
}

// ---------------------------------------------------------------- the bookcase
// The bookcase, built to look like the one in the Tomestead app: an arched top over a sill
// with a brass name plate and a few trinkets, three shelves, section bookends and labels,
// and a climbing vine up the right side and over the arch.
function bookendMesh(kind, M, flip) {
  const k = 0.00155;                                 // the app's bookend drawings are 110 units tall → 17 cm
  const P = (x, y) => [(flip ? 34 - x : x) * k, (110 - y) * k];
  const g = new THREE.Group();
  const ext = (shape, mat, depth = 0.11) => { const m = mesh(new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSize: 0.002, bevelThickness: 0.002, bevelSegments: 2, curveSegments: 10 }), mat, g); m.position.z = -depth / 2; return m; };
  if (kind === 'brass') {
    const s2 = new THREE.Shape(); s2.moveTo(...P(4, 110)); s2.lineTo(...P(4, 30)); s2.quadraticCurveTo(...P(4, 8), ...P(26, 6)); s2.quadraticCurveTo(...P(14, 22), ...P(14, 40));
    s2.lineTo(...P(14, 96)); s2.lineTo(...P(30, 96)); s2.lineTo(...P(30, 110)); s2.lineTo(...P(4, 110));
    ext(s2, M.brass, 0.1);
  } else if (kind === 'oak' || kind === 'marble') {
    const s2 = new THREE.Shape();
    if (kind === 'oak') { s2.moveTo(...P(2, 110)); s2.lineTo(...P(2, 24)); s2.quadraticCurveTo(...P(2, 6), ...P(18, 6)); s2.quadraticCurveTo(...P(34, 6), ...P(34, 24)); s2.lineTo(...P(34, 110)); s2.lineTo(...P(2, 110)); }
    else { s2.moveTo(...P(2, 110)); s2.lineTo(...P(2, 18)); s2.lineTo(...P(32, 18)); s2.lineTo(...P(32, 110)); s2.lineTo(...P(2, 110)); }
    ext(s2, kind === 'oak' ? M.caseDark : std({ color: '#e9e4da', roughness: 0.3 }), 0.1);
    if (kind === 'oak') { const d = mesh(new THREE.SphereGeometry(0.005, 10, 8), M.brass, g); d.position.set(18 * k, (110 - 26) * k, 0.052); }
  } else if (kind === 'owl') {
    const iron = std({ color: '#3e3e44', roughness: 0.5, metalness: 0.6 });
    box(0.056, 0.025, 0.08, iron, 20 * k, 0.0125, 0, g);
    const body = mesh(new THREE.SphereGeometry(0.03, 16, 12), iron, g); body.scale.set(0.95, 1.45, 0.85); body.position.set(20 * k, 0.065, 0);
    const head = mesh(new THREE.SphereGeometry(0.024, 16, 12), iron, g); head.scale.set(1.05, 0.95, 0.9); head.position.set(20 * k, 0.118, 0.002);
    for (const sx of [-1, 1]) {
      const ear = mesh(new THREE.ConeGeometry(0.007, 0.022, 8), iron, g); ear.position.set(20 * k + sx * 0.016, 0.142, 0); ear.rotation.z = -sx * 0.35;
      const eye = mesh(new THREE.SphereGeometry(0.0065, 10, 8), std({ color: '#e6c886', roughness: 0.3, metalness: 0.4, emissive: '#3a2a08' }), g); eye.position.set(20 * k + sx * 0.0095, 0.121, 0.02);
    }
    const beak = mesh(new THREE.ConeGeometry(0.004, 0.01, 6), M.brass, g); beak.rotation.x = Math.PI; beak.position.set(20 * k, 0.11, 0.023);
  } else if (kind === 'stones') {
    const st = [['#6d6a64', 19, 10, 100], ['#8c877d', 15, 9, 82], ['#5e5b56', 12, 8, 66], ['#a39d90', 9, 6.5, 52]];
    for (const [c, rx, ry, cy] of st) { const m = mesh(new THREE.SphereGeometry(1, 16, 10), std({ color: c, roughness: 0.6 }), g); m.scale.set(rx * k, ry * k, rx * k * 0.8); m.position.set(20 * k, (110 - cy) * k, 0); }
  }
  return g;
}
function leafTex(rose) {
  const [c, x] = mkCanvas(128, 128);
  x.fillStyle = rose ? '#4f7a3a' : '#3d6b2f';
  x.beginPath(); x.moveTo(64, 6); x.bezierCurveTo(118, 40, 104, 104, 64, 122); x.bezierCurveTo(24, 104, 10, 40, 64, 6); x.fill();
  x.strokeStyle = 'rgba(210,235,170,.45)'; x.lineWidth = 3; x.beginPath(); x.moveTo(64, 14); x.lineTo(64, 118); x.stroke();
  x.lineWidth = 1.5; for (let i = 0; i < 5; i++) { const y = 30 + i * 17; x.beginPath(); x.moveTo(64, y + 8); x.lineTo(38, y); x.moveTo(64, y + 8); x.lineTo(90, y); x.stroke(); }
  return c;
}
function roseTex() {
  const [c, x] = mkCanvas(128, 128);
  x.translate(64, 64);
  for (let r = 54; r > 6; r -= 9) {
    x.fillStyle = `hsl(350, ${55 + (54 - r) * 0.4}%, ${82 - (54 - r) * 0.55}%)`;
    x.beginPath(); for (let a = 0; a <= 6.3; a += 0.3) { const rr = r * (0.82 + 0.18 * Math.sin(a * 5 + r)); x.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } x.fill();
    x.strokeStyle = 'rgba(120,30,50,.25)'; x.lineWidth = 1.5; x.stroke();
  }
  return c;
}
// a climbing vine (roses or ivy) up the right post and over the arch
function buildVine(parent, { W, top, RISE, ZF, ivy }) {
  const r = rng(5);
  const pts = [];
  const x0 = W / 2 - 0.02;
  for (let i = 0; i <= 10; i++) { const y = 0.12 + (top - 0.12) * (i / 10); pts.push(new THREE.Vector3(x0 + Math.sin(i * 1.3) * 0.012, y, ZF + 0.025)); }
  for (let th = 0.08; th < 1.25; th += 0.12) pts.push(new THREE.Vector3(Math.cos(th) * (W / 2 + 0.005), top + Math.sin(th) * (RISE + 0.01) + Math.cos(th * 7) * 0.01, ZF + 0.025));
  const curve = new THREE.CatmullRomCurve3(pts);
  mesh(new THREE.TubeGeometry(curve, 120, 0.006, 6, false), std({ color: '#5a4a2a', roughness: 0.9 }), parent, { recv: false });
  const leafMat = std({ map: canvasTex(leafTex(!ivy), { repeat: false }), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.75 });
  const N = 150, leaves = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.045, 0.045), leafMat, N);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3(), p = new THREE.Vector3();
  for (let i = 0; i < N; i++) {
    const t = Math.min(1, (i / N) * 1.02 + r() * 0.01);
    curve.getPointAt(t, p);
    p.x += (r() - 0.5) * 0.07; p.y += (r() - 0.5) * 0.05; p.z += 0.005 + r() * 0.02;
    e.set((r() - 0.5) * 0.9, (r() - 0.5) * 0.9, r() * 6.28); q.setFromEuler(e);
    const s2 = 0.7 + r() * 0.6; sc.set(s2, s2, s2);
    leaves.setMatrixAt(i, m4.compose(p, q, sc));
  }
  leaves.castShadow = true; parent.add(leaves);
  if (ivy) return;
  const roseMat = std({ map: canvasTex(roseTex(), { repeat: false }), alphaTest: 0.4, roughness: 0.7, side: THREE.DoubleSide });
  const R2 = 22, roses = new THREE.InstancedMesh(new THREE.CircleGeometry(0.022, 16), roseMat, R2);
  for (let i = 0; i < R2; i++) {
    curve.getPointAt(0.12 + (i / R2) * 0.86, p);
    p.x += (r() - 0.5) * 0.05; p.z += 0.03; p.y += (r() - 0.5) * 0.04;
    e.set((r() - 0.5) * 0.5, (r() - 0.5) * 0.5, r() * 6.28); q.setFromEuler(e);
    const s2 = 0.7 + r() * 0.6; sc.set(s2, s2, s2);
    roses.setMatrixAt(i, m4.compose(p, q, sc));
  }
  parent.add(roses);
}
function plateTex(text, w = 512, h = 96) {
  const [c, x] = mkCanvas(w, h);
  const gr = x.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#e6c886'); gr.addColorStop(0.6, '#c9a15b'); gr.addColorStop(1, '#9c7637');
  x.fillStyle = gr; x.beginPath(); x.roundRect(2, 2, w - 4, h - 4, 10); x.fill();
  x.strokeStyle = 'rgba(255,255,255,.35)'; x.lineWidth = 3; x.beginPath(); x.moveTo(12, 6); x.lineTo(w - 12, 6); x.stroke();
  x.fillStyle = '#3a2610'; x.font = `italic ${Math.round(h * 0.58)}px "IM Fell English", Georgia, serif`; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(text, w / 2, h / 2 + 3);
  return c;
}
function buildBookcase(M, { cloth, leather }) {
  const g = new THREE.Group(); scene.add(g);
  const W = 1.9, D = 0.4, P = 0.055, PL = 0.1, ROWH = 0.38, PLK = 0.035, ROWS = 3, HS = 0.12, RISE = 0.27;
  const ZB = -2.68, ZF = ZB + D, ZC = ZB + D / 2;
  const plankY = (k) => PL + k * (ROWH + PLK);
  const SILL = plankY(ROWS);                       // the sill sits where a fourth plank would
  const theme = Object.assign({ bookend: 'brass', vine: 'roses' }, lib.theme);
  // plinth, posts, back, planks, sill
  box(W + 0.04, PL, D + 0.03, M.caseDark, 0, PL / 2, ZC + 0.015, g);
  for (const sx of [-1, 1]) box(P, SILL + 0.04 - PL, D, M.caseSide, sx * (W / 2 - P / 2), PL + (SILL + 0.04 - PL) / 2, ZC, g);
  const recess = M.recessWood || M.recess;
  box(W - 2 * P, SILL + 0.04 - PL, 0.02, recess, 0, PL + (SILL + 0.04 - PL) / 2, ZB + 0.01, g);
  const rowsY = [];
  for (let k2 = 0; k2 < ROWS; k2++) { box(W - 2 * P, PLK, D - 0.015, M.caseShelf, 0, plankY(k2) + PLK / 2, ZC + 0.0075, g); rowsY.push(plankY(k2) + PLK); }
  box(W + 0.03, 0.045, D + 0.035, M.caseShelf, 0, SILL + 0.0225, ZC + 0.0175, g);
  // the arched top: a band of wood following the arch, with a dark panel behind
  const AY = SILL + 0.045, rx = W / 2, rxi = W / 2 - P;
  const band = new THREE.Shape();
  band.moveTo(-rx, 0); band.lineTo(-rx, HS); band.absellipse(0, HS, rx, RISE, Math.PI, 0, true); band.lineTo(rx, 0); band.lineTo(rxi, 0); band.lineTo(rxi, HS);
  band.absellipse(0, HS, rxi, RISE - P * 0.8, 0, Math.PI, false); band.lineTo(-rxi, 0); band.lineTo(-rx, 0);
  const bandM = mesh(new THREE.ExtrudeGeometry(band, { depth: D, bevelEnabled: false, curveSegments: 48 }), M.caseSide, g); bandM.position.set(0, AY, ZB);
  const back = new THREE.Shape(); back.moveTo(-rxi, 0); back.lineTo(-rxi, HS); back.absellipse(0, HS, rxi, RISE - P * 0.8, Math.PI, 0, true); back.lineTo(rxi, 0); back.lineTo(-rxi, 0);
  const backM = mesh(new THREE.ExtrudeGeometry(back, { depth: 0.02, bevelEnabled: false, curveSegments: 48 }), recess, g); backM.position.set(0, AY, ZB);
  // a light bead moulding along the outside of the arch
  const arcPts = []; for (let i = 0; i <= 48; i++) { const a = Math.PI - (i / 48) * Math.PI; arcPts.push(new THREE.Vector3(Math.cos(a) * (rx + 0.004), AY + HS + Math.sin(a) * (RISE + 0.004), ZF + 0.002)); }
  mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(arcPts), 64, 0.009, 8, false), M.caseShelf, g);
  // brass name plate on the sill, like the app ("16 read")
  const nRead = lib.books.filter((b) => (b.status || 'read') === 'read').length;
  const plate = mesh(new THREE.PlaneGeometry(0.2, 0.034), std({ map: canvasTex(plateTex(`${nRead} read`), { repeat: false }), roughness: 0.35, metalness: 0.6 }), g, { cast: false });
  plate.position.set(0, SILL + 0.0225, ZF + 0.035 / 2 + 0.0185);
  // trinkets under the arch: a candlestick, a globe, and the year's trophy once a goal is met
  const AT = SILL + 0.045, AZ = ZC + 0.02;
  const cand = new THREE.Group(); g.add(cand); cand.position.set(-0.32, AT, AZ);
  mesh(lathe([[0, 0], [0.045, 0], [0.045, 0.01], [0.012, 0.02], [0.012, 0.09], [0.03, 0.1], [0.03, 0.11], [0, 0.11]]), M.brass, cand);
  const cw = mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.13, 14), M.candle, cand); cw.position.y = 0.175;
  const cf = flameSprite(); cf.position.set(-0.32, AT + 0.26, AZ); g.add(cf);
  const globe = new THREE.Group(); g.add(globe);
  mesh(lathe([[0, 0], [0.045, 0], [0.045, 0.012], [0.008, 0.02], [0.008, 0.06], [0, 0.06]]), M.brass, globe);
  const gl = mesh(new THREE.SphereGeometry(0.065, 24, 16), std({ map: canvasTex(globeTex(), { repeat: false }), roughness: 0.5 }), globe);
  gl.position.y = 0.125; gl.rotation.z = 0.4;
  const ring = mesh(new THREE.TorusGeometry(0.075, 0.004, 6, 32, Math.PI * 1.2), M.brass, globe); ring.position.y = 0.125; ring.rotation.set(0, Math.PI / 2, 0.4 - Math.PI / 2);
  globe.position.set(-0.16, AT, AZ);
  if (Object.keys(lib.trophies || {}).length) {
    const trophy = new THREE.Group(); g.add(trophy);
    mesh(lathe([[0, 0], [0.06, 0], [0.06, 0.02], [0.035, 0.03], [0.012, 0.05], [0.012, 0.1], [0.03, 0.12], [0.065, 0.17], [0.072, 0.22], [0.066, 0.22], [0.02, 0.13], [0, 0.13]]), M.gold, trophy);
    for (const sx of [-1, 1]) { const h = mesh(new THREE.TorusGeometry(0.035, 0.006, 8, 20, Math.PI), M.gold, trophy); h.rotation.z = sx * -Math.PI / 2; h.position.set(sx * 0.07, 0.185, 0); }
    trophy.position.set(0.06, AT, AZ);
  }
  [[0.26, 0.032, '#1F3350'], [0.23, 0.028, '#e9dcbc'], [0.25, 0.034, '#6E1F24']].reduce((yy, [w, th, col]) => {
    box(w, th, 0.17, std({ color: col, roughness: 0.7 }), 0.3, yy + th / 2, AZ, g); return yy + th;
  }, AT);
  if (theme.vine !== 'none') buildVine(g, { W, top: AY + HS, RISE, ZF, ivy: theme.vine === 'ivy' });

  // ---- books, in the app's order: Reading now → To read → Read
  const ORDER = ['reading', 'want', 'read'];
  const list = lib.books.filter((b) => ORDER.includes(b.status || 'read'))
    .sort((a, b) => ORDER.indexOf(a.status || 'read') - ORDER.indexOf(b.status || 'read') || (Number(b.addedAt) || 0) - (Number(a.addedAt) || 0));
  const counts = {}; list.forEach((b) => { const k2 = b.status || 'read'; counts[k2] = (counts[k2] || 0) + 1; });
  const labelled = Object.keys(counts).length > 1;
  const PICKS = { reading: ['owl', 'stones', 'oak', 'marble', 'brass'], want: ['oak', 'marble', 'stones', 'owl', 'brass'] };
  const endFor = (sec) => {
    if (sec !== 'reading' && sec !== 'want') return theme.bookend;
    const saved = theme.bookends && theme.bookends[sec]; if (saved) return saved;
    if (theme.bookend === 'none') return 'none';
    const taken = [theme.bookend]; if (sec === 'want') taken.push(endFor('reading'));
    return PICKS[sec].find((k2) => !taken.includes(k2)) || theme.bookend;
  };
  const endW = (sec) => (endFor(sec) === 'none' ? 0 : endFor(sec) === 'owl' || endFor(sec) === 'stones' ? 0.064 : 0.054);
  const innerL = -W / 2 + P + 0.02, innerR = W / 2 - P - 0.02, rowW = innerR - innerL;
  // first the run of books and bookends, then lay it onto the shelves
  const seq = [];
  let sec = null;
  for (const b of list) {
    const st = b.status || 'read';
    const h0 = hash(b.id + '|' + b.title), pages = pagesOf(b);
    const t = (pages > 0 ? Math.min(66, Math.max(24, 18 + pages / 16)) : 26 + ((h0 >>> 5) % 30)) * 0.00082;
    const h = (176 + (h0 % 66)) * 0.00118;
    const d = 0.15 + (h0 % 5) * 0.011;
    if (st !== sec) {
      if (sec !== null) seq.push({ kind: 'end', sec, w: endW(sec) + 0.035, flip: true });
      seq.push({ kind: 'end', sec: st, w: endW(st) + 0.004, start: true });
      sec = st;
    }
    const lean = st === 'reading' ? 0.012 : 0;
    seq.push({ kind: 'book', w: t + 0.0025 + lean, b, t, h, d, lean, st, variant: (h0 >>> 9) % 4 });
  }
  if (sec !== null) seq.push({ kind: 'end', sec, w: endW(sec), flip: true });
  // a small library is spread over the shelves, with room for trinkets
  const total = seq.reduce((s2, e) => s2 + e.w, 0);
  const needed = Math.ceil(total / rowW);
  // balance the books over the shelves they need (a little extra, so each shelf has room for a trinket)
  const rowsUsed = Math.min(ROWS, Math.max(needed, Math.ceil(total / (rowW * 0.72))));
  const cap = Math.min(rowW, total / rowsUsed + 0.06);
  let row = ROWS - 1, x = innerL, hidden = 0;
  const items = [];
  for (const e of seq) {
    if (x + e.w > innerL + cap && x > innerL) {
      // don't start a row with a closing bookend
      if (e.kind === 'end' && e.flip) { items.push({ ...e, row, x }); x += e.w; continue; }
      row--; x = innerL;
    }
    if (row < 0) { if (e.kind === 'book') hidden++; continue; }
    items.push({ ...e, row, x }); x += e.w;
  }

  // trinkets in the space that's left over
  const freeRows = [];
  for (let r = ROWS - 1; r >= 0; r--) {
    const used = items.filter((i) => i.row === r);
    const end = used.length ? Math.max(...used.map((i) => i.x + (i.t || i.w))) : innerL;
    freeRows.push({ r, from: end + 0.04 });
  }
  const bookMeshes = [];
  for (const it of items) {
    const y = rowsY[it.row];
    if (it.kind === 'end') {
      const kind = endFor(it.sec);
      if (kind !== 'none') { const e = bookendMesh(kind, M, !!it.flip); g.add(e); e.position.set(it.x + (it.flip ? 0.006 : 0), y, ZF - 0.1); }
      // a small brass label on the plank where each section starts, as in the app
      if (it.start && labelled) {
        const name = { reading: 'Reading now', want: 'To read', read: 'Read' }[it.sec];
        const lb = mesh(new THREE.PlaneGeometry(0.15, 0.022), std({ map: canvasTex(plateTex(`${name} · ${counts[it.sec]}`, 640, 96), { repeat: false }), roughness: 0.35, metalness: 0.6 }), g, { cast: false });
        lb.position.set(it.x + 0.08, y - PLK / 2, ZF + 0.0006);
      }
      continue;
    }
    const geo = new THREE.BoxGeometry(it.t, it.h, it.d);
    const m = mesh(geo, undefined, g);
    m.position.set(it.x + it.t / 2 + it.lean, y + it.h / 2, ZF - 0.025 - it.d / 2);
    if (it.lean) { m.rotation.z = -0.07; m.position.x -= 0.004; }
    m.userData = { book: it.b, home: m.position.clone(), homeRot: m.rotation.clone(), dyn: true, it };
    if (it.st === 'reading') {     // a red ribbon marks the books being read
      const rb = new THREE.Mesh(new THREE.BoxGeometry(Math.max(0.006, it.t * 0.28), 0.045, 0.002), std({ color: '#9b1d22', roughness: 0.6 }));
      rb.position.set(0, it.h / 2 + 0.012, it.d / 2 - 0.02); m.add(rb);
    }
    bookMeshes.push(m);
  }
  // fill empty space: a lying stack, a candle, a little plant
  let decor = 0;
  for (const fr of freeRows) {
    const room = innerR - fr.from;
    if (room < 0.22) continue;
    const y = rowsY[fr.r], z = ZF - 0.13;
    const kind = decor++ % 3;
    const x0 = fr.from + (room > 0.6 ? room * 0.35 : 0.04);
    if (kind === 0) {
      [[0.24, 0.035, '#1F3350'], [0.22, 0.03, '#6E1F24'], [0.2, 0.04, '#4F6B3A']].reduce((yy, [w, th, col]) => {
        box(w, th, 0.16, std({ color: col, roughness: 0.7 }), x0 + 0.12, yy + th / 2, z, g); return yy + th;
      }, y);
    } else if (kind === 1) {
      mesh(lathe([[0, 0], [0.045, 0], [0.045, 0.01], [0.012, 0.02], [0.012, 0.09], [0.03, 0.1], [0.03, 0.11], [0, 0.11]]), M.brass, g).position.set(x0 + 0.06, y, z);
      const c = mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.12, 14), M.candle, g); c.position.set(x0 + 0.06, y + 0.17, z);
    } else {
      mesh(lathe([[0, 0], [0.045, 0], [0.055, 0.09], [0.06, 0.09], [0.06, 0.1], [0, 0.1]]), M.terracotta, g).position.set(x0 + 0.07, y, z);
      for (let i = 0; i < 9; i++) {
        const l = mesh(new THREE.SphereGeometry(0.04, 8, 6), M.leaf, g);
        l.scale.set(0.5, 1.4, 0.25); const a = i * 0.7;
        l.position.set(x0 + 0.07 + Math.cos(a) * 0.035, y + 0.15 + (i % 3) * 0.03, z + Math.sin(a) * 0.035);
        l.rotation.set(Math.sin(a) * 0.5, a, Math.cos(a) * 0.6);
      }
    }
  }

  // one picking target for the whole case (books are picked first)
  const HT = AY + HS + RISE;
  const hit = new THREE.Mesh(new THREE.BoxGeometry(W + 0.1, HT, D), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.set(0, HT / 2, ZC); hit.userData.station = 'shelf'; scene.add(hit);

  // spine lettering, all books on one texture (one material for every spine)
  let mat = null;
  function paint() {
    const n = bookMeshes.length;
    const A = isPhone ? 2048 : 2048;
    const rw = n <= 128 ? 64 : n <= 252 ? 48 : 40, rh = rw * 7;
    const cols = Math.floor(A / rw);
    const rows = Math.max(1, Math.ceil(n / cols));
    const [c, x] = mkCanvas(A, Math.min(A, THREE.MathUtils.ceilPowerOfTwo(rows * rh)));
    const AH = c.height;
    const pat = (img) => (img ? x.createPattern(img, 'repeat') : null);
    const clothP = pat(cloth), leatherP = pat(leather);
    bookMeshes.forEach((m, i) => {
      const { book: b, it } = m.userData;
      const [bg, ink] = colorOf(b);
      const cx = (i % cols) * rw, cy = Math.floor(i / cols) * rh;
      const art = rh - 14;
      x.save();
      x.beginPath(); x.rect(cx, cy, rw, rh); x.clip();
      x.fillStyle = bg; x.fillRect(cx, cy, rw, rh);
      const p = it.variant === 3 ? leatherP : clothP;
      if (p) { x.globalCompositeOperation = 'overlay'; x.globalAlpha = it.st === 'want' ? 0.35 : 0.6; x.fillStyle = p; x.fillRect(cx, cy, rw, art); x.globalCompositeOperation = 'source-over'; x.globalAlpha = 1; }
      // rounded spine shading
      const sh = x.createLinearGradient(cx, 0, cx + rw, 0);
      sh.addColorStop(0, 'rgba(0,0,0,.42)'); sh.addColorStop(0.22, 'rgba(255,255,255,.12)'); sh.addColorStop(0.55, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(0,0,0,.45)');
      x.fillStyle = sh; x.fillRect(cx, cy, rw, art);
      const gold = it.st === 'want' ? ink : '#e6c886';
      x.fillStyle = gold; x.strokeStyle = gold;
      // bands
      const u = rw / 64;
      if (it.variant !== 2) { x.fillRect(cx, cy + 22 * u, rw, 3 * u); x.fillRect(cx, cy + art - 26 * u, rw, 3 * u); }
      if (it.variant === 1) { x.fillRect(cx, cy + 28 * u, rw, 1.5 * u); x.fillRect(cx, cy + art - 32 * u, rw, 1.5 * u); }
      // stars at the top for rated, finished books
      const stars = it.st === 'read' ? Math.max(0, Math.min(5, Math.round(b.rating || 0))) : 0;
      x.font = `${Math.round(13 * u)}px serif`; x.textAlign = 'center'; x.textBaseline = 'middle';
      for (let k = 0; k < stars; k++) x.fillText('★', cx + rw / 2, cy + 38 * u + k * 13 * u);
      // title down the spine, surname at the foot
      const top = cy + (stars ? 38 * u + stars * 13 * u + 6 * u : 40 * u), bottom = cy + art - 64 * u;
      const len = bottom - top;
      x.save(); x.translate(cx + rw / 2, top + len / 2); x.rotate(Math.PI / 2);
      let fs = Math.min(26 * u, rw * 0.5);
      x.font = `${fs}px "IM Fell English", Georgia, serif`;
      let title = String(b.title);
      while (x.measureText(title).width > len && fs > 14 * u) { fs -= 1; x.font = `${fs}px "IM Fell English", Georgia, serif`; }
      while (x.measureText(title).width > len && title.length > 3) title = title.slice(0, -2).trimEnd() + '…';
      x.fillStyle = it.st === 'want' ? ink : (ink === '#2B1C0E' || ink === '#24170C' || ink === '#3A2614' ? '#2a1a0c' : '#ead19a');
      x.fillText(title, 0, 1);
      x.restore();
      const surname = String(b.author || '').trim().split(/\s+/).pop() || '';
      if (surname) {
        x.save(); x.translate(cx + rw / 2, cy + art - 44 * u); x.rotate(Math.PI / 2);
        let fs2 = 15 * u; x.font = `${fs2}px "IM Fell English", Georgia, serif`;
        while (x.measureText(surname).width > 34 * u && fs2 > 9 * u) { fs2 -= 1; x.font = `${fs2}px "IM Fell English", Georgia, serif`; }
        x.fillText(surname, 0, 1); x.restore();
      }
      // swatches for the other faces: cover cloth, then page edges
      x.fillStyle = bg; x.fillRect(cx, cy + art, rw, 7);
      x.fillStyle = '#e9dcbc'; x.fillRect(cx, cy + art + 7, rw, 7);
      x.restore();
      // map this book's faces into its slot
      const U0 = cx / A, U1 = (cx + rw) / A, VT = 1 - cy / AH, VB = 1 - (cy + art) / AH;
      const swatch = [(cx + rw / 2) / A, 1 - (cy + art + 3.5) / AH];
      const pageSw = [(cx + rw / 2) / A, 1 - (cy + art + 10.5) / AH];
      const uv = m.geometry.attributes.uv;
      for (let f = 0; f < 6; f++) {
        for (let k = 0; k < 4; k++) {
          const i2 = f * 4 + k;
          if (f === 4) { const u0 = uv.getX(i2), v0 = uv.getY(i2); uv.setXY(i2, U0 + u0 * (U1 - U0), VB + v0 * (VT - VB)); }
          else if (f === 2 || f === 3) uv.setXY(i2, pageSw[0], pageSw[1]);
          else uv.setXY(i2, swatch[0], swatch[1]);
        }
      }
      uv.needsUpdate = true;
    });
    const tex = canvasTex(c, { repeat: false });
    mat = std({ map: tex, roughness: 0.72 });
    bookMeshes.forEach((m) => { m.material = mat; });
  }
  return { meshes: bookMeshes, paint, hidden, count: list.length };
}
function globeTex() {
  const [c, x] = mkCanvas(256, 128);
  x.fillStyle = '#d9c9a0'; x.fillRect(0, 0, 256, 128);
  const r = rng(5);
  x.fillStyle = '#6f8a5a';
  for (let i = 0; i < 14; i++) { x.beginPath(); x.ellipse(r() * 256, 20 + r() * 88, 10 + r() * 26, 6 + r() * 16, r() * 3, 0, 7); x.fill(); }
  x.strokeStyle = 'rgba(90,60,30,.4)';
  for (let i = 1; i < 6; i++) { x.beginPath(); x.moveTo(0, i * 21); x.lineTo(256, i * 21); x.stroke(); }
  return c;
}

// ---------------------------------------------------------------- the desk
const NOISE = `
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y); }
  float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ v += a*noise(p); p *= 2.03; a *= 0.5; } return v; }`;
function buildSteam() {
  // two crossed planes of drifting, curling wisps
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uA: { value: 0.42 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: `uniform float uTime, uA; varying vec2 vUv;` + NOISE + `
      void main(){ vec2 uv = vUv;
        float sway = (fbm(vec2(uv.y*2.0 - uTime*0.4, 3.1)) - 0.5) * 0.7 * uv.y;
        float n = fbm(vec2((uv.x + sway)*4.0, uv.y*3.0 - uTime*0.55));
        float col = smoothstep(0.42, 0.0, abs(uv.x - 0.5 + sway));
        float a = min(1.0, col * smoothstep(0.0, 0.18, uv.y) * pow(1.0 - uv.y, 1.1) * smoothstep(0.3, 0.62, n) * uA * 2.2);
        gl_FragColor = vec4(vec3(0.93, 0.93, 0.95), a); }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  });
  const g = new THREE.Group(); g.userData.dyn = true;
  for (const ry of [0, Math.PI / 2]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.32).translate(0, 0.16, 0), mat); m.rotation.y = ry; m.userData.dyn = true; m.renderOrder = 7; g.add(m); }
  g.material = mat;
  return g;
}
function shadeTex() {
  const [c, x] = mkCanvas(512, 128);
  x.fillStyle = '#efe2c6'; x.fillRect(0, 0, 512, 128);
  for (let i = 0; i < 64; i++) { x.fillStyle = i % 2 ? 'rgba(120,90,50,.10)' : 'rgba(255,255,255,.10)'; x.fillRect(i * 8, 0, 4, 128); }
  x.fillStyle = '#b8935a'; x.fillRect(0, 0, 512, 6); x.fillRect(0, 122, 512, 6);
  return c;
}

// ---------------------------------------------------------------- the fireplace (left wall, nearer the front)
function buildFireplace(MOD) {
  const g = new THREE.Group(); scene.add(g);
  const M = buildFireplace.M, X = -3.0, Z = 1.68, D = 0.32, W = 1.6, OW = 0.9, OH = 0.75, MH = 1.06;
  // stone surround, brick-lined firebox, slate hearth, wooden mantel
  box(D, MH, (W - OW) / 2, M.stoneSurround, X + D / 2, MH / 2, Z - OW / 2 - (W - OW) / 4, g);
  box(D, MH, (W - OW) / 2, M.stoneSurround, X + D / 2, MH / 2, Z + OW / 2 + (W - OW) / 4, g);
  box(D, MH - OH, OW, M.stoneSurround, X + D / 2, OH + (MH - OH) / 2, Z, g);
  box(0.03, OH, OW, M.firebrick, X + 0.015, OH / 2, Z, g);
  box(D - 0.03, OH, 0.025, M.firebrick, X + D / 2, OH / 2, Z - OW / 2 + 0.0125, g);
  box(D - 0.03, OH, 0.025, M.firebrick, X + D / 2, OH / 2, Z + OW / 2 - 0.0125, g);
  box(D - 0.03, 0.02, OW, M.firebrick, X + D / 2, OH - 0.01, Z, g);
  box(0.72, 0.04, W + 0.3, M.slate, X + 0.36, 0.02, Z, g);
  box(0.44, 0.065, W + 0.26, M.trim, X + 0.22, MH + 0.0325, Z, g);
  box(0.38, 0.035, W + 0.12, M.trim, X + 0.19, MH - 0.0175, Z, g);
  for (const sz of [-1, 1]) box(0.06, 0.12, 0.06, M.trim, X + D + 0.02, MH - 0.07, Z + sz * (W / 2 - 0.08), g);
  // an iron grate with three logs
  for (const dz of [-0.2, 0, 0.2]) box(0.26, 0.015, 0.012, M.iron, X + 0.17, 0.09, Z + dz, g);
  for (const sz of [-1, 1]) box(0.012, 0.09, 0.012, M.iron, X + 0.27, 0.045, Z + sz * 0.26, g);
  const logs = [[X + 0.12, 0.12, Z, 0.05, 0.62, 0.08, 0], [X + 0.21, 0.125, Z - 0.02, 0.045, 0.58, -0.12, 0.05], [X + 0.16, 0.19, Z + 0.03, 0.04, 0.5, 0.25, -0.2]];
  for (const [x, y, z, r, l, ry, rx] of logs) {
    const lg = mesh(new THREE.CylinderGeometry(r, r * 1.05, l, 12).rotateX(Math.PI / 2), M.logs, g); lg.position.set(x, y, z); lg.rotation.set(rx, ry, 0);
  }
  // embers glowing under the logs
  const coal = mesh(new THREE.PlaneGeometry(0.24, 0.6).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: canvasTex(coalTex(), { repeat: false }), color: '#ffffff' }), g, { cast: false });
  coal.position.set(X + 0.16, 0.045, Z);
  // the flames: crossed planes running a noise shader
  const fireMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uI: { value: 1 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: `uniform float uTime, uI; varying vec2 vUv;` + NOISE + `
      void main(){ vec2 uv = vUv;
        float n = fbm(vec2(uv.x*3.2 + 7.0, uv.y*2.4 - uTime*1.7));
        float n2 = fbm(vec2(uv.x*6.0 - 3.0, uv.y*4.0 - uTime*2.6));
        float width = 1.0 - pow(abs(uv.x - 0.5)*2.0, 1.4);
        float f = (n*1.15 + n2*0.35 - uv.y*1.05) * width + 0.25*(1.0 - uv.y)*width;
        f = smoothstep(0.08, 0.62, f);
        vec3 c = mix(vec3(0.85,0.16,0.02), vec3(1.0,0.62,0.16), smoothstep(0.15, 0.6, f));
        c = mix(c, vec3(1.0,0.93,0.68), smoothstep(0.7, 1.0, f));
        gl_FragColor = vec4(c*f*uI, f*uI); }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
  });
  const flames = [];
  for (const [ry, w, h, dz] of [[0, 0.62, 0.55, 0], [0.9, 0.42, 0.5, -0.08], [-0.9, 0.42, 0.48, 0.09], [Math.PI / 2, 0.3, 0.45, 0]]) {
    const f = new THREE.Mesh(new THREE.PlaneGeometry(w, h).translate(0, h / 2, 0), fireMat);
    f.rotation.y = Math.PI / 2 + ry; f.position.set(X + 0.17, 0.08, Z + dz); f.renderOrder = 8; f.userData.dyn = true; g.add(f); flames.push(f);
  }
  // sparks drifting up the chimney
  const N = 50, seed = new Float32Array(N * 3), rs = rng(17);
  for (let i = 0; i < N * 3; i++) seed[i] = rs();
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(seed, 3));
  const sparkMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uSize: { value: 14 * dpr }, uO: { value: new THREE.Vector3(X + 0.17, 0.12, Z) } },
    vertexShader: `uniform float uTime, uSize; uniform vec3 uO; varying float vA;
      void main(){ vec3 s = position; float life = fract(s.x + uTime*(0.25 + 0.3*s.y));
        vec3 p = uO + vec3((s.z-0.5)*0.12 + sin(uTime*3.0 + s.y*20.0)*0.02, life*0.65, (s.y-0.5)*0.5 + sin(uTime*2.0 + s.z*9.0)*0.03);
        vA = (1.0 - life) * smoothstep(0.0, 0.1, life);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = uSize*(0.4 + s.z)/-mv.z; gl_Position = projectionMatrix*mv; }`,
    fragmentShader: `varying float vA; void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d)*vA; gl_FragColor = vec4(vec3(1.0,0.6,0.2)*a, a); }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const sparks = new THREE.Points(sg, sparkMat); sparks.frustumCulled = false; sparks.userData.dyn = true; g.add(sparks);
  // firelight: a flickering light and a warm glow on the hearth
  const light = new THREE.PointLight('#ff8c3a', 2, 5.5, 2); light.position.set(X + 0.55, 0.45, Z); g.add(light);
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.6).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: canvasTex(glowTex(), { repeat: false }), color: '#ff9a4a', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.35 }));
  glow.position.set(X + 0.6, 0.046, Z); glow.renderOrder = 4; g.add(glow);
  const hit = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.3, W + 0.2), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.set(X + 0.4, 0.65, Z); hit.userData.station = 'hearth'; g.add(hit);
  // trinkets on the mantel (the trophies and treasures shelf)
  const MT = MH + 0.065;
  placeModel(MOD.clock, X + 0.2, MT, Z, Math.PI / 2, 1.05);
  for (const sz of [-1, 1]) {
    const cs = MOD.candlestick && (sz < 0 ? MOD.candlestick : MOD.candlestick.clone());
    if (cs) { placeModel(cs, X + 0.2, MT, Z + sz * 0.78, 0, 1.15); const fl = flameSprite(); fl.position.set(X + 0.2, MT + 0.275, Z + sz * 0.78); scene.add(fl); }
  }
  placeModel(MOD.vase, X + 0.19, MT, Z - 0.42, 0.3, 0.45);
  // a big painting over the mantel: Highland cattle on the moor, in the ornate gilt frame
  if (MOD.painting) {
    const art = MOD.painting.clone(true);
    const tex = texLoader.load('tex/painting_highland.webp'); tex.colorSpace = THREE.SRGBColorSpace; tex.flipY = false; tex.anisotropy = maxAniso;
    art.traverse((o) => { if (o.isMesh && /canvas/.test(o.material.name)) { o.material = o.material.clone(); o.material.map = tex; o.material.color.set('#ffffff'); o.material.needsUpdate = true; } });
    placeModel(art, X + 0.005, MT + 0.62, Z, Math.PI / 2, 2.25, { cast: false });
  }
  placeModel(MOD.elephant, X + 0.2, MT, Z + 0.42, Math.PI / 2 + 0.3, 1.7);
  const dog = buildDog(); dog.position.set(X + 1.08, 0, Z + 0.05); dog.rotation.y = 0.5; scene.add(dog);
  let base = 2;
  return {
    dog,
    setLight(L) { base = mode === 'night' ? 4.2 : 1.6; },
    tick(t) {
      fireMat.uniforms.uTime.value = t; sparkMat.uniforms.uTime.value = t;
      const fl = 0.82 + 0.1 * Math.sin(t * 9.1) + 0.08 * Math.sin(t * 23.7 + 1.3) * Math.sin(t * 3.3);
      light.intensity = base * fl; glow.material.opacity = (mode === 'night' ? 0.5 : 0.28) * fl;
      dog.userData.tick(t);
    },
  };
}
function coalTex() {
  const [c, x] = mkCanvas(128, 256);
  x.fillStyle = '#1a0a04'; x.fillRect(0, 0, 128, 256);
  const r = rng(8);
  for (let i = 0; i < 160; i++) {
    const px = r() * 128, py = r() * 256, rad = 3 + r() * 9;
    const g = x.createRadialGradient(px, py, 0, px, py, rad);
    g.addColorStop(0, `rgba(255,${120 + r() * 100},40,1)`); g.addColorStop(1, 'rgba(120,20,0,0)');
    x.fillStyle = g; x.beginPath(); x.arc(px, py, rad, 0, 7); x.fill();
  }
  return c;
}
function flameSprite() {
  const m = new THREE.SpriteMaterial({ map: canvasTex(flameTex(), { repeat: false }), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  const s = new THREE.Sprite(m); s.scale.set(0.03, 0.06, 1); return s;
}

// ---------------------------------------------------------------- a golden dog, curled up asleep
// The body is one soft shape (metaballs melted together), so it reads as a single furry curl.
function buildDog() {
  const g = new THREE.Group(); g.userData.dyn = true;
  const fur = new THREE.MeshPhysicalMaterial({ color: '#bf7f3f', roughness: 0.95, sheen: 1, sheenColor: new THREE.Color('#ffd9a0'), sheenRoughness: 0.5,
    normalMap: extra.fur ? tile(extra.fur, 0.06, 0.06) : null, normalScale: new THREE.Vector2(0.6, 0.6) });
  const furDark = fur.clone(); furDark.color.set('#9c6230');
  const dark = std({ color: '#21150f', roughness: 0.35 });
  const S = 0.9;                                        // the blob lives in a 0.9 m cube
  const mc = new MarchingCubes(52, fur, false, false, 90000);
  mc.isolation = 80;
  const P = (a, rad, y) => [Math.cos(a * Math.PI / 180) * rad, y, Math.sin(a * Math.PI / 180) * rad];
  const ball = ([x, y, z], r) => mc.addBall(x / S + 0.5, y / S + 0.3, z / S + 0.5, (80 + 140) * (r / S) ** 2, 140);   // a high cut-off keeps each ball's reach short, so parts blend without ballooning
  mc.reset();
  // back and flank: a smooth ring from the shoulders (a=215) round through the back to the hips (a=-45)
  for (let k = 0; k <= 18; k++) { const u = k / 18, a = 215 - u * 260; ball(P(a, 0.165, 0.075 + 0.025 * Math.sin(u * Math.PI)), 0.07 + 0.022 * Math.sin(u * Math.PI)); }
  ball(P(-50, 0.2, 0.1), 0.085); ball(P(-25, 0.21, 0.09), 0.075);     // haunch
  ball(P(-80, 0.12, 0.03), 0.035);                       // hind foot, tucked in
  ball(P(232, 0.135, 0.09), 0.058);                      // neck
  ball(P(258, 0.115, 0.14), 0.072);                      // head, resting on the hip
  for (let k = 0; k <= 3; k++) ball(P(275 + k * 12, 0.1 - k * 0.006, 0.125 - k * 0.006), 0.042 - k * 0.003);  // muzzle
  ball(P(245, 0.06, 0.035), 0.03); ball(P(270, 0.045, 0.03), 0.028);  // front paws in the middle
  ball([0.0, 0.035, 0.01], 0.085); ball(P(150, 0.08, 0.04), 0.06);       // belly filling the middle of the curl
  for (let k = 0; k <= 12; k++) { const a = -45 - k * 10; ball(P(a, 0.27 - k * 0.004, 0.045), 0.04 - k * 0.0015); }  // tail round the front
  mc.update();
  const geo = mc.geometry.clone();
  geo.setDrawRange(0, mc.count);
  const pos = geo.attributes.position.array.slice(0, mc.count * 3), nor = geo.attributes.normal.array.slice(0, mc.count * 3);
  const bg = new THREE.BufferGeometry();
  bg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); bg.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  bg.scale(S / 2, S / 2, S / 2);
  // flat on the floor: drop anything below it
  bg.computeBoundingBox(); bg.translate(0, -bg.boundingBox.min.y - 0.005, 0);
  // fur UVs from the top view
  const uv = new Float32Array(mc.count * 2); for (let i = 0; i < mc.count; i++) { uv[i * 2] = pos[i * 3] * S / 2; uv[i * 2 + 1] = pos[i * 3 + 2] * S / 2 + pos[i * 3 + 1] * S / 2; }
  bg.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  const body = new THREE.Mesh(bg, fur); body.castShadow = true; body.receiveShadow = true; g.add(body);
  // ears, nose and closed eyes on the head
  const lift = -bg.boundingBox.min.y - 0.005;
  const head = new THREE.Vector3(...P(258, 0.115, 0.14)); head.y += lift;
  const fwd = new THREE.Vector3(...P(311, 0.082, 0.107)).sub(new THREE.Vector3(...P(258, 0.115, 0.14))); fwd.y = 0; fwd.normalize();
  const side = new THREE.Vector3(-fwd.z, 0, fwd.x);
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 10), furDark); ear.scale.set(0.3, 1.0, 0.8);
    ear.position.copy(head).addScaledVector(side, sx * 0.06).addScaledVector(fwd, -0.015); ear.position.y -= 0.005;
    ear.lookAt(ear.position.clone().add(fwd)); ear.rotateZ(sx * 0.4); ear.castShadow = true; g.add(ear);
    const lid = new THREE.Mesh(new THREE.TorusGeometry(0.011, 0.0024, 6, 12, Math.PI), dark);
    lid.position.copy(head).addScaledVector(side, sx * 0.028).addScaledVector(fwd, 0.05); lid.position.y += 0.022;
    lid.lookAt(lid.position.clone().add(fwd)); lid.rotateZ(Math.PI); g.add(lid);
  }
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.017, 12, 8), dark); nose.scale.set(1.3, 0.85, 1);
  nose.position.copy(new THREE.Vector3(...P(311, 0.082, 0.107))).addScaledVector(fwd, 0.03); nose.position.y += lift + 0.008; g.add(nose);
  g.traverse((o) => { o.userData.dyn = true; if (o.isMesh) o.userData.dog = true; });
  // tapping him sends up a few sleepy z's
  const zTex = canvasTex((() => { const [c, x] = mkCanvas(64, 64); x.fillStyle = '#fff4dc'; x.font = 'italic 52px Georgia, serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('z', 32, 34); return c; })(), { repeat: false });
  const zs = [0, 1, 2].map(() => { const z = new THREE.Sprite(new THREE.SpriteMaterial({ map: zTex, transparent: true, depthWrite: false, opacity: 0 })); z.scale.set(0.06, 0.06, 1); g.add(z); return z; });
  let zFrom = -10;
  g.userData.wag = () => { zFrom = performance.now() / 1000; };
  g.userData.tick = (t) => {
    const breath = Math.sin(t * 1.4);
    body.scale.set(1 + breath * 0.006, 1 + breath * 0.028, 1 + breath * 0.006);
    zs.forEach((z, i) => {
      const k = (t - zFrom - i * 0.5) / 2.2;
      z.material.opacity = k > 0 && k < 1 ? Math.sin(k * Math.PI) * 0.9 : 0;
      z.position.copy(head).add(new THREE.Vector3(Math.sin(k * 4 + i) * 0.03, 0.12 + k * 0.35, 0));
      z.scale.setScalar(0.04 + k * 0.05);
    });
  };
  return g;
}
function buildPedestalDesk(M, g, topY) {
  const D = 0.66, L = 1.32, PH = topY - 0.04;
  const top = mesh(new RoundedBoxGeometry(D, 0.04, L, 2, 0.008), M.trim, g); top.position.y = topY - 0.02;
  const inlay = mesh(new THREE.PlaneGeometry(D - 0.14, L - 0.2).rotateX(-Math.PI / 2), std({ map: canvasTex(inlayTex(), { repeat: false }), roughness: 0.55, normalMap: extra.leather ? tile(extra.leather, 0.2, 0.2) : null }), g, { cast: false });
  inlay.position.y = topY + 0.0008;
  for (const sz of [-1, 1]) {
    const z = sz * (L / 2 - 0.21);
    box(D - 0.06, PH - 0.06, 0.4, M.caseDark, 0, 0.06 + (PH - 0.06) / 2, z, g);
    box(D - 0.02, 0.06, 0.42, M.trim, 0, 0.03, z, g);                       // plinth
    const dh = (PH - 0.08) / 3;
    for (let k = 0; k < 3; k++) {
      const y = 0.07 + dh * k + dh / 2;
      box(0.014, dh - 0.016, 0.36, M.caseSide, D / 2 - 0.03 + 0.007, y, z, g);   // drawer front
      const pull = mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.09, 8).rotateX(Math.PI / 2), M.brass, g); pull.position.set(D / 2 - 0.01, y + dh * 0.15, z);
      for (const pz of [-0.045, 0.045]) { const post = mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.02, 6).rotateZ(Math.PI / 2), M.brass, g); post.position.set(D / 2 - 0.018, y + dh * 0.15, z + pz); }
    }
  }
  const midW = L - 0.84;
  box(D - 0.06, 0.1, midW, M.caseDark, 0, PH - 0.05, 0, g);                       // centre drawer
  box(0.014, 0.08, midW - 0.03, M.caseSide, D / 2 - 0.023, PH - 0.05, 0, g);
  const cp = mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.12, 8).rotateX(Math.PI / 2), M.brass, g); cp.position.set(D / 2 - 0.008, PH - 0.05, 0);
  box(0.02, PH - 0.2, midW, M.caseDark, -D / 2 + 0.06, 0.1 + (PH - 0.2) / 2, 0, g);  // modesty panel
}
function inlayTex() {
  const [c, x] = mkCanvas(512, 1024);
  x.fillStyle = '#284531'; x.fillRect(0, 0, 512, 1024);
  const r = rng(3);
  for (let i = 0; i < 5000; i++) { x.fillStyle = `rgba(${r() < 0.5 ? '0,0,0' : '120,160,120'},${r() * 0.06})`; x.fillRect(r() * 512, r() * 1024, 3, 3); }
  x.strokeStyle = '#c9a15b'; x.lineWidth = 5; x.strokeRect(14, 14, 484, 996);
  x.lineWidth = 2; x.strokeRect(28, 28, 456, 968);
  return c;
}
function buildDesk(M, woodH, MOD) {
  const g = new THREE.Group(); scene.add(g);
  // a pedestal writing desk with a tooled leather top
  g.position.set(-2.655, 0, -0.6);
  const TOP = 0.736;
  buildPedestalDesk(M, g, TOP + 0.022);
  // banker's lamp
  const lamp = new THREE.Group(); g.add(lamp); lamp.position.set(-0.17, TOP + 0.022, -0.46);
  mesh(lathe([[0, 0], [0.085, 0], [0.085, 0.015], [0.06, 0.03], [0.012, 0.035], [0, 0.035]]), M.brass, lamp);
  const stem = mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.3, 10), M.brass, lamp); stem.position.y = 0.17;
  const shadeMat = std({ color: '#1f5a3a', roughness: 0.15, metalness: 0.1, emissive: '#2a7a4a', emissiveIntensity: 0, side: THREE.DoubleSide });
  const shade = mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.3, 24, 1, true, 0, Math.PI).rotateZ(Math.PI / 2), shadeMat, lamp);
  shade.rotation.y = Math.PI / 2; shade.position.set(0.05, 0.33, 0);
  const bulbMat = new THREE.MeshBasicMaterial({ color: '#ffd28a' });
  const bulb = mesh(new THREE.SphereGeometry(0.02, 12, 8), bulbMat, lamp, { cast: false }); bulb.position.set(0.05, 0.31, 0);
  const lampLight = new THREE.PointLight('#ffb35c', 1, 3.2, 2); lampLight.position.set(0.06, 0.27, 0); lamp.add(lampLight);
  // the book you're reading, open
  const reading = lib.books.find((b) => b.status === 'reading') || null;
  const open = new THREE.Group(); g.add(open); open.position.set(0.06, TOP + 0.024, 0.0); open.rotation.y = -Math.PI / 2;
  const [cb] = reading ? colorOf(reading) : ['#6E1F24'];
  box(0.36, 0.008, 0.25, std({ color: cb, roughness: 0.6 }), 0, 0.004, 0, open);
  const pageMat = std({ map: canvasTex(pageTex(reading), { repeat: false }), roughness: 0.9 });
  const pg = new THREE.PlaneGeometry(0.34, 0.23, 24, 1).rotateX(-Math.PI / 2);
  const pp = pg.attributes.position;
  for (let i = 0; i < pp.count; i++) { const px = pp.getX(i); pp.setY(i, 0.012 + 0.02 * Math.sin(Math.min(1, Math.abs(px) / 0.17) * Math.PI * 0.5) * (1 - Math.abs(px) / 0.34) - (Math.abs(px) < 0.01 ? 0.006 : 0)); }
  pg.computeVertexNormals();
  const pages = mesh(pg, pageMat, open, { cast: false }); pages.userData.deskBook = true;
  // tea, glasses, a candle, a little stack
  const gls = new THREE.Group(); g.add(gls); gls.position.set(0.17, TOP + 0.028, 0.18); gls.rotation.y = 0.5;
  for (const sx of [-1, 1]) { const r = mesh(new THREE.TorusGeometry(0.022, 0.0025, 8, 24).rotateX(Math.PI / 2), M.gold, gls); r.position.x = sx * 0.028; }
  const br = mesh(new THREE.TorusGeometry(0.008, 0.002, 6, 10, Math.PI), M.gold, gls); br.rotation.x = -Math.PI / 2;
  const candle = new THREE.Group(); g.add(candle); candle.position.set(-0.2, TOP + 0.022, 0.5);
  mesh(lathe([[0, 0], [0.05, 0], [0.05, 0.008], [0.015, 0.02], [0.015, 0.04], [0.025, 0.05], [0, 0.05]]), M.brass, candle);
  const wax = mesh(new THREE.CylinderGeometry(0.016, 0.017, 0.14, 14), M.candle, candle); wax.position.y = 0.12;
  const flameMat = new THREE.SpriteMaterial({ map: canvasTex(flameTex(), { repeat: false }), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  const flame = new THREE.Sprite(flameMat); flame.scale.set(0.035, 0.07, 1); flame.position.y = 0.215; candle.add(flame); flame.userData.dyn = true;
  const candleLight = new THREE.PointLight('#ff9d47', 0, 2.2, 2); candleLight.position.y = 0.25; candle.add(candleLight);
  [[0.26, 0.04, '#2E5E5E'], [0.24, 0.032, '#C2902F'], [0.22, 0.045, '#5B2F4A']].reduce((yy, [w, th, col], i) => {
    const b = box(w * 0.7, th, w, std({ color: col, roughness: 0.65 }), 0, yy + th / 2, 0, g); b.position.set(-0.16, TOP + 0.022, 0.12); b.rotation.y = i * 0.12; return yy + th;
  }, 0);
  // a green upholstered desk chair (Poly Haven) tucked up to the desk, or a simple Windsor chair
  if (MOD.deskchair) placeModel(MOD.deskchair, -1.98, 0, -0.6, -Math.PI / 2, 1);
  const chair = new THREE.Group(); if (!MOD.deskchair) g.add(chair); chair.position.set(0.68, 0, 0); chair.rotation.y = Math.PI / 2;
  const seat = mesh(new RoundedBoxGeometry(0.44, 0.04, 0.42, 2, 0.015), M.trim, chair); seat.position.y = 0.46;
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const l = mesh(new THREE.CylinderGeometry(0.014, 0.018, 0.47, 10), M.trim, chair); l.position.set(sx * 0.17, 0.225, sz * 0.15); l.rotation.set(sz * 0.08, 0, -sx * 0.08);
  }
  for (let i = 0; i < 6; i++) { const sp = mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.42, 8), M.trim, chair); sp.position.set(-0.15 + i * 0.06, 0.69, 0.19); sp.rotation.x = -0.1; }
  const crest = mesh(new THREE.TorusGeometry(0.24, 0.018, 8, 24, Math.PI * 0.55), M.trim, chair);
  crest.rotation.set(-0.1, 0, Math.PI * 0.225); crest.position.set(0, 0.68, 0.21); crest.scale.set(1, 0.5, 1);
  // tap target
  const hit = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.4, 1.6), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.set(0, 0.7, 0); hit.userData.station = 'desk'; g.add(hit);
  return {
    reading,
    setLight(l, c) {
      lampLight.intensity = l; shadeMat.emissiveIntensity = mode === 'night' ? 0.35 : 0.05;
      bulbMat.color.set(mode === 'night' ? '#ffe2a8' : '#c9b48a');
      candleLight.intensity = c; flame.visible = c > 0; M.candle.emissiveIntensity = c > 0 ? 0.25 : 0;
      this.candleBase = c;
    },
    tick(t) {
      if (!flame.visible) return;
      const f = 0.85 + 0.15 * Math.sin(t * 11.3) * Math.sin(t * 6.7 + 1);
      candleLight.intensity = this.candleBase * f; flame.scale.set(0.035, 0.07 * (0.92 + 0.12 * f), 1);
    },
  };
}
function pageTex(b) {
  const [c, x] = mkCanvas(1024, 692);
  x.fillStyle = '#efe3c8'; x.fillRect(0, 0, 1024, 692);
  const gfold = x.createLinearGradient(440, 0, 584, 0);
  gfold.addColorStop(0, 'rgba(0,0,0,0)'); gfold.addColorStop(0.5, 'rgba(60,40,20,.28)'); gfold.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = gfold; x.fillRect(440, 0, 144, 692);
  x.fillStyle = '#3a2a1c'; x.textAlign = 'center';
  x.font = 'italic 34px "IM Fell English", Georgia, serif';
  x.fillText(b ? String(b.title).slice(0, 34) : 'Chapter One', 256, 86);
  x.font = '26px "IM Fell English", Georgia, serif';
  x.fillText(b && b.author ? String(b.author).slice(0, 40) : '', 256, 124);
  const r = rng(21);
  x.fillStyle = 'rgba(58,42,28,.55)';
  for (const [x0, y0] of [[70, 170], [574, 70]]) {
    for (let l = 0; l < (y0 === 70 ? 19 : 15); l++) {
      let px = x0 + (l === 0 ? 36 : 0);
      while (px < x0 + 380) { const w = 14 + r() * 46; x.fillRect(px, y0 + l * 30, Math.min(w, x0 + 380 - px), 7); px += w + 9; }
    }
  }
  return c;
}
function glowTex() {
  const [c, x] = mkCanvas(128, 128);
  const g = x.createRadialGradient(64, 64, 2, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,240,210,.9)'); g.addColorStop(0.25, 'rgba(255,200,120,.35)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  return c;
}
function flameTex() {
  const [c, x] = mkCanvas(64, 128);
  const g = x.createRadialGradient(32, 84, 2, 32, 74, 50);
  g.addColorStop(0, 'rgba(255,250,220,1)'); g.addColorStop(0.25, 'rgba(255,190,90,.9)'); g.addColorStop(0.6, 'rgba(255,120,30,.25)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.beginPath(); x.ellipse(32, 72, 22, 52, 0, 0, Math.PI * 2); x.fill();
  return c;
}

// ---------------------------------------------------------------- the magic tome
// a tube along a curve whose radius follows r(t), with UVs in meters (for bark)
function taperTube(curve, segs, radial, r) {
  const frames = curve.computeFrenetFrames(segs, false), len = curve.getLength();
  const pos = [], nor = [], uv = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs, P = curve.getPointAt(t), N = frames.normals[i], B = frames.binormals[i], rad = r(t);
    for (let j = 0; j <= radial; j++) {
      const v = (j / radial) * Math.PI * 2, c = Math.cos(v), sn = Math.sin(v);
      const n = new THREE.Vector3().addScaledVector(N, c).addScaledVector(B, sn).normalize();
      pos.push(P.x + n.x * rad, P.y + n.y * rad, P.z + n.z * rad); nor.push(n.x, n.y, n.z); uv.push((j / radial) * 0.25, t * len);
    }
  }
  for (let i = 0; i < segs; i++) for (let j = 0; j < radial; j++) {
    const a = i * (radial + 1) + j, b = a + radial + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g.toNonIndexed();
}
function buildTome(M) {
  const g = new THREE.Group(); scene.add(g);
  g.position.set(2.25, 0, 0.1); g.rotation.y = -1.1;
  // branches that root into the floor, twist together and open out to cradle the book
  const r0 = rng(31);
  const branches = [];
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 + r0() * 0.4, tw = 1.5 + r0() * 0.5, out = 0.3 + r0() * 0.18;
    const P = (rad, y, da) => new THREE.Vector3(Math.cos(a + da) * rad, y, Math.sin(a + da) * rad);
    const curve = new THREE.CatmullRomCurve3([P(out + 0.12, 0.0, -0.25), P(out, 0.025, 0), P(0.2, 0.09, 0.35), P(0.075, 0.32, tw * 0.45), P(0.055, 0.55, tw * 0.75),
      P(0.07, 0.7, tw), P(0.11 + r0() * 0.03, 0.79, tw + 0.3), P(0.14 + r0() * 0.03, 0.815, tw + 0.5)]);
    branches.push(taperTube(curve, 90, 10, (t) => 1.35 * (t < 0.14 ? 0.01 + 0.042 * (t / 0.14) : t < 0.55 ? 0.052 - 0.016 * ((t - 0.14) / 0.41) : 0.036 - 0.026 * ((t - 0.55) / 0.45))));
  }
  mesh(mergeGeometries(branches, false), M.bark, g);
  const stand = box(0.44, 0.03, 0.32, M.trim, 0, 0, 0, g); stand.position.set(0, 0.905, 0); stand.rotation.x = 0.32;
  // the tome: two halves hinged on the spine
  const tome = new THREE.Group(); g.add(tome); tome.position.set(0, 0.93, 0.0); tome.rotation.x = 0.32; tome.userData.dyn = true;
  const glyphs = canvasTex(glyphTex(), { repeat: false });
  const pageMat = std({ color: '#cfc2a2', roughness: 0.9, emissive: '#7fc4ff', emissiveMap: glyphs, emissiveIntensity: 0.6 });
  const halves = [];
  for (const sx of [-1, 1]) {
    const h = new THREE.Group(); tome.add(h); h.userData.dyn = true;
    const cover = mesh(new THREE.BoxGeometry(0.21, 0.014, 0.3), M.tomeLeather, h, { cast: false }); cover.position.x = sx * 0.105;
    const block = mesh(new THREE.BoxGeometry(0.195, 0.03, 0.28), [M.paper, M.paper, pageMat, M.paper, M.paper, M.paper], h, { cast: false });
    block.position.set(sx * 0.1, 0.022, 0);
    // face UVs: show only this half of the glyph page
    const uv = block.geometry.attributes.uv;
    for (let k = 8; k < 12; k++) uv.setX(k, sx < 0 ? uv.getX(k) * 0.5 : 0.5 + uv.getX(k) * 0.5);
    for (const cz of [-1, 1]) { const c = mesh(new THREE.BoxGeometry(0.03, 0.016, 0.03), M.gold, h, { cast: false }); c.position.set(sx * 0.195, 0.001, cz * 0.135); }
    h.userData.sx = sx; halves.push(h);
    h.traverse((o) => { o.userData.tome = true; o.userData.dyn = true; });
  }
  // rune rings that hover above it
  const ringTex = canvasTex(runeRingTex(), { repeat: false });
  const ringMat = new THREE.MeshBasicMaterial({ map: ringTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, color: '#9fd0ff' });
  const rings = [0.34, 0.24].map((r, i) => {
    const m = mesh(new THREE.RingGeometry(r * 0.78, r, 64).rotateX(-Math.PI / 2), ringMat, g, { cast: false, recv: false });
    m.position.y = 1.18 + i * 0.1; m.userData.dyn = true; return m;
  });
  const light = new THREE.PointLight('#9db8ff', 1, 3.2, 2); light.position.set(0, 1.55, 0.25); g.add(light);
  // sparks rising in a slow spiral
  const N = 140, seed = new Float32Array(N * 3);
  const r = rng(99);
  for (let i = 0; i < N; i++) { seed[i * 3] = r(); seed[i * 3 + 1] = r(); seed[i * 3 + 2] = r(); }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  sg.setAttribute('seed', new THREE.BufferAttribute(seed, 3));
  const sparkMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uSize: { value: 30 * dpr }, uA: { value: 1 }, uBoost: { value: 0 } },
    vertexShader: `uniform float uTime, uSize, uBoost; attribute vec3 seed; varying float vA;
      void main(){ float life = fract(seed.x + uTime*(0.06+0.05*seed.y)*(1.0+uBoost*2.0));
        float a = seed.z*6.283 + life*5.0; float rad = 0.08 + 0.22*seed.y*(1.0-life*0.5);
        vec3 p = vec3(cos(a)*rad, 0.98 + life*(0.7+0.5*uBoost), sin(a)*rad);
        vA = smoothstep(0.0,0.15,life)*(1.0-life);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = uSize*(0.5+seed.y)/-mv.z; gl_Position = projectionMatrix*mv; }`,
    fragmentShader: `uniform float uA; varying float vA;
      void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d)*vA*uA; gl_FragColor = vec4(vec3(0.7,0.85,1.0)*a, a); }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const sparks = new THREE.Points(sg, sparkMat); sparks.frustumCulled = false; g.add(sparks);
  const hit = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.6, 12), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.y = 0.8; hit.userData.station = 'tome'; g.add(hit);
  let openTo = 0.32, open = 0.32, boost = 0, base = 1;
  return {
    group: g,
    setLight(v) { base = v; },
    wake() { openTo = 0.06; boost = 1; },
    rest() { openTo = 0.32; },
    tick(t, dt) {
      open += (openTo - open) * Math.min(1, dt * 3);
      boost = Math.max(0, boost - dt * 0.25);
      for (const h of halves) h.rotation.z = h.userData.sx * open;
      rings[0].rotation.y = t * 0.25 * (1 + boost * 3); rings[1].rotation.y = -t * 0.4 * (1 + boost * 3);
      const glow = 0.8 + 0.2 * Math.sin(t * 1.7) + boost;
      ringMat.opacity = (mode === 'night' ? 0.9 : 0.55) * Math.min(1.3, glow);
      pageMat.emissiveIntensity = (mode === 'night' ? 0.8 : 0.7) * glow;
      light.intensity = base * glow;
      sparkMat.uniforms.uTime.value = t; sparkMat.uniforms.uBoost.value = boost;
      sparkMat.uniforms.uA.value = mode === 'night' ? 1 : 0.6;
    },
    setDpr(d) { sparkMat.uniforms.uSize.value = 30 * d; },
  };
}
function glyphTex() {
  const [c, x] = mkCanvas(512, 256);
  x.fillStyle = '#000'; x.fillRect(0, 0, 512, 256);
  const r = rng(42);
  x.strokeStyle = '#fff'; x.lineWidth = 2.2; x.lineCap = 'round';
  for (const ox of [0, 256]) {
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 6; col++) {
        const cx = ox + 36 + col * 34, cy = 30 + row * 32;
        x.globalAlpha = 0.4 + r() * 0.6;
        x.beginPath();
        for (let k = 0; k < 3; k++) { const a = r() * 6.28; x.moveTo(cx + Math.cos(a) * 9, cy + Math.sin(a) * 9); x.lineTo(cx + Math.cos(a + 2 + r()) * 9, cy + Math.sin(a + 2 + r()) * 9); }
        if (r() < 0.4) x.arc(cx, cy, 4 + r() * 4, 0, 6.28);
        x.stroke();
      }
    }
  }
  x.globalAlpha = 1;
  return c;
}
function runeRingTex() {
  const [c, x] = mkCanvas(512, 512);
  x.translate(256, 256);
  x.strokeStyle = 'rgba(255,255,255,.9)'; x.lineWidth = 3;
  x.beginPath(); x.arc(0, 0, 250, 0, 7); x.stroke();
  x.beginPath(); x.arc(0, 0, 206, 0, 7); x.stroke();
  const r = rng(77);
  x.lineWidth = 2.5;
  for (let i = 0; i < 28; i++) {
    x.save(); x.rotate((i / 28) * Math.PI * 2); x.translate(0, -228);
    x.beginPath();
    for (let k = 0; k < 3; k++) { const a = r() * 6.28; x.moveTo(Math.cos(a) * 9, Math.sin(a) * 9); x.lineTo(Math.cos(a + 2.2) * 9, Math.sin(a + 2.2) * 9); }
    x.stroke(); x.restore();
  }
  return c;
}
function roundRugTex() {
  const [c, x] = mkCanvas(512, 512);
  x.fillStyle = '#1b2440'; x.fillRect(0, 0, 512, 512);
  x.translate(256, 256);
  for (const [rad, col, w] of [[244, '#c79a4b', 8], [222, '#3a2350', 18], [190, '#c79a4b', 3], [120, '#2b3a66', 60], [60, '#c79a4b', 4]]) {
    x.strokeStyle = col; x.lineWidth = w; x.beginPath(); x.arc(0, 0, rad, 0, 7); x.stroke();
  }
  for (let i = 0; i < 12; i++) { x.save(); x.rotate(i * Math.PI / 6); x.fillStyle = '#c79a4b'; x.beginPath(); x.moveTo(0, -150); x.lineTo(8, -170); x.lineTo(0, -186); x.lineTo(-8, -170); x.fill(); x.restore(); }
  return c;
}

// ---------------------------------------------------------------- a potted plant
function buildPlant(M, px, pz) {
  const g = new THREE.Group(); scene.add(g); g.position.set(px, 0, pz);
  mesh(lathe([[0, 0], [0.16, 0], [0.2, 0.36], [0.22, 0.38], [0.22, 0.42], [0, 0.42]]), M.terracotta, g);
  const soil = mesh(new THREE.CircleGeometry(0.2, 20).rotateX(-Math.PI / 2), M.dark, g, { cast: false }); soil.position.y = 0.4;
  const r = rng(13);
  const leafG = new THREE.SphereGeometry(0.1, 10, 6);
  for (let i = 0; i < 26; i++) {
    const a = r() * Math.PI * 2, lift = 0.3 + r() * 0.8, out = 0.08 + r() * 0.22;
    const stem = mesh(new THREE.CylinderGeometry(0.004, 0.006, lift + 0.1, 5), M.leaf, g, { recv: false });
    stem.position.set(Math.cos(a) * out * 0.5, 0.42 + (lift + 0.1) / 2, Math.sin(a) * out * 0.5);
    stem.rotation.set(Math.sin(a) * out, 0, -Math.cos(a) * out);
    const l = mesh(leafG, M.leaf, g);
    l.scale.set(0.45, 0.14, 1.3);
    l.position.set(Math.cos(a) * out * 1.4, 0.42 + lift + 0.05, Math.sin(a) * out * 1.4);
    l.rotation.set(0.3 + r() * 0.5, -a + Math.PI / 2, 0.2);
  }
}

// ---------------------------------------------------------------- light through the window
function buildBeam(WIN, dir) {
  const L = 3.9, c = [[WIN.y0, WIN.z0], [WIN.y1, WIN.z0], [WIN.y1, WIN.z1], [WIN.y0, WIN.z1]].map(([y, z]) => new THREE.Vector3(-3.0, y, z));
  const far = c.map((v) => v.clone().addScaledVector(dir, L));
  const pos = [], along = [];
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4;
    for (const [v, a] of [[c[i], 0], [c[j], 0], [far[j], 1], [c[i], 0], [far[j], 1], [far[i], 1]]) { pos.push(v.x, v.y, v.z); along.push(a); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('along', new THREE.Float32BufferAttribute(along, 1));
  g.computeVertexNormals();
  const mat = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Vector3(1, 0.8, 0.5) }, uA: { value: 0.14 }, uTime: { value: 0 }, uDir: { value: dir } },
    vertexShader: `attribute float along; varying float vAl; varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ vAl = along; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix*viewMatrix*w; }`,
    fragmentShader: `uniform vec3 uColor, uDir; uniform float uA, uTime; varying float vAl; varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ float facing = pow(abs(dot(normalize(vN), normalize(vV))), 1.6);
        float fade = pow(1.0 - vAl, 1.4) * smoothstep(0.0, 0.08, vAl + 0.02);
        vec3 q = vW - uDir*((vW.x + 3.0)/uDir.x);   // where this bit of light came through the window
        float shafts = 0.65 + 0.35*sin(q.z*13.0 + 1.3*sin(q.y*5.0)) * sin(q.z*5.3 - q.y*2.1 + 0.7);
        float shimmer = shafts * (0.9 + 0.1*sin(q.z*9.0 + uTime*0.35));
        float a = uA * facing * fade * shimmer; gl_FragColor = vec4(uColor*a, a); }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
  });
  const m = new THREE.Mesh(g, mat); m.frustumCulled = false; m.renderOrder = 5; m.userData.dyn = true;
  scene.add(m);
  return m;
}
function buildMotes(WIN, dir) {
  const N = isPhone ? 260 : 420, seed = new Float32Array(N * 3), r = rng(5);
  for (let i = 0; i < N; i++) { seed[i * 3] = -2.95 + r() * 3.4; seed[i * 3 + 1] = r() * 2.7; seed[i * 3 + 2] = -2.3 + r() * 3.0; }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(seed, 3));
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uDir: { value: dir }, uWin: { value: new THREE.Vector4(WIN.y0, WIN.y1, WIN.z0, WIN.z1) },
      uSize: { value: 7 * dpr }, uColor: { value: new THREE.Vector3(1, 0.9, 0.7) }, uA: { value: 1 } },
    vertexShader: `uniform float uTime, uSize; uniform vec3 uDir; uniform vec4 uWin; varying float vA;
      void main(){ vec3 s = position; vec3 p = s;
        p.y = mod(s.y - uTime*0.012*(0.5+fract(s.x*7.31)), 2.7) + 0.05;
        p.x += sin(uTime*0.21 + s.z*5.0)*0.06; p.z += cos(uTime*0.17 + s.x*4.0)*0.06;
        float k = (p.x + 3.0)/uDir.x; vec3 q = p - uDir*k;
        float inB = step(0.0,k)*step(uWin.x,q.y)*step(q.y,uWin.y)*step(uWin.z,q.z)*step(q.z,uWin.w);
        float tw = 0.55 + 0.45*sin(uTime*1.7 + s.x*31.0 + s.z*17.0);
        vA = mix(0.07, 1.0, inB) * tw;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = uSize*(0.6+fract(s.z*13.7))*(1.0+inB*0.6)/-mv.z; gl_Position = projectionMatrix*mv; }`,
    fragmentShader: `uniform vec3 uColor; uniform float uA; varying float vA;
      void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d)*vA*uA*0.8; gl_FragColor = vec4(uColor*a, a); }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const p = new THREE.Points(g, mat); p.frustumCulled = false; p.userData.dyn = true; p.renderOrder = 6;
  scene.add(p);
  return p;
}

// ---------------------------------------------------------------- camera stations
const STATIONS = {
  room: { p: [1.0, 1.65, 2.55], t: [-0.7, 1.05, -1.5], w: 4.4, h: 2.6, max: 5.2 },
  shelf: { p: [0, 1.4, -0.95], t: [0, 1.2, -2.4], w: 1.25, h: 1.0, max: 1.9 },
  desk: { p: [-1.25, 1.55, 0.55], t: [-2.65, 0.82, -0.6], w: 1.5, h: 1.2, max: 2.4 },
  hearth: { p: [-0.5, 1.45, 2.3], t: [-2.7, 0.95, 1.6], w: 2.1, h: 2.0, max: 2.9 },
  tome: { p: [0.6, 1.6, 0.95], t: [2.25, 1.08, 0.1], w: 1.3, h: 1.4, max: 2.4 },
  nook: { p: [1.45, 1.3, -1.35], t: [2.55, 0.85, -2.35], w: 0.8, h: 0.8, max: 1.6 },
};
const cam = { pos: new THREE.Vector3(), dir: new THREE.Vector3(0, 0, -1), dist: 2, yaw: 0, pitch: 0, vyaw: 0, vpitch: 0 };
let station = 'room', tween = null;
function portrait() { return innerWidth / innerHeight < 1; }
function framing(name) {
  const s = STATIONS[name];
  const p = new THREE.Vector3(...s.p), t = new THREE.Vector3(...s.t);
  const dir = t.clone().sub(p); const base = dir.length(); dir.normalize();
  const hf = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.aspect);
  const need = Math.max(s.w / 2 / Math.tan(hf / 2), s.h / 2 / Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
  const d = Math.min(s.max, Math.max(base, need));
  const pos = t.clone().addScaledVector(dir, -d);
  pos.x = THREE.MathUtils.clamp(pos.x, -2.75, 2.75); pos.z = Math.min(pos.z, 2.6);
  return { pos, dir: t.clone().sub(pos).normalize(), dist: t.distanceTo(pos) };
}
function go(name, dur = 1.5) {
  station = name;
  document.querySelectorAll('.stations button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.go === name)));
  const to = framing(name);
  tween = { t: 0, dur, from: { pos: cam.pos.clone(), dir: lookDir(), dist: cam.dist }, to };
  cam.yaw = 0; cam.pitch = 0; cam.vyaw = 0; cam.vpitch = 0;
  closeCard();
  if (name !== 'tome' && world) world.tome.rest();
}
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
function lookDir() {
  const d = cam.dir.clone();
  const right = new THREE.Vector3().crossVectors(d, new THREE.Vector3(0, 1, 0)).normalize();
  d.applyAxisAngle(right, cam.pitch).applyAxisAngle(new THREE.Vector3(0, 1, 0), cam.yaw);
  return d;
}
function updateCamera(dt) {
  if (tween) {
    tween.t += dt / tween.dur;
    const k = ease(Math.min(1, tween.t));
    cam.pos.lerpVectors(tween.from.pos, tween.to.pos, k);
    // arc slightly upward mid-glide, so moves feel like walking rather than sliding
    cam.pos.y += Math.sin(k * Math.PI) * 0.08;
    cam.dir.copy(tween.from.dir).lerp(tween.to.dir, k).normalize();
    cam.dist = THREE.MathUtils.lerp(tween.from.dist, tween.to.dist, k);
    if (tween.t >= 1) tween = null;
  } else if (!drag) {
    cam.yaw += cam.vyaw; cam.pitch += cam.vpitch;
    cam.vyaw *= 0.9; cam.vpitch *= 0.9;
    if (Math.abs(cam.vyaw) < 1e-5) cam.vyaw = 0;
    if (Math.abs(cam.vpitch) < 1e-5) cam.vpitch = 0;
  }
  const yl = portrait() ? 0.7 : 0.5;
  cam.yaw = THREE.MathUtils.clamp(cam.yaw, -yl, yl);
  cam.pitch = THREE.MathUtils.clamp(cam.pitch, -0.3, 0.3);
  camera.position.copy(cam.pos);
  camera.lookAt(cam.pos.clone().addScaledVector(lookDir(), cam.dist));
}

// ---------------------------------------------------------------- input
let drag = null;
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
canvas.addEventListener('pointerdown', (e) => {
  drag = { x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY, t: e.timeStamp, moved: 0 };
  canvas.setPointerCapture(e.pointerId); canvas.classList.add('dragging'); kick();
});
canvas.addEventListener('pointermove', (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  drag.x = e.clientX; drag.y = e.clientY; drag.moved += Math.abs(dx) + Math.abs(dy);
  if (drag.moved < 6) return;
  const k = 2.2 / Math.max(innerWidth, innerHeight);
  cam.yaw += dx * k; cam.pitch += dy * k * 0.8;
  cam.vyaw = dx * k * 0.6; cam.vpitch = dy * k * 0.5;
  kick();
});
function endDrag(e) {
  if (!drag) return;
  const d = drag; drag = null; canvas.classList.remove('dragging');
  if (d.moved < 8 && e.timeStamp - d.t < 450) tap(e.clientX, e.clientY);
}
canvas.addEventListener('pointerup', endDrag);
canvas.addEventListener('pointercancel', () => { drag = null; canvas.classList.remove('dragging'); });

function tap(px, py) {
  if (!world) return;
  ndc.set((px / innerWidth) * 2 - 1, -(py / innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const hits = ray.intersectObjects(scene.children, true);
  const kindOf = (u) => (u.book ? 'shelf' : u.tome ? 'tome' : u.deskBook ? 'desk' : u.dog ? 'hearth' : u.station || null);
  const first = hits.find((h) => kindOf(h.object.userData));
  if (first) {
    const st = kindOf(first.object.userData);
    // the invisible tap areas are generous; prefer the exact thing under your finger
    const exact = hits.find((h) => { const u = h.object.userData; return (u.book || u.tome || u.deskBook) && kindOf(u) === st && h.distance < first.distance + 0.8; });
    if (station !== st) return go(st);
    if (exact && exact.object.userData.book) return pull(exact.object);
    if (hits.some((h) => h.object.userData.dog && h.distance < first.distance + 0.8)) { world.furniture.hearth.dog.userData.wag(); return; }
    if (st === 'tome') return magic();
    if (st === 'desk') return deskCard();
  }
  if (pulled) putBack();
  closeCard();
}

// ---------------------------------------------------------------- what tapping does
let pulled = null;
function pull(m) {
  if (pulled === m) { putBack(); return; }
  if (pulled) putBack();
  pulled = m; m.userData.anim = 0;
  bookCard(m.userData.book);
}
function putBack() { if (pulled) { pulled.userData.anim = -1; pulled = null; } closeCard(); }
function animateBooks(dt) {
  let moving = false;
  for (const m of world.books.meshes) {
    const a = m.userData.anim;
    if (a === undefined) continue;
    const out = m === pulled;
    m.userData.p = THREE.MathUtils.clamp((m.userData.p || 0) + (out ? dt : -dt) * 3.2, 0, 1);
    const k = ease(m.userData.p);
    m.position.copy(m.userData.home); m.position.z += k * 0.16; m.position.y += k * 0.015;
    m.rotation.set(m.userData.homeRot.x, m.userData.homeRot.y + k * 0.35, m.userData.homeRot.z * (1 - k));
    if (!out && m.userData.p === 0) { delete m.userData.anim; m.position.copy(m.userData.home); m.rotation.copy(m.userData.homeRot); }
    moving = true;
  }
  if (moving) renderer.shadowMap.needsUpdate = true;
  return moving;
}
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function fmtDate(d) { try { return new Date(d + 'T12:00:00').toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }); } catch { return d; } }
const STATUS = { read: 'Read', reading: 'Reading now', want: 'To read', dnf: 'Set aside' };
function progressOf(b) {
  const pages = Number(b.pages) || 0, p = Number(b.progress) || 0;
  if (!p) return null;
  if ((b.format === 'ebook' || b.format === 'audio') || !pages) return { pct: Math.min(100, p), text: `${Math.round(p)}%` };
  return { pct: Math.min(100, (p / pages) * 100), text: `Page ${p} of ${pages}` };
}
function sampleNote() { return lib.sample ? '<div class="note">These are sample books. Open this page on the phone where you use Tomestead to see your own shelf here.</div>' : ''; }
function bookCard(b) {
  const r = Math.round(b.rating || 0);
  const pr = b.status === 'reading' ? progressOf(b) : null;
  const meta = [STATUS[b.status || 'read'], b.pages ? `${b.pages} pages` : '', b.format === 'audio' && b.hours ? `${b.hours} h audiobook` : '', b.finished ? `Finished ${fmtDate(b.finished)}` : ''].filter(Boolean).join(' · ');
  openCard(`<h2>${esc(b.title)}</h2>${b.author ? `<div class="by">${esc(b.author)}</div>` : ''}
    ${r && (b.status || 'read') === 'read' ? `<div class="stars">${'★'.repeat(r)}${'☆'.repeat(5 - r)}</div>` : ''}
    <div class="meta">${esc(meta)}</div>
    ${pr ? `<div class="bar"><i style="width:${pr.pct}%"></i></div><div class="meta">${esc(pr.text)}</div>` : ''}
    <div class="note">In the app, this is where the book would be carried to the desk and opened to your review.</div>${sampleNote()}`);
}
function deskCard() {
  const reading = lib.books.filter((b) => b.status === 'reading');
  const items = reading.map((b) => { const pr = progressOf(b); return `<li><b>${esc(b.title)}</b>${b.author ? ` · <i>${esc(b.author)}</i>` : ''}${pr ? `<div class="bar"><i style="width:${pr.pct}%"></i></div><span class="meta">${esc(pr.text)}</span>` : ''}</li>`; }).join('');
  openCard(`<div class="eyebrow">On the desk</div><h2>${reading.length ? 'Reading now' : 'Nothing open yet'}</h2>
    ${reading.length ? `<ul>${items}</ul>` : '<div class="meta">Start a book and it will lie open here.</div>'}
    <div class="note">In the app, the desk would hold your progress, quotes and the open book's review pages.</div>${sampleNote()}`);
}
function magic() {
  world.tome.wake();
  const want = lib.books.filter((b) => b.status === 'want').slice(0, 4);
  openCard(`<div class="eyebrow">The tome stirs…</div><h2>What to read next</h2>
    ${want.length ? `<div class="meta">Waiting on your to-read pile:</div><ul>${want.map((b) => `<li><b>${esc(b.title)}</b>${b.author ? ` · <i>${esc(b.author)}</i>` : ''}</li>`).join('')}</ul>` : '<div class="meta">Your to-read pile is empty.</div>'}
    <div class="note">In the app, this is where "What to read next" would open, with picks from Open Library based on the books you rate highest.</div>${sampleNote()}`);
}
function openCard(html) { $('card-body').innerHTML = html; $('card').hidden = false; }
function closeCard() { $('card').hidden = true; }
$('card').querySelector('.card-x').addEventListener('click', () => { putBack(); closeCard(); });
document.querySelectorAll('.stations button').forEach((b) => b.addEventListener('click', () => { putBack(); go(b.dataset.go); kick(); }));
$('light').addEventListener('click', () => { mode = mode === 'day' ? 'night' : 'day'; world.applyLook(); kick(); });
addEventListener('keydown', (e) => {
  const order = ['room', 'shelf', 'desk', 'hearth', 'tome'];
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') go(order[(order.indexOf(station) + (e.key === 'ArrowRight' ? 1 : 4)) % 5]);
  if (e.key === 'Escape') { putBack(); closeCard(); }
  kick();
});

// ---------------------------------------------------------------- loop (and keeping it fast)
let world = null, last = performance.now(), lastRender = 0, activeUntil = 0, firstFrameAt = 0;
const perf = { busy: [], fpsMoving: 0, frames: 0, fpsNow: 0, tick: performance.now() };
function kick(ms = 1200) { activeUntil = performance.now() + ms; }
function resize() {
  camera.aspect = innerWidth / innerHeight;
  camera.fov = portrait() ? 62 : 50;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight, false);
  if (world && !tween) { const f = framing(station); cam.pos.copy(f.pos); cam.dir.copy(f.dir); cam.dist = f.dist; }
  kick();
}
addEventListener('resize', resize);
function frame(now) {
  requestAnimationFrame(frame);
  const busy = !!tween || !!drag || Math.abs(cam.vyaw) + Math.abs(cam.vpitch) > 1e-4 || now < activeUntil;
  // when nothing is moving, only the dust and candles drift: 30 frames a second is plenty
  if (!busy && now - lastRender < 32) return;
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  const t = now / 1000;
  updateCamera(dt);
  const booksMoving = animateBooks(dt);
  if (booksMoving) kick(300);
  world.desk.tick(t); world.tome.tick(t, dt); world.furniture.tick(t);
  world.beam.material.uniforms.uTime.value = t;
  world.motes.material.uniforms.uTime.value = t;
  const r0 = performance.now();
  renderer.render(scene, camera);
  lastRender = now;
  if (!firstFrameAt) firstFrameAt = performance.now();
  perf.frames++;
  if (busy) {
    perf.busy.push(now);
    while (perf.busy.length && now - perf.busy[0] > 1000) perf.busy.shift();
    if (perf.busy.length > 20) perf.fpsMoving = perf.busy.length;
    adapt(performance.now() - r0);
  }
  if (now - perf.tick > 500) { perf.fpsNow = Math.round(perf.frames * 1000 / (now - perf.tick)); perf.frames = 0; perf.tick = now; if (!$('perf').hidden) showPerf(); }
}
// if the phone struggles while moving, draw at a lower resolution
let slow = 0;
function adapt() {
  if (perf.busy.length < 20) return;
  const span = perf.busy[perf.busy.length - 1] - perf.busy[0];
  const fps = (perf.busy.length - 1) * 1000 / Math.max(1, span);
  if (fps < 40 && dpr > 1) { if (++slow > 45) { dpr = Math.max(1, dpr - 0.25); renderer.setPixelRatio(dpr); renderer.setSize(innerWidth, innerHeight, false); world.tome.setDpr(dpr); world.motes.material.uniforms.uSize.value = 7 * dpr; slow = 0; } }
  else slow = Math.max(0, slow - 1);
}
function showPerf() {
  const res = performance.getEntriesByType('resource').concat(performance.getEntriesByType('navigation'));
  const kb = (f) => Math.round(res.filter(f).reduce((s, r) => s + (r.transferSize || r.encodedBodySize || 0), 0) / 1024);
  const all = kb(() => true), three = kb((r) => /room\.js/.test(r.name));
  const info = renderer.info.render;
  const fm = perf.fpsMoving, cls = fm >= 50 ? 'ok' : fm >= 30 ? 'meh' : fm ? 'bad' : '';
  $('perf').innerHTML = `<b>Speed check</b><br>
    First view: ${((firstFrameAt - T0) / 1000).toFixed(1)} s<br>
    Downloaded: ${all} KB <span style="opacity:.7">(3D code ${three} KB)</span><br>
    While moving: <span class="${cls}">${fm ? fm + ' fps' : 'move to measure'}</span><br>
    Right now: ${perf.fpsNow} fps${perf.fpsNow <= 31 ? ' (resting)' : ''}<br>
    Draw calls: ${info.calls} · ${Math.round(info.triangles / 1000)}k triangles<br>
    Resolution: ${dpr.toFixed(2)}× · Shadows: drawn once<br>
    Books on the shelf: ${world.books.meshes.length}${world.books.hidden ? ` (+${world.books.hidden} that don't fit)` : ''}`;
}
$('perf-btn').addEventListener('click', () => { const p = $('perf'); p.hidden = !p.hidden; $('perf-btn').setAttribute('aria-expanded', String(!p.hidden)); if (!p.hidden) showPerf(); });
document.addEventListener('visibilitychange', () => { last = performance.now(); });

// ---------------------------------------------------------------- start
(async () => {
  resize();
  world = await build();
  // frame the shelf on the rows that hold books, close enough to read the spines
  const bys = world.books.meshes.map((m) => m.position.y);
  if (bys.length) { const cy = (Math.min(...bys) + Math.max(...bys)) / 2; STATIONS.shelf.t[1] = cy; STATIONS.shelf.p[1] = cy + 0.2; }
  const start = params.get('st') && STATIONS[params.get('st')] ? params.get('st') : null;
  const f = framing(start || 'room');
  cam.pos.copy(f.pos); cam.dir.copy(f.dir); cam.dist = f.dist;
  if (!start) { cam.pos.z = Math.min(2.6, cam.pos.z + 0.9); cam.pos.y += 0.3; cam.pitch = -0.12; }
  if (params.get('yaw')) cam.yaw = Number(params.get('yaw'));
  updateCamera(0);
  renderer.compile(scene, camera);
  requestAnimationFrame(frame);
  requestAnimationFrame(() => {
    $('veil').classList.add('gone');
    setTimeout(() => $('veil').remove(), 1400);
    if (!start) go('room', 2.6);
    else station = start, document.querySelectorAll('.stations button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.go === start)));
    setTimeout(() => { $('hint').classList.add('show'); setTimeout(() => $('hint').classList.remove('show'), 4200); }, start ? 300 : 2600);
    if (params.get('perf') === '1') { $('perf').hidden = false; showPerf(); }
  });
})();
