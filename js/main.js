//select DOM Items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')


menuBtn.addEventListener('click', toggleMenu)
function toggleMenu(){
    
        menuBtn.classList.toggle('close');
        menuNav.classList.toggle('show')
        menuBranding.classList.toggle('show')
        menu.classList.toggle('show') 
        navItems.forEach(item => item.classList.toggle('show'))   
}