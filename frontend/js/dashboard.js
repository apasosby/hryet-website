// ======================================
// HRYET DASHBOARD.JS
// ======================================

console.log("📊 Panel HRYET cargado");

const estadisticas = {

    qrEscaneados: 0,
    likes: 0,
    camisetas: 0,
    visitas: 0

};

// ==============================
// MOSTRAR ESTADÍSTICAS
// ==============================

function cargarDashboard(){

    console.log("Cargando estadísticas...");

    actualizarDashboard();

}

// ==============================
// ACTUALIZAR PANEL
// ==============================

function actualizarDashboard(){

    const qr = document.getElementById("qrTotal");
    const likes = document.getElementById("likesTotal");
    const camisetas = document.getElementById("shirtsTotal");
    const visitas = document.getElementById("visitsTotal");

    if(qr) qr.innerHTML = estadisticas.qrEscaneados;
    if(likes) likes.innerHTML = estadisticas.likes;
    if(camisetas) camisetas.innerHTML = estadisticas.camisetas;
    if(visitas) visitas.innerHTML = estadisticas.visitas;

}

// ==============================
// INICIAR
// ==============================

document.addEventListener("DOMContentLoaded",()=>{

    cargarDashboard();

});