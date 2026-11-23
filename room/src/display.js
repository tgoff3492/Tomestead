/* Tomestead · the display case for your five favourite books (growth.js picks them: highest rated
   first, the most recently finished among equals). It grows with the room:
     study    a glazed cabinet in the front-right corner, the books standing face out on brass easels
     library  a carved, gilded vitrine in the middle of the new floor, the books lying open-angled
              under glass on burgundy velvet
     hall     five pedestals down the nave, each with a glass case and one book, a brass plate below
   The covers are the real ones (or the plain cloth cover until a picture loads). Tap one to open it. */
export function buildDisplay(K, tier, favs) {
  const { THREE, M } = K;
  const G = new THREE.Group(); G.userData.dyn = true; K.scene.add(G);
  const box = (w, h, d, mat, x, y, z, parent = G, opts) => K.box(w, h, d, mat, x, y, z, parent, opts);
  const glass = K.std({ color: '#e8f1f2', roughness: 0.05, metalness: 0, transparent: true, opacity: 0.12, depthWrite: false, envMapIntensity: 1.5 });
  const velvet = K.std({ color: '#5a1a22', roughness: 0.95 });
  const glow = K.std({ color: '#3a1218', roughness: 0.9, emissive: '#ffb76b', emissiveIntensity: 0 });
  const gilt = M.gold;
  const covers = [], lamps = [];
  const W = 0.15, Hc = 0.225, T = 0.026;            // a cover, in metres
  // a book standing on display: a thin box with its cover on the front face
  function book(b, parent, x, y, z, rx = 0, ry = 0, scale = 1) {
    const g = new THREE.Group(); parent.add(g); g.position.set(x, y, z); g.rotation.set(rx, ry, 0); g.scale.setScalar(scale);
    const coverMat = K.coverMaterial(b, W / Hc);
    const [bg] = K.colorOf(b);
    const cloth = K.std({ color: bg, roughness: 0.7 }), pages = K.std({ color: '#e7dabb', roughness: 0.95 });
    const m = K.mesh(new THREE.BoxGeometry(W, Hc, T), [pages, cloth, cloth, cloth, coverMat, cloth], g);
    m.position.set(0, Hc / 2, 0);
    m.userData = { fav: b, dyn: true };
    covers.push(m);
    return g;
  }
  // a brass easel the book leans on
  const easel = (parent, x, y, z, ry = 0) => {
    const g = new THREE.Group(); parent.add(g); g.position.set(x, y, z); g.rotation.y = ry;
    box(0.008, 0.2, 0.008, M.brass, 0, 0.1, -0.05, g).rotation.x = -0.25;
    box(0.12, 0.008, 0.02, M.brass, 0, 0.01, 0.012, g);
    return g;
  };
  // a small brass plate: rank and stars
  const plate = (parent, i, b, x, y, z, ry = 0) => {
    const stars = '★'.repeat(Math.round(Number(b.rating) || 0));
    const m = K.mesh(new THREE.PlaneGeometry(0.13, 0.03), K.std({ map: K.canvasTex(K.plateTex(`${['I', 'II', 'III', 'IV', 'V'][i]} · ${stars}`, 512, 118), { repeat: false }), roughness: 0.35, metalness: 0.6 }), parent, { cast: false });
    m.position.set(x, y, z); m.rotation.y = ry; return m;
  };

  let station, pin, empty = !favs.length;
  // a carved vitrine table: turned legs, a gilt-beaded apron, a velvet bed under a sloped glass lid,
  // the books lying back, tilted towards you; a brass plate under each (I to V and its stars)
  function vitrine(C, w, d, ornate) {
    const th = ornate ? 0.78 : 0.74;
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const leg = K.mesh(K.lathe([[0.0, 0], [0.04, 0], [0.04, 0.05], [0.025, 0.1], [0.032, 0.3], [0.022, 0.48], [0.035, 0.6], [0.03, th - 0.12], [0, th - 0.12]], 16), M.caseSide, C);
      leg.position.set(sx * (w / 2 - 0.06), 0, sz * (d / 2 - 0.06));
    }
    box(w - 0.05, 0.03, d - 0.05, M.caseShelf, 0, 0.18, 0, C);
    box(w, 0.13, d, M.caseSide, 0, th - 0.085, 0, C);
    if (ornate) box(w + 0.01, 0.012, d + 0.01, gilt, 0, th - 0.15, 0, C);
    box(w + 0.05, 0.03, d + 0.05, M.trim, 0, th, 0, C);
    const y0 = th + 0.015, hb = 0.12, hf = 0.06;
    box(w - 0.02, 0.01, d - 0.02, velvet, 0, y0 + 0.005, 0, C);
    box(w - 0.04, 0.012, 0.02, glow, 0, y0 + hb - 0.01, -d / 2 + 0.03, C);
    for (const sx of [-1, 1]) { box(0.018, hb, 0.018, M.brass, sx * (w / 2 - 0.01), y0 + hb / 2, -d / 2 + 0.01, C, { cast: false }); box(0.018, hf, 0.018, M.brass, sx * (w / 2 - 0.01), y0 + hf / 2, d / 2 - 0.01, C, { cast: false }); }
    const lid = K.mesh(new THREE.BoxGeometry(w - 0.02, 0.004, Math.hypot(d - 0.02, hb - hf)), glass, C, { cast: false, recv: false }); lid.position.set(0, y0 + (hb + hf) / 2, 0); lid.rotation.x = Math.atan2(hb - hf, d - 0.02); lid.renderOrder = 5;
    const side = (z, h) => { const p = K.mesh(new THREE.BoxGeometry(w - 0.03, h, 0.004), glass, C, { cast: false, recv: false }); p.position.set(0, y0 + h / 2, z); p.renderOrder = 5; };
    side(-d / 2 + 0.01, hb); side(d / 2 - 0.01, hf);
    for (const sx of [-1, 1]) { const p = K.mesh(new THREE.BoxGeometry(0.004, hb, d - 0.03), glass, C, { cast: false, recv: false }); p.position.set(sx * (w / 2 - 0.01), y0 + hb / 2, 0); p.renderOrder = 5; }
    const f1 = K.mesh(new THREE.BoxGeometry(w, 0.014, 0.014), M.brass, C); f1.position.set(0, y0 + hb, -d / 2 + 0.01);
    const f2 = K.mesh(new THREE.BoxGeometry(w, 0.014, 0.014), M.brass, C); f2.position.set(0, y0 + hf, d / 2 - 0.01);
    if (ornate) {
      const crest = new THREE.Shape(); crest.moveTo(-0.22, 0); crest.quadraticCurveTo(-0.1, 0.03, -0.07, 0.1); crest.quadraticCurveTo(0, 0.16, 0.07, 0.1); crest.quadraticCurveTo(0.1, 0.03, 0.22, 0); crest.lineTo(-0.22, 0);
      const cm = K.mesh(new THREE.ExtrudeGeometry(crest, { depth: 0.02, bevelEnabled: false, curveSegments: 16 }), gilt, C); cm.position.set(0, y0 + hb, -d / 2);
    }
    const gap = (w - 0.12) / 5, sc = Math.min(1.12, gap / (W + 0.025));
    favs.forEach((b, i) => {
      const x = (i - (favs.length - 1) / 2) * gap;
      book(b, C, x, y0 + 0.012, d * 0.18, -1.2, 0, sc);
      plate(C, i, b, x, th - 0.085, d / 2 + 0.002);
    });
    return th;
  }
  if (tier === 'study') {
    // ---- a vitrine table against the right wall, past the tome, its glass facing into the room
    const C = new THREE.Group(); G.add(C); C.position.set(2.66, 0, 1.85); C.rotation.y = -Math.PI / 2;
    vitrine(C, 1.05, 0.5, false);
    lamps.push({ mat: glow, k: 1.2 });
    station = { p: [1.35, 1.5, 1.85], t: [2.6, 0.82, 1.85], w: 1.2, h: 0.7, max: 2.2 };
    pin = [2.66, 1.15, 1.85];
  } else if (tier === 'library') {
    // ---- a bigger, gilded vitrine in the middle of the new floor
    const C = new THREE.Group(); G.add(C); C.position.set(0, 0, 4.25);
    vitrine(C, 1.35, 0.62, true);
    lamps.push({ mat: glow, k: 1.4 });
    station = { p: [0.0, 1.62, 5.45], t: [0, 0.86, 4.25], w: 1.6, h: 0.9, max: 2.6 };
    pin = [0, 1.25, 4.25];
  } else {
    // ---- five pedestals across the nave, each with its own glass case
    const C = new THREE.Group(); G.add(C); C.position.set(0, 0, 4.4);
    favs.forEach((b, i) => {
      const c = (favs.length - 1) / 2, x = (i - c) * 0.82, z = Math.abs(i - c) * 0.18;
      const P = new THREE.Group(); C.add(P); P.position.set(x, 0, z);
      // a marble column with a gilt capital
      box(0.4, 0.08, 0.4, M.stoneSurround, 0, 0.04, 0, P);
      box(0.34, 0.05, 0.34, M.stoneSurround, 0, 0.105, 0, P);
      const col = K.mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.78, 28), M.stoneSurround, P); col.position.y = 0.52;
      const flute = K.mesh(new THREE.TorusGeometry(0.13, 0.012, 8, 28).rotateX(Math.PI / 2), gilt, P); flute.position.y = 0.9;
      box(0.36, 0.06, 0.36, M.stoneSurround, 0, 0.94, 0, P);
      box(0.38, 0.015, 0.38, gilt, 0, 0.975, 0, P);
      // the glass case
      const y0 = 0.983, gh = 0.36;
      box(0.3, 0.012, 0.3, velvet, 0, y0 + 0.006, 0, P);
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(0.012, gh, 0.012, M.brass, sx * 0.15, y0 + gh / 2, sz * 0.15, P, { cast: false });
      const gb = K.mesh(new THREE.BoxGeometry(0.3, gh, 0.3), glass, P, { cast: false, recv: false }); gb.position.y = y0 + gh / 2; gb.renderOrder = 5;
      box(0.33, 0.025, 0.33, M.brass, 0, y0 + gh + 0.0125, 0, P);
      const fin = K.mesh(new THREE.SphereGeometry(0.025, 16, 12), gilt, P); fin.position.y = y0 + gh + 0.05;
      box(0.26, 0.008, 0.26, glow, 0, y0 + gh - 0.005, 0, P);
      easel(P, 0, y0 + 0.012, 0.02);
      book(b, P, 0, y0 + 0.02, 0.0, -0.2, 0, 1.1);
      plate(P, i, b, 0, 0.94, 0.181);
    });
    lamps.push({ mat: glow, k: 1.6 });
    station = { p: [0.0, 1.75, 6.9], t: [0, 1.15, 4.5], w: 3.9, h: 1.3, max: 4.2 };
    pin = [0, 1.75, 4.4];
  }
  // fuse the still pieces (wood, brass, velvet) into a few meshes; the glass and the books stay apart
  G.traverse((o) => { if (o.isMesh && o.material === glass) { o.castShadow = false; o.userData.glass = true; } });
  K.mergeGroup(G, []);
  return {
    group: G, covers, station, pin, empty,
    setLight(night) { for (const l of lamps) l.mat.emissiveIntensity = night ? l.k : 0.35; },
    dispose() {
      K.scene.remove(G);
      G.traverse((o) => { if (!o.isMesh) return; o.geometry.dispose(); const ms = Array.isArray(o.material) ? o.material : [o.material]; for (const m of ms) { if (m === M.brass || m === M.gold || m === M.trim || m === M.caseSide || m === M.caseShelf || m === M.caseDark || m === M.stoneSurround) continue; if (m.map && m.map.isCanvasTexture) m.map.dispose(); m.dispose(); } });
    },
  };
}
