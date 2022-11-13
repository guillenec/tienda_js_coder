const nav_menu = document.querySelector(".toggle");
const menu = document.querySelector(".menu");


nav_menu.addEventListener("click", () => {
    nav_menu.classList.toggle("active"); 
    menu.classList.toggle("active");
    
})

window.addEventListener('click', e =>{
    //contains : Si el elemento contiene el className, el método devuelve true. De lo contrario, vuelve false.
    if(menu.classList.contains('active') && e.target != menu ){
       
    }
}) 


