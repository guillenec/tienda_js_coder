const genModal = (array, j) =>{
    let modalGen = " ";
    let precio;
    let descuento;
    (array[j].precioConDescuento() > 0) ? (precio = array[j].precioConDescuento(), descuento="sin descuento") : (precio = array[j].precio , descuento = "descuento de " );
    return modalGen = `\n
        <section class="modal close">
        <div class="superior">
            <div class="izq">
                <img src="${array[j].imagenB}" alt="${array[j].descripcion}">
            </div>
            <div class="der">
                <h1>${array[j].nombre}</h1>
                <h2>$${precio}</h2>
                <p>descuento de %${descuento} + iva de %14.</p>
                <p>O 3 cuotas sin interes de $${array[j].precioTotalMasIVA() / 3} con: </p>
                <img class="pagos" src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/online/468X60.jpg" title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago"/>
                <p><strong>${array[j].descripcion}</strong></p>
                <form action="" id="compra_fun">
                    <label for="cantidad"> cantidad</label>
                    <input type="number" name="cantidad" id="cantidad">
                    <input type="submit" value="añadir carrito">
                    <a href="#compra_fun" class="gustar"><ion-icon name="heart-outline"></ion-icon></a>
                    <a href="#compra_fun" class="rotar"><ion-icon name="sync-outline"></ion-icon></a>
                    <span id="hay_producto">
                        <ion-icon name="checkmark-outline"></ion-icon>&nbsp;En Stock
                    </span>
                </form>
            </div>
        </div>
        <div class="inferior">
            <div class="redes" id="redes">
                <a href="#redes"><ion-icon name="logo-whatsapp"></ion-icon></a>
                <a href="#redes"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="#redes"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="#redes"><ion-icon name="mail-outline"></ion-icon></a>
            </div>
            <div class="palabras_clave" id="palClav">
                <a href="palClav">tv y series</a>
                <a href="palClav">simpsons</a>
                <a href="palClav">duff</a>
                <a href="palClav">animacion</a>
            </div>
        </div>
        <a class="cerrar"><ion-icon name="close-outline"></ion-icon></a>
        </section>  
        \n
        `

}

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

let modGen= " ";

for (let index = 0; index < modalAbrir.length; index++) {
    modalAbrir[index].addEventListener('click', e => {
        e.preventDefault();
        console.log("entre")

         //Lo primero sera generar el modal
        //  modGen = genModal(arregloJuguetes,index);
        //  modalContainer[index].innerHTML = modGen;
        //  console.log(modalContainer[index])
        
        modalContainer[0].classList.add('ocultar');
        modal[0].classList.toggle("close");
    })
}
modalCerrar[0].addEventListener('click',() =>{ 
    modal[0].classList.toggle("close")
    
    setTimeout(function(){ //pasados 7 seg se ejecuta 
        modalContainer[0].classList.remove('ocultar')
    },500);
});

// for (let index = 0; index < modalAbrir.length; index++) {
// modalCerrar[0].addEventListener('click',() =>{
//             modal[0].classList.toggle("close"); 
//             setTimeout(function(){
//                 modalContainer[0].style.opacity = "0";
//                 modalContainer[0].style.visibility = "hidden";
//         },700);
//     })   
// }

    
