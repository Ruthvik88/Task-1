const navbar = document.querySelector('.navbar');
window.addEventListener('scroll',() => {
    if(window.scrollY > 50) 
    {
        navbar.classList.add('scrolled');
    }
    else
    {
        navbar.classList.remove('scrolled');
    }
});

const navlinks = document.querySelector('.nav-links');
document.querySelector('.logo').addEventListener('click',() => {
    navlinks.classList.toggle('active');
});
