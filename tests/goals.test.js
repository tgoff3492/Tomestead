// Test cases for Tomestead's goal rules (goals.js) and title-only search filter (covers.js)
const assert = require('assert');
const G = require('../goals.js');

function datesOf(b) {
  const out = [];
  [b.finished, ...(Array.isArray(b.rereads) ? b.rereads : [])].forEach(d => { d = String(d || ''); if (/^\d{4}/.test(d) && !out.includes(d)) out.push(d); });
  return out;
}
let pass = 0, fail = 0;
function t(name, fn) { try { fn(); pass++; console.log('  ok  ', name); } catch (e) { fail++; console.log('  FAIL', name, '\n       ', e.message); } }
const count = (g, books) => G.counted(g, books, datesOf).length;
const TODAY = '2026-11-14';

console.log('Goal counting');
const shelf = [
  { id: 'a', finished: '2026-03-02', addedAt: 1 },          // read earlier this year
  { id: 'b', finished: '2026-11-03', addedAt: 2 },          // read earlier this month
  { id: 'c', finished: '2026-11-14', addedAt: 3 },          // logged today, before the goal
  { id: 'd', finished: '', addedAt: 4 },                     // no date
  { id: 'e', finished: '2026', addedAt: 5 },                 // year-only (import)
];
t('a new month goal counts none of the books already on the shelf', () => {
  const g = { start: '2026-11-14', end: '2026-11-30', target: 3 };
  Object.assign(g, G.stamp(g, shelf, datesOf, TODAY));
  assert.strictEqual(count(g, shelf), 0);
  assert.deepStrictEqual(g.skip, ['c|2026-11-14']);
});
t('a new year goal set in November counts none of the year’s earlier books', () => {
  const g = { start: '2026-01-01', end: '2026-12-31', target: 10 };
  Object.assign(g, G.stamp(g, shelf, datesOf, TODAY));
  assert.strictEqual(G.countsFrom(g), TODAY);
  assert.strictEqual(count(g, shelf), 0);
});
t('a book finished after the goal is set counts', () => {
  const g = { start: '2026-11-14', end: '2026-11-30', target: 3 };
  Object.assign(g, G.stamp(g, shelf, datesOf, TODAY));
  const after = [...shelf, { id: 'f', finished: '2026-11-15', addedAt: 9 }];
  assert.strictEqual(count(g, after), 1);
});
t('a book finished today but logged after the goal counts', () => {
  const g = { start: '2026-11-14', end: '2026-11-30', target: 3 };
  Object.assign(g, G.stamp(g, shelf, datesOf, TODAY));
  const after = [...shelf, { id: 'g', finished: '2026-11-14', addedAt: 9 }];
  assert.strictEqual(count(g, after), 1);
});
t('backfilling an old book after the goal is set does not count', () => {
  const g = { start: '2026-01-01', end: '2026-12-31', target: 10 };
  Object.assign(g, G.stamp(g, shelf, datesOf, TODAY));
  const after = [...shelf, { id: 'h', finished: '2026-06-01', addedAt: 9 }];
  assert.strictEqual(count(g, after), 0);
});
t('rereading a shelf book after the goal counts the new finish only', () => {
  const g = { start: '2026-11-14', end: '2026-11-30', target: 3 };
  Object.assign(g, G.stamp(g, shelf, datesOf, TODAY));
  const after = shelf.map(b => b.id === 'c' ? Object.assign({}, b, { finished: '2026-11-20', rereads: ['2026-11-14'] }) : b);
  assert.strictEqual(count(g, after), 1);
});
t('editing a shelf book (rating etc.) keeps it out of the goal', () => {
  const g = { start: '2026-11-14', end: '2026-11-30', target: 3 };
  Object.assign(g, G.stamp(g, shelf, datesOf, TODAY));
  const after = shelf.map(b => b.id === 'c' ? Object.assign({}, b, { rating: 5 }) : b);
  assert.strictEqual(count(g, after), 0);
});
t('undated and year-only books never count toward a mid-year goal', () => {
  const g = { start: '2026-01-01', end: '2026-12-31', target: 10, since: TODAY, skip: [] };
  assert.strictEqual(count(g, [{ id: 'x', finished: '' }, { id: 'y', finished: '2026' }]), 0);
});
t('a goal for next year counts from Jan 1', () => {
  const g = { start: '2027-01-01', end: '2027-12-31', target: 10 };
  Object.assign(g, G.stamp(g, shelf, datesOf, TODAY));
  assert.strictEqual(G.countsFrom(g), '2027-01-01');
  assert.strictEqual(count(g, [{ id: 'n', finished: '2027-01-01' }]), 1);
  assert.strictEqual(count(g, [{ id: 'n', finished: '2026-12-31' }]), 0);
});
t('a past year kept from before (since = Jan 1) still counts year-only imports', () => {
  const g = { start: '2025-01-01', end: '2025-12-31', target: 2, since: '2025-01-01', skip: [] };
  assert.strictEqual(count(g, [{ id: 'p', finished: '2025' }, { id: 'q', finished: '2025-07' }, { id: 'r', finished: '2025-05-05' }]), 3);
});
t('a month-only date counts only if the whole month is in the window', () => {
  const g = { start: '2026-11-14', end: '2026-12-31', target: 2, since: TODAY, skip: [] };
  assert.strictEqual(count(g, [{ id: 'm', finished: '2026-11' }, { id: 'n', finished: '2026-12' }]), 1);
});
t('finishes after the end date do not count', () => {
  const g = { start: '2026-11-14', end: '2026-11-30', target: 2, since: TODAY, skip: [] };
  assert.strictEqual(count(g, [{ id: 'z', finished: '2026-12-01' }]), 0);
});

console.log('Old goals (saved before the rule)');
t('an old dated goal skips books that were in the library when it was made', () => {
  const made = new Date('2026-11-10T12:00:00').getTime();
  const books = [
    { id: 'old', finished: '2026-11-12', addedAt: made - 1000 },   // future-dated? no: logged before goal, finished after goal day
    { id: 'pre', finished: '2026-11-05', addedAt: made - 5000 },
    { id: 'new', finished: '2026-11-12', addedAt: made + 86400000 * 2 },
  ];
  const g = { start: '2026-11-01', end: '2026-11-30', target: 5 };
  Object.assign(g, G.adoptOld(g, books, datesOf, TODAY, '2026-11-10'));
  assert.strictEqual(g.since, '2026-11-10');
  assert.strictEqual(count(g, books), 1);
});

console.log('Where a goal stands');
t('pace for a year goal set mid-November is measured from the day it was set', () => {
  const g = { start: '2026-01-01', end: '2026-12-31', target: 6, since: '2026-11-14', skip: [] };
  const i = G.info(g, 1, '2026-11-20', '', x => x);
  // 48 days in window from Nov 14; 7 days in -> expected floor(6*7/48)=0 -> on pace with 1
  assert.ok(/on pace/.test(i.note), i.note);
  assert.ok(!/behind/.test(i.note), i.note);
});
t('a year goal set mid-year is not "a little behind" on day one', () => {
  const g = { start: '2026-01-01', end: '2026-12-31', target: 12, since: TODAY, skip: [] };
  const i = G.info(g, 0, TODAY, '', x => x);
  assert.ok(!/behind/.test(i.note), i.note);
});
t('upcoming goal says when it starts', () => {
  const g = { start: '2026-12-01', end: '2026-12-31', target: 3, since: TODAY, skip: [] };
  const i = G.info(g, 0, TODAY, '', x => x);
  assert.strictEqual(i.status, 'upcoming');
  assert.ok(/Starts 2026-12-01 · 31 days/.test(i.note), i.note);
});
t('more books left than days uses "N in D days"', () => {
  const g = { start: '2026-11-14', end: '2026-11-15', target: 5, since: TODAY, skip: [] };
  const i = G.info(g, 0, TODAY, '', x => x);
  assert.ok(/5 in 2 days/.test(i.note), i.note);
});
t('met goal shows when it was reached', () => {
  const g = { start: '2026-11-14', end: '2026-11-30', target: 1, since: TODAY, skip: [] };
  const i = G.info(g, 1, TODAY, '2026-11-14', x => x);
  assert.strictEqual(i.met, true); assert.strictEqual(i.pct, 100);
  assert.ok(/Reached 2026-11-14/.test(i.note));
});
t('reachedOn picks the finish that got you there', () => {
  const g = { start: '2026-11-14', end: '2026-11-30', target: 2, since: TODAY, skip: [] };
  const list = G.counted(g, [{ id: 'a', finished: '2026-11-20' }, { id: 'b', finished: '2026-11-16' }, { id: 'c', finished: '2026-11-25' }], datesOf);
  assert.strictEqual(G.reachedOn(list, 2, '2026-11-26'), '2026-11-20');
  assert.strictEqual(G.reachedOn(list, 4, '2026-11-26'), '');
});

console.log('Quick picks');
t('"This month" starts today, ends on the last day', () => {
  assert.deepStrictEqual(G.spanRange('month', '2026-11-14'), ['2026-11-14', '2026-11-30']);
  assert.deepStrictEqual(G.spanRange('month', '2026-12-31'), ['2026-12-31', '2026-12-31']);
  assert.deepStrictEqual(G.spanRange('month', '2028-02-10'), ['2028-02-10', '2028-02-29']);
});
t('"Next 30 days" is 30 days including today', () => {
  assert.deepStrictEqual(G.spanRange('30', '2026-12-15'), ['2026-12-15', '2027-01-13']);
});
t('"Next 3 months" from Nov 30 ends Feb 27 (not early March)', () => {
  assert.deepStrictEqual(G.spanRange('90', '2026-11-30'), ['2026-11-30', '2027-02-27']);
});
t('"Next 3 months" from Nov 14 ends Feb 13', () => {
  assert.deepStrictEqual(G.spanRange('90', '2026-11-14'), ['2026-11-14', '2027-02-13']);
});
t('"Next 3 months" from Oct 31 ends Jan 30', () => {
  assert.deepStrictEqual(G.spanRange('90', '2026-10-31'), ['2026-10-31', '2027-01-30']);
});

console.log('Title-only search');
global.window = {};
global.fetch = async () => ({ ok: true, json: async () => ({ docs: [] }) });
require('../covers.js');
const C = window.TomesteadCovers;
const doc = (title, author) => ({ title, author_name: [author] });
t('"Laura" drops books by authors named Laura', () => {
  const docs = [doc('Little House on the Prairie', 'Laura Ingalls Wilder'), doc('Laura', 'Vera Caspary'), doc('Seabiscuit', 'Laura Hillenbrand'), doc('Laura Lamont’s Life in Pictures', 'Emma Straub')];
  assert.deepStrictEqual(C.titleMatches(docs, 'Laura').map(d => d.title), ['Laura', 'Laura Lamont’s Life in Pictures']);
});
t('exact title ranks first, half-typed last word matches by prefix', () => {
  const docs = [doc('The Hobbit Companion', 'X'), doc('The Hobbit', 'J.R.R. Tolkien'), doc('Hobbies for Kids', 'Y')];
  assert.deepStrictEqual(C.titleMatches(docs, 'the hobbit').map(d => d.title), ['The Hobbit', 'The Hobbit Companion']);
  assert.deepStrictEqual(C.titleMatches(docs, 'the hob').map(d => d.title), ['The Hobbit', 'The Hobbit Companion']);
});
t('accents and apostrophes don’t block a match', () => {
  assert.strictEqual(C.titleMatches([doc('Les Misérables', 'Hugo')], 'les miserables').length, 1);
  assert.strictEqual(C.titleMatches([doc('Ender’s Game', 'Card')], "enders game").length, 1);
});
t('duplicate editions collapse to one', () => {
  assert.strictEqual(C.titleMatches([doc('Laura', 'Vera Caspary'), doc('Laura', 'Vera Caspary')], 'laura').length, 1);
});
t('search asks Open Library by title, not by keyword', async () => {});
(async () => {
  const urls = [];
  global.fetch = async (u) => { urls.push(u); return { ok: true, json: async () => ({ docs: [doc('Laura', 'Vera Caspary'), doc('Seabiscuit', 'Laura Hillenbrand')] }) }; };
  const res = await C.search('Laura');
  t('search() sends title= and returns only title matches', () => {
    assert.ok(/[?&]title=Laura/.test(urls[0]), urls[0]);
    assert.ok(!/[?&]q=/.test(urls[0]), urls[0]);
    assert.deepStrictEqual(res.map(r => r.title), ['Laura']);
  });
  urls.length = 0;
  global.fetch = async (u) => { urls.push(u); return { ok: true, json: async () => ({ docs: /title=the(&|$)/.test(u) ? [doc('The Hobbit', 'Tolkien'), doc('The Road', 'McCarthy')] : [] }) }; };
  const res2 = await C.search('the hob');
  t('half-typed last word falls back to the whole words and filters by prefix', () => {
    assert.deepStrictEqual(res2.map(r => r.title), ['The Hobbit']);
  });
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
