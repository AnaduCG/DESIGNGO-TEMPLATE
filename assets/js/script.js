/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

/* menu show */
/* validate if content exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu')
    })
}

/* menu hidden */
/* validate if consant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu')
    // when we click on each nav__link we remove the menu
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))