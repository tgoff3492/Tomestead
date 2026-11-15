/* Tomestead — reading goals: which finished books count, and where a goal stands.
   A goal counts the books you finish from the day you set it. Books already on your
   shelf when you set it don't count, even ones finished that same day.
   Pure functions (no page access), so they can be tested on their own. */
(() => {
  'use strict';

  const ISO = /^\d{4}-\d{2}-\d{2}$/;
  const pad = (n) => String(n).padStart(2, '0');
  const dayNum = (iso) => { const [y, m, d] = iso.split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 86400000); };
  const isoOf = (n) => new Date(n * 86400000).toISOString().slice(0, 10);
  const monthEnd = (y, m) => new Date(Date.UTC(y, m, 0)).getUTCDate();   // m is 1-12
  const later = (a, b) => (a > b ? a : b);

  // a finish date can be a day, a month or just a year (from imports): the days it could be
  function spanOf(d) {
    d = String(d || '');
    let m;
    if ((m = /^(\d{4})-(\d{2})-(\d{2})/.exec(d))) return [`${m[1]}-${m[2]}-${m[3]}`, `${m[1]}-${m[2]}-${m[3]}`];
    if ((m = /^(\d{4})-(\d{2})/.exec(d))) return [`${m[1]}-${m[2]}-01`, `${m[1]}-${m[2]}-${pad(monthEnd(+m[1], +m[2]))}`];
    if ((m = /^(\d{4})/.exec(d))) return [`${m[1]}-01-01`, `${m[1]}-12-31`];
    return null;
  }

  // the day a goal starts counting: its start date, or the day you set it if that's later
  const countsFrom = (g) => later(g.start, g.since || g.start);

  // every time a book was finished: { key, date, lo, hi }
  function finishes(books, datesOf) {
    const out = [];
    for (const b of books) {
      if (!b) continue;
      for (const d of datesOf(b)) {
        const s = spanOf(d);
        if (s) out.push({ key: `${b.id}|${String(d).slice(0, 10)}`, date: String(d).slice(0, 10), lo: s[0], hi: s[1] });
      }
    }
    return out;
  }

  // the finishes that count toward a goal, oldest first
  function counted(g, books, datesOf) {
    const from = countsFrom(g), skip = new Set(g.skip || []);
    return finishes(books, datesOf)
      .filter(f => f.lo >= from && f.hi <= g.end && !skip.has(f.key))
      .sort((a, b) => a.lo.localeCompare(b.lo) || a.key.localeCompare(b.key));
  }

  // set a goal today: remember the day, and the finishes already logged that it would otherwise count
  function stamp(g, books, datesOf, today) {
    const since = g.since || today;
    const base = Object.assign({}, g, { since, skip: [] });
    return { since, skip: counted(base, books, datesOf).map(f => f.key) };
  }

  // a goal saved before this rule existed: count from the day it was made, and skip books that were
  // already in the library by then
  function adoptOld(g, books, datesOf, today, madeAt) {
    const since = madeAt || today;
    const base = { start: g.start, end: g.end, since, skip: [] };
    const made = madeAt ? new Date(`${madeAt}T23:59:59`).getTime() : Infinity;
    const old = new Set(books.filter(b => b && (b.addedAt || 0) <= made).map(b => b.id));
    return { since, skip: counted(base, books, datesOf).filter(f => old.has(f.key.split('|')[0])).map(f => f.key) };
  }

  // where a goal stands on a given day
  function info(g, done, today, metAt, fmt) {
    const t = dayNum(today), a = dayNum(g.start), z = dayNum(g.end), from = dayNum(countsFrom(g));
    const status = t < a ? 'upcoming' : t > z ? 'ended' : 'active';
    const met = done >= g.target;
    const left = Math.max(0, g.target - done);
    const daysLeft = status === 'upcoming' ? z - a + 1 : Math.max(0, z - t + 1);
    const f = fmt || ((iso) => iso);
    let note;
    if (met) note = metAt ? `Reached ${f(metAt)}` : 'Goal reached';
    else if (status === 'ended') note = `Ended ${f(g.end)} with ${done} of ${g.target}`;
    else if (status === 'upcoming') note = `Starts ${f(g.start)} · ${daysLeft} ${daysLeft === 1 ? 'day' : 'days'}`;
    else {
      // how fast you'd need to go from here, and whether you're keeping pace (counted from the day it began counting)
      const start = Math.min(Math.max(from, a), z);
      const total = z - start + 1, elapsed = Math.max(0, t - start + 1);
      const every = Math.floor(daysLeft / left);
      const pace = daysLeft >= left ? (every === 1 ? '1 book a day' : `1 book every ${every} days`) : `${left} in ${daysLeft} ${daysLeft === 1 ? 'day' : 'days'}`;
      const expected = Math.floor((g.target * elapsed) / total);
      const track = elapsed > 1 && done < expected ? ' · a little behind' : (done > 0 && done >= expected ? ' · on pace' : '');
      note = `${daysLeft === 1 ? 'Last day' : `${daysLeft} days left`} · ${pace}${track}`;
    }
    return { done, met, left, status, daysLeft, note, pct: Math.min(100, Math.round((done / g.target) * 100)) };
  }

  // quick picks for a new goal; they start today, since only books you finish from now on count
  function spanRange(span, today) {
    const n = dayNum(today);
    const [y, m, d] = today.split('-').map(Number);
    if (span === 'month') return [today, `${y}-${pad(m)}-${pad(monthEnd(y, m))}`];
    if (span === '30') return [today, isoOf(n + 29)];
    if (span === '90') {
      // three calendar months from today (Nov 30 → Feb 28, not March 2), up to the day before
      const ty = y + Math.floor((m - 1 + 3) / 12), tm = ((m - 1 + 3) % 12) + 1;
      const end = `${ty}-${pad(tm)}-${pad(Math.min(d, monthEnd(ty, tm)))}`;
      return [today, isoOf(dayNum(end) - 1)];
    }
    return null;
  }

  // the day a goal was reached: the finish that got you there
  function reachedOn(list, target, today) {
    if (list.length < target) return '';
    const f = list[target - 1];
    return ISO.test(f.date) ? f.date : (f.hi < today ? f.hi : today);
  }

  const api = { ISO, dayNum, isoOf, spanOf, countsFrom, finishes, counted, stamp, adoptOld, info, spanRange, reachedOn };
  if (typeof window !== 'undefined') window.TomesteadGoals = api;
  if (typeof module !== 'undefined') module.exports = api;
})();
