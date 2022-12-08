//Tratare de hacer el buscador de productos 
console.log(JSON.parse(localStorage.getItem('carritoStorage')))
carritoCompra=JSON.parse(localStorage.getItem('carritoStorage'));
console.log(carritoCompra)

const simulaPedidaDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(StockFunkosJSON)
        }, 3000);
    })
}

simulaPedidaDatos()
    .then((respuesta)=>{
        console.log("--- respuesta ---")
        console.log(respuesta)
        //la respuesta sera el array que traiga del server
        let i = 0;
        respuesta.forEach(element => {
            generaElemenBusqueda(element)
        });
    })

//contenedor productos generaes

//genera productos generales
const generaElemenBusqueda = (element,contador) =>{
    const contentElementGeneral = document.querySelector('#contenedorGeneral')
    console.log(contentElementGeneral)

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
    console.log(constarrayRet);
    contenedorBotones(element, div, seccion, constarrayRet);
    seccion.append(div);

    contentElementGeneral.append(seccion);
}

