// Buscamos nuestro botón de acción radical
const botonGrind = document.getElementById('btnMusica');

// Añadimos interacción al hacer click
botonGrind.addEventListener('click', () => {
    // Genera un sonido de alerta del navegador clásico
    alert("Instalando troyano...");
    
    // Idea para el futuro: Aquí podrás añadir código para reproducir
    // un bucle de música Breakbeat/Hip-hop de fondo para tu portafolio.
});
// =======================================================
// ⚡ LÓGICA PARA ABRIR IMÁGENES EN PANTALLA COMPLETA
// =======================================================

// Seleccionamos todas las imágenes del portafolio 2D
const imagenes2D = document.querySelectorAll('.img-portfolio');

imagenes2D.forEach(imagen => {
    imagen.addEventListener('click', () => {
        // 1. Creamos el contenedor del fondo negro
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox-overlay');

        // 2. Creamos la copia de la imagen en grande
        const imagenGrande = document.createElement('img');
        imagenGrande.classList.add('lightbox-imagen');
        imagenGrande.src = imagen.src; // Copia la ruta de la imagen original
        imagenGrande.alt = imagen.alt;

        // 3. Metemos la imagen dentro del fondo negro y el fondo dentro de la página
        overlay.appendChild(imagenGrande);
        document.body.appendChild(overlay);

        // 4. Activamos la animación de entrada en el siguiente frame
        setTimeout(() => {
            overlay.classList.add('activo');
        }, 10);

        // 5. Al hacer clic en cualquier parte del fondo negro, se destruye el visor
        overlay.addEventListener('click', () => {
            overlay.classList.remove('activo');
            setTimeout(() => {
                overlay.remove(); // Elimina el elemento del código para no saturar la página
            }, 300); // Espera a que termine la animación de salida
        });
    });
});
// =======================================================
// 🚀 SISTEMA DE ICONOS ANIMADOS ALEATORIOS
// =======================================================

// 1. REGLA GITHUB: Pon aquí los nombres exactos de tus archivos de iconos
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
    icono.src = nombreArchivo; // Carga tu imagen
    icono.classList.add('icono-flotante');

    // 2. Posición inicial aleatoria en la pantalla (X, Y)
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    icono.style.left = `${posX}px`;
    icono.style.top = `${posY}px`;

    // 3. Velocidades y direcciones aleatorias usando transiciones nativas
    // Generamos un tiempo de viaje largo (entre 15 y 30 segundos) para que sea suave
    const duracionViaje = Math.random() * 15 + 15; 
    icono.style.transition = `left ${duracionViaje}s linear, top ${duracionViaje}s linear`;
    
    // Le sumamos la animación de vaivén de CSS que hicimos en el Paso 1
    icono.style.animation = `flotadoSutil ${Math.random() * 2 + 2}s ease-in-out infinite`;

    // Metemos el icono a la página
    document.body.appendChild(icono);

    // 4. Función mágica para hacer que empiece a moverse aleatoriamente por la pantalla
    function moverIcono() {
        // Genera un nuevo destino aleatorio dentro de la ventana
        const nuevoX = Math.random() * (window.innerWidth - 60);
        const nuevoY = Math.random() * (window.innerHeight - 60);
        
        icono.style.left = `${nuevoX}px`;
        icono.style.top = `${nuevoY}px`;

        // Cuando el icono llegue a su destino, calcula uno nuevo automáticamente
        setTimeout(moverIcono, duracionViaje * 1000);
    }

    // Activamos el movimiento un mini instante después de crearlo para que el navegador lo procese
    setTimeout(moverIcono, 50);
}

// 5. Spawnear los iconos al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    misIconos.forEach(archivo => {
        // Creamos, por ejemplo, 2 copias de cada icono para poblar el fondo bien chulo
        crearIconoFlotante(archivo);
        crearIconoFlotante(archivo);
    });
});