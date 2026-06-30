// ======================================
// HRYET UTILS.JS
// ======================================

// Mostrar mensajes
function mostrarMensaje(mensaje) {

    alert(mensaje);

}

// Validar correo electrónico
function validarEmail(email) {

    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresion.test(email);

}

// Validar contraseña
function validarPassword(password) {

    return password.length >= 6;

}

// Formatear precio
function formatearPrecio(precio) {

    return "$" + Number(precio).toFixed(2);

}

// Formatear fecha
function fechaActual() {

    const fecha = new Date();

    return fecha.toLocaleDateString();

}

// Generar ID único
function generarID() {

    return "HRYET-" + Date.now();

}

// Limpiar formulario
function limpiarFormulario(idFormulario) {

    const formulario = document.getElementById(idFormulario);

    if (formulario) {

        formulario.reset();

    }

}

console.log("✅ Utils cargado correctamente");