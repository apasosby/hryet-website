// ======================================
// HRYET AUTH.JS
// ======================================

import { auth } from "./firebase.js";

import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword,

signOut,

onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ===============================
// REGISTRO
// ===============================

export async function registrar(email, password){

    try{

        const usuario = await createUserWithEmailAndPassword(

            auth,

            email,

            password

        );

        console.log("Usuario registrado");

        return usuario;

    }catch(error){

        console.error(error);

    }

}

// ===============================
// LOGIN
// ===============================

export async function iniciarSesion(email,password){

    try{

        const usuario = await signInWithEmailAndPassword(

            auth,

            email,

            password

        );

        console.log("Sesión iniciada");

        return usuario;

    }catch(error){

        console.error(error);

    }

}

// ===============================
// CERRAR SESIÓN
// ===============================

export async function cerrarSesion(){

    await signOut(auth);

    console.log("Sesión cerrada");

}

// ===============================
// USUARIO ACTUAL
// ===============================

onAuthStateChanged(auth,(user)=>{

    if(user){

        console.log("Usuario conectado:",user.email);

    }else{

        console.log("No hay sesión iniciada");

    }

});