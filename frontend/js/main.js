// ========================================
// HRYET - Firebase + Google Analytics
// ========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

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

// Inicializar Analytics
let analytics = null;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

console.log("✅ Firebase y Google Analytics iniciados");

// ========================================
// HRYET
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Página cargada");
  iniciarBotones();
  iniciarAnimaciones();
});

// ==============================
// BOTONES
// ==============================

function iniciarBotones() {
  const botones = document.querySelectorAll("button");

  botones.forEach((boton) => {
    boton.addEventListener("mouseenter", () => {
      boton.style.transform = "scale(1.05)";
    });

    boton.addEventListener("mouseleave", () => {
      boton.style.transform = "scale(1)";
    });
  });
}

// ==============================
// ANIMACIONES
// ==============================

function iniciarAnimaciones() {
  const secciones = document.querySelectorAll("section");

  secciones.forEach((seccion) => {
    seccion.style.opacity = "0";

    setTimeout(() => {
      seccion.style.transition = "1s";
      seccion.style.opacity = "1";
    }, 300);
  });
}

// ==============================
// HEADER
// ==============================

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (!header) return;

  if (window.scrollY > 50) {
    header.style.background = "#000";
  } else {
    header.style.background = "#111";
  }
});