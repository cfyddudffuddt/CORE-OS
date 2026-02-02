// --- 1. PASTE YOUR KEYS INSIDE THIS BOX ---
const firebaseConfig = {
  apiKey: "AIzaSyCIKoqUtc7IkUCEzDJVBDQ__tZWoAlzUa0",
  authDomain: "core-os-db.firebaseapp.com",
  projectId: "core-os-db",
  storageBucket: "core-os-db.firebasestorage.app",
  messagingSenderId: "291952417111",
  appId: "1:291952417111:web:eb4d651d53563091208612"
};

// --- 2. INITIALIZE FIREBASE (DO NOT TOUCH THIS PART) ---
// This uses the "firebase" global variable we loaded in index.html
firebase.initializeApp(firebaseConfig);

// Initialize Authentication
const auth = firebase.auth();

console.log("FIREBASE CONNECTED: READY");