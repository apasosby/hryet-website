// ==========================================
// HRYET API
// ==========================================

import { db } from "./firebase.js";

import {

collection,
doc,
getDoc,
getDocs,
setDoc,
updateDoc,
deleteDoc,
addDoc

} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// ===============================
// USUARIOS
// ===============================

export async function obtenerUsuario(uid){

const referencia = doc(db,"users",uid);

return await getDoc(referencia);

}

export async function actualizarUsuario(uid,datos){

const referencia = doc(db,"users",uid);

return await updateDoc(referencia,datos);

}

// ===============================
// PRODUCTOS
// ===============================

export async function obtenerProductos(){

return await getDocs(collection(db,"productos"));

}

export async function crearProducto(datos){

return await addDoc(collection(db,"productos"),datos);

}

export async function eliminarProducto(id){

return await deleteDoc(doc(db,"productos",id));

}

// ===============================
// PEDIDOS
// ===============================

export async function crearPedido(datos){

return await addDoc(collection(db,"pedidos"),datos);

}

// ===============================
// PERFIL
// ===============================

export async function guardarPerfil(uid,datos){

return await setDoc(doc(db,"users",uid),datos);

}

console.log("🌐 API HRYET lista");