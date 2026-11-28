/* Tomestead · EXPERIMENT (mockup only, not wired into the app): flower beds around the dollhouse in the
   pine forest. Two beds in front of the porch, one each side of the steps, and a long bed down the side
   of the house, each a strip of dark mulch edged in small stones, planted back to front: tall spires
   (foxgloves, hollyhocks) and lavender near the house, mounding shrubs and low flowers along the edge,
   and a blue hydrangea at the corner. Everything is instanced, so it's a handful of draw calls. */
export function buildFlowerBeds(K, dims, tier) {
  const { THREE, std, mkCanvas, canvasTex, rng, mergeGeometries } = K;
  const G = new THREE.Group(); G.userData.dyn = true; K.scene.add(G);
  const r = rng(23);
  const Y0 = -0.42, zB = dims.zB, zF = dims.zF;
  const PZ1 = zF + 1.35, PX0 = -3.12, PX1 = 3.02, stepX = tier === 'study' ? 0.4 : 1.7;
  const FX = 3.225;   // the foundation's right-hand face

  // the beds: [x0, x1, z0, z1, which way is "back" (toward the house)]
  const beds = [
    { x0: PX0 + 0.1, x1: stepX - 0.85, z0: PZ1 + 0.02, z1: PZ1 + 0.95, back: [0, -1] },
    { x0: stepX + 0.85, x1: PX1 + 0.2, z0: PZ1 + 0.02, z1: PZ1 + 0.95, back: [0, -1] },
    { x0: FX + 0.02, x1: FX + 0.98, z0: zB - 0.1, z1: PZ1 + 0.95, back: [-1, 0] },
  ];
  // the right front bed and the side bed meet at the corner: drop the overlap
  beds[1].x1 = FX + 0.02;

  const mulchT = (() => {
    const [c, x] = mkCanvas(256, 256);
    x.fillStyle = '#3a2618'; x.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 1600; i++) { x.fillStyle = `hsl(${18 + r() * 14},${30 + r() * 20}%,${10 + r() * 16}%)`; x.save(); x.translate(r() * 256, r() * 256); x.rotate(r() * 3); x.fillRect(-4, -1, 6 + r() * 6, 2 + r() * 1.5); x.restore(); }
    const t = canvasTex(c, { repeat: true }); t.repeat.set(2, 2); return t;
  })();
  const mulch = std({ map: mulchT, roughness: 1 });
  const edgeMat = std({ color: '#8c8273', roughness: 0.95 });
  const edges = [], o3 = new THREE.Object3D();
  for (const b of beds) {
    const w = b.x1 - b.x0, d = b.z1 - b.z0;
    const soil = new THREE.Mesh(new THREE.BoxGeometry(w, 0.07, d), mulch);
    soil.position.set((b.x0 + b.x1) / 2, Y0 + 0.035, (b.z0 + b.z1) / 2); soil.receiveShadow = true; G.add(soil);
    // stones along the open sides (not against the house or porch)
    const run = (ax, az, bx, bz) => {
      const L = Math.hypot(bx - ax, bz - az), n = Math.max(2, Math.round(L / 0.2));
      for (let i = 0; i <= n; i++) {
        const t = i / n; o3.position.set(ax + (bx - ax) * t, Y0 + 0.05, az + (bz - az) * t); o3.rotation.set(0, r() * 3, 0);
        const s = 0.07 + r() * 0.03; o3.scale.set(s * 1.25, s * 0.6, s); o3.updateMatrix();
        edges.push(new THREE.DodecahedronGeometry(1, 1).applyMatrix4(o3.matrix));
      }
    };
    if (b.back[1] === -1) { run(b.x0, b.z1, b.x1, b.z1); if (b !== beds[1]) run(b.x0, b.z0, b.x0, b.z1); run(b.x1, b.z0, b.x1, b.z1); }
    else { run(b.x1, b.z0, b.x1, b.z1); run(b.x0, b.z0, b.x1, b.z0); run(b.x0, b.z1, b.x1, b.z1); }
  }
  const edge = new THREE.Mesh(mergeGeometries(edges), edgeMat); edges.forEach((g) => g.dispose()); edge.receiveShadow = true; G.add(edge);

  // ---- the planting, as instances
  const C = (h) => new THREE.Color(h);
  const leafCols = ['#3d5a2a', '#47652f', '#36502a', '#52703a', '#2f4824', '#4a5f33'].map(C);
  const flowerCols = { lavender: ['#8d7cc4', '#9a86cf', '#7d6db5'], pink: ['#eaa6b8', '#e08ea3', '#f2bfcb'], cream: ['#f4ecd6', '#efe3c4'], butter: ['#ecc96a', '#f0d585'], blush: ['#d98f8a', '#e3a39a'], hydra: ['#8ea6d8', '#9fb3e0', '#a896d6'] };
  const pick = (a) => a[Math.floor(r() * a.length)];
  const mounds = [], heads = [], spikes = [], stems = [], bells = [];
  const mound = (x, z, s, palette, density = 1) => {
    for (let k = 0; k < 3; k++) { const a = r() * 6.3, d = s * 0.45 * (k ? 1 : 0), q = s * (k ? 0.75 + r() * 0.2 : 1); mounds.push([x + Math.cos(a) * d, Y0 + 0.07 + q * 0.5, z + Math.sin(a) * d, q * (1 + r() * 0.2), q * 0.8, q * (1 + r() * 0.2), pick(leafCols)]); }
    if (!palette) return;
    const n = Math.round(70 * s / 0.2 * density);
    for (let i = 0; i < n; i++) {
      const a = r() * Math.PI * 2, up = 0.25 + r() * 0.75, rr = Math.sqrt(1 - up * up);
      heads.push([x + Math.cos(a) * rr * s * 1.05, Y0 + 0.07 + s * 0.5 + up * s * 0.82, z + Math.sin(a) * rr * s * 1.05, 0.034 + r() * 0.016, pick(flowerCols[palette])]);
    }
  };
  const lavender = (x, z) => {
    mound(x, z, 0.17, null);
    for (let i = 0; i < 26; i++) {
      const a = r() * Math.PI * 2, d = r() * 0.17, h = 0.4 + r() * 0.16, tx = x + Math.cos(a) * d, tz = z + Math.sin(a) * d;
      stems.push([tx, Y0 + 0.07 + h / 2, tz, h, (Math.cos(a) * d) * 0.6, (Math.sin(a) * d) * 0.6]);
      spikes.push([tx + Math.cos(a) * d * 0.3, Y0 + 0.07 + h + 0.08, tz + Math.sin(a) * d * 0.3, pick(flowerCols.lavender)]);
    }
  };
  const spire = (x, z, palette, h) => {
    mound(x, z, 0.18, null);
    stems.push([x, Y0 + 0.07 + h / 2, z, h, 0, 0]);
    for (let i = 0; i < 20; i++) {
      const t = i / 20, a = i * 2.4;
      bells.push([x + Math.cos(a) * 0.06 * (1 - t * 0.5), Y0 + 0.07 + h * (0.4 + t * 0.6), z + Math.sin(a) * 0.06 * (1 - t * 0.5), 0.05 * (1 - t * 0.55), pick(flowerCols[palette])]);
    }
  };
  const hydrangea = (x, z) => {
    mound(x, z, 0.3, null);
    for (let k = 0; k < 9; k++) {
      const a = k * 0.75 + r(), d = 0.16 + r() * 0.16, cx = x + Math.cos(a) * d, cz = z + Math.sin(a) * d, cy = Y0 + 0.36 + r() * 0.26;
      const col = pick(flowerCols.hydra);
      for (let i = 0; i < 60; i++) { const u = r() * Math.PI * 2, v = r() * Math.PI * 0.75; heads.push([cx + Math.cos(u) * Math.sin(v) * 0.13, cy + 0.04 + Math.cos(v) * 0.1, cz + Math.sin(u) * Math.sin(v) * 0.13, 0.042, col]); }
    }
  };

  // front beds: lavender and spires against the porch, mounds of pink, cream and butter along the stones
  for (const b of [beds[0], beds[1]]) {
    const w = b.x1 - b.x0;
    for (let x = b.x0 + 0.25; x < b.x1 - 0.15; x += 0.42 + r() * 0.1) lavender(x, b.z0 + 0.24 + r() * 0.06);
    for (let x = b.x0 + 0.22; x < b.x1 - 0.12; x += 0.34 + r() * 0.1) mound(x, b.z1 - 0.26 - r() * 0.05, 0.15 + r() * 0.05, pick(['pink', 'cream', 'pink', 'butter', 'blush']));
    if (w > 1.4) spire(b.x0 + w * 0.5 + (r() - 0.5) * 0.3, b.z0 + 0.2, pick(['pink', 'cream']), 0.95);
  }
  // the side bed: hollyhocks and foxgloves along the wall, lavender drifts, low flowers at the edge,
  // and a hydrangea where it meets the porch
  {
    const b = beds[2];
    hydrangea(b.x0 + 0.48, b.z1 - 0.52);
    for (let z = b.z0 + 0.3; z < b.z1 - 1.15; z += 0.5 + r() * 0.12) {
      const k = Math.floor(r() * 3);
      if (k === 0) spire(b.x0 + 0.2, z, pick(['pink', 'cream', 'blush']), 1.0 + r() * 0.3);
      else lavender(b.x0 + 0.26, z);
      mound(b.x1 - 0.26, z + 0.25, 0.14 + r() * 0.05, pick(['pink', 'cream', 'butter', 'blush', 'pink']));
    }
  }

  // build the instanced meshes
  const inst = (geo, mat, list, set) => {
    if (!list.length) return;
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach((it, i) => { set(o3, it); o3.updateMatrix(); im.setMatrixAt(i, o3.matrix); im.setColorAt(i, it[it.length - 1] instanceof THREE.Color ? it[it.length - 1] : C(it[it.length - 1])); });
    im.castShadow = true; im.receiveShadow = true; im.instanceMatrix.needsUpdate = true; G.add(im);
  };
  const leafMat = std({ color: '#ffffff', roughness: 0.85 });
  const petalMat = std({ color: '#ffffff', roughness: 0.6 });
  inst(new THREE.IcosahedronGeometry(1, 2), leafMat, mounds, (o, [x, y, z, sx, sy, sz]) => { o.position.set(x, y, z); o.rotation.set(0, 0, 0); o.scale.set(sx, sy, sz); });
  inst(new THREE.IcosahedronGeometry(1, 0), petalMat, heads, (o, [x, y, z, s]) => { o.position.set(x, y, z); o.rotation.set(r(), r(), r()); o.scale.set(s, s * 0.8, s); });
  inst(new THREE.CylinderGeometry(0.006, 0.008, 1, 4), leafMat, stems.map((s) => [...s, '#55703c']), (o, [x, y, z, h, lx, lz]) => { o.position.set(x, y, z); o.rotation.set(lz * 2, 0, -lx * 2); o.scale.set(1, h, 1); });
  inst(new THREE.ConeGeometry(0.03, 0.2, 6), petalMat, spikes, (o, [x, y, z]) => { o.position.set(x, y, z); o.rotation.set((r() - 0.5) * 0.3, 0, (r() - 0.5) * 0.3); o.scale.set(1, 1, 1); });
  inst(new THREE.SphereGeometry(1, 8, 6), petalMat, bells, (o, [x, y, z, s]) => { o.position.set(x, y, z); o.rotation.set(0, 0, 0); o.scale.set(s, s * 1.2, s); });

  return { group: G };
}
