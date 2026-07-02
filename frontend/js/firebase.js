// ==============================
// HRYET - Firebase
// ==============================

// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Authentication
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firestore
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Storage
import {
  getStorage
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Analytics
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";


// ==============================
// Configuración Firebase
// ==============================

const firebaseConfig = {

  apiKey: "AIzaSyCoNoiTkueaqHxBwEUig3d9BX0taTjr3jc",

  authDomain: "hryet-f2de3.firebaseapp.com",

  projectId: "hryet-f2de3",

  storageBucket: "hryet-f2de3.firebasestorage.app",

  messagingSenderId: "839699465873",

  appId: "1:839699465873:web:4cbb72d912c676b537a130",

  measurementId: "G-8DK6LSF1TT"

};


// ==============================
// Inicializar Firebase
// ==============================

const app = initializeApp(firebaseConfig);


// Analytics
const analytics = getAnalytics(app);


// Authentication
const auth = getAuth(app);


// Firestore
const db = getFirestore(app);


// Storage
const storage = getStorage(app);


// ==============================
// Exportaciones
// ==============================

export {

  app,

  analytics,

  auth,

  db,

  storage

};