//Tratare de hacer el buscador de productos 
// console.log(JSON.parse(localStorage.getItem('carritoStorage')));
// carritoCompra=JSON.parse(localStorage.getItem('carritoStorage'));
// console.log(carritoCompra)
let contador = 0;

async function pedirProds(){
    const resp = await fetch('../js/db_stockJSON.js')
    // console.log("------ aweit ----- ")
    const data = await resp.json();
    data.forEach(element => {
        // console.log(element,contador);
        generaElemenBusqueda(element,contador)
        contador++
    });
}
pedirProds()

// const loader = document.querySelector('#loader');

// const simulaPedidaDatos = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(StockFunkosJSON)
//         }, 3000);
//     })
// }

// // loader.style.display = 'flex';

// simulaPedidaDatos()
//     .then((respuesta)=>{
//         // loader.style.display = 'none';
//         console.log("--- respuesta ---")
//         console.log(respuesta)
//         //la respuesta sera el array que traiga del server
//         let i = 0;
//         respuesta.forEach(element => {
//             generaElemenBusqueda(element)
//         });
//     })
//     .catch((err)=> { console.log(err) })
//     .finally(() => {
//         // loader.style.display = 'none';
//     })

//contenedor productos generaes

//genera productos generales
const generaElemenBusqueda = (element,contador) =>{
    const contentElementGeneral = document.querySelector('#contenedorGeneral')
    if (contentElementGeneral) {
        // console.log(contentElementGeneral)

    //Destructuracio
    const seccion = document.createElement('section');
        seccion.className = `tarjeta tarjeta${contador} ${claseLeftRight(contador)}`;
        seccion.id= `general${element.id}`;
        
    const div = document.createElement('div');
        div.className = "producto_imagen";
        div.innerHTML = `\n
            <section class="cont_img">
                <img class="img1" src="${element.imagenA}" alt="${element.descripcion}">
                <img class="img1" src="${element.imagenB}" alt="${element.descripcion}">
                <img class="img1" src="${element.imagenc}" alt="${element.descripcion}">
            </section>\n`;

        seccion.innerHTML =`\n
            <div class="textos_tarjeta">
                <h2><a href="#">#${element.id} ${element.nombre}</a></h2>
                <h3>$${precioTotalMasIVA(element).toFixed(2)}&nbsp;$</h3>
                <span class"identificador"></span>
            </div> \n`;
    
    const constarrayRet = generaElementModal(element, contentElementGeneral);
    // console.log(constarrayRet);
    contenedorBotones(element, div, seccion, constarrayRet);
    seccion.append(div);

    contentElementGeneral.append(seccion);

    } else{
        console.log("No existe el elemento TODOS LOS ELEMENTOS")
    }
    
}

