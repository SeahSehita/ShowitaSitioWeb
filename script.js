// Buscamos nuestro botón de acción radical
const botonGrind = document.getElementById('btnMusica');

// Añadimos interacción al hacer click
botonGrind.addEventListener('click', () => {
    // Genera un sonido de alerta del navegador clásico
    alert("ME PICAN LOS COCOS AYYY");
    
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