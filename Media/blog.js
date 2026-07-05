
// LÓGICA EXCLUSIVA DEL BLOG

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