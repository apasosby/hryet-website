// Función para simular el aumento de escaneos
function actualizarContador() {
    let escaneos = localStorage.getItem('contadorEscaneos') || 2350;
    escaneos = parseInt(escaneos) + 1;
    localStorage.setItem('contadorEscaneos', escaneos);
    
    // Si existe el elemento en la página, lo actualiza
    const display = document.querySelector('.progress-number');
    if (display) {
        display.innerText = `${escaneos.toLocaleString()} / 10.000`;
        
        // Actualizar barra de progreso visualmente
        const barra = document.querySelector('.progress-fill');
        if (barra) {
            let porcentaje = (escaneos / 10000) * 100;
            barra.style.width = porcentaje + '%';
        }
    }
}

// Lógica para guardar datos desde PAGEditar.html
function guardarPerfil() {
    const nombre = document.getElementById('inputNombre').value;
    const bio = document.getElementById('inputBio').value;
    
    localStorage.setItem('nombreUsuario', nombre);
    localStorage.setItem('bioUsuario', bio);
    
    alert("¡Identidad Digital Actualizada!");
    window.location.href = "perfil.html";
}

// Ejecutar contador si estamos en perfil.html
if (window.location.pathname.includes('perfil.html')) {
    actualizarContador();
}
