/* Tomestead: a famous literary line on the title screen (the reading room's veil) each time the
   app opens. It walks through all 100 in a shuffled order before any comes back, then reshuffles
   for the next round. The place in the rotation is kept per device. */
(() => {
  'use strict';
  // [line, author, work]
  const QUOTES = [
    ['It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.', 'Jane Austen', 'Pride and Prejudice'],
    ['The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.', 'Jane Austen', 'Northanger Abbey'],
    ['There is no charm equal to tenderness of heart.', 'Jane Austen', 'Emma'],
    ['If a book is well written, I always find it too short.', 'Jane Austen', 'Catharine, or the Bower'],
    ['It was the best of times, it was the worst of times.', 'Charles Dickens', 'A Tale of Two Cities'],
    ['Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show.', 'Charles Dickens', 'David Copperfield'],
    ['Heaven knows we need never be ashamed of our tears.', 'Charles Dickens', 'Great Expectations'],
    ['I will honour Christmas in my heart, and try to keep it all the year.', 'Charles Dickens', 'A Christmas Carol'],
    ['Call me Ishmael.', 'Herman Melville', 'Moby-Dick'],
    ['All happy families are alike; each unhappy family is unhappy in its own way.', 'Leo Tolstoy', 'Anna Karenina'],
    ['The two most powerful warriors are patience and time.', 'Leo Tolstoy', 'War and Peace'],
    ['Beauty will save the world.', 'Fyodor Dostoevsky', 'The Idiot'],
    ['So we beat on, boats against the current, borne back ceaselessly into the past.', 'F. Scott Fitzgerald', 'The Great Gatsby'],
    ['I am no bird; and no net ensnares me: I am a free human being with an independent will.', 'Charlotte Brontë', 'Jane Eyre'],
    ['Whatever our souls are made of, his and mine are the same.', 'Emily Brontë', 'Wuthering Heights'],
    ['Beware; for I am fearless, and therefore powerful.', 'Mary Shelley', 'Frankenstein'],
    ['Welcome to my house! Enter freely and of your own will!', 'Bram Stoker', 'Dracula'],
    ['Quoth the Raven, “Nevermore.”', 'Edgar Allan Poe', 'The Raven'],
    ['It was a dark and stormy night.', 'Edward Bulwer-Lytton', 'Paul Clifford'],
    ['Last night I dreamt I went to Manderley again.', 'Daphne du Maurier', 'Rebecca'],
    ['In a hole in the ground there lived a hobbit.', 'J.R.R. Tolkien', 'The Hobbit'],
    ['Not all those who wander are lost.', 'J.R.R. Tolkien', 'The Fellowship of the Ring'],
    ['It does not do to dwell on dreams and forget to live.', 'J.K. Rowling', 'Harry Potter and the Sorcerer’s Stone'],
    ['Courage, dear heart.', 'C.S. Lewis', 'The Voyage of the Dawn Treader'],
    ['Fairy tales do not tell children the dragons exist. Children already know that dragons exist. Fairy tales tell children the dragons can be killed.', 'G.K. Chesterton', 'Tremendous Trifles'],
    ['To light a candle is to cast a shadow.', 'Ursula K. Le Guin', 'A Wizard of Earthsea'],
    ['Fear is the mind-killer.', 'Frank Herbert', 'Dune'],
    ['Don’t Panic.', 'Douglas Adams', 'The Hitchhiker’s Guide to the Galaxy'],
    ['Happy Hunger Games! And may the odds be ever in your favor.', 'Suzanne Collins', 'The Hunger Games'],
    ['A reader lives a thousand lives before he dies.', 'George R.R. Martin', 'A Dance with Dragons'],
    ['Books are a uniquely portable magic.', 'Stephen King', 'On Writing'],
    ['All children, except one, grow up.', 'J.M. Barrie', 'Peter and Wendy'],
    ['Curiouser and curiouser!', 'Lewis Carroll', 'Alice’s Adventures in Wonderland'],
    ['Why, sometimes I’ve believed as many as six impossible things before breakfast.', 'Lewis Carroll', 'Through the Looking-Glass'],
    ['There is no place like home.', 'L. Frank Baum', 'The Wonderful Wizard of Oz'],
    ['Isn’t it nice to think that tomorrow is a new day with no mistakes in it yet?', 'L.M. Montgomery', 'Anne of Green Gables'],
    ['I’m not afraid of storms, for I’m learning how to sail my ship.', 'Louisa May Alcott', 'Little Women'],
    ['If you look the right way, you can see that the whole world is a garden.', 'Frances Hodgson Burnett', 'The Secret Garden'],
    ['There is nothing—absolutely nothing—half so much worth doing as simply messing about in boats.', 'Kenneth Grahame', 'The Wind in the Willows'],
    ['I just wanted to be sure of you.', 'A.A. Milne', 'The House at Pooh Corner'],
    ['Where’s Papa going with that ax?', 'E.B. White', 'Charlotte’s Web'],
    ['For the strength of the Pack is the Wolf, and the strength of the Wolf is the Pack.', 'Rudyard Kipling', 'The Jungle Book'],
    ['Fifteen men on the dead man’s chest — Yo-ho-ho, and a bottle of rum!', 'Robert Louis Stevenson', 'Treasure Island'],
    ['The sea is everything.', 'Jules Verne', 'Twenty Thousand Leagues Under the Sea'],
    ['All for one, one for all!', 'Alexandre Dumas', 'The Three Musketeers'],
    ['All human wisdom is contained in these two words: Wait and hope.', 'Alexandre Dumas', 'The Count of Monte Cristo'],
    ['He who reads much and walks much, sees much and knows much.', 'Miguel de Cervantes', 'Don Quixote'],
    ['Wanderer, there is no road; the road is made by walking.', 'Antonio Machado', 'Campos de Castilla'],
    ['I have in me all the dreams of the world.', 'Fernando Pessoa', 'Tobacco Shop'],
    ['I have always imagined that Paradise will be a kind of library.', 'Jorge Luis Borges', 'Poem of the Gifts'],
    ['A book must be the axe for the frozen sea within us.', 'Franz Kafka', 'Letter to Oskar Pollak'],
    ['Yes I said yes I will Yes.', 'James Joyce', 'Ulysses'],
    ['One cannot think well, love well, sleep well, if one has not dined well.', 'Virginia Woolf', 'A Room of One’s Own'],
    ['What do we live for, if it is not to make life less difficult to each other?', 'George Eliot', 'Middlemarch'],
    ['It is difficult for a woman to define her feelings in language which is chiefly made by men to express theirs.', 'Thomas Hardy', 'Far from the Madding Crowd'],
    ['The only way to get rid of a temptation is to yield to it.', 'Oscar Wilde', 'The Picture of Dorian Gray'],
    ['We are all in the gutter, but some of us are looking at the stars.', 'Oscar Wilde', 'Lady Windermere’s Fan'],
    ['You see, but you do not observe.', 'Arthur Conan Doyle', 'A Scandal in Bohemia'],
    ['Work consists of whatever a body is obliged to do, and Play consists of whatever a body is not obliged to do.', 'Mark Twain', 'The Adventures of Tom Sawyer'],
    ['Classic: a book which people praise and don’t read.', 'Mark Twain', 'Following the Equator'],
    ['I went to the woods because I wished to live deliberately.', 'Henry David Thoreau', 'Walden'],
    ['Nothing great was ever achieved without enthusiasm.', 'Ralph Waldo Emerson', 'Circles'],
    ['I am large, I contain multitudes.', 'Walt Whitman', 'Song of Myself'],
    ['There is no frigate like a book to take us lands away.', 'Emily Dickinson', 'There is no Frigate like a Book'],
    ['Two roads diverged in a wood, and I — I took the one less traveled by.', 'Robert Frost', 'The Road Not Taken'],
    ['I wandered lonely as a cloud.', 'William Wordsworth', 'I Wandered Lonely as a Cloud'],
    ['A thing of beauty is a joy for ever.', 'John Keats', 'Endymion'],
    ['Water, water, every where, nor any drop to drink.', 'Samuel Taylor Coleridge', 'The Rime of the Ancient Mariner'],
    ['’Tis better to have loved and lost than never to have loved at all.', 'Alfred, Lord Tennyson', 'In Memoriam A.H.H.'],
    ['To see a World in a Grain of Sand, and a Heaven in a Wild Flower.', 'William Blake', 'Auguries of Innocence'],
    ['The best laid schemes o’ mice an’ men gang aft agley.', 'Robert Burns', 'To a Mouse'],
    ['The mind is its own place, and in itself can make a Heaven of Hell, a Hell of Heaven.', 'John Milton', 'Paradise Lost'],
    ['No man is an island, entire of itself.', 'John Donne', 'Devotions upon Emergent Occasions'],
    ['I am the master of my fate, I am the captain of my soul.', 'William Ernest Henley', 'Invictus'],
    ['I have loved the stars too fondly to be fearful of the night.', 'Sarah Williams', 'The Old Astronomer'],
    ['Do not go gentle into that good night.', 'Dylan Thomas', 'Do Not Go Gentle into That Good Night'],
    ['To be, or not to be: that is the question.', 'William Shakespeare', 'Hamlet'],
    ['All the world’s a stage, and all the men and women merely players.', 'William Shakespeare', 'As You Like It'],
    ['We are such stuff as dreams are made on, and our little life is rounded with a sleep.', 'William Shakespeare', 'The Tempest'],
    ['The course of true love never did run smooth.', 'William Shakespeare', 'A Midsummer Night’s Dream'],
    ['Shall I compare thee to a summer’s day?', 'William Shakespeare', 'Sonnet 18'],
    ['Tell me, O Muse, of that ingenious hero who travelled far and wide.', 'Homer', 'The Odyssey'],
    ['All hope abandon, ye who enter here.', 'Dante Alighieri', 'Inferno'],
    ['Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.', 'Francis Bacon', 'Of Studies'],
    ['Reading is to the mind what exercise is to the body.', 'Richard Steele', 'The Tatler'],
    ['I cannot live without books.', 'Thomas Jefferson', 'Letter to John Adams'],
    ['Your children are not your children. They are the sons and daughters of Life’s longing for itself.', 'Kahlil Gibran', 'The Prophet'],
    ['It was a bright cold day in April, and the clocks were striking thirteen.', 'George Orwell', 'Nineteen Eighty-Four'],
    ['All animals are equal, but some animals are more equal than others.', 'George Orwell', 'Animal Farm'],
    ['It was a pleasure to burn.', 'Ray Bradbury', 'Fahrenheit 451'],
    ['Words can be like X-rays if you use them properly — they’ll go through anything.', 'Aldous Huxley', 'Brave New World'],
    ['People generally see what they look for, and hear what they listen for.', 'Harper Lee', 'To Kill a Mockingbird'],
    ['And now that you don’t have to be perfect, you can be good.', 'John Steinbeck', 'East of Eden'],
    ['Isn’t it pretty to think so?', 'Ernest Hemingway', 'The Sun Also Rises'],
    ['So it goes.', 'Kurt Vonnegut', 'Slaughterhouse-Five'],
    ['The past is a foreign country; they do things differently there.', 'L.P. Hartley', 'The Go-Between'],
    ['There is no greater agony than bearing an untold story inside you.', 'Maya Angelou', 'I Know Why the Caged Bird Sings'],
    ['Stay gold, Ponyboy. Stay gold.', 'S.E. Hinton', 'The Outsiders'],
    ['I have hated the words and I have loved them.', 'Markus Zusak', 'The Book Thief'],
    ['The world is quiet here.', 'Lemony Snicket', 'A Series of Unfortunate Events'],
  ];

  const KEY = 'tomestead.quote';
  // a fixed shuffle for each round, so every line comes up once before any repeats
  function order(round) {
    let s = (round * 2654435761 + 977) >>> 0;
    const rnd = () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const a = QUOTES.map((_, i) => i);
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    // don't let a reshuffle put the same line twice in a row
    if (round > 0) { const prev = order(round - 1); if (a[0] === prev[prev.length - 1]) [a[0], a[1]] = [a[1], a[0]]; }
    return a;
  }
  let n = 0;
  try { n = Math.max(0, parseInt(localStorage.getItem(KEY), 10) || 0); } catch {}
  const round = Math.floor(n / QUOTES.length);
  const idx = order(round)[n % QUOTES.length];
  const [text, author, work] = QUOTES[idx];
  let counted = false;

  // time to read it: about four words a second, plus a moment to settle
  const words = text.split(/\s+/).length;
  const readMs = Math.min(7000, Math.max(3200, 1600 + words * 260));

  function fill(veil) {
    if (!veil || veil.querySelector('.veil-quote')) return;
    const fig = document.createElement('figure');
    fig.className = 'veil-quote';
    fig.innerHTML = '<span class="veil-rule"></span><blockquote></blockquote><figcaption></figcaption>';
    fig.querySelector('blockquote').textContent = `“${text}”`;
    fig.querySelector('figcaption').textContent = `— ${author}, ${work}`;
    const sub = veil.querySelector('.veil-sub');
    veil.insertBefore(fig, sub || null);
  }
  fill(document.getElementById('rm-veil'));

  window.TomesteadQuotes = {
    count: QUOTES.length,
    current: { text, author, work },
    readMs,
    // called once the title screen has actually been seen, so the next open shows the next line
    seen() {
      if (counted) return; counted = true;
      try { localStorage.setItem(KEY, String(n + 1)); } catch {}
    },
  };
})();
