// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Configuración de Firebase
const firebaseConfig = {

  apiKey: "AIzaSyCoNoiTkueaqHxBwEUig3d9BX0taTjr3jc",

  authDomain: "hryet-f2de3.firebaseapp.com",

  projectId: "hryet-f2de3",

  storageBucket: "hryet-f2de3.firebasestorage.app",

  messagingSenderId: "839699465873",

  appId: "1:839699465873:web:4cbb72d912c676b537a130",

  measurementId: "G-8DK6LSF1TT"

};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);


// Exportar servicios
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;