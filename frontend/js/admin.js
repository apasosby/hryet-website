// ======================================
// HRYET ADMIN.JS
// ======================================

console.log("👑 Panel de Administración HRYET iniciado");

// ==============================
// ESTADÍSTICAS
// ==============================

const estadisticas = {

    usuarios: 0,
    productos: 0,
    pedidos: 0,
    escaneosQR: 0

};

// ==============================
// CARGAR PANEL
// ==============================

function cargarPanel(){

    console.log("Cargando panel...");

    actualizarPanel();

}

// ==============================
// ACTUALIZAR PANEL
// ==============================

function actualizarPanel(){

    console.table(estadisticas);

}

// ==============================
// USUARIOS
// ==============================

function obtenerUsuarios(){

    console.log("Obteniendo usuarios...");

}

// ==============================
// PRODUCTOS
// ==============================

function obtenerProductos(){

    console.log("Obteniendo productos...");

}

// ==============================
// PEDIDOS
// ==============================

function obtenerPedidos(){

    console.log("Obteniendo pedidos...");

}

// ==============================
// AGREGAR PRODUCTO
// ==============================

function agregarProducto(){

    console.log("Nuevo producto");

}

// ==============================
// ELIMINAR PRODUCTO
// ==============================

function eliminarProducto(id){

    console.log("Eliminar producto:", id);

}

// ==============================
// CERRAR SESIÓN
// ==============================

function cerrarSesion(){

    console.log("Sesión cerrada");

    window.location.href = "login.html";

}

// ==============================
// INICIAR
// ==============================

document.addEventListener("DOMContentLoaded",()=>{

    cargarPanel();

});