# Tomestead

A cozy digital library for every book you've read. Each book you log lands on the bookshelf as a spine with its own color, height and thickness, its title and author along the spine, and your star rating stamped in foil at the top. Switch to the list view to read your reviews at a glance.

## Features

- **Bookshelf view**: wooden shelves that fill as you read. Spine height and color vary per book; thickness follows the page count when you enter one.
- **Add a book**: title, author, 1–5 star rating, date finished, pages, genre, spine color, and a written review.
- **List view**: every book with rating, finish date and the start of your review.
- **Search and arrange**: by recently added, date finished, author, title or rating.
- **Year shelves**: filter the shelf and list to All, a single year, or books with no finish date.
- **Bookcases of three shelves**: when books overflow, they continue on the next bookcase. Swipe, use the arrows, or press ← / → to move between them.
- **Reading goals**: set a goal for any year. That year's shelf holds numbered ghost spots for the books still to come, and each finished book fills one in. Reaching the goal brings a celebration.
- **Customize library**: choose the wallpaper, shelf wood, bookends and which trinkets sit on your shelves (plants, candles, a sleeping cat, a lantern and more), with a live preview.
- **Home screen app**: installable on iPhone, iPad and Android, and works offline.
- **Backups**: download your library as a JSON file and restore it on any device.

## Where your data lives

Your books, goals and look are saved in your browser's storage on the device you use. Nothing is uploaded to GitHub. To move your library to another device, use **Back up my library** from the ••• menu, then **Restore from backup** on the other device.

## Add it to your home screen

- **iPhone / iPad (Safari):** open the site, tap Share, then **Add to Home Screen**.
- **Android (Chrome):** open the site, tap ⋮, then **Install app** (or use **Install app** in Tomestead's ••• menu).

## Project layout

```
index.html
styles.css
app.js
decor.js              wallpapers, wood finishes, bookends and trinkets
sw.js                 offline support
manifest.webmanifest  home screen app details
icons/
```

GitHub Pages serves the site straight from the `main` branch. Push a change and it goes live in about a minute.
