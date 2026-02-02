// 1. YOUR KEYS
const firebaseConfig = {
 apiKey: "AIzaSyCIKoqUtc7IkUCEzDJVBDQ__tZWoAlzUa0",
  authDomain: "core-os-db.firebaseapp.com",
  projectId: "core-os-db",
  storageBucket: "core-os-db.firebasestorage.app",
  messagingSenderId: "291952417111",
  appId: "1:291952417111:web:eb4d651d53563091208612"
};

// 2. INITIALIZE SERVICES GLOBALLY
// This makes "auth" and "db" available to ALL your HTML pages.
firebase.initializeApp(firebaseConfig);

// Define them on "window" to prevent "not defined" errors
window.auth = firebase.auth();
window.db = firebase.firestore();

// Also define them as standard variables for older scripts
var auth = firebase.auth();
var db = firebase.firestore();

console.log("SYSTEM ONLINE: Auth & Database Connected");