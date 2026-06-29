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
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = 'rgba(188, 19, 254, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 150; i++) {
        particlesArray.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();

// Scroll Reveal para animaciones suaves
ScrollReveal().reveal('.glass', { delay: 200, distance: '50px', origin: 'bottom' });
