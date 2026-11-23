# Turning on accounts (Firebase)

Accounts are switched off until `firebase-config.js` is filled in. Until then Tomestead works the old way, with no sign-in and everything kept in the browser. These steps take about 15 minutes, and you only do them once.

## 1. Create the project
1. Go to [console.firebase.google.com](https://console.firebase.google.com) and click **Create a project**. Name it `Tomestead`. You can turn Google Analytics off.
2. In the left menu, open **Build ▸ Authentication ▸ Get started**.
   - Under **Sign-in method**, turn on **Email/Password** (only the first switch, not "Email link").
   - Turn on **Google** and choose your email as the support email.
   - Under **Settings ▸ Authorized domains**, click **Add domain** and enter `tgoff3492.github.io`.

## 2. Put a card on file (needed for cover photos)
1. Click **Upgrade** next to "Spark" at the bottom of the left menu, choose **Blaze**, and add a card. Usage inside the free amounts costs nothing.
2. When it offers a budget, set it to **$1**. Google will email you if anything ever costs money. (You can change this later under **Google Cloud console ▸ Billing ▸ Budgets & alerts**.)

## 3. The database
1. Open **Build ▸ Firestore Database ▸ Create database**. Pick the location **nam5 (United States)** and **Start in production mode**.
2. Open its **Rules** tab, replace everything with the contents of [`firestore.rules`](firestore.rules), and click **Publish**.

## 4. Cover photo storage
1. Open **Build ▸ Storage ▸ Get started**. Pick a **US** location (`us-central1`, `us-east1` or `us-west1` keeps it in the free tier) and **production mode**.
2. Open its **Rules** tab, paste in [`storage.rules`](storage.rules), and click **Publish**. If it asks to let Storage rules read Firestore, click **Allow**. That's how the guest list is checked.

## 5. The guest list
In **Firestore Database ▸ Data**, click **Start collection** and name it `invites`. For each person:
- **Document ID:** their email address, all lowercase (for example `jane.doe@gmail.com`)
- Add one field so the console will save it, such as `name` (string) = `Jane`

Only people on this list can save books or photos. To remove someone, delete their document. Their library stays in the database but they can't open it.

## 6. Connect the app
1. Click the gear ▸ **Project settings**, scroll to **Your apps**, and click the **</>** (web) icon. Name it `Tomestead` and leave "Firebase Hosting" unchecked.
2. Copy the `firebaseConfig = { ... }` values into `firebase-config.js` in place of `null`, then commit. These values are safe to be public. The rules above protect the data.

Once that's live, opening Tomestead shows the sign-in card. On a device that already had books, the first person to sign in is asked whether to bring those books into their library.

## Good to know
- **Google sign-in from the home-screen app on iPhone:** if the Google window won't open, use email and password. It works everywhere.
- **Email accounts** get a confirmation email first. Until it's confirmed they see "Check your email".
- **Sharing a device:** use ••• ▸ **Sign out**, then the next person signs in. Each library is separate.
- **Backups** are optional now. Every change is saved to the cloud automatically. **Back up my library** still downloads a copy, which is handy for analysis or as a safety net.

## Updating the rules (Nov 2026: feedback and error reports)
`firestore.rules` now also lets signed-in guests **add** to two collections, `feedback` and `errors`, that only you can read (in the Firebase console → Firestore → Data). After pulling this change, paste `firestore.rules` into Firestore → Rules again and click **Publish**. Until then, feedback waits on each person's device and is sent once the rules allow it.


## Family paintings (Nov 18, 2026)
Some readers can share paintings for the reading room's frames with each other, and nobody else can see them.
1. Paste `firestore.rules` into **Firestore ▸ Rules** and click **Publish**. Paste `storage.rules` into **Storage ▸ Rules** and click **Publish**.
2. In **Firestore ▸ Data ▸ invites**, open each family member's document (yours too) and add a field: `family` (boolean) = `true`.
3. Each of them signs out and back in once (••• ▸ Sign out), so the app sees the new field.

Then Customize ▸ Paintings shows a **+ Family painting** tile to family members. A painting added there hangs in that person's room and appears as a choice for the rest of the family. Only whoever added a painting can remove it (select it, then **Remove it for everyone**). The pictures live in Storage under `family/` and are listed in the Firestore collection `familyPaintings`; the rules close both to everyone without `family: true`. Removing someone's `family` field (or their invite) takes the paintings away from them.

## The family room (Nov 22, 2026)
The reading room has a second, smaller room where each family member's shelves stand side by side. It uses the same `family: true` field as the family paintings.
1. Paste `firestore.rules` into **Firestore ▸ Rules** and click **Publish** (it adds the `familyShelves` collection).
2. That's it for anyone already marked `family: true`. Their shelves appear once each of them has opened Tomestead with this version.

What's shared: titles, authors, stars, status (read, reading, to read, set aside), spine colour, pages and the cover. Never reviews, notes, saved lines or reading logs. Each person can turn it off in **Customize ▸ Room ▸ Share my shelves with my family** (that deletes their summary) and change the name on their bookcase there. The summaries live in the Firestore collection `familyShelves`, one document per reader, readable only by family accounts.
