const navSlide = () => {
    const menu = document.querySelector('#ellipsis');
    const nav = document.querySelector('nav');
    
    menu.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        menu.classList.toggle('toggle');
    });
}

navSlide();