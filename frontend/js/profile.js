// ======================================
// HRYET PROFILE.JS
// ======================================

import { auth } from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ===============================
// CARGAR PERFIL
// ===============================

onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log("Perfil cargado");

        const nombre = document.getElementById("userName");

        if (nombre) {
            nombre.innerHTML = user.email;
        }

    } else {

        window.location.href = "login.html";

    }

});

// ===============================
// EDITAR PERFIL
// ===============================

function editarPerfil() {

    console.log("Editar perfil");

}

// ===============================
// GUARDAR PERFIL
// ===============================

function guardarPerfil() {

    console.log("Guardar perfil");

}