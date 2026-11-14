# Tomestead

A cozy digital library for every book you've read. Each book you log lands on the bookshelf as a spine with its own color, height and thickness, its title and author along the spine, and your star rating stamped in foil at the top. Switch to the list view to read your reviews at a glance.

## Features

- **Opening scene**: each time you open the app, the title fades into a lamplit home library (in your own wallpaper and wood), the view pushes in to the bookcase, and your shelves appear. Tap to skip.
- **Bookshelf view**: wooden shelves that fill as you read. Spine height and color vary per book; thickness follows the page count when you enter one.
- **Add a book**: title, author, 1–5 star rating, date finished, pages, genre, spine color, and a written review.
- **List view**: every book with rating, finish date and the start of your review.
- **Search and arrange**: by recently added, date finished, author, title or rating.
- **Year shelves**: filter the shelf and list to All, a single year, or books with no finish date.
- **Bookcases of three shelves**: when books overflow, they continue on the next bookcase. Swipe, use the arrows, or press ← / → to move between them.
- **Reading goals**: set a goal for any year. That year's shelf holds numbered ghost spots for the books still to come, and each finished book fills one in. Reaching the goal brings a celebration and a gold trophy, engraved with the year and the number of books, that stands on top of your bookcase for good.
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

With accounts switched off (the default), everything is saved only in your browser's storage on the device you use. To find covers, summaries and reading suggestions, Tomestead sends each book's title and author (and, for suggestions, the subjects and authors you like) to Open Library's public search. Cover photos you add yourself stay on your device and are included in backups. To move your library to another device, use **Back up my library** from the ••• menu, then **Restore from backup** on the other device.

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
