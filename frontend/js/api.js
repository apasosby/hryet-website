// ======================================
// HRYET API.JS
// ======================================

const API = {

    version: "1.0",

    url: "https://api.hryet.com"

};

// ==============================
// OBTENER DATOS
// ==============================

async function obtenerDatos(ruta) {

    try {

        const respuesta = await fetch(API.url + ruta);

        return await respuesta.json();

    } catch (error) {

        console.error("Error:", error);

    }

}

// ==============================
// ENVIAR DATOS
// ==============================

async function enviarDatos(ruta, datos) {

    try {

        const respuesta = await fetch(API.url + ruta, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(datos)

        });

        return await respuesta.json();

    } catch (error) {

        console.error(error);

    }

}

// ==============================
// ACTUALIZAR DATOS
// ==============================

async function actualizarDatos(ruta, datos) {

    try {

        const respuesta = await fetch(API.url + ruta, {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(datos)

        });

        return await respuesta.json();

    } catch (error) {

        console.error(error);

    }

}

// ==============================
// ELIMINAR DATOS
// ==============================

async function eliminarDatos(ruta) {

    try {

        const respuesta = await fetch(API.url + ruta, {

            method: "DELETE"

        });

        return await respuesta.json();

    } catch (error) {

        console.error(error);

    }

}

console.log("🌐 API HRYET cargada");