// ======================================
// HRYET FIREBASE
// ======================================

// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// ======================================
// CONFIGURACIÓN DE FIREBASE
// (La reemplazaremos por la tuya)
// ======================================

const firebaseConfig = {

    apiKey: "TU_API_KEY",

    authDomain: "TU_PROYECTO.firebaseapp.com",

    projectId: "TU_PROYECTO",

    storageBucket: "TU_PROYECTO.appspot.com",

    messagingSenderId: "000000000000",

    appId: "TU_APP_ID"

};

// Inicializar Firebase

const app = initializeApp(firebaseConfig);

// Servicios

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

// Exportar

export {

    auth,

    db,

    storage

};