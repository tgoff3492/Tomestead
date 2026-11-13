/* Tomestead — your reading library */
(() => {
  'use strict';

  const STORE = 'tomestead.books.v1';
  const PREFS = 'tomestead.prefs.v1';

  const PALETTE = [
    { name: 'Oxblood',  bg: '#6E1F24', ink: '#F3E3C3' },
    { name: 'Midnight', bg: '#1F3350', ink: '#F0DDB0' },
    { name: 'Moss',     bg: '#4F6B3A', ink: '#F4E7C8' },
    { name: 'Mustard',  bg: '#C2902F', ink: '#2B1C0E', light: true },
    { name: 'Plum',     bg: '#5B2F4A', ink: '#F1DDBF' },
    { name: 'Teal',     bg: '#2E5E5E', ink: '#F1E3C2' },
    { name: 'Rust',     bg: '#9A4A25', ink: '#F7E6C6' },
    { name: 'Charcoal', bg: '#3A3A3F', ink: '#E9CF8F' },
    { name: 'Saddle',   bg: '#A57A4E', ink: '#24170C', light: true },
    { name: 'Linen',    bg: '#D9CBA8', ink: '#3A2614', light: true },
    { name: 'Forest',   bg: '#2F4A33', ink: '#E8C766' },
    { name: 'Brick',    bg: '#8B3A3A', ink: '#F5E2C0' },
  ];

  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // ---------- state ----------
  let books = load();
  let prefs = Object.assign({ view: 'shelf', sort: 'added', iosTipDismissed: false }, loadJSON(PREFS, {}));
  let query = '';
  let justAdded = null;
  let editingId = null;
  let openId = null;
  let pickedRating = 0;

  function loadJSON(key, fallback) {
    try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; }
  }
  function load() {
    const arr = loadJSON(STORE, []);
    return Array.isArray(arr) ? arr.filter(b => b && b.id && b.title) : [];
  }
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(books)); }
    catch { toast('Couldn’t save. Your browser storage may be full.'); }
  }
  function savePrefs() { try { localStorage.setItem(PREFS, JSON.stringify(prefs)); } catch {} }

  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  // ---------- book geometry ----------
  function colorOf(b) {
    const i = Number.isInteger(b.color) ? b.color : hash(b.id + b.title) % PALETTE.length;
    return PALETTE[((i % PALETTE.length) + PALETTE.length) % PALETTE.length];
  }
  function scale() { return window.innerWidth <= 640 ? 0.8 : 1; }
  function dims(b) {
    const h = hash(b.id + '|' + b.title);
    const s = scale();
    const height = Math.round((176 + (h % 66)) * s);           // 176–241px
    let width;
    if (b.pages && b.pages > 0) width = Math.min(66, Math.max(24, 18 + b.pages / 16));
    else width = 26 + ((h >>> 5) % 30);                         // 26–55px
    width = Math.round(width * (s < 1 ? 0.86 : 1));
    const variant = (h >>> 9) % 4;
    const fs = Math.max(10, Math.min(17, width * 0.4));
    return { height, width, variant, fs };
  }

  // ---------- sorting & filtering ----------
  function visibleBooks() {
    const q = query.trim().toLowerCase();
    let list = books.filter(b => !q || b.title.toLowerCase().includes(q) || (b.author || '').toLowerCase().includes(q) || (b.genre || '').toLowerCase().includes(q));
    const byStr = (k) => (a, b) => (a[k] || '').localeCompare(b[k] || '', undefined, { sensitivity: 'base' });
    switch (prefs.sort) {
      case 'title': list.sort(byStr('title')); break;
      case 'author': list.sort((a, b) => surname(a.author).localeCompare(surname(b.author)) || byStr('title')(a, b)); break;
      case 'rating': list.sort((a, b) => (b.rating || 0) - (a.rating || 0) || byStr('title')(a, b)); break;
      case 'finished': list.sort((a, b) => (b.finished || '').localeCompare(a.finished || '')); break;
      default: list.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
    }
    return list;
  }
  // spines carry the surname, like a real shelf ("Hunt & Thomas" stays as is)
  function spineAuthor(name = '') {
    const n = name.trim();
    if (/[&,]| and /i.test(n)) return n;
    const parts = n.split(/\s+/);
    const last = parts[parts.length - 1];
    return /^(jr\.?|sr\.?|ii|iii|iv)$/i.test(last) && parts.length > 1 ? parts[parts.length - 2] : last;
  }
  function surname(name = '') { const p = name.trim().split(/\s+/); return (p[p.length - 1] || '').toLowerCase(); }

  // ---------- rendering ----------
  function starsHTML(n, cls = '') {
    let out = '';
    for (let i = 1; i <= 5; i++) out += `<span class="${i <= n ? 'on' : 'off'}">★</span>`;
    return cls ? `<span class="${cls}">${out}</span>` : out;
  }

  function spine(b) {
    const d = dims(b), c = colorOf(b);
    const el = document.createElement('button');
    el.type = 'button';
    el.className = `book v${d.variant}${c.light ? ' light' : ''}${b.id === justAdded ? ' arrive' : ''}`;
    el.style.cssText = `--w:${d.width}px;--h:${d.height}px;--bg:${c.bg};--ink:${c.ink};--fs:${d.fs}px`;
    el.dataset.id = b.id;
    const r = b.rating || 0;
    el.setAttribute('aria-label', `${b.title} by ${b.author || 'unknown author'}${r ? `, ${r} of 5 stars` : ''}`);
    el.innerHTML =
      (r ? `<span class="s-stars" aria-hidden="true">${starsHTML(r)}</span>` : '') +
      `<span class="s-title">${esc(b.title)}</span>` +
      (b.author ? `<span class="s-author">${esc(spineAuthor(b.author))}</span>` : '');
    return el;
  }

  const DECOR = {
    plant: (s) => `<svg width="${56*s}" height="${92*s}" viewBox="0 0 56 92" aria-hidden="true">
      <path d="M28 54 C10 44 4 26 10 12 C20 22 26 36 28 54Z" fill="#4d7a45"/>
      <path d="M28 54 C44 46 52 30 48 14 C38 24 30 38 28 54Z" fill="#5f9152"/>
      <path d="M28 56 C22 40 24 18 32 4 C36 22 34 40 28 56Z" fill="#3f6a3a"/>
      <path d="M12 56 h32 l-4 34 h-24 z" fill="#b5653b"/><rect x="10" y="54" width="36" height="7" rx="2" fill="#c97a4b"/>
    </svg>`,
    candle: (s) => `<svg width="${40*s}" height="${100*s}" viewBox="0 0 40 100" aria-hidden="true">
      <defs><radialGradient id="glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd27a" stop-opacity=".75"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient></defs>
      <circle cx="20" cy="22" r="20" fill="url(#glow)"/>
      <path d="M20 10 C24 17 25 22 20 28 C15 22 16 17 20 10Z" fill="#ffcf6b"/><path d="M20 17 C22 21 22 24 20 27 C18 24 18 21 20 17Z" fill="#fff4c9"/>
      <rect x="19" y="27" width="2" height="5" fill="#2a1e16"/>
      <rect x="12" y="32" width="16" height="56" rx="2" fill="#efe3c8"/><path d="M12 36 q4 6 0 12" stroke="#d9cba8" stroke-width="3" fill="none"/>
      <ellipse cx="20" cy="92" rx="18" ry="5" fill="#c9a15b"/><rect x="8" y="86" width="24" height="6" rx="2" fill="#b08a48"/>
    </svg>`,
    stack: (s) => `<svg width="${96*s}" height="${46*s}" viewBox="0 0 96 46" aria-hidden="true">
      <rect x="6" y="30" width="86" height="16" rx="2" fill="#1f3350"/><rect x="6" y="34" width="86" height="2" fill="#e8c766" opacity=".6"/>
      <rect x="12" y="16" width="74" height="14" rx="2" fill="#6e1f24"/><rect x="12" y="20" width="74" height="1.5" fill="#e8c766" opacity=".6"/>
      <rect x="2" y="3" width="80" height="13" rx="2" fill="#4f6b3a"/><rect x="2" y="7" width="80" height="1.5" fill="#f4e7c8" opacity=".5"/>
    </svg>`,
    bookend: (s) => `<svg width="${34*s}" height="${110*s}" viewBox="0 0 34 110" aria-hidden="true">
      <path d="M4 110 V30 Q4 8 26 6 Q14 22 14 40 V96 H30 V110Z" fill="#b08a48"/>
      <path d="M8 104 V32 Q8 16 20 11" stroke="#e6c886" stroke-width="2" fill="none" opacity=".7"/>
    </svg>`,
    teacup: (s) => `<svg width="${64*s}" height="${70*s}" viewBox="0 0 64 70" aria-hidden="true">
      <path d="M22 8 q-4 6 0 12 q4 6 0 12" stroke="#efe3c8" stroke-width="2" fill="none" opacity=".35"/>
      <path d="M32 4 q-4 6 0 12 q4 6 0 12" stroke="#efe3c8" stroke-width="2" fill="none" opacity=".25"/>
      <path d="M8 34 h40 v10 q0 18 -20 18 q-20 0 -20 -18z" fill="#2e5e5e"/><path d="M48 40 q12 0 10 9 q-2 7 -12 6" stroke="#2e5e5e" stroke-width="5" fill="none"/>
      <rect x="8" y="34" width="40" height="4" fill="#e8c766" opacity=".6"/><ellipse cx="28" cy="66" rx="26" ry="4" fill="#efe3c8"/>
    </svg>`,
    globe: (s) => `<svg width="${62*s}" height="${100*s}" viewBox="0 0 62 100" aria-hidden="true">
      <circle cx="31" cy="40" r="26" fill="#2e5e5e"/><path d="M18 26 q8 4 10 14 q-6 6 -2 14 q-10-6-8-28Z M38 20 q10 6 12 18 q-8-2-10 6 q-6-10-2-24Z" fill="#c2a26a"/>
      <path d="M8 40 a23 26 0 0 0 46 0" stroke="#c9a15b" stroke-width="3" fill="none"/>
      <rect x="29" y="66" width="4" height="20" fill="#7a5232"/><ellipse cx="31" cy="92" rx="18" ry="6" fill="#5a3a22"/>
    </svg>`,
  };
  const DECOR_ORDER = ['plant', 'candle', 'stack', 'globe', 'teacup'];
  const DECOR_W = { plant: 56, candle: 40, stack: 96, bookend: 34, globe: 62, teacup: 64 };

  function renderShelf() {
    const wrap = $('#shelves');
    wrap.innerHTML = '';
    const list = visibleBooks();
    const s = scale();
    const rowPad = s < 1 ? 16 : 28;
    const avail = Math.max(120, wrap.clientWidth - rowPad);
    const gap = 3;

    const rows = [[]];
    let used = 0;
    for (const b of list) {
      const w = dims(b).width;
      if (rows[rows.length - 1].length && used + w > avail) { rows.push([]); used = 0; }
      rows[rows.length - 1].push(b);
      used += w + gap;
    }
    const minRows = s < 1 ? 3 : 3;
    while (rows.length < minRows) rows.push([]);

    rows.forEach((row, ri) => {
      const shelf = document.createElement('div');
      shelf.className = 'shelf';
      const r = document.createElement('div');
      r.className = 'shelf-row';
      let width = 0;
      row.forEach(b => { r.appendChild(spine(b)); width += dims(b).width + gap; });

      // a little life on the shelves: decor where there's room
      let free = avail - width;
      const picks = [];
      if (row.length && free > DECOR_W.bookend * s + 120) {
        const be = document.createElement('div');
        be.className = 'decor bookend';
        be.innerHTML = DECOR.bookend(s);
        r.appendChild(be);
        free -= DECOR_W.bookend * s + 6;
      }
      const start = (ri * 3 + (row.length ? 0 : 1)) % DECOR_ORDER.length;
      for (let k = 0; k < 2; k++) {
        const name = DECOR_ORDER[(start + k * 2) % DECOR_ORDER.length];
        const need = DECOR_W[name] * s + 16;
        if (free > need && (row.length === 0 || k === 0 || free > 220)) { picks.push(name); free -= need; }
      }
      if (row.length && ri % 3 === 1) picks.reverse();
      picks.forEach(name => {
        const d = document.createElement('div');
        d.className = 'decor';
        d.innerHTML = DECOR[name](s);
        r.appendChild(d);
      });

      shelf.appendChild(r);
      const plank = document.createElement('div');
      plank.className = 'plank';
      shelf.appendChild(plank);
      wrap.appendChild(shelf);
    });

    if (!list.length) {
      const note = document.createElement('div');
      note.className = 'empty-note';
      if (books.length) {
        note.innerHTML = `<p>No books match “${esc(query)}”.</p><button class="btn btn-brass" data-clear>Clear search</button>`;
      } else {
        note.innerHTML = `<p>Your shelves are waiting. Add the first book you’ve read.</p><button class="btn btn-brass" data-add>Add a book</button>`;
      }
      wrap.firstChild.querySelector('.shelf-row').appendChild(note);
    }
    fitSpines(wrap);
  }

  // shrink long titles until they fit on the spine
  function fitSpines(root) {
    root.querySelectorAll('.book').forEach(bk => {
      const t = bk.querySelector('.s-title');
      if (!t) return;
      let fs = parseFloat(getComputedStyle(t).fontSize);
      const min = Math.max(9, fs * 0.6);
      let guard = 40;
      while (t.scrollHeight > t.clientHeight + 1 && fs > min && guard--) {
        fs -= 0.5;
        t.style.fontSize = fs + 'px';
      }
    });
  }

  function fmtDate(iso) {
    if (!iso) return '';
    const [y, m, d] = iso.split('-').map(Number);
    if (!y) return '';
    return new Date(y, (m || 1) - 1, d || 1).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function renderList() {
    const ol = $('#list');
    const list = visibleBooks();
    ol.innerHTML = list.map(b => {
      const c = colorOf(b);
      return `<li><button type="button" class="ledger-item" data-id="${esc(b.id)}">
        <span class="chip" style="--bg:${c.bg}" aria-hidden="true"></span>
        <span><h3>${esc(b.title)}</h3><span class="by">${esc(b.author || '')}${b.genre ? `, ${esc(b.genre)}` : ''}</span></span>
        <span class="right">${b.rating ? `<span class="stars-sm" aria-label="${b.rating} of 5 stars">${starsHTML(b.rating)}</span>` : '<span class="date">Not rated</span>'}<br><span class="date">${esc(fmtDate(b.finished))}</span></span>
        ${b.review ? `<p class="excerpt">${esc(b.review)}</p>` : ''}
      </button></li>`;
    }).join('');
    const empty = $('#listEmpty');
    empty.hidden = list.length > 0;
    empty.textContent = books.length ? `No books match “${query}”.` : 'Nothing logged yet. Add a book you’ve read and it will appear here.';
  }

  function renderStats() {
    const n = books.length;
    const rated = books.filter(b => b.rating);
    const avg = rated.length ? rated.reduce((s, b) => s + b.rating, 0) / rated.length : 0;
    const year = new Date().getFullYear().toString();
    const thisYear = books.filter(b => (b.finished || '').startsWith(year)).length;
    $('#stats').textContent = n
      ? `${n} ${n === 1 ? 'book' : 'books'} read${rated.length ? `, averaging ${avg.toFixed(1)} stars` : ''}. ${thisYear} finished in ${year}.`
      : 'Every book you’ve read, on one shelf.';
    $('#plate').textContent = `${n} read`;
    $('#genres').innerHTML = [...new Set(books.map(b => b.genre).filter(Boolean))].map(g => `<option value="${esc(g)}">`).join('');
  }

  function render() {
    renderStats();
    const shelf = prefs.view === 'shelf';
    $('#shelfView').hidden = !shelf;
    $('#listView').hidden = shelf;
    $('#tab-shelf').setAttribute('aria-selected', String(shelf));
    $('#tab-list').setAttribute('aria-selected', String(!shelf));
    $('#sort').value = prefs.sort;
    if (shelf) renderShelf(); else renderList();
    justAdded = null;
  }

  // ---------- details ----------
  function openDetail(id) {
    const b = books.find(x => x.id === id);
    if (!b) return;
    openId = id;
    const c = colorOf(b);
    $('#dChip').style.setProperty('--bg', c.bg);
    $('#dTitle').textContent = b.title;
    $('#dAuthor').textContent = b.author ? `by ${b.author}` : '';
    $('#dStars').innerHTML = b.rating ? starsHTML(b.rating) : '<span class="off" style="font-size:1rem;letter-spacing:0">Not rated</span>';
    $('#dStars').setAttribute('aria-label', b.rating ? `${b.rating} of 5 stars` : 'Not rated');
    const meta = [];
    if (b.finished) meta.push(`Finished ${fmtDate(b.finished)}`);
    if (b.pages) meta.push(`${b.pages} pages`);
    if (b.genre) meta.push(b.genre);
    $('#dMeta').textContent = meta.join(', ');
    const rev = $('#dReview');
    rev.textContent = b.review || 'No review written yet.';
    rev.classList.toggle('none', !b.review);
    const rm = $('#dRemove');
    rm.textContent = 'Remove';
    rm.dataset.confirm = '';
    $('#detail').showModal();
  }

  // ---------- editor ----------
  function buildStarPicker() {
    const sp = $('#starPicker');
    sp.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = '★';
      b.setAttribute('role', 'radio');
      b.setAttribute('aria-label', `${i} star${i > 1 ? 's' : ''}`);
      b.dataset.v = i;
      sp.appendChild(b);
    }
    const clear = document.createElement('button');
    clear.type = 'button'; clear.className = 'clear'; clear.textContent = 'No rating'; clear.dataset.v = 0;
    sp.appendChild(clear);
    sp.addEventListener('click', e => {
      const t = e.target.closest('button'); if (!t) return;
      setRating(Number(t.dataset.v));
    });
    sp.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { setRating(Math.min(5, pickedRating + 1)); e.preventDefault(); focusStar(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { setRating(Math.max(1, pickedRating - 1)); e.preventDefault(); focusStar(); }
    });
  }
  function focusStar() { const s = $(`#starPicker button[data-v="${pickedRating}"]`); s && s.focus(); }
  function setRating(v) {
    pickedRating = v;
    document.querySelectorAll('#starPicker button[role="radio"]').forEach(btn => {
      const n = Number(btn.dataset.v);
      btn.classList.toggle('on', n <= v);
      btn.setAttribute('aria-checked', String(n === v));
      btn.tabIndex = (n === (v || 1)) ? 0 : -1;
    });
  }
  function buildSwatches() {
    const sw = $('#swatches');
    sw.innerHTML = `<label title="Pick one for me"><input type="radio" name="color" value="auto"><span class="sw auto"><span>Surprise me</span></span></label>` +
      PALETTE.map((p, i) => `<label title="${p.name}"><input type="radio" name="color" value="${i}" aria-label="${p.name}"><span class="sw" style="--bg:${p.bg}"></span></label>`).join('');
  }

  function today() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function openEditor(id = null) {
    editingId = id;
    const b = id ? books.find(x => x.id === id) : null;
    const f = $('#bookForm');
    f.reset();
    $('#formError').hidden = true;
    $('#formTitle').textContent = b ? 'Edit book' : 'Add a book';
    $('#saveBtn').textContent = b ? 'Save changes' : 'Put it on the shelf';
    $('#fTitle').value = b?.title || '';
    $('#fAuthor').value = b?.author || '';
    $('#fFinished').value = b ? (b.finished || '') : today();
    $('#fPages').value = b?.pages || '';
    $('#fGenre').value = b?.genre || '';
    $('#fReview').value = b?.review || '';
    const cv = b && Number.isInteger(b.color) ? String(b.color) : 'auto';
    const radio = f.querySelector(`input[name="color"][value="${cv}"]`);
    if (radio) radio.checked = true;
    setRating(b?.rating || 0);
    $('#editor').showModal();
    setTimeout(() => $('#fTitle').focus(), 30);
  }

  function submitEditor(e) {
    e.preventDefault();
    const title = $('#fTitle').value.trim();
    const author = $('#fAuthor').value.trim();
    const err = $('#formError');
    if (!title || !author) {
      err.textContent = !title ? 'Add a title to shelve this book.' : 'Add the author’s name to shelve this book.';
      err.hidden = false;
      (!title ? $('#fTitle') : $('#fAuthor')).focus();
      return;
    }
    const colorVal = $('#bookForm').querySelector('input[name="color"]:checked')?.value;
    const pages = parseInt($('#fPages').value, 10);
    const data = {
      title, author,
      rating: pickedRating || 0,
      finished: $('#fFinished').value || '',
      pages: pages > 0 ? pages : null,
      genre: $('#fGenre').value.trim(),
      review: $('#fReview').value.trim(),
      color: colorVal && colorVal !== 'auto' ? Number(colorVal) : null,
    };
    if (editingId) {
      const b = books.find(x => x.id === editingId);
      Object.assign(b, data, { updatedAt: Date.now() });
      toast('Changes saved.');
    } else {
      const b = Object.assign({ id: uid(), addedAt: Date.now() }, data);
      books.push(b);
      justAdded = b.id;
      toast(`“${title}” is on the shelf.`);
    }
    const wasEditing = editingId;
    editingId = null;
    save();
    $('#editor').close();
    render();
    if (wasEditing) setTimeout(() => openDetail(wasEditing), 0);
  }

  // ---------- backup ----------
  function exportBooks() {
    const blob = new Blob([JSON.stringify({ app: 'Tomestead', version: 1, exportedAt: new Date().toISOString(), books }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `tomestead-backup-${today()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast('Backup downloaded.');
  }
  function importBooks(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        const incoming = Array.isArray(parsed) ? parsed : parsed.books;
        if (!Array.isArray(incoming)) throw new Error();
        let n = 0;
        for (const b of incoming) {
          if (!b || !b.title) continue;
          const clean = {
            id: String(b.id || uid()), title: String(b.title), author: String(b.author || ''),
            rating: Math.max(0, Math.min(5, parseInt(b.rating, 10) || 0)),
            finished: String(b.finished || ''), pages: parseInt(b.pages, 10) || null,
            genre: String(b.genre || ''), review: String(b.review || ''),
            color: Number.isInteger(b.color) ? b.color : null, addedAt: Number(b.addedAt) || Date.now(),
          };
          const i = books.findIndex(x => x.id === clean.id);
          if (i >= 0) books[i] = clean; else books.push(clean);
          n++;
        }
        save(); render();
        toast(`Restored ${n} ${n === 1 ? 'book' : 'books'}.`);
      } catch {
        toast('That file isn’t a Tomestead backup. Choose a .json file made with “Back up my library”.');
      }
    };
    reader.readAsText(file);
  }

  // ---------- toast ----------
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
  }

  // ---------- install ----------
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    $('#installBtn').hidden = false;
  });
  function setupIosTip() {
    const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const standalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
    if (isIos && !standalone && !prefs.iosTipDismissed) $('#iosTip').hidden = false;
  }

  // ---------- events ----------
  function wire() {
    buildStarPicker();
    buildSwatches();

    $('#addBtn').addEventListener('click', () => openEditor());
    document.querySelectorAll('.viewtoggle button').forEach(btn => btn.addEventListener('click', () => {
      prefs.view = btn.dataset.view; savePrefs(); render();
    }));
    $('#sort').addEventListener('change', e => { prefs.sort = e.target.value; savePrefs(); render(); });
    $('#search').addEventListener('input', e => { query = e.target.value; render(); });

    $('#shelves').addEventListener('click', e => {
      const b = e.target.closest('.book');
      if (b) return openDetail(b.dataset.id);
      if (e.target.closest('[data-add]')) return openEditor();
      if (e.target.closest('[data-clear]')) { query = ''; $('#search').value = ''; render(); }
    });
    $('#list').addEventListener('click', e => {
      const it = e.target.closest('.ledger-item');
      if (it) openDetail(it.dataset.id);
    });

    document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => btn.closest('dialog').close()));
    document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
    $('#detail').addEventListener('close', () => { openId = null; });

    $('#dEdit').addEventListener('click', () => { const id = openId; $('#detail').close(); openEditor(id); });
    $('#dRemove').addEventListener('click', (e) => {
      const btn = e.currentTarget;
      if (!btn.dataset.confirm) { btn.dataset.confirm = '1'; btn.textContent = 'Remove for good?'; return; }
      const b = books.find(x => x.id === openId);
      books = books.filter(x => x.id !== openId);
      save(); $('#detail').close(); render();
      toast(b ? `Removed “${b.title}”.` : 'Removed.');
    });

    $('#bookForm').addEventListener('submit', submitEditor);

    const more = $('.more');
    document.addEventListener('click', e => { if (more.open && !more.contains(e.target)) more.open = false; });
    $('#exportBtn').addEventListener('click', () => { more.open = false; exportBooks(); });
    $('#importBtn').addEventListener('click', () => { more.open = false; $('#importFile').click(); });
    $('#importFile').addEventListener('change', e => { const f = e.target.files[0]; if (f) importBooks(f); e.target.value = ''; });
    $('#installBtn').addEventListener('click', async () => {
      more.open = false;
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      $('#installBtn').hidden = true;
    });
    $('#iosTipClose').addEventListener('click', () => { $('#iosTip').hidden = true; prefs.iosTipDismissed = true; savePrefs(); });

    let rt; let lastW = window.innerWidth;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(() => { if (window.innerWidth !== lastW) { lastW = window.innerWidth; if (prefs.view === 'shelf') renderShelf(); } }, 120);
    });
    window.addEventListener('storage', e => { if (e.key === STORE) { books = load(); render(); } });
  }

  wire();
  render();
  setupIosTip();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => prefs.view === 'shelf' && renderShelf());

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
