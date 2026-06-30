import { auth, db } from "./firebase.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

onAuthStateChanged(auth, async(user)=>{

if(!user){

window.location.href="login.html";

return;

}

const docRef = doc(db,"users",user.uid);

const docSnap = await getDoc(docRef);

if(docSnap.exists()){

const data = docSnap.data();

document.getElementById("userName").textContent =
data.nombre || "Usuario";

document.getElementById("bio").textContent =
data.bio || "Bienvenido a HRYET";

document.getElementById("likesCount").textContent =
data.likes || 0;

document.getElementById("scanCount").textContent =
data.escaneos || 0;

document.getElementById("followersCount").textContent =
data.seguidores || 0;

document.getElementById("instagram").href =
data.instagram || "#";

document.getElementById("facebook").href =
data.facebook || "#";

document.getElementById("tiktok").href =
data.tiktok || "#";

}

});