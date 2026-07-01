import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCoNoiTkueaqHxBwEUig3d9BX0taTjr3jc",
    authDomain: "hryet-f2de3.firebaseapp.com",
    projectId: "hryet-f2de3",
    storageBucket: "hryet-f2de3.firebasestorage.app",
    messagingSenderId: "839699465873",
    appId: "1:839699465873:web:2eafc5c3474388c237a130",
    measurementId: "G-R3W2ZT6670"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const analytics = getAnalytics(app);

export { app, auth, db, analytics };