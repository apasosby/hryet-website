// ======================================
// HRYET Application
// ======================================

import { auth } from "./firebase.js";

import {

    onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ======================================
// Inicio
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 HRYET iniciado.");

    initializeApp();

});

// ======================================
// Inicializar aplicación
// ======================================

function initializeApp() {

    checkAuthentication();

    initializeNavigation();

}

// ======================================
// Verificar autenticación
// ======================================

function checkAuthentication() {

    onAuthStateChanged(auth, (user) => {

        if (user) {

            console.log("Usuario:", user.email);

        } else {

            console.log("Usuario no autenticado");

        }

    });

}
// ======================================
// Navegación
// ======================================

function initializeNavigation() {

    const currentPage = window.location.pathname
        .split("/")
        .pop();

    console.log("Página actual:", currentPage);

    const links = document.querySelectorAll("nav a");

    links.forEach((link) => {

        const href = link.getAttribute("href");

        if (!href) return;

        if (href.includes(currentPage)) {

            link.classList.add("active");

        }

    });

}


// ======================================
// Notificaciones
// ======================================

function showNotification(message, type = "success") {

    const notification = document.createElement("div");

    notification.className = `notification ${type}`;

    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.classList.add("show");

    }, 100);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {

            notification.remove();

        }, 300);

    }, 3000);

}

window.showNotification = showNotification;
// ======================================
// Configuración Global
// ======================================

const HRYET = {

    name: "HRYET",

    version: "1.0.0",

    author: "Henrry García",

    environment: "production"

};

window.HRYET = HRYET;


// ======================================
// Utilidades Globales
// ======================================

function formatCurrency(amount) {

    return new Intl.NumberFormat("en-US", {

        style: "currency",

        currency: "USD"

    }).format(amount);

}

function formatDate(date) {

    return new Date(date).toLocaleDateString("es-ES", {

        day: "2-digit",

        month: "long",

        year: "numeric"

    });

}

window.formatCurrency = formatCurrency;

window.formatDate = formatDate;


// ======================================
// Manejo de errores globales
// ======================================

window.addEventListener("error", (event) => {

    console.error("Error detectado:", event.error);

});


// ======================================
// Aplicación lista
// ======================================

console.log("✅ HRYET App inicializada correctamente.");

console.log("Versión:", HRYET.version);