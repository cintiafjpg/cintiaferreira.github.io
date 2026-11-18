const menu = document.querySelector('header nav');

if (menu) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            menu.classList.add('menu-hidden');
        } else {
            menu.classList.remove('menu-hidden');
        }
    });
}
