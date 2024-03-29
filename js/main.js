
//#region /* ---- Funciones para calcular Precio real de los productos ---- */
let iva = 0.04;
let precio;
let descuento;

const loader = document.querySelector('#loader');
if (document.querySelector('#loader')) {
    loader.classList.add('activoLoad')
}
//Para recorrido con foreach
const descuentoReal = (element) => {
    return Number(element.descuento) * 0.01;
}
const precioConDescuento = (element) => {
    return (Number(element.precio) - Number(element.precio) * descuentoReal(element));
}

const precioTotalMasIVA = (element) => {
    return Number(precioConDescuento(element) + precioConDescuento(element) * iva);
}

const describe_tipos2 = (element) => {
    if (element.genero == "movies") {
        return "En esta seccion enconraras funkos relacionados con peliculas, ya sean de terror, siencia ficcion, y demas."
    } else if (element.genero == "tv y series") {
        return "Funkos relacionados con animaciones y series de tv... Los simpsons, futurama, series como mandalorian o game of throne."
    } else if (element.genero == "anime") {
        return "Anime , y cultura japonesa , asia y oriente... mangas y manwhas. Como pokemon, Dragon Ball, Naruto, shinigamis, Pakas, etc."
    }
}

//Calcula el precio final usando las funciones anteriores
const calculaPrecioFinal = (element) =>{
    (precioConDescuento(element) > 0) ? (precio = precioTotalMasIVA(element).toFixed(2), descuento=`${element.descuento}`) : (precio = precioTotalMasIVA(element).toFixed(2), descuento=`${element.descuento}`);
}
/* ---- fin calculo precio real ---- */
//#endregion /* ---- Calculo Precio real ---- */

//#region generan los elementos , ya sea la estructura de 1 modal, una tarjeta Destacada, etc
//Genera un nombre de clase HTML: rigt = par, left = inpar
let claseLeftRight = (valor) => {
    return ((valor % 2) == 0 ) ? "left" : "right"; 
}

const generaElementModal = (element, contenedor) =>{
    const seccionMod = document.createElement('section');
    seccionMod.className = "modalContainer";
    seccionMod.id= `contModal${element.id}`;

    const modal = document.createElement('section');
    modal.className = `modal close ${element.id}`;
    modal.id= `modal${element.id}`;

    calculaPrecioFinal(element);

    modal.innerHTML = `\n
        <div class="superior">
            <div class="izq">
                <img src="${element.imagenB}" alt="${element.descripcion}">
            </div>
            <div class="der">
                <h1>${element.nombre}</h1>
                <h2>$${precio}</h2>
                <p>descuento de %${descuento} + iva de %4.</p>
                <p>3 cuotas sin interes de $${(precioTotalMasIVA(element) / 3).toFixed(2)} con: </p>
                <img class="pagos" src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/online/468X60.jpg" title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago"/>
                <p><strong>${element.descripcion}</strong></p>
                <form action="" id="compra_fun">
                    <div class="form_top">
                        <label for="cantidad"> cantidad</label>
                        <input class="cantidad" type="number" name="cantidad" id="cantidad">
                    </div>
                    <div class="form_mid">
                        <input class="aniadeCarrito" type="submit" value="añadir carrito">
                        <a href="#compra_fun" class="gustar"><ion-icon name="heart-outline"></ion-icon></a>
                        <a href="#compra_fun" class="rotar"><ion-icon name="sync-outline"></ion-icon></a>
                    </div>
                    <span id="hay_producto">
                        <ion-icon name="checkmark-outline"></ion-icon>&nbsp;En Stock
                    </span>
                </form>
            </div>
        </div>
        \n`;

    const divInferior = document.createElement('div');
        divInferior.className = "inferior";
        const divRedes = document.createElement('div');
            divRedes.className = "redes";
            divRedes.id = "redes";
            divRedes.innerHTML = `\n 
                <a href="#redes"><ion-icon name="logo-whatsapp"></ion-icon></a>
                <a href="#redes"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="#redes"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="#redes"><ion-icon name="mail-outline"></ion-icon></a>
            \n`;

        const divPalabraClave = document.createElement('div');
            divPalabraClave.className = "palabras_clave";
            divPalabraClave.id = "palClav";

            const aClave1 = document.createElement('a');
            aClave1.className = "palClave";
            aClave1.innerText = `${element.nombre}`;
            const aClave2 = document.createElement('a');
            aClave2.className = "palClave";
            aClave2.innerText = `${element.genero}`;
            const aClave3 = document.createElement('a');
            aClave3.className = "palClave";
            aClave3.innerText = `${element.tipo}`;
            const aClave4 = document.createElement('a');
            aClave4.className = "palClave";
            aClave4.innerText = `${element.clave1}`;
            const aClave5 = document.createElement('a');
            aClave5.className = "palClave";
            aClave5.innerText = `${element.clave2}`;
            const aClave6 = document.createElement('a');
            aClave6.className = "palClave";
            aClave6.innerText = `${element.clave3}`;

    
            aClave1.addEventListener('click' , e => {
                palabraClave(e, element.nombre);
            })
            aClave2.addEventListener('click' , e => {
                palabraClave(e, element.genero);
            })
            aClave3.addEventListener('click' , e => {
                palabraClave(e, element.tipo);
            })
            aClave4.addEventListener('click' , e => {
                palabraClave(e, element.clave1);
            })
            aClave5.addEventListener('click' , e => {
                palabraClave(e, element.clave2);
            })
            aClave6.addEventListener('click' , e => {
                palabraClave(e, element.clave3);
            })
    
    divInferior.append(divRedes);    
    divPalabraClave.append(aClave1, aClave2, aClave3, aClave4, aClave5,aClave6);
    divInferior.append(divPalabraClave);
    modal.append(divInferior)

    const cierraModal = document.createElement('a');
    cierraModal.className = "cerrar";
    cierraModal.id= `cierra${element.id}`;
    cierraModal.innerHTML = `\n <ion-icon name="close-outline"></ion-icon> \n`;

    modal.append(cierraModal);
    seccionMod.append(modal);
    contenedor.append(seccionMod);

    return [seccionMod,modal,cierraModal]
}

const generaElementBanner = (element,contenedor) =>{
    const seccion = document.createElement('section');
        seccion.className = "art_princial swiper-slide";
        seccion.id = `bannerEl${element.id}`;
    const div = document.createElement('div');
        div.className ="caja left";
        div.innerHTML = `\n <img src="${element.imagenA}" alt="${element.descripcion}"> \n`;
        
    const div2 = document.createElement('div');
    div2.className ="caja right";
    div2.innerHTML = `\n <h2 class="titulo">#${element.id} ${element.nombre}</h2>
            <h3 class="precio">$${element.precio}</h3>
            <p class="textos">${element.descripcion}</p>
            <span class="descuento">${element.descuento}%</span>
            \n`;    

    const aniadeCar = document.createElement('a');
        aniadeCar.className = "añadirCar";
        aniadeCar.id = `aniadeElement${element.id}`;
        aniadeCar.title= "carrito";
        aniadeCar.href= "#";
        aniadeCar.data=`${element.id}`;
        aniadeCar.innerHTML = `\n <ion-icon name="cart"></ion-icon> \n`;

    aniadeCar.addEventListener('click', e => {
            if (aniadeCar.classList.contains('agotado')){
                e.preventDefault();
                Toastify({
                    text: "producto agotado!!!",
                    gravity: "bottom",
                    position: "right",
                    duration: 3000,
                    style: {
                        background: "#e94a4a",
                        color:`#fff`,
                    }
                }).showToast();
                console.log('se agoto todo');   
                
            }else{
                e.preventDefault();
                Toastify({
                    text: "añadido al carrito",
                    gravity: "bottom",
                    position: "right",
                    duration: 3000,
                    style: {
                        background: "#ff6347",
                        color:`#fff`,
                    }
                }).showToast();
                agregaElementAlCarrito(element);
            }
            
        })

    div2.append(aniadeCar)
    seccion.append(div)
    seccion.append(div2)
    contenedor.append(seccion);

    // const reservar = document.querySelector(`#reservar${element.id}`);
    // reservar.addEventListener('click', e => {
    //     e.preventDefault();
        
    //     agregaElementAlCarrito(element);
    // })   
}

const generaElementCategoria = (element,contador,contenedor) =>{
    //Destructuracion
    const { id, descripcion, genero, imagenA:img1, imagenB:img2, imagenC:img3 , imagenD:img4} = element;

    const seccion = document.createElement('section');
        seccion.className = `targeta_simple ${claseLeftRight(contador)}`;
        // console.log(claseLeftRight(contador));
        seccion.id= `"categoria${id}"`;
        seccion.innerHTML = `\n
            <img src="${img1 || img2 ||img3 ||img4}" alt="${descripcion}">
            <div class="textos_target"> 
                <a class="title_targ">${genero}</a>
                <p>${describe_tipos2(element)}</p>
            </div>   
        \n`;
    
    contenedor.append(seccion);
} 

const generaElementDestacado = (element,contador,contenedor) =>{
    const seccion = document.createElement('section');
        seccion.className = `tarjeta tarjeta${contador} ${claseLeftRight(contador)}`;
        seccion.id= `destacado${element.id}`;
        
    const div = document.createElement('div');
        div.className = "producto_imagen";
        div.innerHTML = `\n
            <section class="cont_img">
                <img class="imgPrimaria" src="${element.imagenB}" alt="${element.descripcion}">
                <img class="imgSecundaria" src="${element.imagenA}" alt="${element.descripcion}">
            </section>\n`;

        seccion.innerHTML =`\n
            <div class="textos_tarjeta">
                <h2><a href="#">#${element.id} ${element.nombre}</a></h2>
                <h3>$${precioTotalMasIVA(element).toFixed(2)}&nbsp;$</h3>
                <span class"identificador"></span>
            </div> \n`;
    
    const constarrayRet = generaElementModal(element, contenedor);
    // console.log(constarrayRet)
    contenedorBotones(element, div, seccion, constarrayRet);
    seccion.append(div);
    contenedor.append(seccion);
}

const generaElementFigura = (element, contador, contenedor) => {
    const seccion = document.createElement('section');
        seccion.className = `tarjeta_fig fig${contador}`;
        seccion.id= `figura${element.id}`;

        seccion.innerHTML = `\n
            <div class="textos_fig">
                <h2>${element.nombre}</h2>
                <h3>$${precioTotalMasIVA(element)}</h3>
            </div>
            <div class="contImg">
                <img src="${element.imagenA}" alt="${element.descripcion}">
            </div> \n`;
            
    const elementModal = generaElementModal(element, contenedor);
        contenedorBotones(element,seccion, seccion, elementModal);
    contenedor.append(seccion);
}
//#endregion

//retorna 1 array de productos filtrados por 1 tipo especifico
const fitraProductosStock = (array,filtro) =>{
    return array.filter((el) => el.tipo.includes(`${filtro}`) && el.stock > 0);
}
//filtra productos terminados
const fitraProductosTerminados = (array) =>{
    return array.filter((el) => el.stock <= 0);
}

//accedo a contenedores donde pienso crear estructuras nuevas 
const contenedorBanner = document.querySelector('.swiper-wrapper'); //donde ira el banner
const contenedorCategoria = document.querySelector('#top_prod');    //secion categorias
const contenedorDestacado = document.querySelector('#destacados')   //seccion destacados
const contenedorFiguras = document.querySelector('.cont_figuras')   // seccion figuras

//#region cargaEstructuras  
//cargan de datos la estructura del banner, generando un elemento, estructura html , por cada elemento del arreglo filtrado correspondiente a su tipo (banner).
const cargaEstructuraBanner = (array) => {
    array.forEach(element => {
        generaElementBanner(element, contenedorBanner);
    });
}

//cargan de datos la estructura de la seccion categorias
const cargaEstructuraCategoria = (array) => {
    let i = 0;
    array.forEach(element => {
        if (i < 3) {
            generaElementCategoria(element, i, contenedorCategoria);
            i++;
        }
    });

    const seccion = document.createElement('section');
    seccion.className = 'boton_todos';
    seccion.ib = 'boton todos';
    seccion.innerHTML = `\n<a href="./pages/busqueda.html">ver todos</a>\n`;
    contenedorCategoria.append(seccion)
}

//cargan de datos la estructura de la seccion Destacados
const cargaEstructuraDestacado = (array) => {
    let i = 0;
    array.forEach(element => {
        if (i <= 5) {
            generaElementDestacado(element,i,contenedorDestacado);
            i++;
        }
    });
}

//cargan de datos la estructura de la seccion Figuras
const cargaEstructuraFigura = (array) => {
    let i = 0
    array.forEach(element => {
        if (i<=5) {
            generaElementFigura(element, i++,contenedorFiguras);
        }
    });
}
//#endregion

//Genera botonera + sus eventos rotar, modal y sumar al carrito y cerrar modal
const contenedorBotones = (element, cajaBotonera, rotarCaja, arrayModal) =>{
    //Creamos La Botonera
    const botonera = document.createElement('div');
    botonera.className = "botones_func";
    botonera.id = `${element.id}`;

    const rotar =  document.createElement('a');
        rotar.className = "rotar"
        rotar.title= "rotar";
        rotar.href= "#";
        rotar.data=`${element.id}`;
        rotar.innerHTML = `\n <ion-icon name="sync-outline"></ion-icon> \n`;

    const zoom =  document.createElement('a');
        zoom.className = "zoom"
        zoom.title= "modal";
        zoom.href= "#";
        zoom.data=`${element.id}`;
        zoom.innerHTML = `\n <ion-icon name="search-outline"></ion-icon> \n`;

    const aniadeCar = document.createElement('a');
        aniadeCar.className = "añadirCar";
        aniadeCar.id = `aniadeElement${element.id}`;
        aniadeCar.title= "carrito";
        aniadeCar.href= "#";
        aniadeCar.data=`${element.id}`;
        aniadeCar.innerHTML = `\n <ion-icon name="cart"></ion-icon> \n`;

        rotar.addEventListener('click', e => {
            e.preventDefault();
            if (document.querySelector('#todosYbusqueda')) {
                console.log("estamos en busquedas");

                let img1 = document.querySelector(`#img1General${element.id}`)
                let img2 = document.querySelector(`#img2General${element.id}`)
                let img3 = document.querySelector(`#img3General${element.id}`)

                if (img1.classList.contains('img1Contain')) {

                    img1.classList.remove('img1Contain')
                    img1.classList.add('img3Contain')

                    img2.classList.remove('img2Contain')
                    img2.classList.add('img1Contain')

                    img3.classList.remove('img3Contain')
                    img3.classList.add('img2Contain')
                }
                else if (img1.classList.contains('img3Contain')) {

                    img1.classList.remove('img3Contain')
                    img1.classList.add('img2Contain')

                    img2.classList.remove('img1Contain')
                    img2.classList.add('img3Contain')

                    img3.classList.remove('img2Contain')
                    img3.classList.add('img1Contain')
                }
                else if (img1.classList.contains('img2Contain')) {

                    img1.classList.remove('img2Contain')
                    img1.classList.add('img1Contain')

                    img2.classList.remove('img3Contain')
                    img2.classList.add('img2Contain')

                    img3.classList.remove('img1Contain')
                    img3.classList.add('img3Contain')
                }
                
                
            }
            rotarCaja.classList.toggle('rotar');

        })
    
        // console.log(arrayModal[0])
        // console.log(arrayModal[1])

        // let contenedorModal = document.querySelector(`#contModal${element.id}`);
        // console.log(contenedorModal);
        // let modal = document.querySelector(`#modal${element.id}`);
        zoom.addEventListener('click', e => {
            e.preventDefault();
            arrayModal[0].classList.add('ocultar');
            arrayModal[1].classList.toggle('close');
        })

        arrayModal[2].addEventListener('click', e => {
            e.preventDefault();
            arrayModal[1].classList.toggle('close');
            setTimeout(function () { //pasados 7 seg se ejecuta 
                arrayModal[0].classList.remove('ocultar')
        }, 500);
        })
        aniadeCar.addEventListener('click', e => {
            if (aniadeCar.classList.contains('agotado')){
                e.preventDefault();
                Toastify({
                    text: "producto agotado!!!",
                    gravity: "bottom",
                    position: "right",
                    duration: 3000,
                    style: {
                        background: "#e94a4a",
                        color:`#fff`,
                    }
                }).showToast();
                console.log('se agoto todo');   
                
            }else{
                e.preventDefault();
                Toastify({
                    text: "añadido al carrito",
                    gravity: "bottom",
                    position: "right",
                    duration: 3000,
                    style: {
                        background: "#ff6347",
                        color:`#fff`,
                    }
                }).showToast();
                agregaElementAlCarrito(element);
            }
            
        })

    //appens    
    botonera.append(rotar);
    botonera.append(zoom);
    botonera.append(aniadeCar);
    cajaBotonera.append(botonera);
} 


//#region  //render de todos los elementos de la ventana carrito
let carritoCompra = []; //carrito principal
const agregaElementAlCarrito = (elemento) =>{
    //carritoCompra.push(elemento);//añade al final
    carritoCompra.unshift(elemento);//añade al inicio
    console.log(carritoCompra)
    
    // console.log("---------------")

    renderVentanaCarr();
    
}

//#region //Accedo a las partes de ventana emergente CarritoReal
let contenedorPrincipalCar = document.querySelector('.carritoReal');
let ventanaCarrito = document.querySelector('.carritoReal .aniadido');
let contadorProductos = document.querySelector('.contiene_icons_car .contador');
let precioCarrito = document.querySelector('.carritoReal .total');

let abrirCarrito = document.querySelector('.carrito .abrirCar');
let carritoClose = document.querySelector('.carritoReal .close');
//#endregion

const renderElementoCarrito = () => {
    ventanaCarrito.innerHTML = ''; 
    //nuevo arreglo sin duplicados y con la suma del precio echas
    const carritoSinDuplicados = carritoCompra.reduce((acum, valorActual) => {
        const elementExistente = acum.find(element => element.id == valorActual.id);
        if (elementExistente) {
            return acum.map((element) => {
                if(element.id == valorActual.id){
                    return {
                        ...element, 
                        precio: element.precio + valorActual.precio,
                        stock: element.stock - 1
                    }
                }
                return element;
            });
        }
        return [...acum, valorActual];
    },[]);
    //carrito sin duplas

    carritoSinDuplicados.forEach(element => {
        // console.log("--------- duplas ---------")
        // console.log(element.stock);

        const div = document.createElement('div');
        div.id = `funk${element.id}`;
        div.className = "elemento";
        div.innerHTML = `\n 
            <p class="nombre"><strong class="numeroProd">${(carritoCompra.filter((el) => el.id == element.id)).length}</strong>${element.nombre}</p>
            <p class="precio">precio $${precioTotalMasIVA(element).toFixed(2)}</p> \n`;

        const botonBorrar = document.createElement('a');
        botonBorrar.className = "delete";
        botonBorrar.innerHTML = `\n <ion-icon name="trash-outline"></ion-icon> \n`;

        //elimina 1 elemento del car
        botonBorrar.addEventListener('click', () => {
            // const index = carritoSinDuplicados.indexOf(element); //trae el indice del elemento en el car

            const index2 = carritoCompra.findIndex( (el) => el.id == element.id );
            console.log("------ in -----")
            console.log(index2)

            carritoCompra.splice(index2,1); // elimina un elemento del carrito
            // carritoSinDuplicados.splice(index,1)
            ventanaCarrito.querySelector(`#funk${element.id}`).remove();
            localStorage.setItem('carritoStorage', JSON.stringify(carritoCompra));
            renderVentanaCarr();

            //cada vez añado o elimino elemento devo rendear la cantidad
            // renderPrecioTotalCarrito();
            // renderCantidad();
            // setCarritoStorage();
        });

        div.append(botonBorrar);
        ventanaCarrito.append(div);


        if (element.stock === 0 ) {
            // renderVentanaCarr();
            productoDest = document.querySelector(`#destacado${element.id}`);
            botonCar = document.querySelector(`#aniadeElement${element.id}`)
            existeAgotado = document.querySelector(`#agotado${element.id}`)
            // console.log(producto);
            // console.log(botonCar)
            productoFig = document.querySelector(`#figura${element.id}`);

            productoGeneral = document.querySelector(`#general${element.id}`);

            productoBanner = document.querySelector(`#bannerEl${element.id}`);


            console.log("stock agotado")
            //alert("producto agotado") 
            
            if(!document.querySelector(`#agotado${element.id}`)){

                const agotado = document.createElement('div');
                agotado.id = `agotado${element.id}`;
                agotado.className = "agotado";

                // productoDest.append(agotado);
                if (productoGeneral) {
                    productoGeneral.append(agotado);
                    botonCar.classList.remove('añadirCar');
                    botonCar.classList.add('agotado');
                }
                // else if(productoFig && productoDest ){

                // }
                if (element.tipo == 'destacados') {
                    productoDest.append(agotado);
                    botonCar.classList.remove('añadirCar');
                    botonCar.classList.add('agotado');

                }else if(element.tipo == 'figura'){
                    productoFig.append(agotado);
                    botonCar.classList.remove('añadirCar');
                    botonCar.classList.add('agotado');
                }
                else if(element.tipo == 'general'){
                    productoGeneral.append(agotado);
                    botonCar.classList.remove('añadirCar');
                    botonCar.classList.add('agotado');
                }
                else if(element.tipo == 'banner'){
                    productoBanner.append(agotado);
                    botonCar.classList.remove('añadirCar');
                    botonCar.classList.add('agotado');
                }
                
                
            }

        }

    });
}

//Al hacer render de la ventana, debe actalizar todo, 1) el elemento, 2)la cantidad, 3) el precio total y 4)Storage

const renderCantidad = () => {
    contadorProductos.innerHTML = carritoCompra.length;
}

const renderPrecioTotalCarrito = () => {
    precioCarrito.innerHTML =  `${(carritoCompra.reduce((acum, producto) => acum += precioTotalMasIVA(producto), 0)).toFixed(2)}`;
}

//Setea un arreglo al storage
const setCarritoStorage = () => {
    localStorage.setItem('carritoStorage', JSON.stringify(carritoCompra));
    //const productos = JSON.parse(localStorage.getItem('carritoStorage'));
}

//#endregion
//llama a las funciones que hacen el render del carrito , precio, cantidad y setea al storage.
const renderVentanaCarr = () => {
    renderElementoCarrito();
    renderPrecioTotalCarrito();
    renderCantidad();
    setCarritoStorage()
}

//Permite abrir y cerrar la ventana emergente carrito real
const abreCierraVentanaCar = () => {
    abrirCarrito.addEventListener('click', e =>{
        e.preventDefault();
        if (contenedorPrincipalCar.classList.contains('ocultar')) {
            contenedorPrincipalCar.classList.remove('ocultar');
            setTimeout(function () {
                contenedorPrincipalCar.classList.remove('bloq');
                contenedorPrincipalCar.classList.add('none');
            }, 600);
        } else if (contenedorPrincipalCar.classList.contains('none')) {
            contenedorPrincipalCar.classList.remove('none');
            contenedorPrincipalCar.classList.add('bloq');
            setTimeout(function () {
                contenedorPrincipalCar.classList.add('ocultar');
            }, 600);
        }
    })

    carritoClose.addEventListener('click',() =>{
        contenedorPrincipalCar.classList.remove('ocultar');
        setTimeout(function(){ 
            contenedorPrincipalCar.classList.remove('bloq');
            contenedorPrincipalCar.classList.add('none');
        },700); 
    })
}
abreCierraVentanaCar();


//resetea el carrito, antes del reseteo lo guardaen el local storage y en un arreglo local, para sup posterior uso.
let carritoFinal = [];
const compraFinal = () => {
    localStorage.setItem('carritoFinal', JSON.stringify(carritoCompra)); //para no perder los datos que compro
    carritoCompra.length = 0;
    setCarritoStorage();
    ventanaCarrito.innerHTML = '';
    contadorProductos.innerHTML = 0;
    precioCarrito.innerHTML = 0;
    renderVentanaCarr();
    carritoFinal = JSON.parse(localStorage.getItem('carritoFinal')); //X si necesito despues seguir trabajando con lo que compro, se sobre escribira pero esta bien, ya que soloquiero que compre una vez.
    // console.log(carritoFinal)
    window.location.reload() //recarga la ventana

}

const vaciarCarrito = () => {
    const botonVaciarCar = document.querySelector('.vacia .vaciarCar');
    botonVaciarCar.addEventListener('click', e => {
        e.preventDefault();
        carritoCompra.length = 0;
        setCarritoStorage();

        // renderVentanaCarr();
        ventanaCarrito.innerHTML = '';
        contadorProductos.innerHTML = 0;
        precioCarrito.innerHTML = 0;
        renderVentanaCarr();
        // renderPrecioTotalCarrito();
        // renderCantidad();
        // setCarritoStorage()
        window.location.reload()

    });
}
vaciarCarrito();

const compraRealizada = () => {
    const botonCompraRealizada = document.querySelector('.vacia .compraCar');

    botonCompraRealizada.addEventListener('click', e =>{
        e.preventDefault();
        (carritoCompra.length>0) 
        ?   Swal.fire({
                position:'top-end',
                icon: 'success',
                title: 'Compra exitosamente!!',
                text: 'Gracias por comprar!',
                showConfirmButton: false,
                background:'#FFDE62',
                color:'#ff6347',
                timer: 1500
            }) && setTimeout(function () { compraFinal() }, 3000)

        :   Swal.fire({
                position:'top-end',
                icon: 'error',
                title: 'Carrito vacio!',
                text: 'Su carrito no posee productos!',
                showConfirmButton: false,
                background:'#FFDE62',
                color:'#ff6347',
                timer: 1500
            })
    })
}
compraRealizada()

//Generamos la estructura base usando fetch
let productosBanner1 = [];
let productosCategoria1= [];
let productosDestacados1 = [];
let productosFiguras1 = [];
let arregloJuguetes = [];

//funcion asincrona para traer los datos desde la db falasa (.JSON)
async function pedirFunkos(){
    const resp = await fetch('./js/db_stockJSON.js')
    // console.log("------ aweit ----- ")
    const data = await resp.json();
    data.forEach(element => {
        // console.log(element);
        arregloJuguetes.push(element)
        //Productos ya filtrados sin stock
    });

    productosBanner1 = fitraProductosStock(arregloJuguetes,"banner");
    productosCategoria1 = fitraProductosStock(arregloJuguetes,"categoria");
    productosDestacados1 = fitraProductosStock(arregloJuguetes,"destacados");
    productosFiguras1 = fitraProductosStock(arregloJuguetes,"figura");
        // console.log("*************** uwu ************** ")
        // console.log(productosBanner1);
        // console.log(productosCategoria1);
        // console.log(productosDestacados1);
        // console.log(productosFiguras1);

        const renderSeccionesPage = () => {
            cargaEstructuraBanner(productosBanner1);
            cargaEstructuraCategoria(productosCategoria1);
            cargaEstructuraDestacado(productosDestacados1);
            cargaEstructuraFigura(productosFiguras1);
        }
        
        (contenedorBanner && contenedorCategoria && contenedorDestacado && contenedorFiguras) ? renderSeccionesPage() : console.log("---- No existen datos ----")

}

if(document.querySelector('#main_index')){
    pedirFunkos();
}

//si poseo datos en el storage carrito carrito == storage
const carritoLStorage = JSON.parse(localStorage.getItem('carritoStorage'));
    if (carritoLStorage != null) {
        carritoCompra = carritoLStorage;
        renderVentanaCarr();
    }
// console.log(carritoCompra);

const verificaExisteBusqueda = (buscado) => {
    return arregloJuguetes.some((el) => el.nombre == buscado || el.genero == buscado || el.clave1 == buscado || el.clave2 == buscado || el.clave3 == buscado);
}

const redireccionAbusqueda = () => {
    const formBusqueda = document.querySelector('#buscadorProductos')
    // console.log(arregloJuguetes)
    formBusqueda.addEventListener('submit',e => {
        e.preventDefault()
        const dato = Object.fromEntries(new FormData(e.target)); //forma resumida
        if (!verificaExisteBusqueda(dato.buscar)) {
            mjsToastify(`${dato.buscar} no existe !!!`,'#ff6347','#e94a4a' );
            console.log(dato.buscar)
        }else {
            const buscado = JSON.stringify(dato.buscar);
            mjsToastify(`${dato.buscar} encontrado, redirigiendo!!!`,'#00b09b','#96c93d' );
            
            setTimeout(() => {
                if (document.querySelector('#main_index')) {
                    window.location.href = './pages/busqueda.html?elementBusqueda='+buscado;
                }
                else if(document.querySelector('#todosYbusqueda')){
                    window.location.href = '../pages/busqueda.html?elementBusqueda='+buscado;
                }
            }, 2000);     
        }
    })
} 
redireccionAbusqueda();

const palabraClave = (event,elementoBuscado) => {
    event.preventDefault();
    
    const buscado = JSON.stringify(elementoBuscado);
    mjsToastify(`redirigiendo a ${buscado} -->`,'#00b09b','#96c93d' );
        
        setTimeout(() => {
            if (document.querySelector('#main_index')) {
                window.location.href = './pages/busqueda.html?elementBusqueda='+buscado;
            }
            else if(document.querySelector('#todosYbusqueda')){
                window.location.href = '../pages/busqueda.html?elementBusqueda='+buscado;
            }
        }, 2000);     
}

//permite cargar el carrito y renderisar la ventana al recargar la page
window.addEventListener('load', e =>{
    const carritoLStorage = JSON.parse(localStorage.getItem('carritoStorage'));
    if (carritoLStorage != null) {
        carritoCompra = carritoLStorage;
        renderVentanaCarr();
    }
    // renderVentanaCarr();
    
})


