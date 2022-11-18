// vamos a tratar de interactuar con el modal
let modalAbrir = document.querySelectorAll(".zoom");
depura("boton zoom-")
console.log(modalAbrir)

let modalCerrar = document.querySelectorAll('.modalContainer .cerrar');
depura("boton cerrar-")
console.log(modalCerrar)

let modal = document.querySelectorAll('.modalContainer .modal');
depura("boton modal-")
console.log(modal)

let modalContainer = document.querySelectorAll('.modalContainer');
depura("contenedor Modal-")
console.log(modalContainer)

for (let index = 0; index < modalAbrir.length; index++) {
    modalAbrir[index].addEventListener('click', e => {
        e.preventDefault();
        console.log("entre")
        modalContainer[index].classList.add('ocultar');
        modal[index].classList.toggle("close");
    })
}
for (let index = 0; index < modalAbrir.length; index++) {

modalCerrar[index].addEventListener('click',() =>{ 
    modal[index].classList.toggle("close")
    
    setTimeout(function(){ //pasados 7 seg se ejecuta 
        modalContainer[index].classList.remove('ocultar')
    },500);
});
}


// for (let index = 0; index < modalAbrir.length; index++) {
// modalCerrar[0].addEventListener('click',() =>{
//             modal[0].classList.toggle("close"); 
//             setTimeout(function(){
//                 modalContainer[0].style.opacity = "0";
//                 modalContainer[0].style.visibility = "hidden";
//         },700);
//     })   
// }
