/* Tomestead · the morning paper on the armchair in the reading corner: the daily literary question
   (trivia.js). It lies folded, masthead up, until today's question is answered; then it opens out
   to the trivia page, with your pencil mark on the answer you chose. A new day folds it again.
   Two thin panels hinged at the fold: the far one holds the top half of the inside page, the near
   one folds over it (its underside is the front page) or lies open (the bottom half). */
export function buildPaper(K) {
  const { THREE } = K;
  const W = 0.29, D = 0.2;                         // each half of the folded sheet, in metres
  const PX = 1024, PY = Math.round(PX * D / W);    // canvas size of one half
  const G = new THREE.Group(); G.userData.dyn = true; K.scene.add(G);
  // on the armchair's seat (the chair stands at 1.75, -2.0, turned -0.5), set down at a slight angle
  G.position.set(1.75, 0, -2.0); G.rotation.y = -0.5;
  const P = new THREE.Group(); P.position.set(0, 0.53, 0.05); P.rotation.set(-0.06, 0.32, 0); G.add(P);

  const paperMat = (map) => K.std({ map, roughness: 0.92, metalness: 0, side: THREE.FrontSide });
  const plane = (mat, up) => {
    const g = new THREE.PlaneGeometry(W, D).rotateX(up ? -Math.PI / 2 : Math.PI / 2);
    const m = new THREE.Mesh(g, mat); m.castShadow = true; m.receiveShadow = true; m.userData.dyn = true;
    return m;
  };
  const [cTop, xTop] = K.mkCanvas(PX, PY), [cLow, xLow] = K.mkCanvas(PX, PY), [cFront, xFront] = K.mkCanvas(PX, PY);
  const tTop = K.canvasTex(cTop, { repeat: false }), tLow = K.canvasTex(cLow, { repeat: false }), tFront = K.canvasTex(cFront, { repeat: false });
  // the far half (the top of the inside page), lying flat
  const far = plane(paperMat(tTop), true); far.position.set(0, 0.0015, -D / 2); P.add(far);
  const farBack = plane(paperMat(null), false); farBack.material.color.set('#e9dfc9'); farBack.position.set(0, 0.0005, -D / 2); P.add(farBack);
  // the near half, hinged along the fold: open, it lies toward you; folded, it turns over onto the far half
  const hinge = new THREE.Group(); hinge.position.set(0, 0.003, 0); P.add(hinge);
  const low = plane(paperMat(tLow), true); low.position.set(0, 0.001, D / 2); hinge.add(low);
  const front = plane(paperMat(tFront), false); front.position.set(0, -0.001, D / 2); hinge.add(front);
  // a generous invisible tap area
  const hit = new THREE.Mesh(new THREE.BoxGeometry(W + 0.1, 0.12, 2 * D + 0.1), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.set(0, 0.03, 0); hit.userData.station = 'paper'; P.add(hit);

  // ---- the printing
  const SERIF = 'Georgia, "Times New Roman", serif';
  const INK = '#231a14', GREY = 'rgba(35,26,20,.28)';
  function newsprint(x, w, h, seed) {
    x.fillStyle = '#ece2cc'; x.fillRect(0, 0, w, h);
    // a little foxing and unevenness, the same each time
    let s = seed;
    const r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
    for (let i = 0; i < 260; i++) { x.fillStyle = `rgba(120,90,50,${0.015 + r() * 0.03})`; x.beginPath(); x.arc(r() * w, r() * h, 2 + r() * 18, 0, 7); x.fill(); }
    return r;
  }
  // grey bars standing in for columns of small type
  function columns(x, x0, y0, x1, y1, cols, r) {
    const gap = 26, cw = (x1 - x0 - gap * (cols - 1)) / cols;
    for (let c = 0; c < cols; c++) {
      const cx = x0 + c * (cw + gap);
      for (let y = y0; y < y1; y += 15) {
        const end = r() < 0.12 ? cw * (0.3 + r() * 0.5) : cw;
        x.fillStyle = GREY; x.fillRect(cx, y, end, 6);
      }
      if (c) { x.fillStyle = 'rgba(35,26,20,.35)'; x.fillRect(cx - gap / 2 - 1, y0, 2, y1 - y0); }
    }
  }
  function wrap(x, text, maxW) {
    const words = text.split(' '), lines = [];
    let line = '';
    for (const w of words) { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; }
    if (line) lines.push(line);
    return lines;
  }
  // the front page: the masthead, the date and a headline pointing inside
  function drawFront(dateText) {
    const x = xFront, w = PX, h = PY, r = newsprint(x, w, h, 7);
    x.fillStyle = INK; x.textAlign = 'center'; x.textBaseline = 'alphabetic';
    x.font = `italic 700 92px ${SERIF}`; x.fillText('The Tomestead Gazette', w / 2, 118);
    x.fillRect(40, 140, w - 80, 4); x.fillRect(40, 186, w - 80, 2);
    x.font = `600 24px ${SERIF}`; x.textAlign = 'left'; x.fillText('EST. MMXXVI', 48, 172);
    x.textAlign = 'right'; x.fillText('ONE QUESTION DAILY', w - 48, 172);
    x.textAlign = 'center'; x.fillText(dateText.toUpperCase(), w / 2, 172);
    x.font = `700 64px ${SERIF}`; x.fillText('A Question for Today', w / 2, 262);
    x.font = `italic 30px ${SERIF}`; x.fillText('Literary trivia inside · Page 2', w / 2, 304);
    columns(x, 48, 336, w - 48, h - 30, 4, r);
    tFront.needsUpdate = true;
  }
  // the inside page, top half: the day's question and its four answers, pencil-marked once answered
  function drawTop(st) {
    const x = xTop, w = PX, h = PY, r = newsprint(x, w, h, 11);
    x.fillStyle = INK; x.textAlign = 'left'; x.textBaseline = 'alphabetic';
    x.font = `600 22px ${SERIF}`; x.fillText('THE TOMESTEAD GAZETTE', 48, 44);
    x.textAlign = 'right'; x.fillText('PAGE 2', w - 48, 44);
    x.fillRect(40, 58, w - 80, 2);
    x.textAlign = 'center'; x.font = `italic 700 54px ${SERIF}`; x.fillText('Literary Trivia', w / 2, 124);
    x.textAlign = 'left';
    if (!st) { columns(x, 48, 160, w - 48, h - 30, 3, r); tTop.needsUpdate = true; return; }
    const it = st.item;
    x.font = `600 38px ${SERIF}`;
    let y = 182;
    for (const line of wrap(x, it.q, w - 120).slice(0, 4)) { x.fillText(line, 60, y); y += 46; }
    y += 16;
    x.font = `34px ${SERIF}`;
    const colW = (w - 120) / 2;
    it.choices.forEach((c, i) => {
      const cx = 60 + (i % 2) * colW, cy = y + Math.floor(i / 2) * 54;
      const label = `${'ABCD'[i]}. ${c}`;
      let t = label; while (x.measureText(t).width > colW - 20 && t.length > 4) t = t.slice(0, -2);
      if (t !== label) t = t.trimEnd() + '…';
      x.fillStyle = INK; x.fillText(t, cx, cy);
      if (st.picked < 0) return;
      // a pencil ring round your answer, a tick by the right one
      x.strokeStyle = 'rgba(60,60,70,.75)'; x.lineWidth = 3;
      if (i === st.picked) { const tw = Math.min(colW - 20, x.measureText(t).width); x.beginPath(); x.ellipse(cx + tw / 2, cy - 10, tw / 2 + 16, 26, -0.03, 0.2, Math.PI * 2 + 0.05); x.stroke(); }
      if (i === it.correct) { x.beginPath(); x.moveTo(cx - 34, cy - 12); x.lineTo(cx - 24, cy); x.lineTo(cx - 6, cy - 28); x.stroke(); }
    });
    tTop.needsUpdate = true;
  }
  // the bottom half: more columns and a small crossword, for the look of it
  function drawLow() {
    const x = xLow, w = PX, h = PY, r = newsprint(x, w, h, 23);
    columns(x, 48, 30, w - 360, h - 30, 3, r);
    const s = 26, gx = w - 330, gy = 40, n = 10;
    x.fillStyle = INK; x.font = `700 26px ${SERIF}`; x.fillText('The Crossword', gx, gy + 4);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const black = [[0, 4], [1, 7], [2, 2], [3, 5], [4, 0], [4, 9], [5, 4], [6, 7], [7, 2], [8, 5], [9, 9]].some(([a, b]) => (a === i && b === j) || (9 - a === i && 9 - b === j));
      x.fillStyle = black ? INK : '#f3ead6'; x.fillRect(gx + j * s, gy + 24 + i * s, s, s);
      x.strokeStyle = INK; x.lineWidth = 1.2; x.strokeRect(gx + j * s, gy + 24 + i * s, s, s);
    }
    tLow.needsUpdate = true;
  }
  drawLow();

  // ---- folding
  let k = 0, goal = 0, lastKey = '';            // 0 folded … 1 open
  const pose = () => {
    const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    hinge.rotation.x = -Math.PI * (1 - e);
    hinge.position.y = 0.003 + Math.sin(e * Math.PI) * 0.004;
  };
  pose();
  return {
    group: G, hit,
    // st: TomesteadTrivia.state() (or null with no questions); now = skip the animation
    set(st, dateText, now = false) {
      if (st && st.key !== lastKey) { lastKey = st.key; drawFront(dateText || ''); }
      drawTop(st);
      goal = st && st.picked >= 0 ? 1 : 0;
      if (now) { k = goal; pose(); }
      return k !== goal;
    },
    // returns true while it's still moving
    tick(dt) {
      if (k === goal) return false;
      k = goal > k ? Math.min(goal, k + dt / 1.1) : Math.max(goal, k - dt / 1.1);
      pose();
      return true;
    },
    get open() { return goal === 1; },
  };
}
