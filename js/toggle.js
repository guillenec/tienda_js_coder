const nav_menu = document.querySelector(".toggle");
const menu = document.querySelector(".menu");


nav_menu.addEventListener("click", () => {
    nav_menu.classList.toggle("active");
    menu.classList.toggle("active");
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('active') && e.target != menu && e.target != nav_menu){
        nav_menu.classList.toggle('active');
    }
}) 


