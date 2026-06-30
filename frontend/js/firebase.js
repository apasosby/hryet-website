// ==========================================
// HRYET FIREBASE
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";

const firebaseConfig = {

  apiKey: "TU_API_KEY",

  authDomain: "TU_AUTH_DOMAIN",

  projectId: "TU_PROJECT_ID",

  storageBucket: "TU_STORAGE_BUCKET",

  messagingSenderId: "TU_MESSAGING_SENDER_ID",

  appId: "TU_APP_ID"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export {

  auth,

  db,

  storage

};