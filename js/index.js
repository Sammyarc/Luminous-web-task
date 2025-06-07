const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Animate hamburger icon (optional)
    menuBtn.classList.toggle('open');
});