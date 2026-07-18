
//BLOG

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup-alerta');
    const btnCerrar = document.getElementById('btn-cerrar-popup');

    if (popup && btnCerrar) {
        btnCerrar.addEventListener('click', () => {
            popup.style.opacity = '0';
            setTimeout(() => {
                popup.style.display = 'none';
            }, 400);
        });
    }
    const tarjetas = document.querySelectorAll('.tarjeta-3d-contenedor');

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            tarjeta.classList.toggle('girada');
        });
    });
});
const misIconos = [
     'Media/metro_52.png', 
    'Media/metro_54.png', 
    'Media/metro_52.png', 
    'Media/metro_54.png',
    'Media/metro_54.png', 
    'Media/metro_52.png', 
    'Media/metro_54.png', 
    'Media/metro_52.png', 
    'Media/metro_54.png', 
    'Media/metro_52.png', 
    'Media/metro_54.png', 
];

function crearIconoFlotante(nombreArchivo) {
    const icono = document.createElement('img');
    icono.src = nombreArchivo;
    icono.classList.add('icono-flotante');
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    icono.style.left = `${posX}px`;
    icono.style.top = `${posY}px`;
    const duracionViaje = Math.random() * 15 + 15; 
    icono.style.transition = `left ${duracionViaje}s linear, top ${duracionViaje}s linear`;
    icono.style.animation = `flotadoSutil ${Math.random() * 2 + 2}s ease-in-out infinite`;
    document.body.appendChild(icono);
    function moverIcono() {
        const nuevoX = Math.random() * (window.innerWidth - 60);
        const nuevoY = Math.random() * (window.innerHeight - 60);
        
        icono.style.left = `${nuevoX}px`;
        icono.style.top = `${nuevoY}px`;
        setTimeout(moverIcono, duracionViaje * 1000);
    }
    setTimeout(moverIcono, 50);
}
window.addEventListener('DOMContentLoaded', () => {
    misIconos.forEach(archivo => {
        crearIconoFlotante(archivo);
        crearIconoFlotante(archivo);
    });
});