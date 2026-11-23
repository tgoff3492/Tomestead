/* Tomestead accounts: this project's Firebase web app settings (Firebase console →
   Project settings → Your apps). Set this back to null to switch accounts off; the
   app then keeps everything in the browser only, as it did before. These values are
   safe to publish; the security rules (firestore.rules, storage.rules) protect the data. */
window.TOMESTEAD_FIREBASE = {
  apiKey: "AIzaSyDO3CMC3lkYGclzQhpIGWmc3-pzo-uQomo",
  authDomain: "tomestead-b604a.firebaseapp.com",
  projectId: "tomestead-b604a",
  storageBucket: "tomestead-b604a.firebasestorage.app",
  messagingSenderId: "300728391371",
  appId: "1:300728391371:web:6814bf9df3490e05cd2d4e"
};

/* Book lookups beyond Open Library (covers.js). Google Books works without a key (a small shared
   allowance); paste a key here for your own daily allowance (Google Cloud console → APIs &
   Services → enable "Books API" → Credentials; restrict the key to tgoff3492.github.io).
   Hardcover runs through a small Firebase function (functions/), so its token is never in the app. */
window.TOMESTEAD_BOOKS = {
  googleKey: '',
  hardcover: true,
};
