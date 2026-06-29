// Estructura de Colecciones
const dbSchema = {
    usuarios: {
        uid: "id_unico",
        nombre: "Henrry",
        usuario: "henrry.hryet",
        fotos: ["url1", "url2"],
        social: { ig: "@henrry", tk: "@henrry" },
        stats: { escaneos: 2350, likes: 1200 }
    },
    camisetas: {
        id_qr: "qr_unique_code",
        owner_uid: "uid_del_usuario",
        diseno_url: "url_del_mockup",
        activa: true
    },
    tienda_productos: {
        nombre: "Oversize Black QR",
        precio: 45.00,
        stock: 100
    }
};

// Reglas de Seguridad recomendadas
/*
service cloud.firestore {
  match /databases/{database}/documents {
    match /usuarios/{userId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    match /escaneos/{scanId} {
      allow create: if true;
      allow read, update: if false;
    }
  }
}
*/
