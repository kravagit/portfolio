const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('mobileMenu_show');
    document.body.classList.add('disableScroll');
})

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('mobileMenu_show');
    document.body.classList.remove('disableScroll');
})