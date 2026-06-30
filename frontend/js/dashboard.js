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

const userRef = doc(db,"users",user.uid);

const userSnap = await getDoc(userRef);

if(userSnap.exists()){

const data = userSnap.data();

document.getElementById("likesTotal").textContent =
data.likes || 0;

document.getElementById("qrTotal").textContent =
data.escaneos || 0;

document.getElementById("visitsTotal").textContent =
data.seguidores || 0;

document.getElementById("shirtsTotal").textContent =
data.camisetas || 0;

}

});