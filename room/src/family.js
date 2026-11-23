/* Tomestead · the family room: a smaller parlor of its own (its own scene, its own light), where each
   family member's shelves stand: two bookcases along each side wall, a hearth on the back wall with
   a family painting over it, two armchairs on a round rug. The shelves come from each family reader's
   shared summary (sync.js → familyShelves): titles, authors, stars and status, never reviews.
   More than four readers: ‹ › turns to the next four. */
export function buildFamilyRoom(K, shelves, page = 0) {
  const { THREE, M, mats, MOD } = K;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#120c08');
  scene.environment = K.envMap;
  const G = new THREE.Group(); scene.add(G);
  const box = (w, h, d, mat, x, y, z, parent = G, opts) => K.box(w, h, d, mat, x, y, z, parent, opts);
  const mesh = (geo, mat, parent = G, opts) => K.mesh(geo, mat, parent, opts);
  const XW = 2.4, ZD = 2.2, H = 2.85;

  // ---- the room: a sage damask wallpaper over panelling, oak boards, a beamed ceiling
  const floor = mesh(new THREE.PlaneGeometry(XW * 2, ZD * 2).rotateX(-Math.PI / 2), mats.floor, G, { cast: false }); K.worldUV(floor.geometry);
  const paper = K.std({ map: K.canvasTex(damaskTex(K), { repeat: true }), roughness: 0.85 }); paper.map.repeat.set(1 / 0.55, 1 / 0.55);
  // walls (world-scale texture coordinates, so the pattern is the same size everywhere)
  box(XW * 2, H, 0.02, paper, 0, H / 2, -ZD - 0.01, G, { cast: false });
  box(XW * 2, H, 0.02, paper, 0, H / 2, ZD + 0.01, G, { cast: false });
  box(0.02, H, ZD * 2, paper, -XW - 0.01, H / 2, 0, G, { cast: false });
  box(0.02, H, ZD * 2, paper, XW + 0.01, H / 2, 0, G, { cast: false });
  for (const [w, x, z, ry] of [[XW * 2, 0, -ZD + 0.015, 0], [XW * 2, 0, ZD - 0.015, Math.PI], [ZD * 2, -XW + 0.015, 0, Math.PI / 2], [ZD * 2, XW - 0.015, 0, -Math.PI / 2]]) {
    const g = new THREE.BoxGeometry(w, 0.9, 0.03).rotateY(ry).translate(x, 0.45, z); K.worldUV(g); mesh(g, mats.panel);
    const r = new THREE.BoxGeometry(w, 0.045, 0.06).rotateY(ry).translate(x, 0.92, z); mesh(r, M.trim);
    const c = new THREE.BoxGeometry(w, 0.12, 0.1).rotateY(ry).translate(x, H - 0.06, z); mesh(c, M.trim);
  }
  box(XW * 2, 0.08, ZD * 2, M.beam, 0, H + 0.04, 0, G, { cast: false });
  for (const x of [-1.2, 0, 1.2]) box(0.16, 0.2, ZD * 2, M.beam, x, H - 0.1, 0, G, { cast: false });

  // ---- the hearth on the back wall, and a painting over it
  const hz = -ZD + 0.02;
  box(1.4, 1.05, 0.28, M.stoneSurround, 0, 0.525, hz + 0.14);
  box(0.78, 0.68, 0.05, M.dark, 0, 0.34, hz + 0.27);
  const ember = K.std({ color: '#2a0f05', emissive: '#ff7a2a', emissiveIntensity: 0.5, roughness: 0.9 });
  box(0.6, 0.06, 0.12, ember, 0, 0.08, hz + 0.25);
  box(1.6, 0.06, 0.38, M.trim, 0, 1.08, hz + 0.19);
  box(1.6, 0.04, 0.6, M.slate, 0, 0.02, hz + 0.4);
  if (MOD.candlestick) for (const sx of [-1, 1]) { const c = MOD.candlestick.clone(true); c.position.set(sx * 0.62, 1.11, hz + 0.18); G.add(c); }
  // a gilt frame, 0.95 × 0.72; the family painting if there is one, otherwise a landscape
  const fw = 0.95, fh = 0.72, fy = 1.72;
  const canvasMat = K.std({ color: '#3a2a1c', roughness: 0.75 });
  const cv = mesh(new THREE.PlaneGeometry(fw, fh), canvasMat, G, { cast: false }); cv.position.set(0, fy, hz + 0.03);
  for (const [w, h, x, y] of [[fw + 0.16, 0.08, 0, fy + fh / 2 + 0.04], [fw + 0.16, 0.08, 0, fy - fh / 2 - 0.04], [0.08, fh, -fw / 2 - 0.04, fy], [0.08, fh, fw / 2 + 0.04, fy]]) box(w, h, 0.05, M.gold, x, y, hz + 0.035);
  K.paintingImage().then((img) => { if (!img) return; canvasMat.map = K.canvasTex(img, { repeat: false }); canvasMat.color.set('#ffffff'); canvasMat.needsUpdate = true; K.kick(); });

  // ---- a round rug, two armchairs and a footstool facing the fire
  const rug = mesh(new THREE.CircleGeometry(1.15, 64).rotateX(-Math.PI / 2), K.std({ map: K.canvasTex(K.roundRugTex(), { repeat: false }), roughness: 0.95 }), G, { cast: false }); rug.position.set(0, 0.004, -0.2);
  const place = (src, x, z, ry, s = 1) => { if (!src) return; const o = src.clone(true); o.position.set(x, 0, z); o.rotation.y = ry; o.scale.setScalar(s); o.traverse((q) => { if (q.isMesh) { q.castShadow = true; q.receiveShadow = true; } }); G.add(o); };
  place(MOD.armchair, -0.75, 0.55, Math.PI * 0.85);
  place(MOD.armchair, 0.75, 0.55, -Math.PI * 0.85);
  place(MOD.ottoman, 0, -0.45, 0, 0.7);
  if (MOD.chandelier) { const c = MOD.chandelier.clone(true); c.position.set(0, H - 0.908 * 0.7, -0.1); c.scale.setScalar(0.7); G.add(c); }

  // ---- the bookcases: two per side wall, one per family reader
  const SLOTS = [{ x: -XW, dir: 1, z: -0.95 }, { x: XW, dir: -1, z: -0.95 }, { x: -XW, dir: 1, z: 1.05 }, { x: XW, dir: -1, z: 1.05 }];
  const members = shelves.slice(page * 4, page * 4 + 4);
  const cases = [], spineMeshes = [];
  const CW = 1.5, CH = 2.2, CD = 0.34, ROWS = 5;
  members.forEach((mem, i) => {
    const s = SLOTS[i];
    const C = new THREE.Group(); G.add(C);
    C.position.set(s.x, 0, s.z); C.rotation.y = s.dir > 0 ? Math.PI / 2 : -Math.PI / 2;   // the case's +z faces into the room
    // frame
    box(CW + 0.04, 0.1, CD + 0.02, M.caseDark, 0, 0.05, CD / 2, C);
    for (const sx of [-1, 1]) box(0.05, CH - 0.1, CD, M.caseSide, sx * (CW / 2 - 0.025), 0.1 + (CH - 0.1) / 2, CD / 2, C);
    box(CW - 0.1, CH - 0.1, 0.02, M.recessWood || M.recess, 0, 0.1 + (CH - 0.1) / 2, 0.01, C);
    box(CW + 0.08, 0.1, CD + 0.06, M.trim, 0, CH + 0.05, CD / 2 + 0.01, C);
    const rowH = (CH - 0.2) / ROWS, rows = [];
    for (let r = 0; r <= ROWS; r++) { const y = 0.1 + r * rowH; box(CW - 0.1, 0.025, CD - 0.02, M.caseShelf, 0, y, CD / 2, C); if (r < ROWS) rows.push(y + 0.0125); }
    // a brass plate with their name, and how many they've read
    const nRead = mem.books.filter((b) => b.s === 'read').length;
    const pl = mesh(new THREE.PlaneGeometry(0.42, 0.07), K.std({ map: K.canvasTex(K.plateTex(`${mem.name} · ${nRead} read`, 768, 128), { repeat: false }), roughness: 0.35, metalness: 0.6 }), C, { cast: false });
    pl.position.set(0, CH + 0.05, CD + 0.042);
    // their books: reading now, then to read, then read (newest first), as many as fit
    const order = { reading: 0, want: 1, read: 2, dnf: 3 };
    const list = [...mem.books].filter((b) => b.s !== 'dnf').sort((a, b) => (order[a.s] - order[b.s]) || ((b.d || 0) - (a.d || 0)));
    const placed = [];
    let row = ROWS - 1, x = -CW / 2 + 0.07;
    for (const b of list) {
      const h0 = K.hash(b.t + '|' + b.a), pages = b.h ? b.h * 30 : b.p || 0;
      const t = (pages > 0 ? Math.min(60, Math.max(22, 18 + pages / 16)) : 24 + ((h0 >>> 5) % 26)) * 0.00082;
      const h = Math.min(rowH - 0.035, (176 + (h0 % 66)) * 0.00118), d = 0.15 + (h0 % 5) * 0.011;
      if (x + t > CW / 2 - 0.07) { row--; x = -CW / 2 + 0.07; if (row < 0) break; }
      placed.push({ b, x: x + t / 2, y: rows[row] + h / 2, t, h, d });
      x += t + 0.002;
    }
    const more = list.length - placed.length;
    // one lettered texture and one merged mesh per case (one draw call); taps find the book by face
    const atlas = paintSpines(K, placed);
    const geos = placed.map((p, k) => {
      const g = new THREE.BoxGeometry(p.t, p.h, p.d);
      const { U0, U1, VT, VB, sw, pg } = atlas.slots[k];
      const uv = g.attributes.uv;
      for (let f = 0; f < 6; f++) for (let q = 0; q < 4; q++) {
        const j = f * 4 + q;
        if (f === 4) uv.setXY(j, U0 + uv.getX(j) * (U1 - U0), VB + uv.getY(j) * (VT - VB));
        else if (f === 2 || f === 3) uv.setXY(j, pg[0], pg[1]);
        else uv.setXY(j, sw[0], sw[1]);
      }
      g.translate(p.x, p.y, CD - 0.03 - p.d / 2);
      return g;
    });
    if (geos.length) {
      const merged = K.mergeGeometries(geos, false);
      geos.forEach((g) => g.dispose());
      const sm = mesh(merged, K.std({ map: K.canvasTex(atlas.canvas, { repeat: false }), roughness: 0.72 }), C);
      sm.userData = { famBooks: placed.map((p) => p.b), member: mem.name, slot: i };
      spineMeshes.push(sm);
    }
    // a tap anywhere on the case walks you up to it
    const hit = new THREE.Mesh(new THREE.BoxGeometry(CW, CH, CD), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.set(0, CH / 2, CD / 2); hit.userData.famCase = i; C.add(hit);
    // where the camera stands to read this case (in the room's own coordinates)
    const t = new THREE.Vector3(s.x + s.dir * 0.1, 1.15, s.z), p = new THREE.Vector3(s.x + s.dir * 1.6, 1.4, s.z);
    cases.push({ name: mem.name, more, count: list.length, station: { p: p.toArray(), t: t.toArray(), w: CW + 0.15, h: CH - 0.2, max: 2.6 }, pin: [s.x + s.dir * 0.2, CH + 0.28, s.z] });
  });
  // an empty slot shows a bare case with a note
  for (let i = members.length; i < 4; i++) {
    const s = SLOTS[i]; const C = new THREE.Group(); G.add(C);
    C.position.set(s.x, 0, s.z); C.rotation.y = s.dir > 0 ? Math.PI / 2 : -Math.PI / 2;
    box(0.9, 0.85, 0.42, M.caseSide, 0, 0.425, 0.21, C);
    box(0.96, 0.04, 0.46, M.caseShelf, 0, 0.87, 0.22, C);
    if (MOD.plant && i === 3) { const pl = MOD.plant.clone(true); pl.position.set(0, 0.89, 0.22); pl.scale.setScalar(0.55); C.add(pl); }
  }

  // ---- light: its own, warm and low
  const hemi = new THREE.HemisphereLight('#ffe6c4', '#3a2418', 0.5); scene.add(hemi);
  const lamp = new THREE.PointLight('#ffc27a', 3.5, 7, 1.6); lamp.position.set(0, 2.3, -0.1); scene.add(lamp);
  const fire = new THREE.PointLight('#ff9a4a', 1.2, 3.5, 2); fire.position.set(0, 0.5, -1.6); scene.add(fire);
  const fill = new THREE.PointLight('#ffe2bd', 1.4, 8, 1.4); fill.position.set(0, 2.4, 1.6); scene.add(fill);
  const key = new THREE.DirectionalLight('#ffd6a0', 1.4); key.position.set(1.5, 4, 3); key.target.position.set(0, 0.8, -0.6); scene.add(key, key.target);
  key.castShadow = true; key.shadow.mapSize.set(1024, 1024); Object.assign(key.shadow.camera, { left: -3, right: 3, top: 3, bottom: -3, near: 0.5, far: 10 }); key.shadow.bias = -0.0005; key.shadow.normalBias = 0.02;

  K.mergeGroup(G, []);
  return {
    scene, cases, spineMeshes, pages: Math.max(1, Math.ceil(shelves.length / 4)), page,
    overview: { p: [0.6, 1.62, 2.05], t: [-0.15, 1.25, -1.6], w: 3.6, h: 2.1, max: 4.1 },
    setLight(night) {
      scene.environmentIntensity = night ? 0.06 : 0.3;
      hemi.intensity = night ? 0.18 : 0.55; hemi.color.set(night ? '#5c5070' : '#ffe6c4');
      lamp.intensity = night ? 4.2 : 2.2; fire.intensity = night ? 2.4 : 1.1; fill.intensity = night ? 0.5 : 1.6; key.intensity = night ? 0.15 : 1.4;
      ember.emissiveIntensity = night ? 1.4 : 0.5;
    },
    dispose() { scene.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); } }); },
  };
}

// each family book's spine, lettered like the main bookcase (colour, gold bands, stars, title, surname)
function paintSpines(K, placed) {
  const n = placed.length, A = 2048;
  const rw = n <= 128 ? 64 : n <= 252 ? 48 : 36, rh = rw * 7;
  const cols = Math.floor(A / rw), rows = Math.max(1, Math.ceil(n / cols));
  const [c, x] = K.mkCanvas(A, Math.min(A, K.THREE.MathUtils.ceilPowerOfTwo(rows * rh)));
  const AH = c.height, slots = [];
  placed.forEach((p, i) => {
    const b = { title: p.b.t, author: p.b.a, color: p.b.c, id: p.b.t + p.b.a };
    const [bg, ink] = K.colorOf(b);
    const cx = (i % cols) * rw, cy = Math.floor(i / cols) * rh, art = rh - 14, u = rw / 64;
    x.save(); x.beginPath(); x.rect(cx, cy, rw, rh); x.clip();
    x.fillStyle = bg; x.fillRect(cx, cy, rw, rh);
    const sh = x.createLinearGradient(cx, 0, cx + rw, 0);
    sh.addColorStop(0, 'rgba(0,0,0,.42)'); sh.addColorStop(0.22, 'rgba(255,255,255,.12)'); sh.addColorStop(0.55, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(0,0,0,.45)');
    x.fillStyle = sh; x.fillRect(cx, cy, rw, art);
    const want = p.b.s === 'want', gold = want ? ink : '#e6c886';
    x.fillStyle = gold;
    x.fillRect(cx, cy + 22 * u, rw, 3 * u); x.fillRect(cx, cy + art - 26 * u, rw, 3 * u);
    const stars = p.b.s === 'read' ? Math.max(0, Math.min(5, Math.floor(p.b.r || 0))) : 0;
    x.font = `${Math.round(13 * u)}px serif`; x.textAlign = 'center'; x.textBaseline = 'middle';
    for (let k = 0; k < stars; k++) x.fillText('★', cx + rw / 2, cy + 38 * u + k * 13 * u);
    if (p.b.s === 'reading') { x.fillStyle = '#9b1d22'; x.fillRect(cx + rw * 0.36, cy, rw * 0.28, 18 * u); x.fillStyle = gold; }
    const top = cy + (stars ? 38 * u + stars * 13 * u + 6 * u : 40 * u), bottom = cy + art - 64 * u, len = bottom - top;
    x.save(); x.translate(cx + rw / 2, top + len / 2); x.rotate(Math.PI / 2);
    let fs = Math.min(26 * u, rw * 0.5); x.font = `${fs}px "IM Fell English", Georgia, serif`;
    let title = String(p.b.t);
    while (x.measureText(title).width > len && fs > 14 * u) { fs -= 1; x.font = `${fs}px "IM Fell English", Georgia, serif`; }
    while (x.measureText(title).width > len && title.length > 3) title = title.slice(0, -2).trimEnd() + '…';
    x.fillStyle = want ? ink : '#ead19a'; x.fillText(title, 0, 1); x.restore();
    const surname = String(p.b.a || '').trim().split(/\s+/).pop() || '';
    if (surname) { x.save(); x.translate(cx + rw / 2, cy + art - 44 * u); x.rotate(Math.PI / 2); let f2 = 15 * u; x.font = `${f2}px "IM Fell English", Georgia, serif`; while (x.measureText(surname).width > 34 * u && f2 > 9 * u) { f2 -= 1; x.font = `${f2}px "IM Fell English", Georgia, serif`; } x.fillText(surname, 0, 1); x.restore(); }
    x.fillStyle = bg; x.fillRect(cx, cy + art, rw, 7);
    x.fillStyle = '#e9dcbc'; x.fillRect(cx, cy + art + 7, rw, 7);
    x.restore();
    slots.push({ U0: cx / A, U1: (cx + rw) / A, VT: 1 - cy / AH, VB: 1 - (cy + art) / AH, sw: [(cx + rw / 2) / A, 1 - (cy + art + 3.5) / AH], pg: [(cx + rw / 2) / A, 1 - (cy + art + 10.5) / AH] });
  });
  return { canvas: c, slots };
}
// a sage damask wallpaper
function damaskTex(K) {
  const [c, x] = K.mkCanvas(256, 256);
  x.fillStyle = '#7d8a6a'; x.fillRect(0, 0, 256, 256);
  x.fillStyle = 'rgba(232,214,170,.22)';
  const motif = (cx, cy, s) => {
    x.save(); x.translate(cx, cy); x.scale(s, s);
    x.beginPath(); x.moveTo(0, -46); x.bezierCurveTo(26, -30, 30, -6, 0, 8); x.bezierCurveTo(-30, -6, -26, -30, 0, -46); x.fill();
    x.beginPath(); x.moveTo(0, 8); x.bezierCurveTo(20, 18, 34, 40, 0, 50); x.bezierCurveTo(-34, 40, -20, 18, 0, 8); x.fill();
    for (const sx of [-1, 1]) { x.beginPath(); x.ellipse(sx * 24, -2, 10, 5, sx * 0.6, 0, Math.PI * 2); x.fill(); }
    x.restore();
  };
  motif(64, 64, 1); motif(192, 192, 1); motif(192, -64, 1); motif(-64, 192, 1); motif(192, 64 + 256, 1); motif(64 + 256, 192, 1);
  x.strokeStyle = 'rgba(40,50,30,.18)'; x.lineWidth = 2; for (let i = 0; i < 256; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 256); x.stroke(); }
  return c;
}
