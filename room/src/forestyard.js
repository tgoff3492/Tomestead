/* Tomestead · EXPERIMENT (mockup only, not wired into the app): what the dollhouse stands on when it's set
   in the pine forest: a stone foundation in place of the plinth, a plain wooden porch deck across the open
   front with steps down, and a gravel path with stone edging winding from the steps toward you.
   (The forest itself is a backdrop; see the notes in the project doc.) */
export function buildForestYard(K) {
  const { THREE, std, mkCanvas, canvasTex, rng } = K;
  const G = new THREE.Group(); G.userData.dyn = true; K.scene.add(G);
  const r = rng(7);
  const Y0 = -0.42;
  const m = (geo, mat, x, y, z, ry = 0) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.rotation.y = ry; o.castShadow = true; o.receiveShadow = true; G.add(o); return o; };
  const tex = (w, h, draw, rep) => { const [c, x] = mkCanvas(w, h); draw(x, w, h); const t = canvasTex(c, { repeat: !!rep }); if (rep) t.repeat.set(rep[0], rep[1]); return t; };

  // rounded field stones in warm grays, set in mortar
  const stoneT = tex(512, 256, (x, w, h) => {
    x.fillStyle = '#6f675c'; x.fillRect(0, 0, w, h);
    for (let row = 0, y = 0; y < h; row++) {
      const sh = 34 + r() * 18;
      for (let px = (row % 2) * -30; px < w;) { const sw = 50 + r() * 60; x.fillStyle = `hsl(${28 + r() * 16},${8 + r() * 10}%,${52 + r() * 16}%)`; x.beginPath(); x.roundRect(px + 3, y + 3, sw - 6, sh - 6, 10); x.fill(); px += sw; }
      y += sh;
    }
  }, [3, 1]);
  const stone = std({ map: stoneT, roughness: 0.95 });
  m(new THREE.BoxGeometry(6.55, 0.4, 5.95), stone, -0.05, Y0 + 0.2, 0);

  // the porch: weathered boards across the open front, a timber skirt under it, three steps down
  const plankT = tex(512, 256, (x, w, h) => {
    for (let i = 0; i < 8; i++) { x.fillStyle = `hsl(30,${26 + r() * 10}%,${38 + r() * 9}%)`; x.fillRect(0, i * 32, w, 31); x.fillStyle = 'rgba(30,15,5,.5)'; x.fillRect(0, i * 32 + 30, w, 2); for (let k = 0; k < 6; k++) { x.fillStyle = 'rgba(40,20,8,.12)'; x.fillRect(r() * w, i * 32 + 6 + r() * 18, 40 + r() * 80, 2); } }
  }, [2, 1]);
  const boards = std({ map: plankT, roughness: 0.85 });
  const timber = std({ color: '#4e3424', roughness: 0.8 });
  const PZ0 = 2.98, PZ1 = 4.05, PX0 = -3.12, PX1 = 3.02, stepX = 0.4;
  m(new THREE.BoxGeometry(PX1 - PX0, 0.1, PZ1 - PZ0), boards, (PX0 + PX1) / 2, -0.05, (PZ0 + PZ1) / 2);
  m(new THREE.BoxGeometry(PX1 - PX0 - 0.16, 0.34, PZ1 - PZ0 - 0.12), timber, (PX0 + PX1) / 2, Y0 + 0.17, (PZ0 + PZ1) / 2);
  for (let i = 0; i < 3; i++) m(new THREE.BoxGeometry(1.4, 0.12, 0.34), boards, stepX, -0.16 - i * 0.12, PZ1 + 0.17 + i * 0.32);

  // the path: a gravel ribbon with stone edging, from the bottom step toward the viewer
  // straight off the bottom step, then a gentle bend away toward the viewer
  const pts = [[0, 5.0], [0.04, 5.7], [0.5, 6.5], [1.6, 7.2], [3.2, 7.9], [5.0, 8.8], [6.5, 10.0], [7.8, 11.6]]
    .map(([dx, z]) => new THREE.Vector3(stepX + dx, Y0 + 0.012, z));
  const curve = new THREE.CatmullRomCurve3(pts);
  const N = 120, half = 0.6;
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N, p = curve.getPointAt(t), tg = curve.getTangentAt(t), side = new THREE.Vector3(-tg.z, 0, tg.x).normalize();
    for (const s of [-1, 1]) { const q = p.clone().addScaledVector(side, s * half); pos.push(q.x, q.y, q.z); uv.push((s + 1) / 2, t * 12); }
    if (i) { const a = (i - 1) * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  const gravelT = tex(256, 256, (x, w, h) => {
    x.fillStyle = '#9c8c72'; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) { const l = 38 + r() * 30; x.fillStyle = `hsl(${30 + r() * 15},${8 + r() * 12}%,${l}%)`; x.beginPath(); x.arc(r() * w, r() * h, 0.8 + r() * 2.2, 0, 7); x.fill(); }
  }, [1, 1]);
  gravelT.wrapS = gravelT.wrapT = THREE.RepeatWrapping;
  const path = new THREE.Mesh(g, std({ map: gravelT, roughness: 1, side: THREE.DoubleSide })); path.receiveShadow = true; G.add(path);
  // edging: a row of small rounded stones down each side
  const edgeMat = std({ map: stoneT, roughness: 0.95 });
  for (let i = 0; i <= 64; i++) {
    const t = i / 64, p = curve.getPointAt(t), tg = curve.getTangentAt(t), side = new THREE.Vector3(-tg.z, 0, tg.x).normalize();
    for (const s of [-1, 1]) {
      const q = p.clone().addScaledVector(side, s * (half + 0.08));
      const st = m(new THREE.DodecahedronGeometry(0.13 + r() * 0.05, 1), edgeMat, q.x, Y0 + 0.04, q.z, r() * 3);
      st.scale.set(1.2, 0.55, 0.9);
    }
  }
  return { group: G, setLook() {} };
}
