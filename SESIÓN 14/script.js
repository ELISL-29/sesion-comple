// Seleccionar el botón de cambio de texto y el párrafo
const buttonChangeText = document.getElementById('change-text-btn');
const mainText = document.getElementById('main-text');

// Seleccionar el botón de hamburguesa y el menú de navegación
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Cambiar el texto al hacer clic en el botón
buttonChangeText.addEventListener('click', function() {
    mainText.textContent = "¡El texto ha sido cambiado! Ahora tienes contenido dinámico.";
});

// Alternar clase "active" para mostrar/ocultar el menú hamburguesa
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});
