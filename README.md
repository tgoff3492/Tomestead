# Tomestead

A cozy digital library for every book you've read. Each book you log lands on the bookshelf as a spine with its own color, height and thickness, its title and author along the spine, and your star rating stamped in foil at the top. Switch to the list view to read your reviews at a glance.

## Features

- **Opening scene**: the first time you open the app each day, the title fades into a lamplit home library (in your own wallpaper and wood), the view pushes in to the bookcase, and your shelves appear. Tap to skip. Customize → Opening scene can play it every time or never.
- **Bookshelf view**: wooden shelves that fill as you read. Spine height and color vary per book; thickness follows the page count when you enter one.
- **Add a book**: start typing a title and pick the right book from Open Library: author, pages, genre, cover and summary fill themselves in. Or tap the barcode button and point your camera at the ISBN on the back of the book. Then add stars, dates and a review (or leave the review for later).
- **Reading status**: each book is *Read*, *Reading now*, *Want to read* or *Didn’t finish*. Books you're reading show at the top with a progress line; tap one to update your page (or %, for ebooks and audiobooks), see your pace and when you're on track to finish, save a quote, or mark it finished. The shelf pills switch between your read shelves and the *Reading*, *To read* and *Set aside* piles. "What to read next" suggestions can go straight onto your to-read pile.
- **Rereads**: a book can have more than one finish date. "Read it again" on the open book starts a reread; finishing it keeps every date, and each one counts toward that year's goal.
- **Formats**: print, ebook or audiobook (length in hours). A small mark on the spine shows ebooks and audiobooks.
- **Series and tags**: give a book its series and number (arrange by Series to keep them together), and tag it with moods or anything you like. Make your own tags right in the form, or rename and delete them in ••• → Tags. Tap a tag to see every book that has it.
- **Favorite lines**: save quotes (with the page) while you read; they appear on the open book's pages.
- **Year in review** (••• menu): books, pages and hours for any year or all time, month by month, your ratings, five-star books, longest, shortest and quickest reads, genres, tags, authors you came back to, formats, and the year's covers.
- **Import from Goodreads or StoryGraph** (••• menu): bring in a library exported from either site, with ratings, reviews, dates, statuses, series (from Goodreads titles), shelves and moods as tags. Books you already have are skipped.
- **List view**: every book with rating, finish date and the start of your review.
- **Search and arrange**: by recently added, date finished, author, title or rating.
- **Year shelves**: filter the shelf and list to All, a single year, or books with no finish date.
- **Bookcases of three shelves**: when books overflow, they continue on the next bookcase. Swipe, use the arrows, or press ← / → to move between them.
- **Reading goals**: set a goal for any year. That year's shelf holds numbered ghost spots for the books still to come, and each finished book fills one in. Reaching the goal brings a celebration and a gold trophy, engraved with the year and the number of books, that stands in the arch of your bookcase for good.
- **Golden hour and twilight**: the library is a sunlit room by day (warm plaster, honey oak, light through the window with dust drifting and glinting in it) and a moonlit one by night (a star-chart wall, moonbeams, candles glowing, slow sparks). It follows your phone's dark mode by default; Customize → Time of day can follow the clock instead, or stay day or night. Wood, book cloth, leather and floorboards use real textures (in `tex/`).
- **The arch**: each bookcase has an arched top with a display niche. Trophies stand there as you earn them, newest in the middle; until then it holds a trinket or two, which go back to the shelves when a trophy needs the room.
- **Goals with your own timeline** (••• → Reading goals): set a number of books for any stretch of time, like this month, the next 30 days, the next 3 months, or dates you pick (a summer, a book club, a trip), with an optional name. Every book finished in that window counts, including ones already logged. Running goals show under the toolbar with days left; the Reading goals list shows each goal's progress and the pace needed to finish. Reaching one brings a celebration and a ribbon.
- **The reading table**: tap a book and it tips out of its slot, slides off the shelf, turns to show its cover, and is carried down to a lamplit reading table. Tap it again and the cover swings open: the left page has the details and a short summary, the right page has your review. Close it and it goes back in its slot.
- **What to read next**: in the ••• menu. Tomestead builds a taste profile from the subjects and authors of the books you rate highest (low ratings count against a subject), then searches Open Library for well-loved books that share it and that aren't already on your shelves. Each pick explains which of your books it's based on. Tap "Another idea" to see more, "Not for me" to never see one again, or "I've read it" to add it to your shelf.
- **Cover art and summaries**: covers and summaries come from [Open Library](https://openlibrary.org) automatically. In the open book, use **Cover** to try another edition's cover, use your own photo, or switch to a plain cloth cover.
- **Customize library**: choose the wallpaper, shelf wood, bookends and which trinkets sit on your shelves (a trailing pothos, a candlestick, a sleeping cat, a globe, a lantern and more). Each trinket appears once, in an open spot, and a stack of books holds one small piece on top. You can also pick the reading table (walnut, leather-top desk, farmhouse oak, round cherry, or marble and brass) and up to five things to keep on it (a banker's lamp, tea, reading glasses, ink and quill and more), with live previews.
- **Home screen app**: installable on iPhone, iPad and Android, and works offline.
- **Accounts and sync** (once switched on, see [SETUP-ACCOUNTS.md](SETUP-ACCOUNTS.md)): each reader signs in with Google or email, and their library, goals, trophies, look and cover photos are saved to the cloud and follow them to any device. Only people on the guest list can use it. Sign out from the ••• menu to hand the device to someone else.
- **Backups**: download your library as a JSON file and restore it on any device.

## Where your data lives

With accounts switched on, each reader's books, goals, trophies, look and cover photos are kept in their own space in Firebase (Google's app backend). Only they can read or change it, and only if their email is on the guest list. A copy also stays in the browser, so the app opens instantly and works offline, then catches up when it's back online. Nothing is uploaded to GitHub.

With accounts switched off (the default), everything is saved only in your browser's storage on the device you use. To find books as you type, covers, summaries and reading suggestions, Tomestead sends what you type, each book's title and author (or ISBN) (and, for suggestions, the subjects and authors you like) to Open Library's public search. Scanning a barcode uses your camera only on your device; on phones without a built-in barcode reader (iPhone), a small reader is downloaded from jsDelivr the first time you scan. Cover photos you add yourself stay on your device and are included in backups. To move your library to another device, use **Back up my library** from the ••• menu, then **Restore from backup** on the other device.

## Add it to your home screen

- **iPhone / iPad (Safari):** open the site, tap Share, then **Add to Home Screen**.
- **Android (Chrome):** open the site, tap ⋮, then **Install app** (or use **Install app** in Tomestead's ••• menu).

## Project layout

```
index.html
styles.css
app.js
art.js                the drawn objects: trinkets, table pieces, trophies
decor.js              wallpapers, wood finishes, bookends, trinket and table catalogs
intro.js              the opening scene
table.js              the reading table, drawn in perspective
reader.js             the 3D book and the shelf-to-table animation
recommend.js          what to read next
importer.js           Goodreads / StoryGraph .csv import
scan.js               barcode scanning (the camera reads the ISBN)
yearreview.js         year in review
covers.js             cover art and summaries (Open Library) and your own cover photos
sync.js               sign-in, the guest list, and syncing with Firebase
firebase-config.js    your Firebase project settings (null = accounts off)
firestore.rules       database security rules (paste into the Firebase console)
storage.rules         cover photo security rules (paste into the Firebase console)
sw.js                 offline support
manifest.webmanifest  home screen app details
icons/
```

GitHub Pages serves the site straight from the `main` branch. Push a change and it goes live in about a minute.
