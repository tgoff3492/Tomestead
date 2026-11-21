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

// When the room runs inside the Tomestead app, the app hands over its books and its screens
// through window.TomesteadRoomHost; on its own (the lab page) it reads the browser's saved library.
const HOST = window.TomesteadRoomHost || null;
const $ = (id) => document.getElementById('rm-' + id);
const params = new URLSearchParams(location.search);
const T0 = performance.now();
const BASE = new URL('./', import.meta.url);          // the room/ folder, wherever the page lives
const asset = (path) => new URL(path, BASE).href;
const TEX = asset('../tex/');
// every build gets its own tag, so browsers fetch fresh files instead of reusing an older copy


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
// which Poly Haven veneer each wood uses, and its tint (the rest are tinted from their colour above)
const WOOD_SET = { oak: 'oak_veneer_01', walnut: 'walnut_veneer', cherry: 'oak_veneer_01', ebony: 'walnut_veneer', sage: 'oak_veneer_01', white: 'oak_veneer_01' };
const WOOD_TINT = { oak: '#f0c890', walnut: '#ffffff', cherry: '#d27a52', ebony: '#6a5f57', sage: '#b2c9a2', white: '#fbf4e8' };
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
function fromHost() {
  const d = HOST.data();
  return { books: (d.books || []).filter((b) => b && b.id && b.title), theme: d.theme || {}, trophies: d.trophies || {}, sample: false };
}
let lib = HOST ? fromHost() : (() => { const l = loadLibrary(); return l.books.length && params.get('sample') !== '1' ? l : Object.assign(sampleLibrary(), { theme: l.theme }); })();
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
  if (HOST) HOST.unavailable(); else { $('nogl').hidden = false; $('veil').remove(); }
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

// ---------------------------------------------------------------- paintings
// Two frames (Poly Haven's Fancy Picture Frame 01): over the fireplace and in the reading corner.
// Each can hold any of these (room/tex/paintings/), a picture of your own (kept on that device), or a
// family painting ('fam:<id>': shared only between family accounts, from HOST.familyPainting).
const PAINTINGS = ['golden_hills', 'mountain_path', 'misty_pines', 'winter_wood', 'lake_dawn', 'evening_water', 'forest_cliffs', 'pastoral', 'highland'];
const PAINT_DEFAULT = { mantel: 'golden_hills', nook: 'pastoral' };
const canvasMats = {};
const paintChoice = (slot) => {
  const q = params.get(slot === 'mantel' ? 'paint' : 'nookpaint');   // test page: ?paint=winter_wood&nookpaint=lake_dawn
  if (q && PAINTINGS.includes(q)) return q;
  const p = (lib.theme && lib.theme.paintings) || {};
  const fam = typeof p[slot] === 'string' && p[slot].startsWith('fam:') && HOST && HOST.familyPainting && HOST.familyPainting(p[slot].slice(4));
  return p[slot] === 'mine' || fam || PAINTINGS.includes(p[slot]) ? p[slot] : PAINT_DEFAULT[slot]; };
const paintSig = () => JSON.stringify((lib.theme && lib.theme.paintings) || {}) + (HOST && HOST.familySig ? HOST.familySig() : '');
async function hangPainting(slot) {
  const mat = canvasMats[slot]; if (!mat) return;
  let id = paintChoice(slot);
  const famUrl = id.startsWith('fam:') && HOST && HOST.familyPainting ? HOST.familyPainting(id.slice(4)) : null;
  const key = id === 'mine' ? `mine:${(lib.theme.paintings || {})[slot + 'At'] || ''}` : id.startsWith('fam:') ? `${id}|${famUrl || ''}` : id;
  if (mat.userData.key === key) return;
  mat.userData.key = key;
  let url = null;
  if (id === 'mine') url = HOST && HOST.paintingPhoto ? await HOST.paintingPhoto(slot).catch(() => null) : null;
  else if (id.startsWith('fam:')) url = famUrl;
  if (!url) { id = PAINT_DEFAULT[slot]; url = asset(`tex/paintings/${id}.webp`); }
  try {
    // a family painting that can't be fetched (offline, no longer shared) leaves the usual one up
    const tex = await texLoader.loadAsync(url).catch((e) => (/^(https?:)?\/\//.test(url) && !url.startsWith(location.origin) ? texLoader.loadAsync(asset(`tex/paintings/${PAINT_DEFAULT[slot]}.webp`)) : Promise.reject(e)));
    if (mat.userData.key !== key) { tex.dispose(); return; }   // changed again while it loaded
    tex.colorSpace = THREE.SRGBColorSpace; tex.flipY = false; tex.anisotropy = maxAniso;
    // the frame's canvas uses part of its texture: map the whole picture onto that part
    const [u0, u1, v0, v1] = [0.032, 0.969, 0.125, 0.82];
    tex.repeat.set(1 / (u1 - u0), 1 / (v1 - v0)); tex.offset.set(-u0 / (u1 - u0), -v0 / (v1 - v0));
    const old = mat.map; mat.map = tex; mat.color.set('#ffffff'); mat.needsUpdate = true;
    if (old && old.userData && old.userData.painting) old.dispose();
    tex.userData.painting = true;
    kick();
  } catch (e) { console.warn('painting failed', slot, e && e.message); }
}
const hangPaintings = () => { hangPainting('mantel'); hangPainting('nook'); };
function loadTex(n, srgb) {
  return new Promise((res) => texLoader.load(asset('tex/' + n + '.webp'), (t) => {
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
  return gltfLoader.loadAsync(asset('models/' + n + '.glb')).then((g) => g.scene).catch((e) => { console.warn('model failed', n, e && e.message); return null; });
}
// the shelf trinkets picked in Customize (Poly Haven models in models/trinkets/), at their real size.
// h: height to scale to (m; otherwise as modelled); ry: turns the model to face the room; turn: how far a
// person would angle it (a horse in three-quarter view, a photo toward you); centre: a natural centrepiece;
// small: can sit on the stack of books. Nothing with a lit flame: they live on bookshelves.
const TRINKET3D = {
  pottedplant: { h: 0.30 }, aloe: { h: 0.18, small: true }, bookstack: {}, camera: { small: true, turn: 0.25 },
  compass: { small: true, turn: 0.3 }, binoculars: { small: true, turn: 0.3 }, horse: { turn: 0.45 }, bust: { h: 0.25, centre: true, turn: 0.2 },
  lion: { h: 0.24, centre: true, turn: 0.15 }, photo: { h: 0.20, ry: -Math.PI / 2, turn: 0.35 }, stonecat: { h: 0.20, turn: 0.3 },
  oillantern: { h: 0.26 }, seashell: { small: true, turn: 0.3 }, brassvase: { turn: 0.1 }, chinavase: { h: 0.24, centre: true, turn: 0.1 },
  frog: { small: true, turn: 0.35 },   // glazed purple ceramic, sculpted for Tomestead (tools/frog.py)
};
const OLD_TRINKETS = { plant: 'pottedplant', succulent: 'aloe', stack: 'bookstack', cat: 'stonecat', globe: 'compass', teacup: 'chinavase', candle: 'brassvase', lantern: 'oillantern', frame: 'photo', hourglass: 'binoculars', crystal: 'seashell', clock: 'lion' };
const TRINKET_DEFAULT = ['pottedplant', 'bookstack', 'compass', 'bust', 'chinavase', 'stonecat'];
function trinketPicks() {
  const t = lib.theme && Array.isArray(lib.theme.trinkets) ? lib.theme.trinkets : TRINKET_DEFAULT;
  return [...new Set(t.map((k) => (TRINKET3D[k] ? k : OLD_TRINKETS[k])).filter((k) => k && TRINKET3D[k]))];
}
// small pieces (shelf trinkets, desk things): scaled to spec.h, laid flat if spec.lie, turned by spec.ry,
// standing on y = 0 and centred; resolves to the piece and its size
const pieceCache = new Map();
function loadPiece(path, spec = {}) {
  const key = path + '|' + (spec.h || '') + '|' + (spec.ry || '') + '|' + (spec.lie ? 1 : '');
  if (!pieceCache.has(key)) pieceCache.set(key, gltfLoader.loadAsync(asset(`models/${path}.glb`)).then((g) => {
    const m = g.scene;
    if (spec.parts) {   // (cup and saucer sit apart in the source file: stack them)
      m.updateMatrixWorld(true);
      for (const o of [...m.children]) { const c = new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3()); o.position.x -= c.x; o.position.z -= c.z; }
    }
    if (spec.lie) m.rotation.x = -Math.PI / 2;
    m.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; o.userData.dyn = true; } });
    const turnG = new THREE.Group(); turnG.add(m); turnG.rotation.y = spec.ry || 0;
    const inner = new THREE.Group(); inner.add(turnG);
    let b = new THREE.Box3().setFromObject(inner);
    if (spec.h) inner.scale.setScalar(spec.h / (b.max.y - b.min.y));
    b = new THREE.Box3().setFromObject(inner);
    const c = b.getCenter(new THREE.Vector3());
    inner.position.set(-c.x, -b.min.y, -c.z);
    const obj = new THREE.Group(); obj.add(inner); obj.userData.dyn = true;
    const sz = b.getSize(new THREE.Vector3());
    return { obj, w: sz.x, h: sz.y, d: sz.z };
  }));
  return pieceCache.get(key);
}
const trinketModel = (k) => loadPiece(`trinkets/${k}`, TRINKET3D[k]);
// the things on the desk, picked in Customize → Reading table (the same Poly Haven pieces as the
// Classic reading table). slots: where a person would keep it, in order of preference (see buildDesk)
const DESK3D = {
  lamp: { file: 'desk/desklamp', slots: ['backR', 'backL'], light: true },
  candle: { file: 'candlestick', slots: ['backL', 'backR'] },
  tea: { file: 'teacup', parts: true, h: 0.06, slots: ['frontR', 'frontL', 'backM'] },
  teapot: { file: 'desk/teapot', slots: ['backL', 'backM', 'backR'] },
  glasses: { file: 'desk/glasses', slots: ['frontL', 'frontR', 'backM'] },
  magnifier: { file: 'desk/magnifier', lie: true, slots: ['frontL', 'frontR', 'backM'] },
  plant: { file: 'trinkets/aloe', h: 0.16, slots: ['backL', 'backM', 'backR'] },
  books: { file: 'trinkets/bookstack', slots: ['backM', 'backL', 'backR'] },
  watch: { file: 'desk/watch', lie: true, slots: ['frontL', 'frontR', 'backM'] },
  journal: { file: 'desk/journal', slots: ['frontL', 'frontR'] },
  apple: { file: 'desk/apple', slots: ['frontR', 'backM', 'frontL'] },
  frog: { file: 'trinkets/frog', slots: ['backL', 'frontL', 'backM'] },
};
const OLD_DESK = { mug: 'teapot', inkwell: 'magnifier' };
function deskPicks() {
  const t = lib.theme && Array.isArray(lib.theme.tableItems) ? lib.theme.tableItems : ['lamp', 'tea', 'glasses'];
  return [...new Set(t.map((k) => (DESK3D[k] ? k : OLD_DESK[k])).filter((k) => k && DESK3D[k]))].slice(0, 5);
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
  if (placeModel(MOD.painting, 1.85, 1.78, -2.69, 0, 1.6, { cast: false })) {
    // its canvas gets its own material, so a different painting can hang here
    MOD.painting.traverse((o) => { if (o.isMesh && /canvas/.test(o.material.name)) { o.material = o.material.clone(); canvasMats.nook = o.material; o.material.userData.key = 'pastoral'; } });
  }
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
  const woodSet = WOOD_SET[lib.theme.wood || 'oak'] || WOOD_SET.oak;
  const SETS = ['herringbone_parquet', 'plastered_wall', 'wooden_panels', 'dark_wooden_planks', woodSet, 'bark_willow_02', 'marble_01', 'castle_brick_07', 'slate_floor_03'];
  const [imgs, sets, MOD] = await Promise.all([
    Promise.all(['floor', 'wood-v', 'wood-h', 'plaster', 'cloth', 'leather'].map((n) => loadImg(TEX + n + '.webp'))),
    Promise.all(SETS.map(loadSet)).then((a) => Object.fromEntries(SETS.map((k, i) => [k, a[i]]))),
    Promise.all(MODELS.map(loadModel)).then((a) => Object.fromEntries(MODELS.map((k, i) => [k, a[i]]))),
    Promise.all([loadTex('wool_boucle_nor'), loadTex('brown_leather_nor'), loadTex('rug_claret', true)]).then(([w, l, r]) => { extra.wool = w; extra.leather = l; extra.rug = r; }),
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
  // the bookcase's wood (Customize → Bookcase): a Poly Haven veneer, tinted for the painted and pale woods
  const caseMats = (key, W) => {
    const pal = WOODS[key] || WOODS.oak;
    if (!W) {
      const vt = canvasTex(tinted(woodV, pal[1], 0.55)), ht = canvasTex(tinted(woodH, pal[1], 0.55));
      const dv = canvasTex(tinted(woodV, pal[3], 0.6)), dh = canvasTex(tinted(woodH, pal[3], 0.6));
      return { caseSide: std({ map: tile(vt, 0.5, 2.0), roughness: 0.55 }), caseShelf: std({ map: tile(ht, 1.6, 0.3), roughness: 0.55 }),
        caseDark: std({ map: tile(dv, 0.5, 2.0), roughness: 0.6 }), trim: std({ map: tile(dh, 1.6, 0.3), roughness: 0.5 }), recessWood: std({ color: pal[5], roughness: 0.9 }) };
    }
    const tint = WOOD_TINT[key] || pal[0];
    return { caseSide: pbrMat(W, 0.7, 1.4, { color: tint, roughness: 1 }), caseShelf: pbrMat(W, 0.7, 1.4, { color: tint, rot: true }),
      caseDark: pbrMat(W, 0.7, 1.4, { color: new THREE.Color(tint).multiplyScalar(0.55) }),
      trim: pbrMat(W, 0.7, 1.4, { color: new THREE.Color(tint).multiplyScalar(0.5), rot: true }),
      recessWood: pbrMat(W, 0.5, 1.4, { color: new THREE.Color(tint).multiplyScalar(0.2) }) };
  };
  Object.assign(M, caseMats(lib.theme.wood || 'oak', sets[woodSet]));
  // a new wood repaints the same materials (the fused bookcase keeps using them)
  async function setWood(key) {
    const set = WOOD_SET[key] || WOOD_SET.oak;
    const W2 = sets[set] || (sets[set] = await loadSet(set));
    const next = caseMats(key, W2);
    for (const k of Object.keys(next)) { if (M[k]) { M[k].copy(next[k]); M[k].needsUpdate = true; } next[k].dispose(); }
    renderer.shadowMap.needsUpdate = true; kick();
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
  // the ceiling, the right wall and the front wall lift away in the dollhouse view (CUT); they stay
  // separate meshes (userData) so the merge below leaves them alone
  const cut = (m) => { m.userData.cut = true; CUT.push(m); return m; };
  cut(box(6.2, 0.1, 5.6, M.beam, 0, 3.05, 0));                    // ceiling
  for (const x of [-2.25, -0.75, 0.75, 2.25]) cut(box(0.18, 0.22, 5.4, M.beam, x, 2.89, 0));
  box(6.2, 3.1, 0.1, wallMat, 0, 1.5, -2.75);                      // back wall
  cut(box(0.1, 3.1, 5.6, wallMat, 3.05, 1.5, 0));                  // right wall
  cut(box(6.2, 3.1, 0.1, wallMat, 0, 1.5, 2.75));                  // front wall
  // the plinth the dollhouse stands on (only seen from outside)
  for (const m of [box(6.3, 0.34, 5.7, M.beam, -0.05, -0.185, 0), box(6.42, 0.06, 5.82, M.trim, -0.05, -0.385, 0)]) { m.userData.plinth = true; m.visible = false; PLINTH.push(m); }
  // left wall, with the window opening (z −1.3…0.1, y 0.85…2.45)
  const WIN = { z0: -1.3, z1: 0.1, y0: 0.85, y1: 2.45 };
  box(0.1, WIN.y0, 5.6, wallMat, -3.05, WIN.y0 / 2, 0);
  box(0.1, 3.1 - WIN.y1, 5.6, wallMat, -3.05, (WIN.y1 + 3.1) / 2, 0);
  box(0.1, WIN.y1 - WIN.y0, 2.8 + WIN.z0, wallMat, -3.05, (WIN.y0 + WIN.y1) / 2, (-2.8 + WIN.z0) / 2);
  box(0.1, WIN.y1 - WIN.y0, 2.8 - WIN.z1, wallMat, -3.05, (WIN.y0 + WIN.y1) / 2, (2.8 + WIN.z1) / 2);
  // wainscot panels and a rail along the walls
  box(6, 0.9, 0.03, panelMat, 0, 0.45, -2.685);
  cut(box(0.03, 0.9, 5.4, panelMat, 2.985, 0.45, 0));
  box(0.03, 0.82, 5.4, panelMat, -2.985, 0.41, 0);
  box(6, 0.045, 0.06, M.trim, 0, 0.92, -2.67);
  cut(box(0.06, 0.045, 5.4, M.trim, 2.97, 0.92, 0));
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
  // a claret damask rug (Poly Haven's Floral Jacquard, recolored, with a woven border and fringe);
  // the plain painted one if it can't load
  const rugMap = extra.rug ? Object.assign(extra.rug, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping }) : canvasTex(rugTex(), { repeat: false });
  const rug = mesh(new THREE.PlaneGeometry(extra.rug ? 2.8 * 1580 / 1520 : 2.8, 1.9).rotateX(-Math.PI / 2), std({ map: rugMap, roughness: 0.96, alphaTest: extra.rug ? 0.5 : 0, normalMap: extra.wool ? tile(extra.wool, 0.18, 0.18) : null, normalScale: new THREE.Vector2(0.6, 0.6) }), scene, { cast: false });
  rug.position.set(0, 0.004, -0.35);
  const map = mesh(new THREE.PlaneGeometry(1.0, 1.25).rotateY(-Math.PI / 2), std({ map: canvasTex(starChart(true), { repeat: false }), roughness: 0.8 }), scene, { cast: false });
  map.position.set(2.985, 1.75, 0.1); cut(map);
  cut(box(0.04, 0.05, 1.12, M.gold, 2.98, 2.4, 0.1)); cut(box(0.04, 0.05, 1.12, M.gold, 2.98, 1.1, 0.1));
  cut(box(0.04, 1.35, 0.05, M.gold, 2.98, 1.75, -0.45)); cut(box(0.04, 1.35, 0.05, M.gold, 2.98, 1.75, 0.65));

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
      env: 0.3, exposure: 1.0, beam: [1, 0.78, 0.5], beamA: 0.85, mote: [1, 0.9, 0.7], moteA: 1, wall: wallDay, wallC: '#ecc995', sky: 'day', bg: '#1a120c' },
    // lamplight: a darker room around warm pools of light, deep library-green walls
    night: { hemi: ['#5c5070', '#120a08', 0.2], sun: ['#8fa8ff', 0.8], bounce: 0.18, fill: 0.42, fillC: '#ffb47a', lamp: 4.8, candle: 2.1, tome: 1.8, shelf: 1.7, oil: 4.0, chand: 4.2,
      env: 0.06, exposure: 1.16, beam: [0.55, 0.66, 1], beamA: 0.14, mote: [0.9, 0.75, 0.5], moteA: 0.38, wall: wallDay, wallC: '#5d7055', sky: 'night', bg: '#0b0a0f' },
  };
  const skyCanvases = { day: skyMat.map, night: canvasTex(skyTex('night'), { repeat: false }) };
  function applyLook() {
    const L = LOOK[mode];
    const starry = mode === 'night' && lib.theme.nightWall === 'stars';   // the star chart keeps its moonlight
    hemi.color.set(starry ? '#6f86c0' : L.hemi[0]); hemi.groundColor.set(L.hemi[1]); hemi.intensity = starry ? 0.34 : L.hemi[2];
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
    const stars = mode === 'night' && lib.theme.nightWall === 'stars';
    wallMat.map = stars ? wallNight : L.wall; wallMat.color.set(stars ? '#ffffff' : L.wallC); wallMat.needsUpdate = true;
    skyMat.map = skyCanvases[L.sky]; skyMat.needsUpdate = true;
    scene.background.set(L.bg);
    if ($('light')) { $('light').textContent = mode === 'day' ? '☾' : '☀'; $('light').setAttribute('aria-label', mode === 'day' ? 'Switch to night' : 'Switch to day'); }
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
  return { books, desk, tome, beam, motes, applyLook, furniture, setWood };
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
  const W = 1.65, D = 0.4, P = 0.055, PL = 0.12, ROWH = 0.43, PLK = 0.035, ROWS = 3, HS = 0.16, RISE = 0.3;
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
  const AT = SILL + 0.045, AZ = ZC + 0.02;      // the arch's floor (the picked trinkets are set out there; trophies stand on the mantel)
  // the climbing vine (roses, ivy or none) lives in its own group so Customize can change it
  const vineG = new THREE.Group(); vineG.userData.dyn = true; g.add(vineG);
  const setVine = (kind) => {
    for (const c of [...vineG.children]) { vineG.remove(c); if (c.geometry) c.geometry.dispose(); }
    if (kind !== 'none') buildVine(vineG, { W, top: AY + HS, RISE, ZF, ivy: kind === 'ivy' });
    renderer.shadowMap.needsUpdate = true;
  };
  setVine(theme.vine);

  // ---- everything that depends on the library lives in its own group, shelved again when books change
  const shelfGroup = new THREE.Group(); shelfGroup.userData.dyn = true; g.add(shelfGroup);
  const api = {
    meshes: [], hidden: 0, count: 0, order: null, page: 0, pages: 1, all: [], paint() {},
    refill() { fill(api.page); api.paint(); },
    showPage(p) { fill(p); api.paint(); },
  };
  const outer = g;
  // ---- trinkets: the pieces picked in Customize (Poly Haven models), set out as a person would:
  // a centrepiece in the arch with a smaller piece either side, the rest in the open spots on the
  // shelves (standing upright, facing the room with a slight natural turn, set a hand's width
  // apart from the books, never on top of each other), and something small on the stack of books.
  const decoGroup = new THREE.Group(); decoGroup.userData.dyn = true; g.add(decoGroup);
  let dressToken = 0;
  const RI = W / 2 - P, RIN = RISE - P * 0.8;                       // the arch's inner radius and rise
  const archRoom = (x) => HS + RIN * Math.sqrt(Math.max(0, 1 - (x / RI) ** 2)) - 0.03;   // headroom at x
  const plankTop = (row) => rowsY[row];
  const CLEAR = ROWH - 0.035;                                         // headroom on a shelf
  async function dress(page, placed, { endW, innerL, innerR }) {
    const token = ++dressToken;
    decoGroup.clear();
    const picks = trinketPicks();
    if (!picks.length) return;
    const models = await Promise.all(picks.map((k) => trinketModel(k).catch(() => null)));
    if (token !== dressToken) return;           // (the shelf was re-made meanwhile)
    const pieces = picks.map((k, i) => models[i] && { k, ...models[i], spec: TRINKET3D[k] }).filter(Boolean);
    if (!pieces.length) return;
    const rnd = rng(hash(picks.join('|')));
    const turn = (p, side = 0) => (p.spec.turn || 0) * (side || 1) + (rnd() - 0.5) * 0.2;
    // how wide a piece stands once turned
    const foot = (p, yaw) => Math.abs(p.w * Math.cos(yaw)) + Math.abs(p.d * Math.sin(yaw));
    const put = (p, x, y, z, yaw) => {
      const o = p.obj.clone(true); o.position.set(x, y, z); o.rotation.y = yaw; decoGroup.add(o); return o;
    };
    // where it stands front to back: lined up with the books' spines, a little back from the edge
    const zFor = (p, yaw) => { const dd = Math.abs(p.d * Math.cos(yaw)) + Math.abs(p.w * Math.sin(yaw)); return Math.max(ZB + 0.03 + dd / 2, ZF - 0.05 - dd / 2); };
    let left = [...pieces];
    const take = (p) => { left = left.filter((q) => q !== p); return p; };
    // the stack of books carries one small piece on top
    const stack = left.find((p) => p.k === 'bookstack');
    let topper = null;
    if (stack) { topper = left.filter((p) => p !== stack && p.spec.small).sort((a, b) => a.h - b.h)[0] || null; if (topper) take(topper); }
    const pileOf = (p) => (p === stack && topper ? { p, top: topper, h: p.h + topper.h, w: Math.max(p.w, topper.w) } : { p, h: p.h, w: p.w });

    // 1. the arch (first bookcase): a centrepiece, then a smaller piece either side, mirrored
    const arches = [];
    const centre = left.find((p) => p.spec.centre && p.h <= archRoom(0)) || left.find((p) => p.h >= 0.16 && p.h <= archRoom(0) && p !== stack);
    if (centre) {
      take(centre);
      const a = [{ pile: pileOf(centre), x: 0 }];
      const sides = left.filter((p) => p.h < centre.h && p.h <= archRoom(0.4)).sort((x, y) => y.h - x.h).slice(0, 2);
      sides.forEach((p, i) => { take(p); a.push({ pile: pileOf(p), x: (i ? -1 : 1) * Math.min(0.46, Math.max(0.3, centre.w / 2 + p.w / 2 + 0.16)) }); });
      if (sides.length === 1) a[1].x = -a[1].x;        // a single companion sits to the left, the plate stays centred
      arches.push(a);
    }

    // 2. the shelves: every row of every bookcase, with the space after its last book and bookend
    const nRows = (caseOfAbs(placed) + 1) * ROWS;
    const rows = [];
    for (let abs = 0; abs < nRows; abs++) {
      const used = placed.filter((i) => i.abs === abs);
      const end = used.length ? Math.max(...used.map((i) => i.x + (i.kind === 'book' ? i.t + i.lean : endW(i.sec)) + (i.kind === 'end' && i.flip ? 0.006 : 0))) : null;
      const from = end === null ? innerL + 0.03 : end + 0.05;
      rows.push({ abs, page: Math.floor(abs / ROWS), row: ROWS - 1 - (abs % ROWS), books: end !== null, from, to: innerR - 0.03, piles: [] });
    }
    const piles = left.map(pileOf).filter((pl) => pl.p !== topper);
    // big pieces first, so they get the open shelves
    piles.sort((a, b) => b.w * b.h - a.w * a.h);
    for (const pl of piles) {
      if (pl.h > CLEAR) continue;
      let best = null, bestScore = Infinity;
      for (const r of rows) {
        const cap = r.books ? 2 : 3;
        if (r.piles.length >= cap) continue;
        const usedW = r.piles.reduce((t, q) => t + q.w + 0.1, 0);
        if (r.to - r.from - usedW < pl.w + 0.04) continue;
        // first bookcase first; spread out rather than crowd; a big piece prefers an empty shelf
        const score = r.page * 3 + r.piles.length * 1.2 + (r.books && pl.w > 0.2 ? 0.6 : 0) + (r.abs % ROWS) * 0.05;
        if (score < bestScore) { bestScore = score; best = r; }
      }
      if (best) best.piles.push(pl);
    }
    // leftovers keep the arch of a later bookcase company, one each
    for (let pg = 1; pg <= caseOfAbs(placed); pg++) {
      const pl = piles.find((x) => !rows.some((r) => r.piles.includes(x)) && x.h <= archRoom(0));
      if (pl) arches[pg] = [{ pile: pl, x: 0 }]; else break;
    }

    // set out this bookcase's pieces
    const placePile = (pl, x, y, z0, yawBias) => {
      const yaw = turn(pl.p, yawBias);
      const z = z0 ?? zFor(pl.p, yaw);
      put(pl.p, x, y, z, yaw);
      if (pl.top) {
        // something small on the stack: off-centre, turned a little
        const ty = turn(pl.top, -yawBias);
        put(pl.top, x + (rnd() - 0.5) * Math.max(0, pl.p.w - pl.top.w) * 0.6, y + pl.p.h, z + (rnd() - 0.5) * 0.03, ty);
      }
    };
    for (const a of arches[page] || []) placePile(a.pile, a.x, AT, AZ, a.x === 0 ? 0 : -Math.sign(a.x));
    for (const r of rows.filter((x) => x.page === page && x.piles.length)) {
      const y = plankTop(r.row), span = r.to - r.from, total = r.piles.reduce((t, q) => t + q.w, 0);
      let xs;
      if (r.books) {
        // beside the books with a little air, a second piece further along if there's room
        const spare = span - total;
        xs = r.piles.length === 1 ? [r.from + Math.min(0.04 + rnd() * 0.06, spare * 0.4)]
          : [r.from + 0.03, spare > 0.3 ? r.to - r.piles[1].w - 0.02 - rnd() * 0.05 : r.from + 0.03 + r.piles[0].w + Math.min(0.08, spare * 0.4)];
      } else {
        // an open shelf: spaced out along it, a little off the exact thirds
        const anchors = { 1: [0.5 + (rnd() - 0.5) * 0.2], 2: [0.27, 0.71], 3: [0.14, 0.5, 0.84] }[r.piles.length];
        let edge = r.from;
        xs = r.piles.map((p, i) => {
          let x = r.from + anchors[i] * span - p.w / 2 + (rnd() - 0.5) * 0.04;
          x = Math.max(x, edge + (i ? 0.08 : 0));
          x = Math.min(x, r.to - p.w - r.piles.slice(i + 1).reduce((t, q) => t + q.w + 0.08, 0));
          edge = x + p.w; return x;
        });
      }
      r.piles.forEach((pl, i) => placePile(pl, xs[i] + pl.w / 2, y, null, i ? -1 : 1));
    }
    renderer.shadowMap.needsUpdate = true;
    kick();
  }
  const caseOfAbs = (placed) => Math.floor((placed.length ? placed[placed.length - 1].abs : 0) / ROWS);
  function fill(want = 0) {
  shelfGroup.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); if (o.material && o.material.map && o.material !== api.mat) o.material.map.dispose(); } });
  shelfGroup.clear();
  if (api.mat) { api.mat.map.dispose(); api.mat.dispose(); api.mat = null; }
  const g = shelfGroup;
  // brass name plate on the sill, like the app ("16 read")
  const nRead = lib.books.filter((b) => (b.status || 'read') === 'read').length;
  const plate = mesh(new THREE.PlaneGeometry(0.2, 0.034), std({ map: canvasTex(plateTex(`${nRead} read`), { repeat: false }), roughness: 0.35, metalness: 0.6 }), g, { cast: false });
  plate.position.set(0, SILL + 0.0225, ZF + 0.035 / 2 + 0.0185);

  // ---- books, in the app's order: Reading now → To read → Read
  const ORDER = ['reading', 'want', 'read'];
  const byAdded = (a, b) => (Number(b.addedAt) || 0) - (Number(a.addedAt) || 0);
  const list = [...lib.books.filter((b) => (b.status || 'read') === 'reading').sort(byAdded), ...wantOrder(lib.books.filter((b) => b.status === 'want')), ...lib.books.filter((b) => (b.status || 'read') === 'read').sort(byAdded)];
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
  // more than one bookcase's worth: every shelf is filled and the books carry on to the next
  // bookcase (the room shows one at a time). Otherwise the books are balanced over the shelves
  // they need, with a little extra so each shelf has room for a trinket.
  const multi = needed > ROWS;
  const rowsUsed = multi ? ROWS : Math.min(ROWS, Math.max(needed, Math.ceil(total / (rowW * 0.72))));
  const cap = multi ? rowW : Math.min(rowW, total / rowsUsed + 0.06);
  let abs = 0, x = innerL;     // abs: the shelf, counting on through every bookcase
  const placed = [];
  for (const e of seq) {
    if (x + e.w > innerL + cap && x > innerL) {
      // don't start a row with a closing bookend
      if (e.kind === 'end' && e.flip) { placed.push({ ...e, abs, x }); x += e.w; continue; }
      abs++; x = innerL;
    }
    placed.push({ ...e, abs, x }); x += e.w;
  }
  const caseOf = (i) => Math.floor(i.abs / ROWS);
  const pages = caseOf(placed[placed.length - 1] || { abs: 0 }) + 1;
  const page = Math.max(0, Math.min(pages - 1, want || 0));
  const all = placed.filter((i) => i.kind === 'book').map((i) => ({ b: i.b, page: caseOf(i), st: i.st }));
  const items = placed.filter((i) => caseOf(i) === page).map((i) => ({ ...i, row: ROWS - 1 - (i.abs % ROWS) }));
  // a section carried over from the last bookcase gets its label again at the top of this one
  const firstBook = items.find((i) => i.kind === 'book');
  if (page > 0 && firstBook && !items.some((i) => i.kind === 'end' && i.start && i.sec === firstBook.st)) items.unshift({ kind: 'label', sec: firstBook.st, row: firstBook.row, x: firstBook.x - 0.004 });

  const bookMeshes = [];
  for (const it of items) {
    const y = rowsY[it.row];
    if (it.kind === 'label') {
      if (labelled) {
        const name = { reading: 'Reading now', want: 'To read', read: 'Read' }[it.sec];
        const lb = mesh(new THREE.PlaneGeometry(0.15, 0.022), std({ map: canvasTex(plateTex(`${name} · ${counts[it.sec]}`, 640, 96), { repeat: false }), roughness: 0.35, metalness: 0.6 }), g, { cast: false });
        lb.position.set(it.x + 0.075, y - PLK / 2, ZF + 0.0006);
      }
      continue;
    }
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
  // the trinkets picked in Customize, set out in the arch and in the open spots on the shelves
  dress(page, placed, { endW, innerL, innerR });

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
      const stars = it.st === 'read' ? Math.max(0, Math.min(5, Math.floor(b.rating || 0))) : 0;
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
    api.mat = mat;
  }
  Object.assign(api, { meshes: bookMeshes, paint, hidden: 0, count: list.length, order: null, page, pages, all,
    byId: new Map(bookMeshes.map((m) => [m.userData.book.id, m])) });
  }
  fill();

  // one picking target for the whole case (books are picked first)
  const HT = AY + HS + RISE;
  const hit = new THREE.Mesh(new THREE.BoxGeometry(W + 0.1, HT, D), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.set(0, HT / 2, ZC); hit.userData.station = 'shelf'; scene.add(hit);
  api.setVine = setVine;
  return api;
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
  box(0.03, OH, OW, M.firebrick, X + 0.05, OH / 2, Z, g);           // stands just in front of the wall panelling, so the two never overlap
  box(D - 0.07, OH, 0.025, M.firebrick, X + 0.065 + (D - 0.07) / 2, OH / 2, Z - OW / 2 + 0.0125, g);
  box(D - 0.07, OH, 0.025, M.firebrick, X + 0.065 + (D - 0.07) / 2, OH / 2, Z + OW / 2 - 0.0125, g);
  box(D - 0.07, 0.02, OW - 0.05, M.firebrick, X + 0.065 + (D - 0.07) / 2, OH - 0.011, Z, g);
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
    if (cs) placeModel(cs, X + 0.2, MT, Z + sz * 0.78, 0, 1.15);     // (left unlit: nothing burns on a shelf)
  }
  const vase = placeModel(MOD.vase, X + 0.19, MT, Z - 0.42, 0.3, 0.45);
  // a big painting over the mantel: Highland cattle on the moor, in the ornate gilt frame
  if (MOD.painting) {
    const art = MOD.painting.clone(true);
    art.traverse((o) => { if (o.isMesh && /canvas/.test(o.material.name)) { o.material = o.material.clone(); o.material.map = null; o.material.color.set('#3a2a1c'); canvasMats.mantel = o.material; o.material.needsUpdate = true; } });
    placeModel(art, X + 0.005, MT + 0.62, Z, Math.PI / 2, 2.25, { cast: false });
  }
  const elephant = placeModel(MOD.elephant, X + 0.2, MT, Z + 0.42, Math.PI / 2 + 0.3, 1.7);
  // the trophies you've earned stand along the mantel (re-made whenever a goal is met)
  const cups = new THREE.Group(); cups.userData.dyn = true; g.add(cups);
  function setTrophies(trophies) {
    cups.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); if (o.material.map) { o.material.map.dispose(); o.material.dispose(); } } });
    cups.clear();
    const years = Object.keys(trophies || {}).sort();
    const n = years.length;
    // one or two take the places of the vase and the elephant; more line up either side of the clock
    let slots;
    if (n <= 2) slots = [-0.42, 0.42].slice(0, n);
    else {
      const L = Math.ceil(n / 2), R = n - L, span = (k, of, sx) => sx * (0.2 + (k + 0.5) * (0.48 / of));
      slots = [...Array.from({ length: L }, (_, k) => span(k, L, -1)), ...Array.from({ length: R }, (_, k) => span(k, R, 1))];
    }
    // the oldest at the ends, the newest nearest the clock
    slots.sort((a, b) => Math.abs(b) - Math.abs(a));
    const sc = n > 2 ? Math.min(0.85, (0.48 / Math.ceil(n / 2)) / 0.17) : 0.85;
    years.forEach((y, i) => {
      const t = trophyMesh(y, M); t.scale.setScalar(sc);
      t.position.set(X + 0.21, MT, Z + slots[i]);
      t.traverse((o) => { o.userData.dyn = true; if (o.isMesh) o.userData.trophy = y; });
      cups.add(t);
    });
    if (vase) vase.visible = !years.length;
    if (elephant) elephant.visible = years.length < 2;
    renderer.shadowMap.needsUpdate = true;
  }
  let base = 2;
  return {
    setTrophies,
    setLight(L) { base = mode === 'night' ? 4.2 : 1.6; },
    tick(t) {
      fireMat.uniforms.uTime.value = t; sparkMat.uniforms.uTime.value = t;
      const fl = 0.82 + 0.1 * Math.sin(t * 9.1) + 0.08 * Math.sin(t * 23.7 + 1.3) * Math.sin(t * 3.3);
      light.intensity = base * fl; glow.material.opacity = (mode === 'night' ? 0.5 : 0.28) * fl;
    },
  };
}
// a gold cup with two handles on a little walnut plinth, the year on a brass plate facing the room
function trophyMesh(year, M) {
  const g = new THREE.Group();
  const plinth = mesh(new RoundedBoxGeometry(0.12, 0.045, 0.12, 2, 0.006), M.trim, g); plinth.position.y = 0.0225;
  const plate = mesh(new THREE.PlaneGeometry(0.08, 0.024).rotateY(Math.PI / 2), std({ map: canvasTex(plateTex(String(year), 256, 76), { repeat: false }), roughness: 0.35, metalness: 0.6 }), g, { cast: false });
  plate.position.set(0.0605, 0.0225, 0);
  const cup = new THREE.Group(); cup.position.y = 0.045; cup.rotation.y = Math.PI / 2; g.add(cup);
  mesh(lathe([[0, 0], [0.05, 0], [0.05, 0.016], [0.03, 0.026], [0.011, 0.046], [0.011, 0.09], [0.028, 0.11], [0.06, 0.155], [0.067, 0.205], [0.061, 0.205], [0.019, 0.12], [0, 0.12]], 32), M.gold, cup);
  for (const sx of [-1, 1]) { const h = mesh(new THREE.TorusGeometry(0.032, 0.0055, 8, 20, Math.PI), M.gold, cup); h.rotation.z = sx * -Math.PI / 2; h.position.set(sx * 0.064, 0.17, 0); }
  return g;
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
  // the lamp's light (lit only when there's a desk lamp among the things on the desk)
  const lampLight = new THREE.PointLight('#ffb35c', 0, 3.2, 2); g.add(lampLight);
  let lampBase = 0, hasLamp = false;
  // the book you're reading, open
  const reading = lib.books.find((b) => b.status === 'reading') || null;
  const open = new THREE.Group(); g.add(open); open.userData.dyn = true; open.position.set(0.06, TOP + 0.024, 0.0); open.rotation.y = -Math.PI / 2;   // (set aside while a book from the shelf lies here)
  const [cb] = reading ? colorOf(reading) : ['#6E1F24'];
  box(0.36, 0.008, 0.25, std({ color: cb, roughness: 0.6 }), 0, 0.004, 0, open);
  const pageMat = std({ map: canvasTex(pageTex(reading), { repeat: false }), roughness: 0.9 });
  const pg = new THREE.PlaneGeometry(0.34, 0.23, 24, 1).rotateX(-Math.PI / 2);
  const pp = pg.attributes.position;
  for (let i = 0; i < pp.count; i++) { const px = pp.getX(i); pp.setY(i, 0.012 + 0.02 * Math.sin(Math.min(1, Math.abs(px) / 0.17) * Math.PI * 0.5) * (1 - Math.abs(px) / 0.34) - (Math.abs(px) < 0.01 ? 0.006 : 0)); }
  pg.computeVertexNormals();
  const pages = mesh(pg, pageMat, open, { cast: false }); pages.userData.deskBook = true;
  // the things on the desk (Customize → Reading table), set out as you'd keep them sitting here:
  // the lamp at a back corner, tall things at the back, books behind the open book, the cup by your
  // right hand, small flat things by your left. (+x is toward the chair; your right is −z.)
  const SLOTS = { backR: [-0.17, -0.46], backL: [-0.19, 0.47], backM: [-0.17, 0.24], frontR: [0.17, -0.45], frontL: [0.18, 0.35] };
  const deco = new THREE.Group(); deco.userData.dyn = true; g.add(deco);
  let deskToken = 0;
  async function dressDesk() {
    const token = ++deskToken;
    const picks = deskPicks();
    const pieces = await Promise.all(picks.map((k) => loadPiece(DESK3D[k].file, DESK3D[k]).catch(() => null)));
    if (token !== deskToken) return;
    deco.clear(); hasLamp = false;
    const rnd = rng(hash('desk|' + picks.join('|')));
    const free = new Set(Object.keys(SLOTS));
    picks.forEach((k, i) => {
      const p = pieces[i]; if (!p) return;
      const slot = DESK3D[k].slots.find((sl) => free.has(sl)) || [...free][0];
      if (!slot) return;
      free.delete(slot);
      // facing the chair, turned a little; the lamp leans its shade over the book
      const yaw = Math.PI / 2 + (k === 'lamp' ? (slot === 'backR' ? Math.PI + 1.3 : Math.PI - 1.3) : (rnd() - 0.5) * 0.5);
      const fx = Math.abs(p.w * Math.cos(yaw)) + Math.abs(p.d * Math.sin(yaw)), fz = Math.abs(p.w * Math.sin(yaw)) + Math.abs(p.d * Math.cos(yaw));
      // keep it on the desk top
      const x = THREE.MathUtils.clamp(SLOTS[slot][0], -0.31 + fx / 2, 0.31 - fx / 2), z = THREE.MathUtils.clamp(SLOTS[slot][1], -0.64 + fz / 2, 0.64 - fz / 2);
      const o = p.obj.clone(true); o.position.set(x, TOP + 0.022, z); o.rotation.y = yaw; deco.add(o);
      if (DESK3D[k].light) { hasLamp = true; lampLight.position.set(x + 0.06, TOP + 0.022 + p.h * 0.8, z + (slot === 'backR' ? 0.08 : -0.08)); }
    });
    lampLight.intensity = hasLamp ? lampBase : 0;
    renderer.shadowMap.needsUpdate = true;
    kick();
  }
  dressDesk();
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
    reading, openBook: open, dress: dressDesk,
    setLight(l) { lampBase = l; lampLight.intensity = hasLamp ? l : 0; },
    tick() {},
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
  // the dollhouse: the whole room from outside, its ceiling and two walls lifted away, on a long lens
  house: { p: [9.6, 9.0, 11.0], t: [-0.3, 0.5, -0.2], w: 9.4, h: 6.8, max: 90, fov: 24, free: true },
  // in the room: standing just inside the door
  room: { p: [1.0, 1.65, 2.55], t: [-0.7, 1.05, -1.5], w: 4.4, h: 2.6, max: 5.2 },
  shelf: { p: [0, 1.4, -0.95], t: [0, 1.2, -2.4], w: 1.25, h: 1.0, max: 2.15 },
  desk: { p: [-1.25, 1.55, 0.55], t: [-2.65, 0.82, -0.6], w: 1.5, h: 1.2, max: 2.4 },
  hearth: { p: [-0.5, 1.45, 2.3], t: [-2.7, 0.95, 1.6], w: 2.1, h: 2.0, max: 2.9 },
  tome: { p: [0.6, 1.6, 0.95], t: [2.25, 1.08, 0.1], w: 1.3, h: 1.4, max: 2.4 },
  nook: { p: [1.45, 1.3, -1.35], t: [2.55, 0.85, -2.35], w: 0.8, h: 0.8, max: 1.6 },
  case: { p: [0, 1.2, 0.4], t: [0, 1.12, -2.5], w: 2.0, h: 2.25, max: 4.2 },
  // reading mode: the armchair, the oil lamp and the tea from across the rug, sitting in the top of
  // the screen above the reading-mode controls
  read: { p: [-0.1, 1.8, 0.75], t: [2.0, 0.3, -2.2], w: 2.2, h: 1.5, max: 4.6 },
};
const cam = { pos: new THREE.Vector3(), dir: new THREE.Vector3(0, 0, -1), dist: 2, yaw: 0, pitch: 0, vyaw: 0, vpitch: 0, vx: 0 };
let station = 'room', tween = null;
// home is the dollhouse, or standing in the room: your pick, remembered on this device
const HOME_KEY = 'tomestead.roomhome';
let homeView = (() => { try { return localStorage.getItem(HOME_KEY) === 'room' ? 'room' : 'house'; } catch { return 'house'; } })();
const home = () => homeView;
const isHome = (st) => st === 'house' || st === 'room';
function setHome(v) { homeView = v === 'room' ? 'room' : 'house'; try { localStorage.setItem(HOME_KEY, homeView); } catch {} }
const baseFov = () => (portrait() ? 62 : 50);
const fovFor = (name) => (STATIONS[name] && STATIONS[name].fov) || baseFov();
function pressStation(name) {
  document.querySelectorAll('.stations button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.go === name || (b.dataset.go === 'room' && isHome(name)))));
}
// Customize covers part of the screen (a panel on the right, or a sheet along the bottom on phones):
// the camera frames each view inside the clear part, and the rest of the room carries on under the panel
let inset = { r: 0, b: 0 }, customizing = false;
const viewW = () => Math.max(1, innerWidth - inset.r), viewH = () => Math.max(1, innerHeight - inset.b);
function portrait() { return viewW() / viewH() < 1; }
let shelfSpan = null, shelfY = null;
function framing(name) {
  const s = STATIONS[name];
  const p = new THREE.Vector3(...s.p), t = new THREE.Vector3(...s.t);
  const dir = t.clone().sub(p); const base = dir.length(); dir.normalize();
  const fov = fovFor(name), vt = Math.tan(THREE.MathUtils.degToRad(fov) / 2);
  const hf = 2 * Math.atan(vt * camera.aspect);
  if (name === 'house') return houseFraming(s, t, dir, vt, hf);
  const need = Math.max(s.w / 2 / Math.tan(hf / 2), s.h / 2 / vt);
  const d = Math.min(s.max, Math.max(base, need));
  const pos = t.clone().addScaledVector(dir, -d);
  if (name === 'shelf' && shelfSpan) return shelfFraming(dir);
  pos.x = THREE.MathUtils.clamp(pos.x, -2.75, 2.75); pos.z = Math.min(pos.z, 2.6);
  return { pos, dir: t.clone().sub(pos).normalize(), dist: t.distanceTo(pos) };
}
// The dollhouse sits in the clear band between the header and what's along the bottom (the stations,
// and the Reading now card), not just the middle of the screen
function houseFraming(s, t, dir, vt, hf) {
  const H = viewH();
  const top = customizing ? 0.03 : Math.min(0.35, topInset() / H);
  const reserve = customizing ? 12 : 84 + (nowBook() && portrait() && HOST ? 170 : 0);
  const bot = Math.max(top + 0.35, (H - reserve) / H), band = bot - top, mid = (top + bot) / 2;
  const d = Math.max(s.w / 2 / Math.tan(hf / 2), s.h / 2 / vt / band);
  const vh = 2 * d * vt;
  const up = new THREE.Vector3().crossVectors(new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize(), dir).normalize();
  const aim = t.clone().addScaledVector(up, (mid - 0.5) * vh);
  const pos = aim.clone().addScaledVector(dir, -d);
  return { pos, dir: dir.clone(), dist: d };
}
// The bookcase view: close enough that spines are readable and easy to tap on a phone, with every
// shelf of books between the controls at the top and the station bar at the bottom. When the books
// are wider than the screen, drag to slide along them (the view starts on the last book you touched).
// how far down the screen the controls at the top reach (the app's header, toolbar, timer and goals; or the test page's bar)
function topInset() {
  let y = 64;
  for (const sel of ['.topbar', '.toolbar', '#timerChip', '#roomGoals']) {
    const el = HOST ? document.querySelector(sel) : null;
    if (el && !el.hidden && el.offsetParent !== null) y = Math.max(y, el.getBoundingClientRect().bottom + 6);
  }
  return y;
}
function shelfFraming(dir) {
  const vt = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2), ht = vt * camera.aspect;
  const H = viewH(), top = customizing ? 0.04 : Math.min(0.3, topInset() / H), bot = Math.max(top + 0.4, (H - (customizing ? 16 : 132)) / H);
  const band = bot - top, mid = (top + bot) / 2;
  const [x0, x1] = shelfSpan, [y0, y1] = shelfY;
  const dV = (y1 - y0 + 0.08) / band / 2 / vt;
  const dW = Math.min(x1 - x0, portrait() ? 0.66 : 1.25) / 2 / ht;
  const d = THREE.MathUtils.clamp(Math.max(dV, dW), 0.75, STATIONS.shelf.max);
  const wv = 2 * d * ht, vh = 2 * d * vt;
  let tx;
  if (x1 - x0 <= wv - 0.1) tx = (x0 + x1) / 2;
  else {
    const m = world && world.books.meshes.length ? meshAt(Math.max(0, browseIdx)) : null;
    tx = THREE.MathUtils.clamp(m ? m.userData.home.x : x0, x0 + wv / 2 - 0.05, x1 - wv / 2 + 0.05);
  }
  // aim a little below the books so they sit in the middle of the clear band
  const t = new THREE.Vector3(tx, (y0 + y1) / 2 - (0.5 - mid) * vh, STATIONS.shelf.t[2]);
  const pos = t.clone().addScaledVector(dir, -d);
  return { pos, dir: dir.clone(), dist: d };
}
// how far the view can slide along the shelf (null when every book already fits on the screen)
function shelfPan() {
  if (!shelfSpan) return null;
  const ht = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.aspect;
  const wv = 2 * Math.max(0.3, cam.pos.z - STATIONS.shelf.t[2]) * ht;
  const [x0, x1] = shelfSpan;
  if (x1 - x0 <= wv - 0.1) return null;
  return { lo: x0 + wv / 2 - 0.05, hi: x1 - wv / 2 + 0.05, perPx: wv / viewW() };
}
// people who ask their phone for less motion get short, flat moves and no flicks
const calm = matchMedia('(prefers-reduced-motion: reduce)');
function go(name, dur = 1.5, { arrive = true } = {}) {
  if (outBook) return;              // a book is out on the desk: closing it brings you back
  closeCard();
  if (pulled) { pulled.userData.anim = -1; pulled = null; }
  glide(name, dur, arrive);
  if (name !== 'tome' && world) world.tome.rest();
  if (name === 'shelf' && world && !world.books.meshes.length && HOST) openCard(`<h2>Your shelves are empty</h2><div class="meta">Add the first book and it will stand here, or bring your library over from Goodreads or StoryGraph.</div><div class="acts"><button type="button" data-act="add">Add a book</button><button type="button" class="quiet" data-act="import">Import</button></div>`);
  else if (name === 'shelf' && world) shelfHint();
}
// just the camera move
function glide(name, dur, arrive) {
  if (calm.matches) dur = Math.min(dur, 0.35);
  if (station === 'house' && !tween) bakeOrbit();
  if (name === 'house' || station === 'house') dur = Math.max(dur, calm.matches ? 0.35 : 1.9);   // stepping in or out takes a breath longer
  station = name; cam.vx = 0;
  pressStation(name);
  const to = framing(name); to.fov = fovFor(name);
  tween = { t: 0, dur, flat: calm.matches || name === 'house', from: { pos: cam.pos.clone(), dir: lookDir(), dist: cam.dist, fov: camera.fov }, to, arrive: arrive ? name : null };
  cam.yaw = 0; cam.pitch = 0; cam.vyaw = 0; cam.vpitch = 0;
  shelfTools();
}
// arriving somewhere opens what's there, so nobody has to guess to tap the desk or the fire
function arrived(name) {
  if (name !== station || !HOST || outBook || !$('card').hidden || document.querySelector('dialog[open]')) return;
  if (name === 'desk') deskCard();
  else if (name === 'hearth') hearthCard();
  else if (name === 'tome') tomeCard();
  else if (isHome(name)) firstRun();
}
// a word on how the shelf works, the first few visits
const HINT_KEY = 'tomestead.shelfhint';
function shelfHint() {
  let n = 0; try { n = Number(localStorage.getItem(HINT_KEY)) || 0; } catch {}
  if (n >= 3) return;
  try { localStorage.setItem(HINT_KEY, String(n + 1)); } catch {}
  showHint('Tap a spine to pull it out · tap it again to read it', 4200, 1400);
}
let hintTimer = 0;
function showHint(text, ms, delay = 0) {
  setTimeout(() => {
    const h = $('hint'); h.textContent = text; h.classList.add('show');
    clearTimeout(hintTimer); hintTimer = setTimeout(() => h.classList.remove('show'), ms);
  }, delay);
}
const TOUR_KEY = 'tomestead.tour.v1';
const tourSeen = () => { try { return localStorage.getItem(TOUR_KEY) === '1'; } catch { return true; } };
const markTour = () => { try { localStorage.setItem(TOUR_KEY, '1'); } catch {} };
// a brand-new library gets a welcome; everyone gets a short tour once
function firstRun() {
  if (!HOST) return;
  if (!lib.books.length) return welcomeCard();
  if (!tourSeen()) tourCard(0);
}
function welcomeCard() {
  openCard(`<div class="eyebrow">Welcome</div><h2>This is your reading room</h2>
    <div class="meta">Every book you’ve read, are reading or want to read gets its own spine on the bookcase. Start with one book, or bring your whole library over.</div>
    <div class="acts"><button type="button" data-act="add">Add your first book</button><button type="button" class="quiet" data-act="import">Import from Goodreads or StoryGraph</button><button type="button" class="quiet" data-act="tour">Show me around</button></div>`, 'welcome');
}
const TOUR = [
  ['Getting around', 'Tap a place (Shelf, Desk, Fireside or Tome) on the room or along the bottom to walk over. Drag to look around. Step inside stands you in the room; Whole room takes you back out to the dollhouse.'],
  ['Your bookcase', 'Tap a spine and it slides out a little. Tap it again and it comes down to the desk and opens. Drag to slide along the shelves; the magnifier finds any book.'],
  ['Desk, fire and tome', 'The desk keeps a reading timer. The fireside holds your streak, calendar, goals and year in books, and your trophies stand on the mantel. Wake the tome for what to read next.'],
  ['Everything else', 'Your reading goals stay at the top. + Add is up there too, and the ••• menu has imports, backups, tags, Customize the room (paintings, the bookcase, trinkets and the desk) and Send feedback.'],
];
function tourCard(i) {
  const [h, t] = TOUR[i], last = i === TOUR.length - 1;
  openCard(`<div class="eyebrow">A quick tour · ${i + 1} of ${TOUR.length}</div><h2>${h}</h2><div class="meta">${t}</div>
    <div class="acts">${last ? '<button type="button" data-act="tour-done">Got it</button>' : `<button type="button" data-act="tour-next" data-i="${i + 1}">Next</button><button type="button" class="quiet" data-act="tour-done">Skip</button>`}</div>`, 'tour');
}
function tomeCard() {
  openCard(`<div class="eyebrow">The magic tome</div><h2>What should I read next?</h2>
    <div class="meta">The tome reads the books you rate highest and suggests a few you haven’t logged.</div>
    <div class="acts"><button type="button" data-act="wake">Wake the tome</button></div>`, 'tome');
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
    if (tween.flat) cam.pos.y -= Math.sin(k * Math.PI) * 0.08;
    if (tween.from.fov && tween.to.fov) setFov(THREE.MathUtils.lerp(tween.from.fov, tween.to.fov, k));
    if (tween.t >= 1) { const a = tween.arrive; if (tween.to.fov) setFov(tween.to.fov); tween = null; if (a) arrived(a); }
  } else if (!drag) {
    cam.yaw += cam.vyaw; cam.pitch += cam.vpitch;
    cam.vyaw *= 0.9; cam.vpitch *= 0.9;
    if (Math.abs(cam.vyaw) < 1e-5) cam.vyaw = 0;
    if (Math.abs(cam.vpitch) < 1e-5) cam.vpitch = 0;
    // a flick along the shelf coasts to a stop
    if (cam.vx) {
      const lim = station === 'shelf' ? shelfPan() : null;
      cam.pos.x += cam.vx * dt * 1000;
      cam.vx *= Math.pow(0.9, dt * 60);
      if (!lim || cam.pos.x <= lim.lo || cam.pos.x >= lim.hi) { if (lim) cam.pos.x = THREE.MathUtils.clamp(cam.pos.x, lim.lo, lim.hi); cam.vx = 0; }
      if (Math.abs(cam.vx) < 2e-6) cam.vx = 0;
    }
  }
  const orbit = station === 'house' && !tween;
  const yl = orbit ? 0.55 : portrait() ? 0.7 : 0.5;
  cam.yaw = THREE.MathUtils.clamp(cam.yaw, -yl, yl);
  cam.pitch = THREE.MathUtils.clamp(cam.pitch, orbit ? -0.12 : -0.3, orbit ? 0.22 : 0.3);
  if (orbit) {
    // in the dollhouse, dragging turns the little room on its plinth (the camera circles it)
    const tgt = cam.pos.clone().addScaledVector(cam.dir, cam.dist);
    const off = cam.pos.clone().sub(tgt).applyAxisAngle(UP, -cam.yaw);
    off.applyAxisAngle(new THREE.Vector3().crossVectors(off, UP).normalize(), cam.pitch);
    camera.position.copy(tgt).add(off);
    camera.lookAt(tgt);
  } else {
    camera.position.copy(cam.pos);
    camera.lookAt(cam.pos.clone().addScaledVector(lookDir(), cam.dist));
  }
  outside();
}
const UP = new THREE.Vector3(0, 1, 0);
function setFov(f) { if (Math.abs(camera.fov - f) > 1e-3) { camera.fov = f; camera.updateProjectionMatrix(); } }
// leaving the dollhouse: the turned view becomes the starting point of the glide
function bakeOrbit() {
  cam.pos.copy(camera.position);
  cam.dir.copy(camera.getWorldDirection(new THREE.Vector3()));
  cam.yaw = 0; cam.pitch = 0; cam.vyaw = 0; cam.vpitch = 0;
}
// From outside, the ceiling and the near walls lift away and the room stands on its plinth; step
// back in and they return. Near and far planes follow how far out the camera is.
const CUT = [], PLINTH = [];
let isOut = false;
function outside() {
  const p = camera.position;
  const dx = Math.max(0, Math.abs(p.x) - 3.1), dy = Math.max(0, p.y - 3.1, -p.y), dz = Math.max(0, Math.abs(p.z) - 2.8);
  const away = Math.hypot(dx, dy, dz);
  const out = away > 0.02;
  const near = out ? THREE.MathUtils.clamp(away * 0.5, 0.05, 3) : 0.05, far = 30 + away * 2;
  if (Math.abs(camera.near - near) > 0.01 || Math.abs(camera.far - far) > 0.5) { camera.near = near; camera.far = far; camera.updateProjectionMatrix(); }
  if (out === isOut) return;
  isOut = out;
  for (const m of CUT) m.visible = !out;
  for (const m of PLINTH) m.visible = out;
  renderer.shadowMap.needsUpdate = true;
}

// ---------------------------------------------------------------- input
let drag = null;
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
canvas.addEventListener('pointerdown', (e) => {
  drag = { x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY, t: e.timeStamp, moved: 0, trail: [[e.timeStamp, e.clientX]] };
  cam.vx = 0;
  if (tween && tween.pan) tween = null;      // grabbing the shelf stops a slide along it
  canvas.setPointerCapture(e.pointerId); canvas.classList.add('dragging'); kick();
});
canvas.addEventListener('pointermove', (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  drag.x = e.clientX; drag.y = e.clientY; drag.moved += Math.abs(dx) + Math.abs(dy);
  if (drag.moved < 6 || outBook) return;
  if (station === 'shelf' && !searching) {
    // at the bookcase, dragging slides the view along the shelves (like the classic bookcase scrolls)
    const lim = shelfPan();
    if (lim) {
      if (tween) return;
      drag.trail.push([e.timeStamp, e.clientX]); if (drag.trail.length > 8) drag.trail.shift();
      cam.pos.x = THREE.MathUtils.clamp(cam.pos.x - dx * lim.perPx, lim.lo, lim.hi);
      kick(); return;
    }
  }
  const k = 2.2 / Math.max(innerWidth, innerHeight);
  cam.yaw += dx * k; cam.pitch += dy * k * 0.8;
  cam.vyaw = dx * k * 0.6; cam.vpitch = dy * k * 0.5;
  kick();
});
function endDrag(e) {
  if (!drag) return;
  const d = drag; drag = null; canvas.classList.remove('dragging');
  if (d.moved < 8 && e.timeStamp - d.t < 450) { tap(e.clientX, e.clientY); return; }
  // a quick flick along the shelf keeps the view sliding for a moment
  if (station === 'shelf' && !outBook && !searching && !calm.matches && d.trail.length > 1) {
    const lim = shelfPan(), now = e.timeStamp, recent = d.trail.filter(([t]) => now - t < 110);
    if (lim && recent.length > 1) {
      const [t0, x0] = recent[0], [t1, x1] = recent[recent.length - 1];
      const v = (x1 - x0) / Math.max(16, t1 - t0);
      if (Math.abs(v) > 0.3) { cam.vx = -v * lim.perPx; kick(600); }
    }
  }
}
canvas.addEventListener('pointerup', endDrag);
canvas.addEventListener('pointercancel', () => { drag = null; canvas.classList.remove('dragging'); });

function tap(px, py) {
  if (customizing) return;
  if (!world) return;
  if (outBook) { if (outBook.phase === 'out' || outBook.phase === 'open') skipAhead(); else if (!HOST && outBook.phase === 'desk') closeUp(); return; }
  if (station === 'shelf') {
    if (searching) return closeSearch();
    if (turning) return;
    // like the classic bookcase: the first tap slides a spine out a little, the second takes it down
    const m = nearestBook(px, py);
    if (m && m === pulled) return openOnDesk(m.userData.book.id);
    if (m) return selectBook(indexOfMesh(m));
    if (pulled) return putBack();
  }
  ndc.set((px / innerWidth) * 2 - 1, -(py / innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const hits = ray.intersectObjects(scene.children, true);
  const kindOf = (u) => (u.book ? 'shelf' : u.tome ? 'tome' : u.deskBook ? 'desk' : u.trophy ? 'hearth' : u.station || null);
  const first = hits.find((h) => kindOf(h.object.userData));
  if (first) {
    const st = kindOf(first.object.userData);
    // the invisible tap areas are generous; prefer the exact thing under your finger
    const exact = hits.find((h) => { const u = h.object.userData; return (u.book || u.tome || u.deskBook) && kindOf(u) === st && h.distance < first.distance + 0.8; });
    if (station !== st) return go(st);
    if (exact && exact.object.userData.book) return selectBook(indexOfMesh(exact.object));
    const cup = hits.find((h) => h.object.userData.trophy && h.distance < first.distance + 0.8);
    if (cup) return trophyCard(cup.object.userData.trophy);
    if (st === 'tome') return magic();
    if (st === 'desk') return deskCard();
    if (st === 'hearth' && HOST) return hearthCard();
  }
  if (pulled) putBack();
  closeCard();
}

// ---------------------------------------------------------------- browsing the bookcase
// It works like the classic bookcase: drag to slide along the shelves, tap a spine to slide it out
// a little, tap it again to carry it to the desk and open it. A small bar holds search and, for a
// library bigger than one bookcase, the arrows that turn to the next case.
let browseIdx = 0, searching = false, searchQ = '';
const allBooks = () => (world ? world.books.all : []);
const meshAt = (i) => { const e = allBooks()[i]; return e && e.page === world.books.page ? world.books.byId.get(e.b.id) || null : null; };
const indexOfMesh = (m) => allBooks().findIndex((e) => e.b.id === m.userData.book.id);
// a soft warm halo (a slightly larger copy of the book, drawn from the inside) around the book you slid out
const glowMat = new THREE.MeshBasicMaterial({ color: '#ffcf7a', side: THREE.BackSide, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
function glowFor(m) {
  if (!m.userData.glow) {
    const g = new THREE.Mesh(m.geometry, glowMat.clone());
    g.scale.set(1 + 0.007 / m.userData.it.t, 1 + 0.007 / m.userData.it.h, 1 + 0.004 / m.userData.it.d);
    g.castShadow = g.receiveShadow = false; g.renderOrder = 2;
    m.add(g); m.userData.glow = g;
  }
  return m.userData.glow;
}
// slide book i (counting through every bookcase) out a little; turns to its bookcase first if needed
function selectBook(i, { focus = true } = {}) {
  const list = allBooks(); if (!list.length || i < 0) return false;
  i = Math.min(list.length - 1, i);
  if (list[i].page !== world.books.page) { turnCase(list[i].page, i); return true; }
  browseIdx = i;
  const m = meshAt(i);
  if (!m) return false;
  if (pulled !== m) { if (pulled) pulled.userData.anim = -1; pulled = m; m.userData.anim = 0; glowFor(m); coverImage(m.userData.book); }   // (fetch its cover now, for the trip to the desk)
  if (focus) focusOn(m);
  kick(900);
  return true;
}
// the books slide back into the case, the next bookcase's books slide out
let turning = null;
function turnCase(page, then) {
  if (turning) { turning.page = page; turning.then = then; return; }
  cam.vx = 0;
  if (pulled) { pulled.userData.anim = -1; pulled = null; }
  world.books.meshes.forEach((m, k) => { m.userData.leave = -k * 0.004; });
  turning = { page, then, t: 0 };
  kick(1500);
}
function finishTurn() {
  const { page, then } = turning; turning = null;
  world.books.showPage(page);
  frameShelf();
  renderer.shadowMap.needsUpdate = true;
  world.books.meshes.forEach((m, k) => { m.userData.enter = -k * 0.006; });
  const list = allBooks();
  browseIdx = then >= 0 ? Math.min(list.length - 1, then) : Math.max(0, list.findIndex((e) => e.page === page));
  kick(1600);
  shelfTools();
  if (station !== 'shelf') return;     // (you walked away mid-turn)
  const to = framing('shelf');
  cam.yaw = 0; cam.pitch = 0;
  tween = { t: 0, dur: 0.7, flat: true, from: { pos: cam.pos.clone(), dir: lookDir(), dist: cam.dist }, to };
  if (then >= 0) selectBook(browseIdx, { focus: false });
}
const toScreen = (v) => { const p = v.clone().project(camera); return [(p.x + 1) / 2 * innerWidth, (1 - p.y) / 2 * innerHeight, p]; };
function nearestBook(px, py) {
  let best = null, bd = Math.max(30, innerWidth / 16);
  for (const m of world.books.meshes) {
    const h = m.userData.it.h / 2;
    const [x, yTop] = toScreen(m.userData.home.clone().add(new THREE.Vector3(0, h, 0)));
    const [, yBot] = toScreen(m.userData.home.clone().add(new THREE.Vector3(0, -h, 0)));
    if (py < yTop - 24 || py > yBot + 24) continue;
    const d = Math.abs(px - x);
    if (d < bd) { bd = d; best = m; }
  }
  return best;
}
// slide the view along the shelf when the chosen book is near an edge
function focusOn(m) {
  const [, , p] = toScreen(m.userData.home);
  if (Math.abs(p.x) < 0.7 && p.y > -0.75 && p.y < 0.8) return;
  const dir = lookDir(), d = Math.max(0.5, m.userData.home.clone().sub(cam.pos).dot(dir));
  const hf = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2), wv = hf * camera.aspect;
  const right = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
  const delta = right.multiplyScalar(Math.abs(p.x) >= 0.7 ? p.x * wv * d * 0.8 : 0).add(new THREE.Vector3(0, (p.y <= -0.75 || p.y >= 0.8) ? (p.y - 0.25) * hf * d : 0, 0));
  const to = cam.pos.clone().add(delta);
  const lim = station === 'shelf' ? shelfPan() : null;
  if (lim) to.x = THREE.MathUtils.clamp(to.x, lim.lo, lim.hi);
  cam.dir.copy(dir); cam.yaw = 0; cam.pitch = 0;
  tween = { t: 0, dur: 0.45, flat: true, pan: true, from: { pos: cam.pos.clone(), dir: dir.clone(), dist: cam.dist }, to: { pos: to, dir: dir.clone(), dist: cam.dist } };
}
const stOf = (b) => b.status || 'read';
const SEARCH_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="m15.5 15.5 5 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>';

// ---- the small bar at the bookcase: find a book, and turn to another bookcase
const tools = document.createElement('div');
tools.className = 'shelf-tools'; tools.hidden = true;
tools.innerHTML = `<button type="button" class="st-find" aria-label="Find a book">${SEARCH_ICON}</button>
  <span class="st-case"><button type="button" data-case="-1" aria-label="Previous bookcase">‹</button><span class="st-n"></span><button type="button" data-case="1" aria-label="Next bookcase">›</button></span>`;
$('card').parentElement.appendChild(tools);
function shelfTools() {
  const show = active && station === 'shelf' && !!world && world.books.meshes.length > 0 && !outBook && !searching;
  tools.hidden = !show;
  if (!show) return;
  const P = world.books.pages, cs = tools.querySelector('.st-case');
  cs.hidden = P < 2;
  if (P > 1) {
    tools.querySelector('.st-n').textContent = `Bookcase ${world.books.page + 1} of ${P}`;
    tools.querySelector('[data-case="-1"]').disabled = world.books.page === 0;
    tools.querySelector('[data-case="1"]').disabled = world.books.page === P - 1;
  }
}
tools.addEventListener('click', (e) => {
  if (outBook) return;
  if (e.target.closest('.st-find')) { openSearch(); return; }
  const c = e.target.closest('[data-case]');
  if (c && world && !turning) {
    const p = world.books.page + Number(c.dataset.case);
    if (p >= 0 && p < world.books.pages) { closeCard(); turnCase(p, -1); }
  }
  kick();
});

// ---- search: find a book anywhere on the shelves and go straight to it
const norm = (t) => String(t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
function matches(q) {
  const words = norm(q).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const shelved = new Map(allBooks().map((e, i) => [e.b.id, i]));
  const hits = [];
  for (const b of lib.books) {
    const hay = norm([b.title, b.author, b.series, b.genre, ...(Array.isArray(b.tags) ? b.tags : [])].join(' '));
    if (!words.every((w) => hay.includes(w))) continue;
    const t = norm(b.title);
    const score = (t.startsWith(words.join(' ')) ? 0 : t.includes(words[0]) ? 1 : 2) + (shelved.has(b.id) ? 0 : 0.5);
    hits.push({ b, i: shelved.has(b.id) ? shelved.get(b.id) : -1, score });
  }
  return hits.sort((a, b) => a.score - b.score || String(a.b.title).localeCompare(String(b.b.title))).slice(0, 7);
}
function openSearch() {
  searching = true; cam.vx = 0;
  openCard(`<form class="sf" role="search" onsubmit="return false">
      <span class="sf-icon">${SEARCH_ICON}</span>
      <input type="search" id="rm-find" placeholder="Title, author, series or tag" autocomplete="off" enterkeyhint="go" aria-label="Find a book" value="${esc(searchQ)}">
      <button type="button" class="sf-cancel" data-find-cancel>Cancel</button>
    </form>
    <ul class="sf-list" id="rm-find-list" role="listbox"></ul>`, 'search');
  shelfTools();
  const input = $('find');
  input.addEventListener('input', () => { searchQ = input.value; listMatches(); });
  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') { const first = $('find-list').querySelector('[data-hit]'); if (first) first.click(); }
    if (ev.key === 'Escape') closeSearch();
  });
  listMatches();
  setTimeout(() => input.focus(), 30);
}
function listMatches() {
  const hits = matches(searchQ);
  $('find-list').innerHTML = !searchQ.trim() ? '<li class="sf-empty">Type to find any book on your shelves.</li>'
    : hits.length ? hits.map((h) => `<li><button type="button" data-hit="${h.i}" data-id="${esc(h.b.id)}" role="option">
        <span class="sf-t">${esc(h.b.title)}</span><span class="sf-s">${esc([h.b.author, h.i < 0 ? 'Set aside · opens the book' : STATUS[stOf(h.b)] + (world.books.pages > 1 ? ` · bookcase ${allBooks()[h.i].page + 1}` : '')].filter(Boolean).join(' · '))}</span></button></li>`).join('')
    : '<li class="sf-empty">No book on your shelves matches that.</li>';
}
function closeSearch(goTo) {
  searching = false;
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  closeCard();
  if (goTo != null && goTo >= 0) {
    const e = allBooks()[goTo];
    if (e.page !== world.books.page) { turnCase(e.page, goTo); return; }
    browseIdx = goTo;
    // fly to it: frame the shelf around the book, then slide it out
    const to = framing('shelf');
    tween = { t: 0, dur: 0.8, flat: true, from: { pos: cam.pos.clone(), dir: lookDir(), dist: cam.dist }, to };
    selectBook(goTo, { focus: false });
  }
}

$('card-body').addEventListener('click', (e) => {
  if (e.target.closest('[data-find-cancel]')) { closeSearch(); return; }
  const hit = e.target.closest('[data-hit]');
  if (hit) {
    const i = Number(hit.dataset.hit);
    if (i < 0) { closeSearch(); openOnDesk(hit.dataset.id); return; }
    closeSearch(i); return;
  }
  const act = e.target.closest('[data-act]');
  if (act && act.dataset.act === 'putback') { closeUp(); return; }
  if (act && HOST) {
    const id = act.dataset.id, a = act.dataset.act;
    if (a === 'progress') HOST.openProgress(id);
    else if (a === 'open') openOnDesk(id);
    else if (a === 'add') HOST.addBook();
    else if (a === 'goals') HOST.openGoals();
    else if (a === 'year') HOST.openYear();
    else if (a === 'calendar') HOST.openCalendar();
    else if (a === 'timer-start') { HOST.startTimer(id); if (!settled) deskCard(); }
    else if (a === 'settle') { closeCard(); HOST.settle(id); }
    else if (a === 'life') { closeCard(); HOST.openLife(); }
    else if (a === 'timer-stop') { closeCard(); HOST.stopTimer(); }
    else if (a === 'start') { closeCard(); HOST.startBook(id); }
    else if (a === 'import') { closeCard(); HOST.openImport(); }
    else if (a === 'tour') tourCard(0);
    else if (a === 'tour-next') tourCard(Number(act.dataset.i));
    else if (a === 'tour-done') { markTour(); closeCard(); }
    else if (a === 'wake') { closeCard(); magic(); }
  }
});

// ---------------------------------------------------------------- a book slid out a little
let pulled = null;
function putBack() { if (pulled) { pulled.userData.anim = -1; pulled = null; } closeCard(); }
// k = 0 in its slot … 1 slid out: forward a few centimetres, its top tipped toward you
function pullPose(m, k) {
  const { home, homeRot } = m.userData;
  m.position.copy(home); m.position.z += k * 0.075; m.position.y += k * 0.012;
  m.rotation.set(homeRot.x + k * 0.12, homeRot.y + k * 0.04, homeRot.z * (1 - k));
}
function pulledPose(m) {
  const { home, homeRot } = m.userData;
  return { pos: home.clone().add(new THREE.Vector3(0, 0.012, 0.075)), q: new THREE.Quaternion().setFromEuler(new THREE.Euler(homeRot.x + 0.12, homeRot.y + 0.04, 0)) };
}
function animateBooks(dt) {
  let moving = false;
  for (const m of world.books.meshes) {
    if (m.userData.fly) continue;          // (on its way to or from the desk)
    if (m.userData.leave !== undefined || m.userData.enter !== undefined) {
      const out = m.userData.leave !== undefined;
      const key = out ? 'leave' : 'enter';
      m.userData[key] += dt * (out ? 5 : 3.2);
      const k = ease(THREE.MathUtils.clamp(m.userData[key], 0, 1));
      m.position.copy(m.userData.home); m.rotation.copy(m.userData.homeRot);
      m.position.z -= (out ? k : 1 - k) * 0.32;
      if (!out && m.userData.enter >= 1) { delete m.userData.enter; if (m !== pulled) m.position.copy(m.userData.home); }
      else if (!out || m.userData.leave < 1) moving = true;
      continue;
    }
    const a = m.userData.anim;
    if (a === undefined) continue;
    const out = m === pulled;
    m.userData.p = THREE.MathUtils.clamp((m.userData.p || 0) + (out ? dt : -dt) * 4, 0, 1);
    const k = ease(m.userData.p);
    pullPose(m, k);
    if (m.userData.glow) m.userData.glow.material.opacity = 0.22 * k;
    if (!out && m.userData.p === 0) { delete m.userData.anim; m.position.copy(m.userData.home); m.rotation.copy(m.userData.homeRot); }
    else if (!(out && m.userData.p === 1)) moving = true;
  }
  if (moving) renderer.shadowMap.needsUpdate = true;
  return moving;
}

// ---------------------------------------------------------------- carrying a book to the desk
// The second tap takes the book off the shelf. A copy of it with a real front cover (its cover art,
// or a plain cloth cover with the title in gold) slides out of the slot and floats across while the
// view pans to the desk. It lands on the leather and falls open to its real pages, and the camera
// leans in until the open book fills the screen; then the app's own open book (review, quotes, Edit)
// takes over in the same place. Closing it plays all of that backwards and the book goes home to its
// slot, still slid out a little. A tap while it's on its way skips straight to the open book.
const DESK_AT = new THREE.Vector3(-2.57, 0.758, -0.66);     // where the open spread lies
let outBook = null;        // { id, b, m, it, carry, from, phase: 'out' | 'open' | 'desk' | 'close' | 'back', t, dur, p0, q0, pending }
const NOMINAL = { t: 0.032, h: 0.24, d: 0.16 };
const DESK_Q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, -0.16, Math.PI / 2, 'YXZ'));
// lying on the desk, cover up, its top toward the window and its spine on your left
// (placed so that the spread, once it falls open to the left, is centred on DESK_AT)
function deskPose(it) {
  const pos = DESK_AT.clone().add(new THREE.Vector3(0, it.t / 2 + 0.001, 0)).add(new THREE.Vector3(0, 0, -it.d / 2).applyQuaternion(DESK_Q));
  return { pos, q: DESK_Q.clone() };
}
const bez = (a, c, b, t) => new THREE.Vector3().copy(a).multiplyScalar((1 - t) * (1 - t)).addScaledVector(c, 2 * (1 - t) * t).addScaledVector(b, t * t);
// u = 0 at the shelf (where it started: in its slot or slid out) … 1 lying on the desk
function flightPose(o, u) {
  const { home, homeRot } = o.m.userData, obj = o.carry.root;
  const qHome = new THREE.Quaternion().setFromEuler(homeRot);
  const out = home.clone().add(new THREE.Vector3(0, 0.03, 0.3));     // clear of the shelf
  const D = deskPose(o.it);
  const ctrl = out.clone().lerp(D.pos, 0.5).add(new THREE.Vector3(0, 0.3, 0.35));
  const S = 0.24;
  if (u < S) {
    const k = ease(u / S);
    obj.position.lerpVectors(o.p0, out, k); obj.quaternion.slerpQuaternions(o.q0, qHome, k);
  } else {
    const k = ease((u - S) / (1 - S));
    obj.position.copy(bez(out, ctrl, D.pos, k)); obj.quaternion.slerpQuaternions(qHome, D.q, k);
  }
}

// ---- the book you carry: boards, a page block in two halves and a front cover that swings open
// Built in the shelf book's own frame (x: thickness, y: height, z: depth with the spine at +z), so it
// starts exactly where the spine on the shelf was. The front half (cover and half the pages) turns
// about the spine and lands beside the back half: both page faces up, like a real open book.
function buildCarry(b, m) {
  const it = m ? m.userData.it : NOMINAL, { t, h, d } = it;
  const bd = Math.min(0.0035, t * 0.14), ph = h - 0.006, pd = d - 0.005;
  const [bg, ink] = colorOf(b);
  const cloth = std({ color: bg, roughness: 0.7 });
  const edge = std({ color: '#e7dabb', roughness: 0.95 });
  const coverMat = std({ map: canvasTex(plainCover(b, d / h), { repeat: false }), roughness: 0.55 });
  const pageMat = (side) => { const tx = canvasTex(pageCanvas(b, side, pd / ph), { repeat: false }); return std({ map: tx, roughness: 0.95, emissive: '#ffffff', emissiveMap: tx, emissiveIntensity: 0.3 }); };
  const root = new THREE.Group(); root.userData.dyn = true; scene.add(root);
  const add = (geo, mat, parent, x, y, z) => { const me = new THREE.Mesh(geo, mat); me.castShadow = true; me.receiveShadow = true; me.position.set(x, y, z); parent.add(me); return me; };
  const zp = d / 2 - pd / 2 - 0.0005;                          // the pages sit flush to the spine, a little in from the fore-edge
  // back half
  add(new THREE.BoxGeometry(bd, h, d), cloth, root, -t / 2 + bd / 2, 0, 0);
  add(new THREE.BoxGeometry(t / 2 - bd, ph, pd), edge, root, (-t / 2 + bd) / 2, 0, zp);
  add(new THREE.PlaneGeometry(pd - 0.004, ph - 0.004).rotateY(Math.PI / 2), pageMat('right'), root, 0.0004, 0, zp);
  // the spine, in two halves that fold under as it opens, painted like the spine on the shelf
  const spineHalf = (upper) => {
    const g = new THREE.PlaneGeometry(t / 2, h);
    let mat = cloth;
    if (m && m.material && m.geometry.attributes.uv) {
      const uv = m.geometry.attributes.uv, u0 = uv.getX(16), u1 = uv.getX(17), vT = uv.getY(16), vB = uv.getY(18), um = (u0 + u1) / 2;
      const [a, c] = upper ? [um, u1] : [u0, um];
      g.attributes.uv.array.set([a, vT, c, vT, a, vB, c, vB]); g.attributes.uv.needsUpdate = true;
      mat = m.material;
    }
    return { g, mat };
  };
  const lo = spineHalf(false); add(lo.g, lo.mat, root, -t / 4, 0, d / 2 + 0.0004);
  // front half, hinged at the spine
  const pivot = new THREE.Group(); pivot.position.set(0, 0, d / 2); root.add(pivot);
  add(new THREE.BoxGeometry(bd, h, d), cloth, pivot, t / 2 - bd / 2, 0, -d / 2);
  add(new THREE.BoxGeometry(t / 2 - bd, ph, pd), edge, pivot, (t / 2 - bd) / 2, 0, zp - d / 2);
  add(new THREE.PlaneGeometry(d, h).rotateY(Math.PI / 2), coverMat, pivot, t / 2 + 0.0004, 0, -d / 2);
  add(new THREE.PlaneGeometry(pd - 0.004, ph - 0.004).rotateY(-Math.PI / 2), pageMat('left'), pivot, -0.0004, 0, zp - d / 2);
  const hi = spineHalf(true); add(hi.g, hi.mat, pivot, t / 4, 0, 0.0004);
  root.traverse((o) => { o.userData.dyn = true; });
  // the real cover, as soon as it has loaded
  let live = true;
  coverImage(b).then((img) => {
    if (!live || !img) return;
    const old = coverMat.map; coverMat.map = canvasTex(artCover(img, d / h), { repeat: false }); coverMat.needsUpdate = true; old.dispose(); kick();
  });
  return {
    root, it,
    setOpen(k) { pivot.rotation.y = -Math.PI * k; },
    dispose() {
      live = false;
      root.traverse((o) => { if (!o.isMesh) return; o.geometry.dispose(); if (o.material !== (m && m.material)) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } });
      scene.remove(root);
    },
  };
}
// cover pictures: the app's (Open Library, or your own photo), fetched once per book
const coverImgs = new Map();
function coverImage(b) {
  const key = b.id + '|' + JSON.stringify(b.art || null);
  if (!coverImgs.has(key)) coverImgs.set(key, (async () => {
    const C = window.TomesteadCovers;
    if (!C || !C.coverSrc) return null;
    let src = null; try { src = await C.coverSrc(b, 'L'); } catch {}
    if (!src) return null;
    return new Promise((res) => {
      const im = new Image();
      if (!/^(data|blob):/.test(src)) im.crossOrigin = 'anonymous';      // so it can be drawn into the room
      const t = setTimeout(() => res(null), 8000);
      im.onload = () => { clearTimeout(t); res(im.naturalWidth > 2 ? im : null); };
      im.onerror = () => { clearTimeout(t); res(null); };
      im.src = src;
    });
  })());
  return coverImgs.get(key);
}
const COVER_W = 512;
function artCover(img, aspect) {
  const [c, x] = mkCanvas(COVER_W, Math.round(COVER_W / aspect));
  const s = Math.max(c.width / img.naturalWidth, c.height / img.naturalHeight);
  const w = img.naturalWidth * s, h = img.naturalHeight * s;
  x.drawImage(img, (c.width - w) / 2, (c.height - h) / 2, w, h);
  // the hinge groove near the spine and a little sheen, as on a real board
  const g = x.createLinearGradient(0, 0, c.width * 0.08, 0); g.addColorStop(0, 'rgba(0,0,0,.35)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, c.width * 0.08, c.height);
  return c;
}
const SERIF = '"IM Fell English", Georgia, serif', SANS = '-apple-system, "Segoe UI", Roboto, sans-serif';
function wrapLines(x, text, maxW) {
  const out = [];
  for (const para of String(text).split(/\n/)) {
    let line = '';
    for (const w of para.split(/\s+/).filter(Boolean)) {
      const tryL = line ? line + ' ' + w : w;
      if (x.measureText(tryL).width > maxW && line) { out.push(line); line = w; } else line = tryL;
    }
    out.push(line);
  }
  return out;
}
// the plain cloth cover the app uses when there's no picture: a gold frame, the title and author
function plainCover(b, aspect) {
  const [c, x] = mkCanvas(COVER_W, Math.round(COVER_W / aspect));
  const W = c.width, H = c.height, [bg, ink] = colorOf(b);
  x.fillStyle = bg; x.fillRect(0, 0, W, H);
  const v = x.createRadialGradient(W / 2, H * 0.4, W * 0.1, W / 2, H / 2, W * 0.9); v.addColorStop(0, 'rgba(255,255,255,.08)'); v.addColorStop(1, 'rgba(0,0,0,.28)');
  x.fillStyle = v; x.fillRect(0, 0, W, H);
  const gold = '#d9b46a';
  x.strokeStyle = gold; x.lineWidth = 6; x.strokeRect(W * 0.09, W * 0.09, W * 0.82, H - W * 0.18);
  x.lineWidth = 2; x.strokeRect(W * 0.12, W * 0.12, W * 0.76, H - W * 0.24);
  x.fillStyle = gold; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = `${Math.round(W * 0.07)}px ${SERIF}`; x.fillText('✦', W / 2, H * 0.22);
  let fs = W * 0.11; x.font = `${fs}px ${SERIF}`;
  let lines = wrapLines(x, b.title || '', W * 0.66);
  while (lines.length > 4 && fs > W * 0.07) { fs -= 2; x.font = `${fs}px ${SERIF}`; lines = wrapLines(x, b.title || '', W * 0.66); }
  lines = lines.slice(0, 5);
  const y0 = H * 0.44 - (lines.length - 1) * fs * 0.6;
  lines.forEach((l, i) => x.fillText(l, W / 2, y0 + i * fs * 1.2));
  const yl = y0 + lines.length * fs * 1.2;
  x.fillRect(W * 0.4, yl, W * 0.2, 3);
  if (b.author) { x.font = `italic ${Math.round(W * 0.058)}px ${SERIF}`; x.fillText(b.author, W / 2, yl + W * 0.1); }
  const g = x.createLinearGradient(0, 0, W * 0.08, 0); g.addColorStop(0, 'rgba(0,0,0,.35)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, W * 0.08, H);
  return c;
}
// the open pages, laid out like the app's open book (so the hand-over to it is seamless):
// on a wide screen details and the summary on the left, your review and favourite lines on the right;
// on a phone (one page at a time) the right-hand page carries the details and your review
const REVIEW_HEAD = { read: 'My review', reading: 'Thoughts so far', want: 'Why I want to read it', dnf: 'Why I put it down' };
const REVIEW_EMPTY = { read: 'You haven’t written a review yet.', reading: 'Nothing noted yet.', want: 'No note yet.', dnf: 'No note yet.' };
function pageCanvas(b, side, aspect) {
  const W = 900, H = Math.round(W / aspect), narrow = innerWidth < 720;
  const [c, x] = mkCanvas(W, H);
  x.fillStyle = '#f3e9d2'; x.fillRect(0, 0, W, H);
  // the gutter darkens toward the spine
  const gut = side === 'right' ? x.createLinearGradient(0, 0, W * 0.14, 0) : x.createLinearGradient(W, 0, W * 0.86, 0);
  gut.addColorStop(0, 'rgba(90,60,25,.28)'); gut.addColorStop(1, 'rgba(90,60,25,0)');
  x.fillStyle = gut; x.fillRect(0, 0, W, H);
  const pad = W * 0.1, maxW = W - pad * 2, bottom = H - W * 0.12;
  let y = W * 0.12;
  x.textBaseline = 'alphabetic'; x.textAlign = 'left';
  const ink = '#22170f', soft = '#5a4a3a', gold = '#9a6e22';
  const write = (text, font, color, lh, max = 99) => {
    x.font = font; x.fillStyle = color;
    const lines = wrapLines(x, text, maxW);
    for (const l of lines.slice(0, max)) { if (y + lh > bottom) return false; y += lh; x.fillText(l, pad, y); }
    return true;
  };
  const gap = (n) => { y += n; };
  const st = stOf(b), r = Number(b.rating) || 0;
  const info = () => {
    write(b.title || '', `${W * 0.072}px ${SERIF}`, ink, W * 0.082, 3);
    if (b.author) { gap(W * 0.01); write('by ' + b.author, `italic ${W * 0.04}px ${SERIF}`, soft, W * 0.05, 2); }
    if (st === 'read') { gap(W * 0.02); write(r ? starText(r) : 'Not rated', `${W * 0.045}px ${SERIF}`, gold, W * 0.06, 1); }
    const pr = st === 'reading' ? progressOf(b) : null;
    gap(W * 0.02);
    write([STATUS[st], pr ? pr.text : ''].filter(Boolean).join(' · '), `600 ${W * 0.03}px ${SANS}`, st === 'reading' ? '#8b2a1f' : soft, W * 0.045, 1);
    const meta = [b.finished ? `Finished ${fmtDate(b.finished)}` : '', b.series ? `Series: ${b.series}${b.seriesNo ? ' #' + b.seriesNo : ''}` : '', b.pages ? `${b.pages} pages` : ''].filter(Boolean);
    for (const l of meta) write(l, `${W * 0.03}px ${SANS}`, soft, W * 0.045, 1);
  };
  const rule = () => { gap(W * 0.04); if (y + W * 0.06 > bottom) return; x.font = `${W * 0.04}px ${SERIF}`; x.fillStyle = gold; x.textAlign = 'center'; x.fillText('❦', W / 2, y + W * 0.03); x.textAlign = 'left'; y += W * 0.06; };
  const heading = (t) => { gap(W * 0.03); write(t, `${W * 0.045}px ${SERIF}`, ink, W * 0.06, 1); gap(W * 0.01); };
  const review = () => {
    heading(REVIEW_HEAD[st] || 'My review');
    if (b.review) write(b.review, `${W * 0.036}px ${SERIF}`, ink, W * 0.052);
    else write(REVIEW_EMPTY[st] || '', `italic ${W * 0.034}px ${SERIF}`, soft, W * 0.05);
  };
  const quotes = () => {
    heading('Favorite lines');
    const qs = Array.isArray(b.quotes) ? b.quotes : [];
    if (!qs.length) write('+ Save a line you loved', `${W * 0.03}px ${SANS}`, '#7a4a1a', W * 0.045, 1);
    for (const q of qs.slice(0, 3)) { write('“' + q.text + '”', `italic ${W * 0.034}px ${SERIF}`, ink, W * 0.05, 4); gap(W * 0.015); }
  };
  const about = () => {
    heading('About the book');
    const a = b.about && b.about.text;
    write(a || 'No summary yet.', `${a ? '' : 'italic '}${W * 0.032}px ${SERIF}`, a ? ink : soft, W * 0.048);
  };
  if (side === 'left') { if (narrow) about(); else { info(); rule(); about(); } }
  else if (narrow) { info(); rule(); review(); rule(); quotes(); }
  else { review(); rule(); quotes(); }
  if (!narrow || side === 'left') { x.font = `italic ${W * 0.032}px ${SERIF}`; x.fillStyle = soft; x.textAlign = 'center'; x.fillText(side === 'left' ? 'i' : 'ii', W / 2, H - W * 0.05); }
  return c;
}

// ---- the camera, leaning in over the open book until it sits where the app draws its open book
// (the same sizes as reader.js geo(): one page on a phone, the whole spread on a wider screen)
function readingView(o) {
  const vw = innerWidth, vh = innerHeight, narrow = vw < 720;
  let Wb, Hb;
  if (narrow) { Wb = Math.min(vw * 0.9, 440); Hb = Math.min(Wb / 0.68, vh * 0.72); Wb = Hb * 0.68; }
  else { Hb = Math.min(vh * 0.78, 660, (vw * 0.92 / 2) / 0.68); Wb = Hb * 0.68; }
  const sx = narrow ? vw * 0.05 + Wb / 2 : vw / 2, sy = vh * (narrow ? 0.45 : 0.47);
  const { h, d } = o.it, pd = d - 0.005, ph = h - 0.006, zp = d / 2 - pd / 2 - 0.0005;
  const R = o.carry.root; R.updateMatrixWorld(true);
  const P = new THREE.Vector3(0, 0, narrow ? zp : d / 2).applyMatrix4(R.matrixWorld);
  const n = new THREE.Vector3(1, 0, 0).transformDirection(R.matrixWorld);       // the pages face this way (up)
  const top = new THREE.Vector3(0, 1, 0).transformDirection(R.matrixWorld);     // toward the top of the book
  const a = 0.2;                                                                 // looking down, tilted a touch, as if sitting at the desk
  const dir = n.clone().multiplyScalar(-Math.cos(a)).addScaledVector(top, Math.sin(a)).normalize();
  const vt = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
  const D = Math.max(ph / Hb, pd / (Wb * 1.08)) * vh / (2 * vt);                // as tall as the app's page (unless that makes it much wider)
  const up = new THREE.Vector3(0, 1, 0).addScaledVector(dir, -dir.y).normalize();
  const right = new THREE.Vector3().crossVectors(dir, up).normalize();
  const k = 2 * D * vt / vh;
  const T = P.clone().addScaledVector(right, -(sx - vw / 2) * k).addScaledVector(up, (sy - vh / 2) * k);
  return { pos: T.clone().addScaledVector(dir, -D), dir, dist: D };
}
function zoomTo(to, dur) {
  if (calm.matches) dur = Math.min(dur, 0.35);
  cam.yaw = 0; cam.pitch = 0; cam.vyaw = 0; cam.vpitch = 0;
  tween = { t: 0, dur, flat: true, from: { pos: cam.pos.clone(), dir: lookDir(), dist: cam.dist }, to };
}
const T_OUT = 1.45, T_OPEN = 0.8, T_ZOOM = 1.0, T_CLOSE = 0.65, T_BACK = 1.45;
const sped = (s) => (calm.matches ? Math.min(s, 0.4) : s);

function openOnDesk(id) {
  if (!world) return;
  if (outBook) { if (outBook.phase === 'back') outBook.pending = id; return; }
  const b = lib.books.find((x) => x.id === id);
  if (!b) return;
  closeCard(); cam.vx = 0;
  const m = world.books.byId.get(id) || null;
  if (pulled && pulled !== m) pulled.userData.anim = -1;
  pulled = null;
  const carry = buildCarry(b, m);
  const o = { id, b, m, it: carry.it, carry, from: station, phase: 'out', t: 0, dur: sped(T_OUT), camGo: false, zoomGo: false, p0: null, q0: null, pending: null };
  if (m) {
    // the carried copy takes the shelf book's place, exactly where it is now (in its slot or slid out)
    delete m.userData.anim; m.userData.p = 0;
    if (m.userData.glow) m.userData.glow.material.opacity = 0;
    carry.root.position.copy(m.position); carry.root.quaternion.copy(m.quaternion);
    o.p0 = m.position.clone(); o.q0 = m.quaternion.clone();
    m.visible = false;
    browseIdx = Math.max(0, indexOfMesh(m));
  } else {
    // (not on this bookcase, e.g. set aside: it's simply waiting on the desk)
    const D = deskPose(o.it); carry.root.position.copy(D.pos); carry.root.quaternion.copy(D.q); carry.root.visible = false;
  }
  outBook = o;
  world.desk.openBook.visible = false;      // the desk's own open book makes room
  if (world.tome) world.tome.rest();
  shelfTools();
  kick(4000);
}
function stepDesk(dt) {
  const o = outBook;
  if (!o || o.phase === 'desk') return;
  o.t += dt;
  if (o.phase === 'out') {
    const u = Math.min(1, o.t / o.dur);
    if (!o.camGo && u >= 0.12) { o.camGo = true; glide('desk', o.dur * 0.92, false); }
    if (o.m) flightPose(o, u);
    if (u >= 1 && o.camGo && !tween) { o.carry.root.visible = true; o.phase = 'open'; o.t = 0; }
  } else if (o.phase === 'open') {
    // it falls open, and the camera leans in as it does
    const k = Math.min(1, o.t / sped(T_OPEN));
    o.carry.setOpen(ease(k));
    if (!o.zoomGo && k >= 0.3) { o.zoomGo = true; zoomTo(readingView(o), T_ZOOM); }
    if (k >= 1 && o.zoomGo && !tween) handOff();
  } else if (o.phase === 'close') {
    // the camera pulls back while the cover swings shut
    const k = Math.min(1, Math.max(0, (o.t - sped(0.3)) / sped(T_CLOSE)));
    o.carry.setOpen(1 - ease(k));
    if (k >= 1 && !tween) startBack();
  } else if (o.phase === 'back') {
    const u = Math.min(1, o.t / o.dur);
    if (o.m) flightPose(o, 1 - u);
    if (u >= 1) homeAgain();
  }
  renderer.shadowMap.needsUpdate = true;
  kick(300);
}
// a tap while the book is on its way: straight to the open book
function skipAhead() {
  const o = outBook;
  if (!o || (o.phase !== 'out' && o.phase !== 'open')) return;
  const D = deskPose(o.it);
  o.carry.root.position.copy(D.pos); o.carry.root.quaternion.copy(D.q); o.carry.root.visible = true;
  o.carry.setOpen(1);
  station = 'desk';
  document.querySelectorAll('.stations button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.go === 'desk')));
  const v = readingView(o);
  tween = null; cam.pos.copy(v.pos); cam.dir.copy(v.dir); cam.dist = v.dist; cam.yaw = 0; cam.pitch = 0;
  o.camGo = o.zoomGo = true;
  renderer.shadowMap.needsUpdate = true;
  handOff();
}
// the app's open book takes over, right where the room's lies
function handOff() {
  const o = outBook;
  o.phase = 'desk';
  renderer.shadowMap.needsUpdate = true;
  kick();
  if (HOST && HOST.openOnDesk) {
    const ok = HOST.openOnDesk(o.id, { onClosed: () => { if (outBook === o) closeUp(); } });
    if (ok === false) closeUp();
    return;
  }
  bookCard(o.b);
}
function closeUp() {
  const o = outBook;
  if (!o || o.phase !== 'desk') return;
  if (cardKind === 'book') closeCard();
  o.phase = 'close'; o.t = 0;
  zoomTo(framing('desk'), 0.9);
  kick(2500);
}
function startBack() {
  const o = outBook;
  o.phase = 'back'; o.t = 0; o.dur = sped(T_BACK);
  if (o.m) {
    // back to its slot: slid out a little if you came from the shelf, so you can see where it went
    const P = o.from === 'shelf' ? pulledPose(o.m) : { pos: o.m.userData.home.clone(), q: new THREE.Quaternion().setFromEuler(o.m.userData.homeRot) };
    o.p0 = P.pos; o.q0 = P.q;
    browseIdx = Math.max(0, indexOfMesh(o.m));
  } else o.carry.root.visible = false;
  const to = o.from || home();
  glide(to, 1.4, !o.pending && (to === 'desk' || to === 'hearth' || to === 'tome'));
  kick(2000);
}
function homeAgain() {
  const o = outBook;
  outBook = null;
  o.carry.dispose();
  world.desk.openBook.visible = true;
  const m = o.m;
  if (m) {
    m.visible = true;
    if (o.from === 'shelf' && station === 'shelf') { pulled = m; m.userData.anim = 0; m.userData.p = 1; glowFor(m).material.opacity = 0.22; pullPose(m, 1); }
    else { m.position.copy(m.userData.home); m.rotation.copy(m.userData.homeRot); }
  }
  renderer.shadowMap.needsUpdate = true;
  shelfTools();
  kick();
  if (o.pending) setTimeout(() => openOnDesk(o.pending), 60);
}
// the shelf was re-made while the book was out (an edit, a sync): keep its new slot empty until it's back
function reacquireOutBook() {
  const o = outBook; if (!o) return;
  const nm = world.books.byId.get(o.id) || null;
  o.m = nm;
  if (!nm) return;
  nm.visible = false;
  if (o.phase === 'back') { const P = o.from === 'shelf' ? pulledPose(nm) : { pos: nm.userData.home.clone(), q: new THREE.Quaternion().setFromEuler(nm.userData.homeRot) }; o.p0 = P.pos; o.q0 = P.q; }
}
function dropOutBook() {
  const o = outBook; if (!o) return;
  outBook = null;
  o.carry.dispose();
  if (world) world.desk.openBook.visible = true;
  if (o.m) { o.m.visible = true; o.m.position.copy(o.m.userData.home); o.m.rotation.copy(o.m.userData.homeRot); }
}

// ---------------------------------------------------------------- the cards
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function fmtDate(d) { try { return new Date(d + 'T12:00:00').toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }); } catch { return d; } }
const STATUS = { read: 'Read', reading: 'Reading now', want: 'To read', dnf: 'Set aside' };
// stars as text, halves included: ★★★½☆
const starText = (v) => { const r = Math.round((Number(v) || 0) * 2) / 2, f = Math.floor(r), h = r - f ? 1 : 0; return '★'.repeat(f) + (h ? '½' : '') + '☆'.repeat(5 - f - h); };
function progressOf(b) {
  const pages = Number(b.pages) || 0, p = Number(b.progress) || 0;
  if (!p) return null;
  if ((b.format === 'ebook' || b.format === 'audio') || !pages) return { pct: Math.min(100, p), text: `${Math.round(p)}%` };
  return { pct: Math.min(100, (p / pages) * 100), text: `Page ${p} of ${pages}` };
}
function sampleNote() { return lib.sample ? '<div class="note">These are sample books. Open this page on the phone where you use Tomestead to see your own shelf here.</div>' : ''; }
// (the test page has no app to open the book in: a card stands in for it)
function bookCard(b) {
  const r = Number(b.rating) || 0;
  const pr = b.status === 'reading' ? progressOf(b) : null;
  const meta = [STATUS[b.status || 'read'], b.pages ? `${b.pages} pages` : '', b.format === 'audio' && b.hours ? `${b.hours} h audiobook` : '', b.finished ? `Finished ${fmtDate(b.finished)}` : ''].filter(Boolean).join(' · ');
  openCard(`<h2>${esc(b.title)}</h2>${b.author ? `<div class="by">${esc(b.author)}</div>` : ''}
    ${r && (b.status || 'read') === 'read' ? `<div class="stars">${starText(r)}</div>` : ''}
    <div class="meta">${esc(meta)}</div>
    ${pr ? `<div class="bar"><i style="width:${pr.pct}%"></i></div><div class="meta">${esc(pr.text)}</div>` : ''}
    <div class="note">In the app, the book opens here on the desk to your review.</div>${sampleNote()}
    <div class="acts"><button type="button" data-act="putback">Put it back</button></div>`, 'book');
}
function trophyCard(y) {
  const t = (lib.trophies || {})[y] || {};
  const n = Number(t.goal) || 0;
  openCard(`<div class="eyebrow">On the mantel</div><h2>${esc(y)} reading goal</h2>
    <div class="meta">${n ? `You set out to read ${n} ${n === 1 ? 'book' : 'books'} and did it${t.at ? ` (${esc(fmtDate(t.at))})` : ''}.` : 'Goal reached.'}</div>`, 'trophy');
}
function deskCard() {
  const reading = lib.books.filter((b) => b.status === 'reading');
  const t = HOST && HOST.timer ? HOST.timer() : null;
  const row = (b) => {
    const pr = progressOf(b), on = t && t.id === b.id;
    const acts = !HOST ? '' : on
      ? `<div class="acts"><button type="button" class="timer-on" data-act="timer-stop" data-id="${esc(b.id)}"><span class="rec"></span><span data-since="${t.start}">0:00</span> · Stop</button>${HOST.settle ? `<button type="button" class="quiet" data-act="settle" data-id="${esc(b.id)}">Settle in</button>` : ''}<button type="button" class="quiet" data-act="open" data-id="${esc(b.id)}">Open the book</button></div>`
      : `<div class="acts"><button type="button" data-act="timer-start" data-id="${esc(b.id)}">${t ? 'Switch timer here' : 'Start reading'}</button><button type="button" class="quiet" data-act="progress" data-id="${esc(b.id)}">Update progress</button><button type="button" class="quiet" data-act="open" data-id="${esc(b.id)}">Open</button></div>`;
    return `<li${on ? ' class="timing"' : ''}><b>${esc(b.title)}</b>${b.author ? ` · <i>${esc(b.author)}</i>` : ''}${pr ? `<div class="bar"><i style="width:${pr.pct}%"></i></div><span class="meta">${esc(pr.text)}</span>` : ''}${acts}</li>`;
  };
  if (HOST) {
    return openCard(`<div class="eyebrow">On the desk</div><h2>${reading.length ? 'Reading now' : 'Nothing open yet'}</h2>
      ${reading.length ? `<ul>${reading.map(row).join('')}</ul><div class="meta desk-tip">${t ? 'When you stop, tap Stop and tell it where you got to.' : 'Start reading dims the room, starts a timer and lights the fire. Stop it to log your time and page.'}</div>` : deskPile()}`, 'desk');
  }
  openCard(`<div class="eyebrow">On the desk</div><h2>${reading.length ? 'Reading now' : 'Nothing open yet'}</h2>
    ${reading.length ? `<ul>${reading.map(row).join('')}</ul>` : '<div class="meta">Start a book and it will lie open here.</div>'}
    <div class="note">In the app, the desk has a reading timer: start it when you sit down, stop it to log your time and page.</div>${sampleNote()}`, 'desk');
}
// nothing open: the top of the to-read pile, ready to start
function deskPile() {
  const want = wantOrder(lib.books.filter((b) => b.status === 'want')).slice(0, 3);
  if (!want.length) return `<div class="meta">Start a book and it will lie open here.</div><div class="acts"><button type="button" data-act="add">Add a book</button></div>`;
  const n = lib.books.filter((b) => b.status === 'want').length;
  return `<div class="meta">Pick one from your to-read pile${n > 3 ? ` (${n} waiting)` : ''} and it will lie open here.</div>
    <ul>${want.map((b) => `<li><b>${esc(b.title)}</b>${b.author ? ` · <i>${esc(b.author)}</i>` : ''}${b.upNext ? ' <span class="upnext">Up next</span>' : ''}
      <div class="acts"><button type="button" data-act="start" data-id="${esc(b.id)}">Start reading</button><button type="button" class="quiet" data-act="open" data-id="${esc(b.id)}">Open</button></div></li>`).join('')}</ul>
    <div class="acts"><button type="button" class="quiet" data-act="add">Add a different book</button></div>`;
}
// the to-read pile: books marked "Up next" first (in the order you marked them), then newest first
function wantOrder(list) {
  return [...list].sort((a, b) => (!a.upNext - !b.upNext) || ((Number(a.upNext) || 0) - (Number(b.upNext) || 0)) || (Number(b.addedAt) || 0) - (Number(a.addedAt) || 0));
}
function magic() {
  world.tome.wake();
  if (HOST) { setTimeout(() => HOST.openRecs(), 650); return; }
  const want = lib.books.filter((b) => b.status === 'want').slice(0, 4);
  openCard(`<div class="eyebrow">The tome stirs…</div><h2>What to read next</h2>
    ${want.length ? `<div class="meta">Waiting on your to-read pile:</div><ul>${want.map((b) => `<li><b>${esc(b.title)}</b>${b.author ? ` · <i>${esc(b.author)}</i>` : ''}</li>`).join('')}</ul>` : '<div class="meta">Your to-read pile is empty.</div>'}
    <div class="note">In the app, this is where "What to read next" would open, with picks from Open Library based on the books you rate highest.</div>${sampleNote()}`);
}
function hearthCard() {
  const sk = HOST && HOST.streak ? HOST.streak() : null;
  const streak = sk ? (sk.cur ? `<div class="streak"><span class="flame" aria-hidden="true"></span><b>${sk.cur}</b> ${sk.cur === 1 ? 'day' : 'days'} in a row${sk.readToday ? '' : ' · read today to keep it going'}</div>`
    : `<div class="meta">${sk.best ? `Your longest streak is ${sk.best} ${sk.best === 1 ? 'day' : 'days'}. Read today to start a new one.` : 'Read today to start a streak.'}</div>`) : '';
  openCard(`<div class="eyebrow">By the fire</div><h2>Goals, streaks and trophies</h2>
    ${streak}
    <div class="meta">Your streak, goals and year in books live by the fire. Trophies you earn stand on the mantel.</div>
    <div class="acts"><button type="button" data-act="calendar">Reading calendar</button><button type="button" class="quiet" data-act="goals">Reading goals</button><button type="button" class="quiet" data-act="year">Year in review</button>${HOST && HOST.openLife ? '<button type="button" class="quiet" data-act="life">Your reading life</button>' : ''}</div>`, 'hearth');
}
let cardKind = '', clockTimer = null;
function openCard(html, kind = '') {
  cardKind = kind;
  $('card-body').innerHTML = html; $('card').hidden = false;
  $('card').classList.toggle('searchcard', kind === 'search');
  if (kind !== 'search') searching = false;
  shelfTools();
  clearInterval(clockTimer); clockTimer = null;
  // a running reading timer ticks on the card
  if ($('card-body').querySelector('[data-since]')) {
    const tickClock = () => $('card-body').querySelectorAll('[data-since]').forEach((el) => { el.textContent = clockText(Date.now() - Number(el.dataset.since)); });
    tickClock(); clockTimer = setInterval(tickClock, 1000);
  }
}
function closeCard() { $('card').hidden = true; cardKind = ''; searching = false; clearInterval(clockTimer); clockTimer = null; shelfTools(); }
function clockText(ms) {
  const t = Math.max(0, Math.floor(ms / 1000)), h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), p2 = (n) => String(n).padStart(2, '0');
  return h ? `${h}:${p2(m)}:${p2(t % 60)}` : `${m}:${p2(t % 60)}`;
}
$('card').querySelector('.card-x').addEventListener('click', () => { if (cardKind === 'tour') markTour(); if (outBook) { closeUp(); return; } if (cardKind !== 'search') putBack(); closeCard(); });
document.querySelectorAll('.stations button').forEach((b) => b.addEventListener('click', () => { putBack(); go(b.dataset.go === 'room' ? home() : b.dataset.go); kick(); }));
if ($('light')) $('light').addEventListener('click', () => { mode = mode === 'day' ? 'night' : 'day'; world.applyLook(); kick(); });
addEventListener('keydown', (e) => {
  if (!active || outBook || document.querySelector('dialog[open]') || /^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement && document.activeElement.tagName) || '')) return;
  const order = [home(), 'shelf', 'desk', 'hearth', 'tome'];
  if (station === 'shelf' && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) { selectBook(browseIdx + (e.key === 'ArrowRight' ? 1 : -1)); kick(); return; }
  if (station === 'shelf' && e.key === 'Enter' && pulled) { e.preventDefault(); openOnDesk(pulled.userData.book.id); return; }
  if (station === 'shelf' && (e.key === '/' || (e.key === 'f' && (e.metaKey || e.ctrlKey)))) { e.preventDefault(); openSearch(); return; }
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') go(order[(Math.max(0, order.indexOf(isHome(station) ? home() : station)) + (e.key === 'ArrowRight' ? 1 : 4)) % 5]);
  if (e.key === 'Escape') { putBack(); closeCard(); }
  kick();
});


// ---------------------------------------------------------------- dollhouse overlays
// brass pins over the little room (tap one to walk over), the Step inside / Whole room switch,
// and a Reading now card under the dollhouse
const ROOT = canvas.parentElement;
const PINS = [['shelf', 'Shelf', [0, 2.3, -2.45]], ['desk', 'Desk', [-2.55, 1.15, -0.6]], ['hearth', 'Fireside', [-2.72, 1.5, 1.6]], ['tome', 'Tome', [2.25, 1.55, 0.1]]];
const pinBox = document.createElement('div');
pinBox.className = 'pins'; pinBox.hidden = true;
pinBox.innerHTML = PINS.map(([st, label]) => `<button type="button" class="pin" data-pin="${st}"><span class="pin-label">${label}</span><span class="pin-dot" aria-hidden="true"></span></button>`).join('');
ROOT.appendChild(pinBox);
pinBox.addEventListener('click', (e) => { const b = e.target.closest('[data-pin]'); if (b) { go(b.dataset.pin); kick(); } });
const swap = document.createElement('button');
swap.type = 'button'; swap.className = 'view-swap'; swap.hidden = true;
ROOT.appendChild(swap);
swap.addEventListener('click', () => { setHome(home() === 'house' ? 'room' : 'house'); go(home()); kick(); });
const nowEl = document.createElement('section');
nowEl.className = 'now-card'; nowEl.hidden = true; nowEl.setAttribute('aria-label', 'Reading now');
ROOT.appendChild(nowEl);
nowEl.addEventListener('click', (e) => {
  const a = e.target.closest('[data-now]'); if (!a || !HOST) return;
  const id = a.dataset.id;
  if (a.dataset.now === 'settle') { const t = HOST.timer && HOST.timer(); if (t && t.id === id && HOST.settle) HOST.settle(id); else HOST.startTimer(id); }
  else if (a.dataset.now === 'open') openOnDesk(id);
  kick();
});
// the book you're most likely reading right now
function nowBook() {
  const r = lib.books.filter((b) => b.status === 'reading');
  if (!r.length) return null;
  const at = (b) => Math.max(Number(b.progressAt) || 0, Date.parse(b.started || '') || 0, Number(b.addedAt) || 0);
  return r.sort((a, b) => at(b) - at(a))[0];
}
function nowWhere(b) {
  const p = Number(b.progress) || 0;
  if (b.format === 'ebook' || b.format === 'audio' || !b.pages) return p ? `${Math.round(p)}%` : 'Just started';
  return p ? `p. ${p} of ${b.pages}` : 'Just started';
}
function nowPct(b) { const p = Number(b.progress) || 0; return b.format === 'ebook' || b.format === 'audio' || !b.pages ? Math.min(100, p) : Math.min(100, Math.round((p / b.pages) * 100)); }
let nowSig = '';
function paintNow(b) {
  const t = HOST && HOST.timer ? HOST.timer() : null;
  const sig = b ? [b.id, b.title, b.progress, b.pages, t && t.id].join('|') : '';
  if (sig === nowSig) return;
  nowSig = sig;
  if (!b) { nowEl.innerHTML = ''; return; }
  const going = t && t.id === b.id;
  nowEl.innerHTML = `<div class="now-row"><span class="now-spine" style="background:${esc(b.color || '#7a2f2f')}" aria-hidden="true"></span>
    <div class="now-text"><p class="now-eyebrow">Reading now · ${esc(nowWhere(b))}</p><p class="now-title">${esc(b.title)}</p>
    <div class="now-bar"><span style="width:${nowPct(b)}%"></span></div></div></div>
    <div class="now-acts"><button type="button" class="now-go" data-now="settle" data-id="${esc(b.id)}">${going ? 'Back to reading' : 'Settle in and read'}</button>
    <button type="button" class="now-open" data-now="open" data-id="${esc(b.id)}">Open</button></div>`;
}
const pv = new THREE.Vector3();
function overlays() {
  const calmNow = !!tween || customizing || settled || !!outBook || !world;
  const atHouse = station === 'house' && !calmNow;
  pinBox.hidden = !atHouse;
  if (atHouse) {
    pinBox.querySelectorAll('.pin').forEach((el, i) => {
      pv.set(...PINS[i][2]).project(camera);
      el.style.transform = `translate(${((pv.x + 1) / 2) * innerWidth}px, ${((1 - pv.y) / 2) * innerHeight}px) translate(-50%, -100%)`;
    });
  }
  const showSwap = !calmNow && isHome(station) && !!HOST;
  swap.hidden = !showSwap;
  if (showSwap) {
    const inHouse = station === 'house';
    const label = inHouse ? 'Step inside' : 'Whole room';
    if (swap.dataset.k !== label) {
      swap.dataset.k = label;
      swap.innerHTML = inHouse
        ? `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M4 20V5.5L12 3l8 2.5V20M9 20v-6h6v6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>${label}`
        : `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M3 9l9-6 9 6-9 6-9-6zM3 9v6l9 6 9-6V9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>${label}`;
      swap.setAttribute('aria-label', inHouse ? 'Step inside the room' : 'See the whole room, like a dollhouse');
    }
    swap.style.top = `${Math.round(topInset() + 2)}px`;
  }
  const b = atHouse && HOST && $('card').hidden ? nowBook() : null;
  paintNow(b);
  nowEl.hidden = !b;
}

// ---------------------------------------------------------------- loop (and keeping it fast)
let world = null, last = performance.now(), lastRender = 0, activeUntil = 0, firstFrameAt = 0;
const perf = { busy: [], fpsMoving: 0, frames: 0, fpsNow: 0, tick: performance.now() };
function kick(ms = 1200) { activeUntil = performance.now() + ms; }
function resize() {
  camera.aspect = viewW() / viewH();
  if (!tween) camera.fov = fovFor(station);
  if (inset.r || inset.b) camera.setViewOffset(viewW(), viewH(), 0, 0, innerWidth, innerHeight);
  else camera.clearViewOffset();
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight, false);
  if (world && !tween) { const f = outBook && outBook.phase === 'desk' ? readingView(outBook) : framing(station); cam.pos.copy(f.pos); cam.dir.copy(f.dir); cam.dist = f.dist; }
  kick();
}
addEventListener('resize', resize);
let active = true;
function frame(now) {
  requestAnimationFrame(frame);
  if (!active) return;
  const busy = !!tween || !!drag || !!turning || (outBook && outBook.phase !== 'desk') || !!cam.vx || Math.abs(cam.vyaw) + Math.abs(cam.vpitch) > 1e-4 || now < activeUntil;
  // when nothing is moving, only the dust and candles drift: 30 frames a second is plenty
  if (!busy && now - lastRender < (settled ? 66 : 32)) return;   // reading mode: the fire still flickers, at 15 fps
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  const t = now / 1000;
  if (turning && (turning.t += dt) > 0.34) finishTurn();
  updateCamera(dt);
  overlays();
  stepDesk(dt);
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
if (HOST && params.get('perf') !== '1') $('perf-btn').hidden = true;
$('perf-btn').addEventListener('click', () => { const p = $('perf'); p.hidden = !p.hidden; $('perf-btn').setAttribute('aria-expanded', String(!p.hidden)); if (!p.hidden) showPerf(); });
document.addEventListener('visibilitychange', () => { last = performance.now(); });

// ---------------------------------------------------------------- start
// frame the shelf on the rows that hold books, close enough to read the spines
function frameShelf() {
  const bys = world.books.meshes.map((m) => m.userData.home.y);
  if (bys.length) { const cy = (Math.min(...bys) + Math.max(...bys)) / 2; STATIONS.shelf.t[1] = cy; STATIONS.shelf.p[1] = cy + 0.2; }
  const ys = world.books.meshes.flatMap((m) => [m.userData.home.y - m.userData.it.h / 2, m.userData.home.y + m.userData.it.h / 2 + 0.03]);
  shelfY = ys.length ? [Math.min(...ys), Math.max(...ys)] : null;
  const bxs = world.books.meshes.flatMap((m) => [m.userData.home.x - m.userData.it.t / 2, m.userData.home.x + m.userData.it.t / 2]);
  shelfSpan = bxs.length ? [Math.min(...bxs) - 0.07, Math.max(...bxs) + 0.07] : null;   // a little room for the bookends
}
// what the room shows from the library; when this changes, the books are shelved again
const libSig = () => JSON.stringify([lib.books.map((b) => [b.id, b.title, b.author, b.status, b.rating, b.pages, b.hours, b.format, b.color, b.addedAt, b.upNext]),
  lib.theme.bookend, lib.theme.bookends, lib.theme.trinkets]);
const cupSig = () => JSON.stringify(lib.trophies || {});
const deskSig = () => JSON.stringify(lib.theme.tableItems || null);
let lastSig = '', lastPaint = '', lastCups = '', lastDesk = '', lastWood = '', lastVine = '';
// the app calls this after anything changes (a book added or edited, settings, a sync)
function refresh() {
  if (!HOST || !world) return;
  lib = fromHost();
  const sig = libSig();
  if (sig !== lastSig) {
    lastSig = sig;
    const was = pulled && pulled.userData.book.id;
    pulled = null;
    world.books.refill();
    frameShelf();
    reacquireOutBook();
    browseIdx = Math.min(browseIdx, Math.max(0, allBooks().length - 1));
    renderer.shadowMap.needsUpdate = true;
    // the book you'd slid out stays slid out (it may have moved, if its status changed)
    if (was && station === 'shelf' && !outBook) { const i = allBooks().findIndex((e) => e.b.id === was); if (i >= 0 && allBooks()[i].page === world.books.page) selectBook(i, { focus: false }); }
    if (station === 'shelf' && !world.books.meshes.length && cardKind !== 'search') closeCard();
    shelfTools();
  }
  if (cupSig() !== lastCups) { lastCups = cupSig(); world.furniture.hearth.setTrophies(lib.trophies); }
  if (deskSig() !== lastDesk) { lastDesk = deskSig(); world.desk.dress(); }
  if (paintSig() !== lastPaint) { lastPaint = paintSig(); hangPaintings(); }
  if ((lib.theme.wood || 'oak') !== lastWood) { lastWood = lib.theme.wood || 'oak'; world.setWood(lastWood); }
  if ((lib.theme.vine || 'roses') !== lastVine) { lastVine = lib.theme.vine || 'roses'; world.books.setVine(lastVine); kick(); }
  // the timer or the calendar may have changed: keep the desk and fireside cards current
  if (!$('card').hidden && cardKind === 'desk') deskCard();
  if (!$('card').hidden && cardKind === 'hearth') hearthCard();
  // the first book is in: the welcome gives way to the tour
  if (!$('card').hidden && cardKind === 'welcome' && lib.books.length) { closeCard(); if (!tourSeen()) tourCard(0); }
  const m = lightNow(lib.theme.light || 'system');
  if (m !== mode && !settled) { mode = m; world.applyLook(); }
  else if ((lib.theme.nightWall || 'green') !== lastWall) world.applyLook();
  lastWall = lib.theme.nightWall || 'green';
  kick();
}
let lastWall = '';
// reading mode (ritual.js): the room goes to lamplight and the view settles by the armchair, then
// comes back the way it was when you're done
let settled = false;
function settle(on) {
  if (!world || on === settled) return;
  settled = on;
  if (on) {
    if (!outBook) { putBack(); closeCard(); glide('read', 2.4, false); }
    if (mode !== 'night') { mode = 'night'; world.applyLook(); renderer.shadowMap.needsUpdate = true; }
  } else {
    const m = lightNow(lib.theme.light || 'system');
    if (m !== mode) { mode = m; world.applyLook(); renderer.shadowMap.needsUpdate = true; }
    if (!outBook) glide(home(), 2.0, false);
  }
  kick(2600);
}
function setActive(on) {
  active = !!on;
  if (active) { last = performance.now(); resize(); kick(); }
  else { dropOutBook(); putBack(); closeCard(); }
  shelfTools();
}

(async () => {
  resize();
  world = await build();
  lastSig = libSig();
  lastPaint = paintSig(); hangPaintings();
  lastCups = cupSig(); world.furniture.hearth.setTrophies(lib.trophies);
  lastDesk = deskSig();
  lastWood = lib.theme.wood || 'oak'; lastVine = lib.theme.vine || 'roses';
  frameShelf();
  const start = params.get('st') && STATIONS[params.get('st')] ? params.get('st') : null;
  const f = framing(start || 'room');
  cam.pos.copy(f.pos); cam.dir.copy(f.dir); cam.dist = f.dist;
  if (!start) { cam.pos.z = Math.min(2.6, cam.pos.z + 0.9); cam.pos.y += 0.3; cam.pitch = -0.12; }
  if (start === 'house') setFov(fovFor('house'));
  if (params.get('yaw')) cam.yaw = Number(params.get('yaw'));
  updateCamera(0);
  renderer.compile(scene, camera);
  requestAnimationFrame(frame);
  // Customize (app.js): frame the room beside the panel and glide to what's being changed
  const customize = (on, r = 0, b = 0) => {
    if (on && !customizing) { dropOutBook(); putBack(); closeCard(); if (pulled) { pulled.userData.anim = -1; pulled = null; } }
    customizing = !!on; inset = on ? { r, b } : { r: 0, b: 0 };
    document.documentElement.classList.toggle('rm-customizing', customizing);
    resize(); shelfTools();
  };
  const show = (st) => { if (!STATIONS[st]) return; if (customizing) { glide(st, 1.1, false); kick(); } else go(st); };
  window.TomesteadRoom = { refresh, setActive, customize, show, settle, go: (st) => go(st), openBook: (id) => openOnDesk(id), tour: () => { go(home(), 1.5, { arrive: false }); tourCard(0); kick(); }, home: () => home(), setHome: (v) => { setHome(v); go(home()); kick(); } };
  if (HOST && HOST.ready) HOST.ready(window.TomesteadRoom);
  // the title screen stays up long enough to read its quote (tap to step in sooner)
  const Q = window.TomesteadQuotes, veil = $('veil');
  const wait = Math.max(0, (Q ? T0 + Q.readMs : 0) - performance.now());
  await new Promise((done) => {
    if (!wait) return done();
    veil.classList.add('ready');
    $('veil-sub').textContent = 'Tap to step inside';
    const t = setTimeout(done, wait);
    veil.addEventListener('pointerup', () => { clearTimeout(t); done(); }, { once: true });
  });
  if (Q) Q.seen();
  requestAnimationFrame(() => {
    veil.classList.add('gone');
    setTimeout(() => veil.remove(), 1400);
    if (!start && !customizing) go(home(), 2.6);
    else { station = start; pressStation(start); if (start === 'house') setFov(fovFor('house')); shelfTools(); }
    setTimeout(() => { $('hint').classList.add('show'); setTimeout(() => $('hint').classList.remove('show'), 4200); }, start ? 300 : 2600);
    if (params.get('perf') === '1') { $('perf').hidden = false; showPerf(); }
  });
})();
