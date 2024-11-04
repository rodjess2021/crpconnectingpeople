// Seleccionar el ícono de hamburguesa y el menú de navegación
const hamburgerIcon = document.getElementById('hamburgerIcon');
const navMenu = document.getElementById('navMenu');

// Evento para alternar la visibilidad del menú y cambiar el ícono
hamburgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Cambia entre "☰" y "✖" inmediatamente
    hamburgerIcon.textContent = navMenu.classList.contains('active') ? "✖" : "☰";
});