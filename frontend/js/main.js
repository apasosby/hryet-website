// ======================================
// HRYET - Main JS
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ HRYET cargado correctamente.");

    initializeNavbar();

    initializeScrollTop();

    initializeNewsletter();

    initializeAnimations();

});

// ======================================
// Navbar
// ======================================

function initializeNavbar() {

    const menuButton = document.getElementById("menuButton");

    const navMenu = document.getElementById("navMenu");

    if (!menuButton || !navMenu) return;

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}
// ======================================
// Botón Volver Arriba
// ======================================

function initializeScrollTop() {

    const scrollButton = document.getElementById("scrollTop");

    if (!scrollButton) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollButton.classList.add("show");

        } else {

            scrollButton.classList.remove("show");

        }

    });

    scrollButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ======================================
// Animaciones
// ======================================

function initializeAnimations() {

    const sections = document.querySelectorAll("section");

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    sections.forEach((section) => {

        observer.observe(section);

    });

}
// ======================================
// Newsletter
// ======================================

function initializeNewsletter() {

    const newsletterForm = document.getElementById("newsletterForm");

    if (!newsletterForm) return;

    newsletterForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = document.getElementById("newsletterEmail");

        if (!email.value.trim()) {

            alert("Por favor ingresa un correo electrónico.");

            return;

        }

        alert("🎉 ¡Gracias por suscribirte a HRYET!");

        newsletterForm.reset();

    });

}


// ======================================
// Efectos en botones
// ======================================

function initializeButtons() {

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-3px)";

            button.style.transition = "0.3s";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translateY(0)";

        });

    });

}


// ======================================
// Efectos en tarjetas
// ======================================

function initializeCards() {

    const cards = document.querySelectorAll(".card, .product-card, .admin-card, .stat-card");

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

            card.style.transition = "0.3s";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

}

initializeButtons();

initializeCards();
// ======================================
// Tema (Preparado para futuras versiones)
// ======================================

function initializeTheme() {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {

        document.body.setAttribute("data-theme", savedTheme);

    }

}

initializeTheme();


// ======================================
// Utilidades
// ======================================

function showNotification(message) {

    alert(message);

}

window.showNotification = showNotification;


// ======================================
// Header dinámico
// ======================================

function initializeHeader() {

    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}

initializeHeader();


// ======================================
// Fin del archivo
// ======================================

console.log("✅ main.js cargado correctamente.");