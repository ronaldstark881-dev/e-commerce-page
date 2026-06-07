// Seleccionamos el botón del DOM
const btnScrollTop = document.getElementById('btnScrollTop');

// Evento que detecta cuando hacemos scroll en la página
window.addEventListener('scroll', () => {
    // Si bajamos más de 300 píxeles, mostramos el botón
    if (window.scrollY > 300) {
        btnScrollTop.style.display = 'block';
    } else {
        // Si estamos arriba, lo ocultamos
        btnScrollTop.style.display = 'none';
    }
});

// Evento al hacer clic en el botón
btnScrollTop.addEventListener('click', () => {
    // window.scrollTo permite desplazarnos a coordenadas específicas
    window.scrollTo({
        top: 0, // Posición Y = 0 (inicio de la página)
        behavior: 'smooth' // Activa el desplazamiento suave
    });
});