const hamburger = document.querySelector('.nav__hamburger');
const navMenu = document.querySelector('.nav__icons');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('enabl');
    navMenu.classList.toggle('enabl');
})
