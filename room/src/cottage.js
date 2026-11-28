/* Tomestead · EXPERIMENT (mockup only, not wired into the app): the dollhouse as a storybook cottage
   in a cosy wood. Stone foundation, timber corner posts and wall caps, a shingled roof lifted off like a
   lid with a chimney over the fireplace, a front porch with a rail, lanterns, a bench and steps, a
   stepping-stone path winding toward you, and rounded storybook firs, round trees, bushes, flowers and
   mushrooms on a soft green clearing under a warm sky. Night: lanterns lit, fireflies, indigo sky. */
export function buildCottage(K) {
  const { THREE, std, mkCanvas, canvasTex, rng } = K;
  const G = new THREE.Group(); G.userData.dyn = true; K.scene.add(G);
  const r = rng(42);
  const Y0 = -0.42;                                  // the ground (the bottom of the plinth)
  const m = (geo, mat, x, y, z, opts = {}) => {
    const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.castShadow = opts.cast !== false; o.receiveShadow = true;
    if (opts.ry) o.rotation.y = opts.ry; if (opts.rx) o.rotation.x = opts.rx; if (opts.rz) o.rotation.z = opts.rz;
    G.add(o); return o;
  };
  const cache = new Map();
  const mat = (color, o = {}) => {
    if (o.emissive || o.map) return std({ color, roughness: 0.85, ...o });
    const k = color + JSON.stringify(o);
    if (!cache.has(k)) cache.set(k, std({ color, roughness: 0.85, ...o }));
    return cache.get(k);
  };

  // ---- textures drawn here: grass, stone, shingles, planks
  const tex = (w, h, draw, rep) => { const [c, x] = mkCanvas(w, h); draw(x, w, h); const t = canvasTex(c, { repeat: !!rep }); if (rep) t.repeat.set(rep[0], rep[1]); return t; };
  const grassT = tex(512, 512, (x, w, h) => {
    x.fillStyle = '#86b360'; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) { x.fillStyle = `rgba(${r() < 0.5 ? '60,110,50' : '170,200,110'},${0.08 + r() * 0.12})`; x.beginPath(); x.arc(r() * w, r() * h, 3 + r() * 14, 0, 7); x.fill(); }
  }, [14, 14]);
  const stoneT = tex(512, 256, (x, w, h) => {
    x.fillStyle = '#7d7468'; x.fillRect(0, 0, w, h);
    for (let row = 0, y = 0; y < h; row++) {
      const sh = 34 + r() * 18;
      for (let px = (row % 2) * -30; px < w;) { const sw = 50 + r() * 60; x.fillStyle = `hsl(${30 + r() * 15},${10 + r() * 10}%,${62 + r() * 14}%)`; x.beginPath(); x.roundRect(px + 3, y + 3, sw - 6, sh - 6, 10); x.fill(); px += sw; }
      y += sh;
    }
  }, [3, 1]);
  const shingleT = tex(512, 512, (x, w, h) => {
    x.fillStyle = '#7a3d2c'; x.fillRect(0, 0, w, h);
    for (let row = 0; row < 16; row++) for (let i = -1; i < 17; i++) {
      const cx = i * 32 + (row % 2) * 16, y = row * 32;
      x.fillStyle = `hsl(${10 + r() * 12},${45 + r() * 15}%,${30 + r() * 12}%)`;
      x.beginPath(); x.moveTo(cx - 15, y); x.lineTo(cx + 15, y); x.lineTo(cx + 15, y + 22); x.arc(cx, y + 22, 15, 0, Math.PI); x.closePath(); x.fill();
      x.strokeStyle = 'rgba(40,15,8,.45)'; x.lineWidth = 2; x.stroke();
    }
  }, [5, 4]);
  const plankT = tex(512, 256, (x, w, h) => {
    for (let i = 0; i < 8; i++) { x.fillStyle = `hsl(28,${35 + r() * 10}%,${36 + r() * 8}%)`; x.fillRect(0, i * 32, w, 31); x.fillStyle = 'rgba(30,15,5,.5)'; x.fillRect(0, i * 32 + 30, w, 2); }
  }, [2, 1]);

  // ---- the clearing
  const ground = m(new THREE.CircleGeometry(60, 64).rotateX(-Math.PI / 2), mat('#ffffff', { map: grassT }), 0, Y0, 2, { cast: false }); ground.userData.keep = true;
  // the foundation: rounded stones where the plinth was
  m(new THREE.BoxGeometry(6.55, 0.4, 5.95), mat('#ffffff', { map: stoneT }), -0.05, Y0 + 0.2, 0);
  // timber corner posts and caps along the tops of the two walls left standing
  const timber = mat('#5a3a24', { roughness: 0.7 });
  for (const [x, z] of [[-3.08, -2.78], [-3.08, 2.74], [3.04, -2.78]]) m(new THREE.BoxGeometry(0.2, 3.1, 0.2), timber, x, 1.55, z);
  m(new THREE.BoxGeometry(0.26, 0.16, 5.75), timber, -3.08, 3.06, -0.02);
  m(new THREE.BoxGeometry(6.35, 0.16, 0.26), timber, -0.02, 3.06, -2.78);

  // ---- the roof, lifted off like a lid and tipped back, with a chimney over the fireplace
  const roof = new THREE.Group(); roof.position.set(-0.6, 6.0, -1.6); roof.rotation.set(-0.16, 0, 0.12); G.add(roof);
  const pitch = 0.62, half = 3.55, len = 6.9, slope = half / Math.cos(pitch);
  const shingles = mat('#ffffff', { map: shingleT, roughness: 0.9 });
  for (const s of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(slope, 0.14, len), shingles);
    p.position.set(s * half / 2, Math.tan(pitch) * half / 2, 0); p.rotation.z = -s * pitch; p.castShadow = true; p.userData.dyn = true; roof.add(p);
  }
  const ridge = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, len + 0.1, 10).rotateX(Math.PI / 2), timber); ridge.position.y = Math.tan(pitch) * half + 0.04; roof.add(ridge);
  // the gable ends: cream plaster with timber framing
  const gable = new THREE.Shape(); gable.moveTo(-half + 0.12, 0); gable.lineTo(half - 0.12, 0); gable.lineTo(0, Math.tan(pitch) * half - 0.08); gable.closePath();
  for (const z of [-len / 2 + 0.25, len / 2 - 0.25]) {
    const g = new THREE.Mesh(new THREE.ShapeGeometry(gable), mat('#f1e2c4', { side: THREE.DoubleSide })); g.position.z = z; roof.add(g);
    for (const x of [-1.1, 0, 1.1]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.1, Math.tan(pitch) * (half - Math.abs(x)) - 0.1, 0.06), timber); b.position.set(x, (Math.tan(pitch) * (half - Math.abs(x))) / 2, z + (z > 0 ? 0.03 : -0.03)); roof.add(b); }
    const win = new THREE.Mesh(new THREE.CircleGeometry(0.32, 24), mat('#ffd98a', { emissive: '#ffb84d', emissiveIntensity: 0.6 })); win.position.set(0, 1.1, z + (z > 0 ? 0.04 : -0.04)); if (z < 0) win.rotation.y = Math.PI; roof.add(win);
  }
  const chim = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.7, 0.7), mat('#ffffff', { map: stoneT })); chim.position.set(-half * 0.55, 1.6, 2.0); roof.add(chim);
  const chimCap = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.12, 0.86), timber); chimCap.position.set(-half * 0.55, 2.5, 2.0); roof.add(chimCap);
  const smoke = [];
  for (let i = 0; i < 5; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.22 + i * 0.09, 14, 10), new THREE.MeshStandardMaterial({ color: '#f4efe6', transparent: true, opacity: 0.55 - i * 0.08, roughness: 1, depthWrite: false })); s.position.set(-half * 0.55 + i * 0.18, 2.85 + i * 0.5, 2.0 - i * 0.12); roof.add(s); smoke.push(s); }

  // ---- the porch: a deck across the open front, a rail with a gap for the steps, lanterns, a bench
  const deck = mat('#ffffff', { map: plankT });
  const PZ0 = 2.98, PZ1 = 4.3, PX0 = -3.12, PX1 = 3.02;
  m(new THREE.BoxGeometry(PX1 - PX0, 0.12, PZ1 - PZ0), deck, (PX0 + PX1) / 2, -0.06, (PZ0 + PZ1) / 2);
  m(new THREE.BoxGeometry(PX1 - PX0 - 0.2, 0.36, PZ1 - PZ0 - 0.2), timber, (PX0 + PX1) / 2, Y0 + 0.18, (PZ0 + PZ1) / 2);
  const stepX = 0.4;
  for (let i = 0; i < 3; i++) m(new THREE.BoxGeometry(1.3, 0.14, 0.36), deck, stepX, -0.17 - i * 0.12, PZ1 + 0.18 + i * 0.34);
  const rail = mat('#f3ead8', { roughness: 0.6 });
  const railRun = (x0, x1, z) => {
    m(new THREE.BoxGeometry(x1 - x0, 0.07, 0.08), rail, (x0 + x1) / 2, 0.82, z);
    for (let x = x0; x <= x1 + 1e-3; x += 0.22) m(new THREE.BoxGeometry(0.045, 0.78, 0.045), rail, x, 0.42, z, { cast: false });
  };
  railRun(PX0 + 0.1, stepX - 0.7, PZ1 - 0.06);
  railRun(stepX + 0.7, PX1 - 0.1, PZ1 - 0.06);
  const lanterns = [];
  for (const x of [stepX - 0.72, stepX + 0.72]) {
    m(new THREE.BoxGeometry(0.14, 1.3, 0.14), timber, x, 0.65, PZ1 - 0.06);
    const glass = m(new THREE.BoxGeometry(0.2, 0.26, 0.2), mat('#ffe1a0', { emissive: '#ffb347', emissiveIntensity: 0.2 }), x, 1.45, PZ1 - 0.06); glass.userData.keep = true;
    m(new THREE.ConeGeometry(0.17, 0.14, 4).rotateY(Math.PI / 4), timber, x, 1.65, PZ1 - 0.06);
    const pl = new THREE.PointLight('#ffb35a', 0, 4, 2); pl.position.set(x, 1.45, PZ1 + 0.1); G.add(pl);
    lanterns.push({ glass, pl });
  }
  // a little bench with a cushion, a pot of flowers and a welcome mat
  m(new THREE.BoxGeometry(1.1, 0.08, 0.36), timber, -2.2, 0.42, 3.55);
  for (const dx of [-0.45, 0.45]) m(new THREE.BoxGeometry(0.06, 0.42, 0.32), timber, -2.2 + dx, 0.21, 3.55);
  m(new THREE.BoxGeometry(1.0, 0.07, 0.3), mat('#a8473a'), -2.2, 0.49, 3.55);
  for (const px of [1.6, 2.5]) {
    m(new THREE.CylinderGeometry(0.16, 0.12, 0.28, 14), mat('#b5653e'), px, 0.14, 3.7);
    for (let i = 0; i < 7; i++) m(new THREE.SphereGeometry(0.07, 8, 6), mat(['#f2a6b8', '#fff2c2', '#e0607a'][i % 3]), px + (r() - 0.5) * 0.22, 0.34 + r() * 0.08, 3.7 + (r() - 0.5) * 0.22);
  }
  m(new THREE.BoxGeometry(0.9, 0.02, 0.5), mat('#8a5a3a'), stepX, 0.01, 3.95, { cast: false });

  // ---- the path: stepping stones winding from the steps toward you
  const pathMat = mat('#e8dcc2', { roughness: 0.95 });
  const path = [];
  for (let i = 0; i < 16; i++) {
    const t = i / 15, w = Math.sin(t * 3.4) * 1.1, z = PZ1 + 1.4 + t * 6.8 - w * 0.7, x = stepX + 0.1 + t * 6.8 + w * 0.7;
    const s = m(new THREE.CylinderGeometry(0.46 + r() * 0.12, 0.5, 0.07, 12), pathMat, x, Y0 + 0.035, z, { ry: r() * 3 });
    s.scale.set(1 + r() * 0.25, 1, 0.8 + r() * 0.2); path.push([x, z]);
  }
  const nearPath = (x, z, d) => path.some(([px, pz]) => Math.hypot(px - x, pz - z) < d) || (x > -4 && x < 4 && z > -4 && z < PZ1 + 1.2);

  // ---- storybook trees: rounded firs (stacked soft cones), round trees, bushes, flowers, mushrooms
  const firGreens = ['#3f7d53', '#4b8a5c', '#5c9a62', '#356e4a'];
  const fir = (x, z, s) => {
    m(new THREE.CylinderGeometry(0.12 * s, 0.16 * s, 0.7 * s, 8), mat('#6b4a32'), x, Y0 + 0.35 * s, z);
    for (let k = 0; k < 3; k++) {
      const c = new THREE.ConeGeometry((1.15 - k * 0.27) * s, (1.4 - k * 0.15) * s, 14);
      m(c, mat(firGreens[(k + Math.floor(r() * 4)) % 4], { roughness: 0.9, flatShading: false }), x, Y0 + (1.0 + k * 0.72) * s, z);
    }
  };
  const roundTree = (x, z, s, col) => {
    m(new THREE.CylinderGeometry(0.1 * s, 0.14 * s, 1.3 * s, 8), mat('#6b4a32'), x, Y0 + 0.65 * s, z);
    for (let k = 0; k < 4; k++) m(new THREE.SphereGeometry((0.6 + r() * 0.25) * s, 16, 12), mat(col, { roughness: 0.95 }), x + (r() - 0.5) * 0.7 * s, Y0 + (1.6 + r() * 0.5) * s, z + (r() - 0.5) * 0.7 * s);
  };
  let placed = 0;
  for (let i = 0; i < 200 && placed < 60; i++) {
    const a = r() * Math.PI * 2, d = 6.5 + r() * 22, x = Math.cos(a) * d, z = Math.sin(a) * d + 1;
    if (nearPath(x, z, 1.6)) continue;
    // keep the view from the dollhouse camera (front-right) open near the house
    if (x > 1 && z > 1 && d < 15) continue;
    const s = 1.4 + r() * 1.6;
    if (r() < 0.72) fir(x, z, s); else roundTree(x, z, s * 0.9, ['#8fbf5a', '#e2a94a', '#d98445', '#9fca6a'][Math.floor(r() * 4)]);
    placed++;
  }
  // a few close trees to frame the picture from the dollhouse camera
  for (const [x, z, s, kind] of [[8.5, -1.5, 2.4, 'fir'], [11.5, 3.0, 2.0, 'round'], [-3.5, 9.5, 2.2, 'fir'], [-1.0, 13.5, 1.6, 'round']]) {
    if (kind === 'fir') fir(x, z, s); else roundTree(x, z, s, '#e2a94a');
  }
  // bushes hugging the house and the porch
  for (const [x, z, s] of [[-3.6, -2.2, 0.7], [-3.7, 0.4, 0.55], [-3.5, 2.6, 0.65], [-1.6, -3.4, 0.6], [1.8, -3.3, 0.7], [-3.6, 4.6, 0.55], [3.5, 4.4, 0.6], [3.5, -2.0, 0.6], [3.6, 1.0, 0.5]])
    for (let k = 0; k < 3; k++) m(new THREE.SphereGeometry(s * (0.7 + r() * 0.4), 14, 10), mat(['#5f9a4e', '#6fae58', '#4f8a46'][k]), x + (r() - 0.5) * s, Y0 + s * 0.55, z + (r() - 0.5) * s);
  // flowers along the path and by the foundation, and a few red mushrooms
  const flowerCols = ['#f4a6c0', '#fff1b8', '#f6d36b', '#e8738a', '#c9a6f0', '#ffffff'];
  for (let i = 0; i < 140; i++) {
    const p = path[Math.floor(r() * path.length)], side = r() < 0.5 ? -1 : 1;
    const x = r() < 0.7 ? p[0] + side * (0.6 + r() * 0.9) : -3.4 + r() * 7, z = r() < 0.7 ? p[1] + (r() - 0.5) * 0.8 : (r() < 0.5 ? -3.3 : 3.2) + (r() - 0.5) * 0.3;
    m(new THREE.SphereGeometry(0.05 + r() * 0.03, 6, 5), mat(flowerCols[Math.floor(r() * flowerCols.length)], { roughness: 0.7 }), x, Y0 + 0.1 + r() * 0.08, z, { cast: false });
  }
  for (let i = 0; i < 9; i++) {
    const x = 4 + r() * 5, z = -2 + r() * 9;
    if (nearPath(x, z, 0.8)) continue;
    m(new THREE.CylinderGeometry(0.04, 0.05, 0.16, 8), mat('#f5eee0'), x, Y0 + 0.08, z, { cast: false });
    m(new THREE.SphereGeometry(0.12, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat('#c8382c', { roughness: 0.6 }), x, Y0 + 0.15, z, { cast: false });
  }

  // ---- light for the garden (the room keeps its own), sky, haze, fireflies
  const garden = new THREE.DirectionalLight('#ffd7a0', 1.3); garden.position.set(14, 16, 18); G.add(garden);
  const skyTex = (night) => {
    const [c, x] = mkCanvas(16, 512);
    const g = x.createLinearGradient(0, 0, 0, 512);
    if (night) { g.addColorStop(0, '#101634'); g.addColorStop(0.55, '#2a2a55'); g.addColorStop(1, '#4a3d62'); }
    else { g.addColorStop(0, '#8fc3e6'); g.addColorStop(0.5, '#cfe3e8'); g.addColorStop(1, '#fbe0b8'); }
    x.fillStyle = g; x.fillRect(0, 0, 16, 512);
    const t = canvasTex(c, { repeat: false }); return t;
  };
  const skies = { day: skyTex(false), night: skyTex(true) };
  const flies = [], fly = new THREE.MeshBasicMaterial({ color: '#fff3a0' });
  for (let i = 0; i < 40; i++) { const f = m(new THREE.SphereGeometry(0.035, 6, 4), fly, (r() - 0.5) * 18, Y0 + 0.3 + r() * 1.8, 1 + (r() - 0.5) * 16, { cast: false }); f.visible = false; f.userData.keep = true; flies.push(f); }
  K.mergeGroup(G, []);
  return {
    group: G,
    setLook(mode) {
      const night = mode === 'night';
      K.scene.background = skies[night ? 'night' : 'day'];
      K.scene.fog = new THREE.Fog(night ? '#2b2a50' : '#f2dfc0', 34, 95);
      garden.intensity = night ? 0.25 : 1.3; garden.color.set(night ? '#8aa0ff' : '#ffd7a0');
      for (const l of lanterns) { l.pl.intensity = night ? 6 : 0; l.glass.material.emissiveIntensity = night ? 2.4 : 0.2; }
      for (const f of flies) f.visible = night;
      ground.material.color.set(night ? '#8090a8' : '#ffffff');
    },
  };
}
