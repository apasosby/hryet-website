import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// =======================
// REGISTRO
// =======================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const username = document.getElementById("username").value;
        const correo = document.getElementById("correo").value;
        const password = document.getElementById("password").value;

        try {

            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    correo,
                    password
                );

            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {

                uid: user.uid,

                nombre,

                username,

                correo,

                foto: "",

                likes: 0,

                seguidores: 0,

                siguiendo: 0,

                verificado: false,

                creado: new Date()

            });

            alert("Cuenta creada correctamente");

            window.location.href = "login.html";

        } catch (error) {

            alert(error.message);

        }

    });

}



// =======================
// LOGIN
// =======================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const correo = document.getElementById("correo").value;

        const password = document.getElementById("password").value;

        try {

            await signInWithEmailAndPassword(
                auth,
                correo,
                password
            );

            window.location.href = "dashboard.html";

        } catch (error) {

            alert(error.message);

        }

    });

}



// =======================
// CERRAR SESIÓN
// =======================

const logout = document.getElementById("logout");

if (logout) {

    logout.addEventListener("click", async () => {

        await signOut(auth);

        window.location.href = "login.html";

    });

}



// =======================
// USUARIO ACTUAL
// =======================

onAuthStateChanged(auth, async (user) => {

    if (!user) return;

    const ref = doc(db, "users", user.uid);

    const snap = await getDoc(ref);

    if (!snap.exists()) return;

    const data = snap.data();

    const nombre = document.getElementById("userName");

    if (nombre) {

        nombre.innerHTML = data.nombre;

    }

});