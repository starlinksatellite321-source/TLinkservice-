// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase Authentication
import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firestore Database
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Your Firebase Configuration
const firebaseConfig = {

  apiKey: "AIzaSyDKd7CjwRk372YmxQ_DpFB_kdMyxQja7QI",

  authDomain: "client-portal-cdcf1.firebaseapp.com",

  projectId: "client-portal-cdcf1",

  storageBucket: "client-portal-cdcf1.firebasestorage.app",

  messagingSenderId: "939443340721",

  appId: "1:939443340721:web:63a229826605327b3fa990"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Authentication
export const auth = getAuth(app);


// Google Login Provider
export const provider = new GoogleAuthProvider();


// Database
export const db = getFirestore(app);