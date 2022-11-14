let toggle = document.querySelector(".toggle");
let toggle_parte = document.querySelector(".parte_toggle");
let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu")

toggle.onclick = function(){
    nav.classList.toggle('active');
    console.log(nav)
}

window.addEventListener('click', e =>{
    //contains : Si el elemento contiene el className, el método devuelve true. De lo contrario, vuelve false.
    if(nav.classList.contains('active') && e.target != nav && e.target != toggle ){
        nav.classList.toggle('active');
    }
}) 


