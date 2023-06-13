const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const serviceMenu = document.querySelector('#services-page');
    const rulesMenu = document.querySelector('#rules-page');
    const hoursMenu = document.querySelector('#hours-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    //adds 'highlight' class to my menu items
    if(window.innerWidth > 1000 && scrollPos < 700) { //home
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1000 && scrollPos < 1400) { //about
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1000 && scrollPos < 2450) { //services
        serviceMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        rulesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1000 && scrollPos < 3350) { //rules
        rulesMenu.classList.add('highlight');
        serviceMenu.classList.remove('highlight');
        hoursMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1000 && scrollPos < 4200){ //hours
        hoursMenu.classList.add('highlight');
        rulesMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 1000 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile menu when menu item clicked
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 1000 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


