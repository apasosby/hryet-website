import { auth, db } from "./firebase.js";

import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {

doc,

setDoc

} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// ===============================
// REGISTRO
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

registerForm.addEventListener("submit", async (e) => {

e.preventDefault();

const nombre = document.getElementById("nombre").value;

const email = document.getElementById("email").value;

const password = document.getElementById("password").value;

try {

const userCredential = await createUserWithEmailAndPassword(

auth,

email,

password

);

const user = userCredential.user;

await setDoc(doc(db, "users", user.uid), {

nombre,

email,

uid: user.uid,

likes: 0,

escaneos: 0,

seguidores: 0,

instagram: "",

facebook: "",

tiktok: "",

spotify: "",

bio: "",

camisetaQR: ""

});

alert("Cuenta creada correctamente.");

window.location.href = "login.html";

}

catch(error){

alert(error.message);

}

});

}

// ===============================
// LOGIN
// ===============================

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(

auth,

email,

password

);

window.location.href="dashboard.html";

}

catch(error){

alert(error.message);

}

});

}