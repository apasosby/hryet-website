// 1. Configuración de ScrollReveal (Animaciones al bajar la página)
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true // Para que las animaciones se repitan
});

sr.reveal('.hero-text', {});
sr.reveal('.floating', { delay: 700, origin: 'right' });
sr.reveal('.glass', { interval: 200 });

// 2. Efecto de partículas simples en el fondo
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.zIndex = '-1';
// ... (Aquí iría el resto del código de partículas que te pasé antes)
