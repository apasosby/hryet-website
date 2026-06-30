// ======================================
// HRYET STORE.JS
// ======================================

console.log("🛍️ Tienda HRYET cargada");

const productos = [

    {
        id:1,
        nombre:"HRYET BLACK",
        precio:49.99
    },

    {
        id:2,
        nombre:"HRYET WHITE",
        precio:59.99
    },

    {
        id:3,
        nombre:"HRYET PURPLE",
        precio:69.99
    }

];

function mostrarProductos(){

    console.log(productos);

}

function agregarCarrito(id){

    console.log("Producto agregado:",id);

}

function eliminarCarrito(id){

    console.log("Producto eliminado:",id);

}

function comprar(){

    console.log("Compra realizada");

}

mostrarProductos();