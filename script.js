let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
     menu.classList.toggle('bx-x');
     navbar.classList.toggle('active');
}

window.onscroll = () => {

    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

}
const typed = new Typed('.multiple-text ', {
     strings: ['web development','frontend development','backend development'],
     typeSpeed: 60,
     backspeed:60,
     backdelay:100,
     loop:true,
     });