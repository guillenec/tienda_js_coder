let toggleMen = document.querySelector('#toggle');
let barra = document.querySelector('parteToggle');

let nav = document.querySelector('.nav');
let menu = document.querySelector('.menu')
let lista = document.querySelector('.list')

toggleMen.addEventListener('click', e =>{
    nav.classList.toggle('active');
})


// window.addEventListener('click', e =>{
//     //contains : Si el elemento contiene el classe ACTIVE, el método devuelve true. De lo contrario, vuelve false.
//     if(nav.classList.contains('active') && e.target != nav && e.target != toggle ){
//         nav.classList.toggle('active');
//     }
// }) 


