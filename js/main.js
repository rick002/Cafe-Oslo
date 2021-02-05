const MENU_TRIGGER = '#menu-trigger';
const MENU = '#menu';
const MENU_VISIBLE = 'menu-visible';

const displayMenu = () => {
    const menu = document.querySelector(MENU);
    menu.classList.toggle('menu-displayed');  
    menu.classList.toggle(MENU_VISIBLE);
    
}

document.querySelector(MENU_TRIGGER).addEventListener('click', displayMenu);

document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
});

window.sc = ScrollReveal();

window.sc.reveal('#header h1', {
   origin: 'top',
   duration: 1000 
});

window.sc.reveal('#header border-title', {
    origin: 'top',
    duration: 1000
});

window.sc.reveal('#header .header-content-body p', {
   origin: 'left',
   duration: 3000 
});

window.sc.reveal('.breakfast-content', {
    origin:'top',
    duration: 1000,
})

