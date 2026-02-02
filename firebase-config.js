// 1. YOUR API KEYS
// (Make sure to put your real keys back in here!)
const firebaseConfig = {
  apiKey: "AIzaSyCIKoqUtc7IkUCEzDJVBDQ__tZWoAlzUa0",
  authDomain: "core-os-db.firebaseapp.com",
  projectId: "core-os-db",
  storageBucket: "core-os-db.firebasestorage.app",
  messagingSenderId: "291952417111",
  appId: "1:291952417111:web:eb4d651d53563091208612"
};

// 2. INITIALIZE FIREBASE APP ONLY
// We will start Auth and Database in the HTML files to prevent errors.
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
  console.log("FIREBASE CONFIG LOADED");
} else {
  console.error("Error: Firebase libraries not loaded yet.");
}