import { auth, db } from "./firebase.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
doc,
getDoc,
updateDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// ==============================
// CARGAR QR DEL USUARIO
// ==============================

onAuthStateChanged(auth, async(user)=>{

if(!user) return;

const ref = doc(db,"users",user.uid);

const snap = await getDoc(ref);

if(!snap.exists()) return;

const data = snap.data();

const link =

"https://hryet.com/profile/" + user.uid;

const qrLink = document.getElementById("qrLink");

if(qrLink){

qrLink.value = link;

}

});

// ==============================
// COPIAR ENLACE
// ==============================

window.copiarQR=function(){

const qr=document.getElementById("qrLink");

qr.select();

document.execCommand("copy");

alert("Enlace copiado.");

};

// ==============================
// REGISTRAR ESCANEO
// ==============================

export async function registrarEscaneo(uid){

const ref=doc(db,"users",uid);

const snap=await getDoc(ref);

if(!snap.exists()) return;

const datos=snap.data();

await updateDoc(ref,{

escaneos:(datos.escaneos||0)+1

});

}