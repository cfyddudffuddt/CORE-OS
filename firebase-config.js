// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIKoqUtc7IkUCEzDJVBDQ__tZWoAlzUa0",
  authDomain: "core-os-db.firebaseapp.com",
  projectId: "core-os-db",
  storageBucket: "core-os-db.firebasestorage.app",
  messagingSenderId: "291952417111",
  appId: "1:291952417111:web:eb4d651d53563091208612"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Authentication
const auth = firebase.auth();

console.log("FIREBASE CONNECTED: READY");
// Initialize Firebase
const app = initializeApp(firebaseConfig);