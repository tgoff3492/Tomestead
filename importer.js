/* Tomestead import: reads a library exported from Goodreads or The StoryGraph
   (a .csv file) and turns each row into a Tomestead book. Nothing is sent
   anywhere; app.js decides what to keep. */
(() => {
  'use strict';

  // RFC 4180-ish: quoted fields, doubled quotes, newlines inside quotes
  function parseCSV(text) {
    text = String(text || '').replace(/^﻿/, '');
    const rows = [];
    let row = [], field = '', q = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (q) {
        if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else q = false; }
        else field += c;
      } else if (c === '"') q = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(field); field = '';
        if (row.some(v => v !== '')) rows.push(row);
        row = [];
      } else field += c;
    }
    row.push(field);
    if (row.some(v => v !== '')) rows.push(row);
    if (!rows.length) return [];
    const head = rows[0].map(h => h.trim());
    return rows.slice(1).map(r => Object.fromEntries(head.map((h, i) => [h, (r[i] ?? '').trim()])));
  }

  // "2023/05/14" or "2023-05-14" → "2023-05-14"
  function isoDate(s) {
    const m = String(s || '').match(/(\d{4})[\/-](\d{1,2})(?:[\/-](\d{1,2}))?/);
    if (!m) return '';
    return `${m[1]}-${m[2].padStart(2, '0')}-${(m[3] || '1').padStart(2, '0')}`;
  }
  const stamp = (s) => { const d = isoDate(s); if (!d) return 0; const [y, m, dd] = d.split('-').map(Number); return new Date(y, m - 1, dd, 12).getTime(); };
  const cleanISBN = (s) => { const d = String(s || '').replace(/[="\s-]/g, '').toUpperCase(); return /^(97[89]\d{10}|\d{9}[\dX])$/.test(d) ? d : ''; };
  const int = (s) => { const n = parseInt(String(s || '').replace(/[^\d]/g, ''), 10); return n > 0 ? n : null; };
  function plainText(html) {
    return String(html || '')
      .replace(/<br\s*\/?>/gi, '\n').replace(/<\/p>\s*<p>/gi, '\n\n').replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
      .replace(/\n{3,}/g, '\n\n').trim();
  }
  // "comfort-reads" → "Comfort reads"
  const tagName = (s) => {
    const t = String(s || '').trim().replace(/[-_]+/g, ' ').replace(/\s+/g, ' ');
    if (!t) return '';
    if (/^(ya|dnf|tbr|sf|lgbtq?\+?)$/i.test(t)) return t.toUpperCase();
    return t[0].toUpperCase() + t.slice(1);
  };
  // "Mockingjay (The Hunger Games, #3)" → title + series + number
  function splitSeries(title) {
    const m = String(title).match(/^(.*\S)\s*\(([^()]+?),?\s*#(\d+(?:\.\d+)?)\)\s*$/);
    return m ? { title: m[1], series: m[2].trim(), seriesNo: Number(m[3]) } : { title: String(title).trim() };
  }
  function formatFrom(s) {
    s = String(s || '').toLowerCase();
    if (/audio|audible|mp3|\bcd\b/.test(s)) return 'audio';
    if (/kindle|ebook|e-book|nook|digital|kobo/.test(s)) return 'ebook';
    return 'print';
  }

  function fromGoodreads(r) {
    const s = splitSeries(r['Title']);
    const shelf = (r['Exclusive Shelf'] || '').toLowerCase();
    const finished = isoDate(r['Date Read']);
    let status = 'read';
    if (shelf === 'currently-reading') status = 'reading';
    else if (shelf === 'to-read') status = 'want';
    else if (/dnf|did-not-finish|abandon|gave-up|unfinished/.test(shelf)) status = 'dnf';
    else if (shelf !== 'read' && !finished && !(int(r['Read Count']) > 0)) status = 'want';
    const skip = new Set(['read', 'currently-reading', 'to-read', shelf]);
    const tags = (r['Bookshelves'] || '').split(',').map(x => x.trim()).filter(x => x && !skip.has(x.toLowerCase())).map(tagName);
    return {
      title: s.title, author: r['Author'] || '', series: s.series || '', seriesNo: s.seriesNo || null,
      status, rating: Math.max(0, Math.min(5, parseInt(r['My Rating'], 10) || 0)),
      finished: status === 'read' ? finished : '',
      pages: int(r['Number of Pages']), isbn: cleanISBN(r['ISBN13']) || cleanISBN(r['ISBN']),
      format: formatFrom(r['Binding']), review: plainText(r['My Review']), tags,
      addedAt: stamp(r['Date Added']),
    };
  }

  function fromStoryGraph(r) {
    const st = (r['Read Status'] || '').toLowerCase();
    const status = st === 'currently-reading' ? 'reading' : st === 'to-read' ? 'want' : st === 'did-not-finish' ? 'dnf' : st === 'read' ? 'read' : 'want';
    // "2023/01/05-2023/01/20, 2021/03/02-2021/03/30": one entry per time it was read
    const spans = (r['Dates Read'] || '').split(',').map(x => x.trim()).filter(Boolean).map(x => {
      const [a, z] = x.split(/\s*-\s*(?=\d{4})/);
      return { start: z ? isoDate(a) : '', end: isoDate(z || a) };
    }).filter(x => x.end).sort((p, q) => q.end.localeCompare(p.end));
    const last = isoDate(r['Last Date Read']);
    const ends = spans.map(x => x.end);
    if (last && !ends.includes(last)) ends.unshift(last);
    ends.sort((p, q) => q.localeCompare(p));
    const rating = parseFloat(r['Star Rating']);
    const moods = (r['Moods'] || '').split(',').map(tagName).filter(Boolean);
    const tags = (r['Tags'] || '').split(',').map(tagName).filter(Boolean);
    const isbn = cleanISBN(r['ISBN/UID']);
    const b = {
      title: String(r['Title'] || '').trim(), author: (r['Authors'] || '').split(',').slice(0, 2).map(x => x.trim()).filter(Boolean).join(' & '),
      status, rating: rating > 0 ? Math.max(1, Math.min(5, Math.round(rating))) : 0,
      finished: status === 'read' ? (ends[0] || '') : '', rereads: status === 'read' ? ends.slice(1) : [],
      isbn, format: formatFrom(r['Format']), review: plainText(r['Review']),
      tags: [...new Set([...moods, ...tags])], addedAt: stamp(r['Date Added']),
    };
    if (status === 'read' && spans[0] && spans[0].start && spans[0].end === b.finished) b.started = spans[0].start;
    if (status === 'reading' && spans[0] && spans[0].start) b.started = spans[0].start;
    if (status === 'dnf' && last) b.stopped = last;
    return b;
  }

  // Returns { source, books } or throws if the file isn't a library export
  function parse(text) {
    const rows = parseCSV(text);
    if (!rows.length) throw new Error('empty');
    const cols = Object.keys(rows[0]);
    let source, map;
    if (cols.includes('Exclusive Shelf') && cols.includes('Title')) { source = 'Goodreads'; map = fromGoodreads; }
    else if (cols.includes('Read Status') && cols.includes('Title')) { source = 'StoryGraph'; map = fromStoryGraph; }
    else throw new Error('unknown');
    const books = rows.map(map).filter(b => b.title);
    return { source, books };
  }

  window.TomesteadImport = { parse, parseCSV, splitSeries };
})();
