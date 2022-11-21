// vamos a tratar de interactuar con el modal
let modalAbrir = document.querySelectorAll(".zoom");
let modalCerrar = document.querySelectorAll('.modalContainer .cerrar');
let modal = document.querySelectorAll('.modalContainer .modal');
let modalContainer = document.querySelectorAll('.modalContainer');

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


/*
<a href="#" class="añadirCar" title="gustar" data-id="${array[i].id}"> 
        <ion-icon name="heart-outline"></ion-icon>
</a>
*/