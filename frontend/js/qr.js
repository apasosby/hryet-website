// ======================================
// HRYET QR.JS
// ======================================

console.log("📱 Sistema QR iniciado");

// ==============================
// GENERAR QR
// ==============================

function generarQR(usuarioId){

    console.log("Generando QR para:", usuarioId);

}

// ==============================
// ESCANEAR QR
// ==============================

function escanearQR(codigo){

    console.log("QR escaneado:", codigo);

    registrarEscaneo(codigo);

}

// ==============================
// REGISTRAR ESCANEO
// ==============================

function registrarEscaneo(codigo){

    console.log("Escaneo registrado");

}

// ==============================
// OBTENER LINK DEL PERFIL
// ==============================

function obtenerPerfil(usuario){

    return "https://hryet.com/profile.html?id=" + usuario;

}

// ==============================
// INICIAR
// ==============================

document.addEventListener("DOMContentLoaded",()=>{

    console.log("QR listo");

});