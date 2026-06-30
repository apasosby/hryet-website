import { db } from "./firebase.js";

import {
collection,
getDocs,
addDoc,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// ===================================
// HRYET ADMIN PANEL
// ===================================

// Cargar productos
async function cargarProductos(){

const contenedor=document.getElementById("listaProductos");

if(!contenedor) return;

contenedor.innerHTML="";

const consulta=await getDocs(collection(db,"productos"));

consulta.forEach((producto)=>{

const datos=producto.data();

contenedor.innerHTML += `

<div class="producto">

<h3>${datos.nombre}</h3>

<p>${datos.descripcion}</p>

<h4>$${datos.precio}</h4>

<button onclick="eliminarProducto('${producto.id}')">

Eliminar

</button>

</div>

`;

});

}

// Agregar producto
window.agregarProducto=async()=>{

const nombre=document.getElementById("nombreProducto").value;

const descripcion=document.getElementById("descripcionProducto").value;

const precio=document.getElementById("precioProducto").value;

await addDoc(collection(db,"productos"),{

nombre,

descripcion,

precio,

imagen:""

});

alert("Producto agregado");

location.reload();

};

// Eliminar producto
window.eliminarProducto=async(id)=>{

await deleteDoc(doc(db,"productos",id));

alert("Producto eliminado");

location.reload();

};

// Iniciar
document.addEventListener("DOMContentLoaded",()=>{

cargarProductos();

});