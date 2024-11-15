/*========== toogle icon navbar =========== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = documentq.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toogle('fa-xmark');
    navbar.classList.toogle('active');
}

/*========== scroll section active link =========== */

let section = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top , offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*========== sticky navbar =========== */
    let header = document.querySelector('header');
    header.classList.toogle('sticky', window.scrollY > 100);

    /*========== remove toogle icon and navbar =========== */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*========== scroll reveal =========== */
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, services-container, portfolio-box, .contact form', { origin: 'button'});
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

 /*========== typed JS =========== */
 const typed = new typed('.multiple-text', {
    strings: ['Graphic Designer', 'Photographer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
 });
 