// Mobile Menu Toggle
const menuButton = document.getElementById('menu-button');
const menuClose = document.getElementById('menu-close');
const nav = document.querySelector('nav');
const body = document.body;

// Open menu
menuButton.addEventListener('click', () => {
    nav.classList.add('open');
    body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

// Close menu
menuClose.addEventListener('click', () => {
    nav.classList.remove('open');
    body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close menu when clicking on a navigation link
const navLinks = document.querySelectorAll('.nav-items a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside (on the overlay)
nav.addEventListener('click', (e) => {
    if (e.target === nav) {
        nav.classList.remove('open');
        body.style.overflow = 'auto';
    }
});