// ========================================
// HRYET - MAIN.JS
// ========================================

console.log("🚀 HRYET iniciado correctamente");

// Esperar a que cargue toda la página
document.addEventListener("DOMContentLoaded", () => {

    console.log("Página cargada");

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
// SCROLL SUAVE
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

// ========================================
// FIN
// ========================================