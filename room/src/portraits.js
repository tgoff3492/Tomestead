/* Tomestead · a portrait gallery of your top authors, on the free stretch of the right wall above the
   display case: gilt oval frames, each portrait painted in oils (the same treatment as the room's
   landscapes, which also keeps low-resolution photos looking right), a brass plate with the name and
   dates beneath. Tap a portrait for "About the author". No photo: a cameo silhouette.
   Study: three in a row. Library and hall: two rows of three. */
export function buildPortraits(K, tier, authors) {
  const { THREE, M } = K;
  const G = new THREE.Group(); G.userData.dyn = true; K.scene.add(G);
  const X = 2.985, Z0 = 1.85, gapZ = 0.6;
  const rows = tier === 'study' ? [1.86] : [2.3, 1.48];
  const W = 0.34, H = 0.44;
  const slots = [];
  rows.forEach((y) => [-1, 0, 1].forEach((k) => slots.push({ y, z: Z0 + k * gapZ })));
  const list = authors.slice(0, slots.length);
  const items = [];
  // an oval, with texture coordinates running 0…1 across it
  const ovalGeo = (w, h) => {
    const s = new THREE.Shape(); s.absellipse(0, 0, w / 2, h / 2, 0, Math.PI * 2, false);
    const g = new THREE.ShapeGeometry(s, 48);
    const p = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / w + 0.5, p.getY(i) / h + 0.5);
    uv.needsUpdate = true;
    return g;
  };
  list.forEach((a, i) => {
    const s = slots[i];
    const P = new THREE.Group(); G.add(P);
    P.position.set(X, s.y, s.z); P.rotation.y = -Math.PI / 2;     // facing into the room
    // the gilt frame: an oval ring with a bead inside
    const ring = new THREE.Shape(); ring.absellipse(0, 0, W / 2 + 0.045, H / 2 + 0.045, 0, Math.PI * 2, false);
    const hole = new THREE.Path(); hole.absellipse(0, 0, W / 2, H / 2, 0, Math.PI * 2, true); ring.holes = [hole];
    K.mesh(new THREE.ExtrudeGeometry(ring, { depth: 0.035, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.008, bevelSegments: 2, curveSegments: 48 }), M.gold, P, { cast: false });
    const bead = new THREE.Shape(); bead.absellipse(0, 0, W / 2 + 0.006, H / 2 + 0.006, 0, Math.PI * 2, false);
    const bh = new THREE.Path(); bh.absellipse(0, 0, W / 2 - 0.004, H / 2 - 0.004, 0, Math.PI * 2, true); bead.holes = [bh];
    const bm = K.mesh(new THREE.ExtrudeGeometry(bead, { depth: 0.042, bevelEnabled: false, curveSegments: 48 }), M.brass, P, { cast: false }); bm.position.z = -0.002;
    // a small crest at the top
    const top = K.mesh(new THREE.SphereGeometry(0.018, 14, 10), M.gold, P, { cast: false }); top.position.set(0, H / 2 + 0.06, 0.03);
    // the portrait
    const mat = K.std({ map: K.canvasTex(cameo(K, a.name), { repeat: false }), roughness: 0.62 });
    const face = K.mesh(ovalGeo(W, H), mat, P, { cast: false }); face.position.z = 0.012;
    face.userData = { author: a, dyn: true };
    // a brass plate with the name and dates
    const years = a.born ? `${a.born}–${a.died || ''}` : '';
    const plate = K.mesh(new THREE.PlaneGeometry(0.3, 0.05), K.std({ map: K.canvasTex(K.plateTex(years ? `${a.name} · ${years}` : a.name, 768, 128), { repeat: false }), roughness: 0.35, metalness: 0.6 }), P, { cast: false });
    plate.position.set(0, -H / 2 - 0.085, 0.005);
    plate.userData = { author: a, dyn: true };
    items.push(face);
    if (a.photo) K.loadImg(a.photo, true).then((img) => { if (!img) return; const old = mat.map; mat.map = K.canvasTex(oilPortrait(K, img), { repeat: false }); mat.needsUpdate = true; old.dispose(); K.kick(); });
  });
  // one generous tap target over the whole gallery
  if (list.length) {
    const ys = list.map((_, i) => slots[i].y);
    const hit = new THREE.Mesh(new THREE.BoxGeometry(0.1, Math.max(...ys) - Math.min(...ys) + H + 0.3, gapZ * 3), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.set(X - 0.05, (Math.max(...ys) + Math.min(...ys)) / 2, Z0); hit.userData.station = 'authors'; G.add(hit);
  }
  G.traverse((o) => { o.userData.dyn = true; });
  const yMid = rows.reduce((a, b) => a + b, 0) / rows.length;
  return {
    group: G, items, count: list.length,
    station: { p: [1.05, 1.7, Z0], t: [2.95, yMid, Z0], w: gapZ * 3 + 0.1, h: rows.length > 1 ? 1.55 : 0.75, max: 2.6 },
    pin: [2.9, Math.max(...rows) + 0.42, Z0],
    dispose() { K.scene.remove(G); G.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); if (o.material && o.material.map && o.material !== M.gold && o.material !== M.brass) { o.material.map.dispose(); o.material.dispose(); } } }); },
  };
}

// a photo turned into a small oil painting: soft underpainting, a few thousand brushstrokes in the
// photo's own colours, warm varnish, a vignette and the weave of the canvas
function oilPortrait(K, img) {
  const w = 320, h = 414;
  const [c, x] = K.mkCanvas(w, h);
  const [s, sx] = K.mkCanvas(80, 104);
  const fit = (ctx, cw, ch) => { const k = Math.max(cw / img.naturalWidth, ch / img.naturalHeight); const iw = img.naturalWidth * k, ih = img.naturalHeight * k; ctx.drawImage(img, (cw - iw) / 2, (ch - ih) / 2 - ch * 0.04, iw, ih); };
  fit(sx, 80, 104);
  let px = null; try { px = sx.getImageData(0, 0, 80, 104).data; } catch { px = null; }
  // underpainting: the low-resolution picture, smoothly enlarged
  x.imageSmoothingQuality = 'high'; x.drawImage(s, 0, 0, w, h);
  if (px) {
    const r = K.rng(7);
    x.lineCap = 'round';
    for (let i = 0; i < 4200; i++) {
      const u = r(), v = r(), ix = Math.min(79, Math.floor(u * 80)), iy = Math.min(103, Math.floor(v * 104)), o = (iy * 80 + ix) * 4;
      const lum = (px[o] + px[o + 1] + px[o + 2]) / 3;
      x.strokeStyle = `rgba(${px[o]},${px[o + 1]},${px[o + 2]},${0.55})`;
      x.lineWidth = 2 + r() * (lum > 140 ? 4 : 3);
      const a = (r() - 0.5) * 1.2 + (u - 0.5) * 0.8, L = 4 + r() * 9;
      const cx = u * w, cy = v * h;
      x.beginPath(); x.moveTo(cx - Math.cos(a) * L / 2, cy - Math.sin(a) * L / 2); x.lineTo(cx + Math.cos(a) * L / 2, cy + Math.sin(a) * L / 2); x.stroke();
    }
  }
  // warm varnish and a dark vignette, like an old portrait
  x.globalCompositeOperation = 'multiply'; x.fillStyle = 'rgba(214,176,120,0.42)'; x.fillRect(0, 0, w, h);
  x.globalCompositeOperation = 'source-over';
  const vg = x.createRadialGradient(w / 2, h * 0.42, w * 0.2, w / 2, h / 2, w * 0.72); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(25,14,6,0.65)');
  x.fillStyle = vg; x.fillRect(0, 0, w, h);
  weave(K, x, w, h);
  return c;
}
// no photo: a cameo, a dark silhouette on cream
function cameo(K, name) {
  const w = 320, h = 414;
  const [c, x] = K.mkCanvas(w, h);
  const bg = x.createRadialGradient(w / 2, h * 0.45, 20, w / 2, h / 2, w * 0.7); bg.addColorStop(0, '#efe2c4'); bg.addColorStop(1, '#bfa47a');
  x.fillStyle = bg; x.fillRect(0, 0, w, h);
  x.fillStyle = '#3b2a1f';
  // a head and shoulders in profile, roughly
  x.beginPath();
  x.ellipse(w * 0.5, h * 0.36, w * 0.17, h * 0.15, -0.15, 0, Math.PI * 2); x.fill();
  x.beginPath(); x.moveTo(w * 0.22, h); x.quadraticCurveTo(w * 0.24, h * 0.62, w * 0.47, h * 0.55); x.quadraticCurveTo(w * 0.74, h * 0.6, w * 0.8, h); x.fill();
  x.beginPath(); x.ellipse(w * 0.36, h * 0.37, w * 0.02, h * 0.03, 0, 0, Math.PI * 2); x.fill();
  x.fillStyle = 'rgba(59,42,31,.85)'; x.font = '600 30px "IM Fell English", Georgia, serif'; x.textAlign = 'center';
  const initials = String(name || '').split(/\s+/).filter(Boolean).map((p) => p[0]).slice(0, 3).join('');
  x.fillStyle = '#d8b25e'; x.fillText(initials, w / 2, h * 0.88);
  weave(K, x, w, h);
  return c;
}
function weave(K, x, w, h) {
  const r = K.rng(3);
  x.globalAlpha = 0.07; x.fillStyle = '#000';
  for (let y = 0; y < h; y += 3) x.fillRect(0, y, w, 1);
  for (let i = 0; i < w; i += 3) x.fillRect(i, 0, 1, h);
  x.globalAlpha = 0.05; for (let i = 0; i < 600; i++) { x.fillStyle = r() > 0.5 ? '#fff' : '#000'; x.fillRect(r() * w, r() * h, 2, 2); }
  x.globalAlpha = 1;
}
