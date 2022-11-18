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
        modalContainer[0].style.opacity = "1";
        modalContainer[0].style.visibility = "visible";
        modal[0].classList.toggle("close");
    })
}

modalCerrar[0].addEventListener('click',() =>{
            modal[0].classList.toggle("close"); 
            setTimeout(function(){
                modalContainer[0].style.opacity = "0";
                modalContainer[0].style.visibility = "hidden";
        },700);
    })   

    
