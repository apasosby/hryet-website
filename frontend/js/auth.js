// ======================================
// HRYET Authentication
// ======================================

import {

  auth,
  db,
  storage

} from "./firebase.js";

import {

  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

  doc,
  setDoc,
  getDoc,
  serverTimestamp

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {

  ref,
  uploadBytes,
  getDownloadURL

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const googleProvider = new GoogleAuthProvider();

console.log("✅ auth.js cargado correctamente");
// ======================================
// Registro de usuarios
// ======================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

  registerForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    try {

      const nombre = document.getElementById("nombre").value.trim();

      const username = document.getElementById("username").value.trim();

      const correo = document.getElementById("correo").value.trim();

      const password = document.getElementById("password").value;

      const confirmPassword = document.getElementById("confirmPassword").value;

      const country = document.getElementById("country").value;

      const bio = document.getElementById("bio").value;

      const instagram = document.getElementById("instagram").value;

      const tiktok = document.getElementById("tiktok").value;

      const facebook = document.getElementById("facebook").value;

      const photo = document.getElementById("photo").files[0];

      if (password !== confirmPassword) {

        alert("Las contraseñas no coinciden.");

        return;

      }

      const userCredential = await createUserWithEmailAndPassword(

        auth,

        correo,

        password

      );

      const user = userCredential.user;

      let photoURL = "";

      if (photo) {

        const storageRef = ref(

          storage,

          `profile-images/${user.uid}`

        );

        await uploadBytes(storageRef, photo);

        photoURL = await getDownloadURL(storageRef);

      }

      await updateProfile(user, {

        displayName: nombre,

        photoURL: photoURL

      });

      await setDoc(doc(db, "users", user.uid), {

        uid: user.uid,

        nombre,

        username,

        correo,

        country,

        bio,

        instagram,

        tiktok,

        facebook,

        photoURL,

        scans: 0,

        likes: 0,

        followers: 0,

        following: 0,

        verified: false,

        createdAt: serverTimestamp()

      });

      alert("✅ Cuenta creada correctamente.");

      window.location.href = "dashboard.html";

    } catch (error) {

      console.error(error);

      alert(error.message);

    }

  });

}