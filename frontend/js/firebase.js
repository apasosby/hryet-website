// ======================================
// HRYET - Firebase
// ======================================

// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Storage
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Firebase Analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";


// ======================================
// Configuración de Firebase
// ======================================

const firebaseConfig = {

  apiKey: "AIzaSyCoNoiTkueaqHxBwEUig3d9BX0taTjr3jc",

  authDomain: "hryet-f2de3.firebaseapp.com",

  projectId: "hryet-f2de3",

  storageBucket: "hryet-f2de3.firebasestorage.app",

  messagingSenderId: "839699465873",

  appId: "1:839699465873:web:2eafc5c3474388c237a130",

  measurementId: "G-R3W2ZT6670"

};


// ======================================
// Inicializar Firebase
// ======================================

const app = initializeApp(firebaseConfig);


// ======================================
// Servicios de Firebase
// ======================================

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

const analytics = getAnalytics(app);


// ======================================
// Exportar servicios
// ======================================

export {

  app,

  auth,

  db,

  storage,

  analytics

};