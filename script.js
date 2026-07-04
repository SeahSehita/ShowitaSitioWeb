//Inicio del Script jeje
const botonGrind = document.getElementById('btnMusica');
botonGrind.addEventListener('click', () => {
    alert("Instalando troyano...");
});
//SISTEMA DE CARRUSEL 3D EN PROFUNDIDAD
const galeriaCompletaArte = [
    'Media/Acc.png',
    'Media/Uni.png',
];

const imagenesPortfolio = document.querySelectorAll('.img-portfolio');

imagenesPortfolio.forEach(img => {
    img.addEventListener('click', () => {
        let indiceActivo = 0;
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox-overlay');

        const contenedor = document.createElement('div');
        contenedor.classList.add('carrusel-contenedor');

        //Botones de control
        const btnIzq = document.createElement('button');
        btnIzq.className = 'btn-carrusel btn-izq';
        btnIzq.innerHTML = '&#10094;'; //Flecha izquierda <

        const btnDer = document.createElement('button');
        btnDer.className = 'btn-carrusel btn-der';
        btnDer.innerHTML = '&#10095;'; //Flecha derecha >

        const btnCerrar = document.createElement('button');
        btnCerrar.className = 'btn-cerrar-carrusel';
        btnCerrar.innerText = 'ESC // CERRAR';
        galeriaCompletaArte.forEach((ruta, idx) => {
            const item = document.createElement('img');
            item.src = ruta;
            item.classList.add('carrusel-item');
            contenedor.appendChild(item);
        });

        overlay.appendChild(btnIzq);
        overlay.appendChild(contenedor);
        overlay.appendChild(btnDer);
        overlay.appendChild(btnCerrar);
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add('activo'), 10);
        const items = contenedor.querySelectorAll('.carrusel-item');

        //FÓRMULA MATEMÁTICA INTERNA PARA LA POSICIÓN 3D
        function actualizarPosicionesCarrusel() {
            items.forEach((item, i) => {
                let calcularDistancia = i - indiceActivo;
                if (calcularDistancia < -Math.floor(items.length / 2)) calcularDistancia += items.length;
                if (calcularDistancia > Math.floor(items.length / 2)) calcularDistancia -= items.length;

                if (calcularDistancia === 0) {
                    item.style.transform = 'translateX(0px) translateZ(0px) rotateY(0deg)';
                    item.style.opacity = '1';
                    item.style.zIndex = '10';
                } else if (calcularDistancia > 0) {
                    item.style.transform = `translateX(${calcularDistancia * 180}px) translateZ(-200px) rotateY(-35deg)`;
                    item.style.opacity = '0.35'; // Pierde visibilidad
                    item.style.zIndex = `${10 - calcularDistancia}`;
                } else {
                    item.style.transform = `translateX(${calcularDistancia * 180}px) translateZ(-200px) rotateY(35deg)`;
                    item.style.opacity = '0.35'; // Pierde visibilidad
                    item.style.zIndex = `${10 + calcularDistancia}`;
                }
            });
        }

        actualizarPosicionesCarrusel();

        btnDer.addEventListener('click', (e) => {
            e.stopPropagation();
            indiceActivo = (indiceActivo + 1) % items.length;
            actualizarPosicionesCarrusel();
        });

        btnIzq.addEventListener('click', (e) => {
            e.stopPropagation();
            indiceActivo = (indiceActivo - 1 + items.length) % items.length;
            actualizarPosicionesCarrusel();
        });

        btnCerrar.addEventListener('click', () => {
            overlay.classList.remove('activo');
            setTimeout(() => overlay.remove(), 300);
        });
    });
});

//SISTEMA DE ICONOS ANIMADOS ALEATORIOS
const misIconos = [
    'Media/metro_51.png', 
    'Media/metro_76.png', 
    'Media/metro_62.png', 
    'Media/metro_73.png',
    'Media/metro_51.png', 
    'Media/metro_76.png', 
    'Media/metro_62.png', 
    'Media/metro_73.png',
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
//SISTEMA DE AUDIO INTERACTIVO
const musicaFondo = new Audio('Media/FYU.mp3');
musicaFondo.loop = true;
musicaFondo.volume = 0.6;
const botonMusica = document.getElementById('btnMusica');

if (botonMusica) {
    botonMusica.textContent = "Encender el Funk";

    botonMusica.addEventListener('click', () => {
        if (musicaFondo.paused) {
            musicaFondo.play()
                .then(() => {
                    botonMusica.textContent = "Pausar el Funk";
                    botonMusica.classList.add('musica-activa'); // Por si quieres darle estilos CSS luego
                })
                .catch(error => {
                    console.log("El navegador bloqueó el audio momentáneamente:", error);
                });
        } else {
            musicaFondo.pause();
            botonMusica.textContent = "Encender el Funk";
            botonMusica.classList.remove('musica-activa');
        }
    });
}