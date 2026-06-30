JS
import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// ==============================
// CARGAR PRODUCTOS
// ==============================

async function cargarProductos(){

const contenedor=document.getElementById("productos");

if(!contenedor) return;

contenedor.innerHTML="";

const consulta=await getDocs(collection(db,"productos"));

consulta.forEach((doc)=>{

const producto=doc.data();

contenedor.innerHTML += `

<div class="card">

<img src="${producto.imagen}" alt="${producto.nombre}">

<h2>${producto.nombre}</h2>

<p>${producto.descripcion}</p>

<h3>$${producto.precio}</h3>

<button onclick="comprar('${doc.id}')">

Comprar

</button>

</div>

`;

});

}

// ==============================
// COMPRAR
// ==============================

window.comprar=function(id){

alert("Producto seleccionado: "+id);

// Aquí agregaremos el carrito y Stripe.

}

// ==============================
// INICIAR
// ==============================

document.addEventListener("DOMContentLoaded",()=>{

cargarProductos();

});