/* Tomestead share cards: a picture of your year in books (or a goal you reached),
   drawn on a canvas and handed to the phone's share sheet, or downloaded. */
(() => {
  'use strict';
  const W = 1080, H = 1350;
  const SERIF = '"IM Fell English", Georgia, serif', SANS = '"Alegreya Sans", "Trebuchet MS", sans-serif';

  // a cover that can be drawn without "tainting" the canvas (some sites don't allow it)
  function loadImg(src) {
    return new Promise((res) => {
      if (!src) return res(null);
      const im = new Image();
      if (!/^(data|blob):/.test(src)) im.crossOrigin = 'anonymous';
      const t = setTimeout(() => res(null), 6000);
      im.onload = () => {
        clearTimeout(t);
        try { const c = document.createElement('canvas'); c.width = c.height = 2; const x = c.getContext('2d'); x.drawImage(im, 0, 0, 2, 2); x.getImageData(0, 0, 1, 1); res(im.naturalWidth > 2 ? im : null); }
        catch { res(null); }
      };
      im.onerror = () => { clearTimeout(t); res(null); };
      im.src = src;
    });
  }
  const svgImg = (svg) => loadImg('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.includes('xmlns') ? svg : svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')));

  function rounded(x, X, Y, w, h, r) {
    x.beginPath(); x.moveTo(X + r, Y); x.arcTo(X + w, Y, X + w, Y + h, r); x.arcTo(X + w, Y + h, X, Y + h, r);
    x.arcTo(X, Y + h, X, Y, r); x.arcTo(X, Y, X + w, Y, r); x.closePath();
  }
  function fitText(x, text, max, size, font) {
    let s = size;
    do { x.font = `${s}px ${font}`; s -= 2; } while (x.measureText(text).width > max && s > 18);
  }
  // a plain cloth cover with the title, for books whose cover can't be drawn
  function clothCover(x, X, Y, w, h, cv) {
    x.fillStyle = cv.bg || '#5b2f4a'; rounded(x, X, Y, w, h, 6); x.fill();
    x.strokeStyle = 'rgba(230,200,134,.55)'; x.lineWidth = 2; rounded(x, X + 10, Y + 10, w - 20, h - 20, 3); x.stroke();
    x.fillStyle = '#e6c886'; x.textAlign = 'center';
    const words = String(cv.title || '').split(/\s+/), lines = [];
    x.font = `26px ${SERIF}`;
    for (const wd of words) { const l = lines[lines.length - 1]; if (l && x.measureText(l + ' ' + wd).width < w - 36) lines[lines.length - 1] = l + ' ' + wd; else lines.push(wd); }
    lines.slice(0, 5).forEach((l, i) => x.fillText(l, X + w / 2, Y + h * 0.32 + i * 32));
  }

  async function draw(o) {
    try { await Promise.all([document.fonts.load(`64px ${SERIF}`), document.fonts.load(`700 30px ${SANS}`)]); } catch {}
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const x = c.getContext('2d');
    // lamplit leather and a gilt border
    const bg = x.createRadialGradient(W * 0.5, H * 0.28, 60, W * 0.5, H * 0.45, H * 0.85);
    bg.addColorStop(0, '#3b2414'); bg.addColorStop(0.55, '#21140b'); bg.addColorStop(1, '#100a05');
    x.fillStyle = bg; x.fillRect(0, 0, W, H);
    x.strokeStyle = 'rgba(230,200,134,.55)'; x.lineWidth = 3; x.strokeRect(36, 36, W - 72, H - 72);
    x.strokeStyle = 'rgba(230,200,134,.22)'; x.lineWidth = 1.5; x.strokeRect(48, 48, W - 96, H - 96);
    x.textAlign = 'center'; x.textBaseline = 'alphabetic';
    x.fillStyle = '#c9a15b'; x.font = `700 26px ${SANS}`;
    if ('letterSpacing' in x) x.letterSpacing = '8px';
    x.fillText('TOMESTEAD', W / 2, 122);
    if ('letterSpacing' in x) x.letterSpacing = '0px';
    let y = 196;
    if (o.kicker) { x.fillStyle = '#efe3c8'; x.font = `italic 46px ${SERIF}`; fitText(x, o.kicker, W - 180, 52, `italic ${SERIF}`); x.fillText(o.kicker, W / 2, y); y += 40; }
    // the big number
    x.fillStyle = '#e6c886'; x.font = `220px ${SERIF}`;
    x.shadowColor = 'rgba(0,0,0,.5)'; x.shadowBlur = 24;
    x.fillText(String(o.big), W / 2, y + 190); x.shadowBlur = 0;
    y += 290;   // old-style figures hang below the line
    x.fillStyle = '#efe3c8'; x.font = `48px ${SERIF}`; x.fillText(o.bigLabel || '', W / 2, y);
    y += 56;
    x.fillStyle = 'rgba(239,227,200,.82)'; x.font = `500 32px ${SANS}`;
    for (const l of (o.lines || []).filter(Boolean).slice(0, 3)) { fitText(x, l, W - 200, 32, `500 ${SANS}`); x.fillText(l, W / 2, y); y += 44; }
    y += 18;
    // a rule with a fleuron
    x.strokeStyle = 'rgba(201,161,91,.6)'; x.lineWidth = 1.5;
    x.beginPath(); x.moveTo(W / 2 - 180, y); x.lineTo(W / 2 - 26, y); x.moveTo(W / 2 + 26, y); x.lineTo(W / 2 + 180, y); x.stroke();
    x.fillStyle = '#c9a15b'; x.font = `34px ${SERIF}`; x.fillText('❦', W / 2, y + 12);
    y += 44;
    const bottom = H - 120;
    if (o.art) {
      const im = await svgImg(o.art);
      if (im) { const s = Math.min((bottom - y) / im.height, 520 / im.width); const w = im.width * s, h = im.height * s; x.drawImage(im, (W - w) / 2, y + (bottom - y - h) / 2, w, h); }
    } else if (o.covers && o.covers.length) {
      // a shelf of covers: up to 12, in as many rows as fit
      const covers = o.covers.slice(0, 12);
      const cols = covers.length <= 3 ? covers.length : covers.length <= 8 ? 4 : 6;
      const rows = Math.ceil(covers.length / cols), gap = cols === 6 ? 18 : 24;
      let cw = Math.min(210, (W - 160 - gap * (cols - 1)) / cols), ch = cw * 1.5;
      const maxH = bottom - y; if (rows * ch + (rows - 1) * gap > maxH) { ch = (maxH - (rows - 1) * gap) / rows; cw = ch / 1.5; }
      const imgs = await Promise.all(covers.map((cv) => loadImg(cv.src)));
      covers.forEach((cv, i) => {
        const r = Math.floor(i / cols), inRow = Math.min(cols, covers.length - r * cols), k = i % cols;
        const X = (W - (inRow * cw + (inRow - 1) * gap)) / 2 + k * (cw + gap), Y = y + r * (ch + gap);
        x.save(); x.shadowColor = 'rgba(0,0,0,.6)'; x.shadowBlur = 18; x.shadowOffsetY = 8;
        x.fillStyle = '#000'; rounded(x, X, Y, cw, ch, 6); x.fill(); x.restore();
        const im = imgs[i];
        if (im) { x.save(); rounded(x, X, Y, cw, ch, 6); x.clip(); const s = Math.max(cw / im.width, ch / im.height); x.drawImage(im, X + (cw - im.width * s) / 2, Y + (ch - im.height * s) / 2, im.width * s, im.height * s); x.restore(); }
        else clothCover(x, X, Y, cw, ch, cv);
      });
    }
    x.fillStyle = 'rgba(239,227,200,.55)'; x.font = `italic 28px ${SERIF}`;
    x.fillText(o.footer || 'kept in my Tomestead reading room', W / 2, H - 76);
    return new Promise((res) => c.toBlob(res, 'image/png'));
  }

  // the phone's share sheet when there is one, otherwise a download
  async function share(o, name, toast) {
    let blob;
    try { blob = await draw(o); } catch (e) { console.warn('share card', e); }
    if (!blob) { toast && toast('Couldn’t make the picture. Please try again.'); return; }
    return send(blob, name, toast, o.kicker || 'Tomestead');
  }
  async function send(blob, name, toast, title) {
    const file = new File([blob], `${name}.png`, { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: title || 'Tomestead' }); return; }
      catch (e) { if (e && e.name === 'AbortError') return; }
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = file.name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    toast && toast('Picture downloaded. Share it wherever you like.');
  }

  // ---------- postcards from the reading room (Share my shelf): 1080 × 1920, for Stories, Reels and TikTok
  // o.photo: the room photographed by TomesteadRoom.snapshot(); clean, so no app mark, only your handle if given.
  // kind 'shelf': { count, line, eyebrow, listLabel, titles[] }   kind 'book': { cover (canvas), title, author, rating, date, quote }
  const PW = 1080, PH = 1920;
  function wrapText(x, text, maxW) {
    const words = String(text || '').split(/\s+/).filter(Boolean), lines = [];
    let line = '';
    for (const w of words) { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; }
    if (line) lines.push(line);
    return lines;
  }
  function clampLines(x, lines, n, maxW) {
    if (lines.length <= n) return lines;
    const out = lines.slice(0, n);
    let last = out[n - 1];
    while (x.measureText(last + '…').width > maxW && last.length > 1) last = last.slice(0, -1);
    out[n - 1] = last.trimEnd() + '…';
    return out;
  }
  function star(x, cx, cy, r, fill) {
    x.beginPath();
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; x.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); }
    x.closePath(); x.fillStyle = fill; x.fill();
  }
  function stars(x, cx, cy, rating, r) {
    const n = 5, gap = r * 2.5, x0 = cx - ((n - 1) * gap) / 2;
    for (let i = 0; i < n; i++) {
      const sx = x0 + i * gap;
      star(x, sx, cy, r, 'rgba(239,227,200,.22)');
      const f = Math.max(0, Math.min(1, rating - i));
      if (f > 0) { x.save(); x.beginPath(); x.rect(sx - r, cy - r, r * 2 * f, r * 2); x.clip(); star(x, sx, cy, r, '#e9c47a'); x.restore(); }
    }
  }
  function shade(x, y0, y1, a0, a1) {
    const g = x.createLinearGradient(0, y0, 0, y1);
    g.addColorStop(0, `rgba(14,9,6,${a0})`); g.addColorStop(1, `rgba(14,9,6,${a1})`);
    x.fillStyle = g; x.fillRect(0, y0, PW, y1 - y0);
  }
  function vignette(x) {
    const g = x.createRadialGradient(PW / 2, PH * 0.46, PW * 0.45, PW / 2, PH * 0.46, PH * 0.72);
    g.addColorStop(0, 'rgba(8,4,2,0)'); g.addColorStop(1, 'rgba(8,4,2,.5)');
    x.fillStyle = g; x.fillRect(0, 0, PW, PH);
  }
  async function postcard(o) {
    if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch {} }
    const c = document.createElement('canvas'); c.width = PW; c.height = PH;
    const x = c.getContext('2d');
    x.fillStyle = '#1a120c'; x.fillRect(0, 0, PW, PH);
    if (o.photo) {
      if (o.kind === 'book' && 'filter' in x) { x.filter = 'blur(5px) brightness(.72)'; x.drawImage(o.photo, -20, -20, PW + 40, PH + 40); x.filter = 'none'; }
      else { if ('filter' in x) x.filter = 'brightness(1.14) contrast(1.04)'; x.drawImage(o.photo, 0, 0, PW, PH); if ('filter' in x) x.filter = 'none'; }
      if (o.kind === 'book' && !('filter' in x)) { x.fillStyle = 'rgba(14,9,6,.35)'; x.fillRect(0, 0, PW, PH); }
    }
    vignette(x);
    x.textAlign = 'center'; x.textBaseline = 'alphabetic';
    if (o.kind === 'book') {
      shade(x, 0, 380, 0.75, 0);
      shade(x, 1180, PH, 0, 0.9);
      x.fillStyle = '#e6c27a'; x.font = `600 30px ${SANS}`;
      if ('letterSpacing' in x) x.letterSpacing = '6px';
      x.fillText((o.eyebrow || 'Just finished').toUpperCase(), PW / 2, 190);
      if ('letterSpacing' in x) x.letterSpacing = '0px';
      // the cover, set down at a slight angle with a soft shadow under it
      const cv = o.cover, ch = 820, cw = cv ? Math.round(ch * cv.width / cv.height) : 547;
      x.save(); x.translate(PW / 2, 270 + ch / 2); x.rotate(-0.035);
      x.shadowColor = 'rgba(0,0,0,.6)'; x.shadowBlur = 60; x.shadowOffsetY = 26;
      x.fillStyle = '#2a1e16'; rounded(x, -cw / 2, -ch / 2, cw, ch, 10); x.fill();
      x.shadowColor = 'transparent';
      if (cv) { x.save(); rounded(x, -cw / 2, -ch / 2, cw, ch, 10); x.clip(); x.drawImage(cv, -cw / 2, -ch / 2, cw, ch); x.restore(); }
      x.restore();
      let y = 1230;
      x.fillStyle = '#f4e7c8'; x.font = `64px ${SERIF}`;
      const tl = clampLines(x, wrapText(x, o.title, 900), 2, 900);
      for (const l of tl) { y += 74; x.fillText(l, PW / 2, y); }
      x.fillStyle = '#e8dcc4'; x.font = `italic 42px ${SERIF}`; y += 60; x.fillText(o.author || '', PW / 2, y);
      if (o.rating) { y += 74; stars(x, PW / 2, y - 14, o.rating, 26); }
      if (o.quote) {
        x.fillStyle = '#efe3c8'; x.font = `italic 38px ${SERIF}`;
        const ql = clampLines(x, wrapText(x, `“${o.quote}”`, 860), 3, 860);
        y += 40;
        for (const l of ql) { y += 50; x.fillText(l, PW / 2, y); }
      }
    } else {
      shade(x, 0, 640, 0.86, 0);
      shade(x, 1250, PH, 0, 0.92);
      x.fillStyle = '#e6c27a'; x.font = `600 30px ${SANS}`;
      if ('letterSpacing' in x) x.letterSpacing = '6px';
      x.fillText((o.eyebrow || 'My reading room').toUpperCase(), PW / 2, 170);
      if ('letterSpacing' in x) x.letterSpacing = '0px';
      x.fillStyle = '#f4e7c8'; x.font = `150px ${SERIF}`; x.fillText(o.count || '', PW / 2, 330);
      x.fillStyle = '#e8dcc4'; x.font = `italic 50px ${SERIF}`; x.fillText(o.line || '', PW / 2, 410);
      if (o.titles && o.titles.length) {
        x.fillStyle = '#e6c27a'; x.font = `600 28px ${SANS}`;
        if ('letterSpacing' in x) x.letterSpacing = '6px';
        x.fillText((o.listLabel || 'Five-star reads').toUpperCase(), PW / 2, 1520);
        if ('letterSpacing' in x) x.letterSpacing = '0px';
        x.fillStyle = '#efe3c8'; x.font = `42px ${SERIF}`;
        const ls = clampLines(x, wrapText(x, o.titles.join('  ·  '), 900), 4, 900);
        let y = 1540;
        for (const l of ls) { y += 58; x.fillText(l, PW / 2, y); }
      }
    }
    if (o.handle) { x.fillStyle = 'rgba(239,227,200,.82)'; x.font = `34px ${SANS}`; x.fillText(o.handle, PW / 2, PH - 70); }
    return new Promise((res) => c.toBlob(res, 'image/png'));
  }

  window.TomesteadShare = { draw, share, send, postcard };
})();
