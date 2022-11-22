/* declaracion de variables que usare: */
let textoMenu = "";
let resultado;
let carritoActual = [];
let comprados;
let retorno=0;
let opcion = 7; //tambien puedo usar un .length
let valorFinal=0;
let nElimina;

//esto me permitira seguir comprando por mas que salga de la opcion 3
let funkosComprado = carritoActual; 
let carrito = [];

/* Renderizar todo al recarrgar, asi no se pierde nada */
document.body.onload = function(){
}
window.addEventListener('load',e =>{
    renderElementosCar();
    renderCantidad(); //actualizamos el contador de productos
    renderPrecioTotalCar();
})

const carritoLStorage = JSON.parse(localStorage.getItem('carritoFunkos'));
if (carritoLStorage != null) {
    carrito = carritoLStorage;
}

/* Funciones */
//Depurador, solo para ver donde voy entrando y donde no
const depura = (texto) =>{
    let dep = "\n---- Depurador => "
    console.log(`${dep} ${texto} ---- \n`)
}
//filtamos objetos por:
//Banner
const funkosBanner = arregloJuguetes.filter((el) => el.tipo.includes("banner"));
//Categorias
const funkosCategoria = arregloJuguetes.filter((el) => el.tipo.includes("categoria"));
//Destacados
const funkosDestacados = arregloJuguetes.filter((el) => el.tipo.includes("destacados"));
//Figuras
const funkosFiguras = arregloJuguetes.filter((el) => el.tipo.includes("figura"));


/* permite calcular par impar */
const par = (val) =>{ //la usare para las posiciones
    return (val % 2) == 0; 
}
/* si es par retorna left sino right, para las posiciones de las tarjetas*/
const left_right = (i) =>{
    par(i) ? posicion = "left" : posicion = "right";
    return posicion;
}

//+ ---- Genera un modal para cada tarjeta -----+
const generaModales = (array, j) =>{
    // console.log("entre a GENERA MODAL")
    let precio;
    let descuento;
    //Nose si es lo mejor pero creamos un modal por cada elemento
    (precioConDescuento(array,j) > 0) ? (precio = precioTotalMasIVA(array,j).toFixed(2), descuento=`${array[j].descuento}`) : (precio = precioTotalMasIVA(array,j).toFixed(2), descuento=`${array[j].descuento}`);
    // console.log("entre")

    let textomod = `\n
    <section class="modalContainer" data-id="${array[j].id}">
        <section class="modal close ${array[j].id}">
            <div class="superior">
                <div class="izq">
                    <img src="${array[j].imagenB}" alt="${array[j].descripcion}">
                </div>
                <div class="der">
                    <h1>${array[j].nombre}</h1>
                    <h2>$${precio}</h2>
                    <p>descuento de %${descuento} + iva de %4.</p>
                    <p>3 cuotas sin interes de $${(precioTotalMasIVA(array,j) / 3).toFixed(2)} con: </p>
                    <img class="pagos" src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/online/468X60.jpg" title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago"/>
                    <p><strong>${array[j].descripcion}</strong></p>
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
            <div class="inferior">
                <div class="redes" id="redes">
                    <a href="#redes"><ion-icon name="logo-whatsapp"></ion-icon></a>
                    <a href="#redes"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="#redes"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#redes"><ion-icon name="mail-outline"></ion-icon></a>
                </div>
                <div class="palabras_clave" id="palClav">
                    <a href="palClav">${array[j].nombre}</a>
                    <a href="palClav">${array[j].genero}</a>
                    <a href="palClav">${array[j].tipo}</a>
                    <a href="palClav">${array[j].clave1}</a>
                    <a href="palClav">${array[j].clave2}</a>
                    <a href="palClav">${array[j].clave3}</a>
                </div>
            </div>
            <a class="cerrar"><ion-icon name="close-outline"></ion-icon></a>
        </section>  
    </section> \n`;   
        // console.log("saliendo !!!!!!!! !!!!!! ")

    return textomod;
}

//Funcion que genera tarjetas para la seccion Destacados
const generaTarjetas = (array,buscador) => {
    let posicion; 
    let tarjeta = " "; //guardara la estructura de todas las tarjetas destacadas
    let tarjeta1 = " ";
    let trajeta3 = " ";
    let tarjeta4 = " ";
    if (buscador == "categoria") {
        j = 0; //contador
        array.forEach(element => {
            if (element.stock != 0) {
                posicion = left_right(j);
                // console.log(posicion);
                tarjeta1 += `<section class="targeta_simple ${posicion} ">
                        <img src="${element.imagenA}" alt="${element.descripcion}">
                        <div class="textos_target"> 
                            <a class="title_targ">${element.genero}</a>
                            <p>${describe_tipos2(element)}</p>
                        </div>                  
                    </section>\n`;
                j += 1;
            }
        })
        return tarjeta1;
    } else if (buscador == "banner") {
        for (let i = 0; i < array.length; i++) {
            if (array[i].stock != 0) {
                tarjeta4 += `<section class="art_princial swiper-slide">
                <div class="caja left">
                    <img src="${array[i].imagenA}" alt="${array[i].descripcion}">
                </div>
                <div class="caja right">
                    <h2 class="titulo">#${array[i].id} ${array[i].nombre}</h2>
                    <h3 class="precio">$${array[i].precio}</h3>
                    <p class="textos">${array[i].descripcion}</p>
                    <a href="">reservalo</a>
                    <span class="descuento">${array[i].descuento}%</span>
                </div>
            </section>\n`
            }
        }
        return tarjeta4;

    }else if (buscador == "destacados"){
        for (let i = 0; i < array.length; i++) {
            if ( array[i].stock != 0 ) {
                par(i) ? posicion = "left" : posicion = "right";
                tarjeta += 
                `<section class="tarjeta tarjeta${i+1} ${posicion}" data-id="${array[i].id}">
                    <div class="producto_imagen">
                        <section class="cont_img">
                            <img class="imgPrimaria" src="${array[i].imagenB}" alt="${array[i].descripcion}">
                            <img class="imgSecundaria" src="${array[i].imagenA}" alt="${array[i].descripcion}">
                            <div class="botones_func" data-id="${array[i].id}">
                                <a href="#" title="rotar" class="rotar" data-id="${array[i].id}"> 
                                    <ion-icon name="sync-outline"></ion-icon> 
                                </a>
                                <a href="#" class="zoom" title="agrandar" data-id="${array[i].id}"> 
                                    <ion-icon name="search-outline"></ion-icon> 
                                </a>
                                
                            </div>
                        </section>
                    </div>
                    <div class="textos_tarjeta">
                        <h2><a href="#">#${array[i].id} ${array[i].nombre}</a></h2>
                        <h3>$${precioTotalMasIVA(array,i).toFixed(2)}&nbsp;$</h3>
                        <span class"identificador"></span>
                    </div>
                </section>
                ${generaModales(array,i)}
                \n`;   
            }       
        }
        return tarjeta;

    }else if (buscador == "figura"){
        let j = 0;
        for (let i = 0; i < array.length; i++) {
            if ( array[i].stock != 0 ) {
                j++;
                trajeta3 += `<section class="tarjeta_fig fig${j} ">
            <div class="textos_fig">
                <h2>${array[i].nombre}</h2>
                <h3>$${precioTotalMasIVA(array,i)}</h3>
            </div>
            <div class="contImg">
                <img src="${array[i].imagenA}" alt="${array[i].descripcion}">
            </div>
            <div class="botones" data-id="${array[i].id}">
                <a href="#" class="carrito">
                    <ion-icon name="cart-outline"></ion-icon>
                </a>
                <a href="#" class="zoom" title="agrandar" data-id="${array[i].id}"> 
                    <ion-icon name="search-outline"></ion-icon> 
                </a>
            </div>
            </section>
            ${generaModales(array,i)}
            \n`;
            }
            
        }
        return trajeta3;
    }
    
}

//asigno a la variabole las tarjetas en formato texto html ,de acuerdo a la seccion a la que van a pertenecer
let tDestacadas = generaTarjetas(funkosDestacados,"destacados"); //tDestacados contendra todos los onjetos funcos que poseen tipo destacados.
let tCategorias = generaTarjetas(funkosCategoria,"categoria");
let tFiguras = generaTarjetas(funkosFiguras,"figura");
let tBanner = generaTarjetas(funkosBanner,"banner")

//Accedo a el elemento cuyo id = #destacados y lo guardamos en contenedorTarjetasDestacadas
let contDestacadas = document.querySelector("#destacados")
let contCategorias = document.querySelector("#top_prod")
let contFiguras = document.querySelector(".cont_figuras")
let contBanner = document.querySelector(".envoltura_art")

//creamos una nueva estructura de etiquetas y contenido en el elemento anterior.
contDestacadas.innerHTML = tDestacadas;
contCategorias.innerHTML = tCategorias;
contFiguras.innerHTML = tFiguras;
contBanner.innerHTML = tBanner;

const creaBotonCar = (id,ele) =>{ 
    let button = document.createElement('a');
    button.className = "añadirCar";
    button.innerHTML = `<ion-icon name="cart"></ion-icon>`;
    
    button.addEventListener('click', () => {
    agregarCarrito(id);
    }) 
    ele.append(button);
}
//añadimos el boton para el carrito
let botones_func = document.querySelectorAll('.botones_func');

for (let index = 0; index < botones_func.length; index++) {
    let identificador = Number(botones_func[index].getAttribute('data-id')); //para no perder de vista el arreglo principal
    creaBotonCar(identificador,botones_func[index]);
    console.log(identificador)
}
    

/* Creacion de elemento para el titulo de la seccion Destacados */
let tituloDestacados = document.querySelector(".titDest")
let nuevoTitulo = document.createElement("span") //crea elemento nuevo
nuevoTitulo.innerHTML = "funkos destacados"
tituloDestacados.append(nuevoTitulo); //añadimos el elemento como hijo de .titDes

/* Permite cambiar automaticamente la clase de la tarjeta si la tocamos */
tarjetaDestacada1 = document.querySelectorAll(".tarjeta");
productoImg = document.querySelectorAll(".producto_imagen");
contieneImg1 = document.querySelectorAll(".imgPrimaria");
contieneImg2 = document.querySelectorAll(".imgSecundaria");

const rotarTarjeta = () =>{
    for (let i = 0; i < tarjetaDestacada1.length; i++) {
        productoImg[i].addEventListener('click', e =>{
            e.preventDefault();
            tarjetaDestacada1[i].classList.toggle('rotar');
            // console.log(tarjetaDestacada1); //DEPURA
            // console.log(i);
        })
    }
    // classList.add : permite añadir una clase
    // classList.remove : permite remover una clase
    for (let i = 0; i < tarjetaDestacada1.length; i++) {
        contieneImg1[i].addEventListener('mouseover', e =>{
            tarjetaDestacada1[i].classList.add('rotar');       
            contieneImg2[i].onmouseout = () => tarjetaDestacada1[i].classList.remove('rotar');
            // console.log(tarjetaDestacada1) //DEPURA
        })
    }
}
rotarTarjeta();


//AGREGAR AL CARRITO

depura("AÑADIIMOS AL CARRITO --")
const agregarCarrito = (id) =>{
    const producto = arregloJuguetes.find((item) => item.id == id);
    carrito.push(producto);
    renderCar();

}
//Partes del contenedor Carrito
let contenedorCarrito = document.querySelector('.carritoReal .aniadido');
let contadorProductos = document.querySelector('.contiene_icons_car .contador');
let precioCarrito = document.querySelector('.carritoReal .total');

const renderCar = () => {
    renderElementosCar();
    renderCantidad(); //actualizamos el contador de productos
    renderPrecioTotalCar();
    localST();
    // carrito.forEach(element => {
    //     console.log(element);
    // });
}


const renderElementosCar = () =>{
    contenedorCarrito.innerHTML = ''; //forma basica de evitar la acumulacion en el array
    carrito.forEach(element => {
        const div = document.createElement('div');
        div.id = "funk" + element.id;
        div.className = "elemento";
        div.innerHTML = `
        \n<p class="nombre">${element.nombre}</p>
            <p class="precio">precio $${precioTotalMasIVA2(element).toFixed(2)}</p>
            \n`;
    
        const borraF = document.createElement('a');
        borraF.className ="delete"
        borraF.innerHTML = `\n
        <ion-icon name="trash-outline"></ion-icon>\n`;

        borraF.addEventListener('click',()=>{
            let index = carrito.indexOf(element);
            carrito.splice(index, 1)
            console.log(index)

            contenedorCarrito.querySelector("#funk" + element.id).remove();
            //Cada vez que borro debo actualizar el carrito
            localStorage.setItem('carritoFunkos',JSON.stringify(carrito));
            renderPrecioTotalCar();
            renderCantidad();
        })

        div.append(borraF)
        contenedorCarrito.append(div);
    });
}

// calcula la cantidad de productos en el carrito
const renderCantidad = () =>{
    contadorProductos.innerHTML = carrito.length;
}

//calcula el precio total del carrito
const renderPrecioTotalCar = () =>{
    let = total = carrito.reduce((acum, producto) => acum += precioTotalMasIVA2(producto), 0)
    precioCarrito.innerHTML = total.toFixed(2);
    // precioCarrito.innerHTML = carrito.reduce((acum, producto) => acum += producto.precioTotalMasIVA(), 0);
}

//Permite cargar el local storage
const localST = () =>{
    // //Transformp arreglo a JSON
    // const carritoJSON = JSON.stringify(carrito);
    // // console.log(carritoJSON);
    // //seteo el arreglo transformado a string al local storage
    // localStorage.setItem('carritoFunkos',carritoJSON);

    localStorage.setItem('carritoFunkos', JSON.stringify(carrito));

    // //Recupero el string desde el local storage,
    // const productosJSON = localStorage.getItem('carritoFunkos');
    // // lo transformo y guardo como array en una variable productos.
    // const productos = JSON.parse(productosJSON);

    const productos = JSON.parse(localStorage.getItem('carritoFunkos'));

    //console.log(productosJSON)
    console.log(productos);
    console.log("\n\n")
}


/* para abreCierraCar() */
let abrirCarrito = document.querySelector('.carrito a');
let carritoMo = document.querySelector('.carritoReal');
let carritoClose = document.querySelector('.carritoReal .close');
//permite abrir y cerrar el modal delcarrito de compras
const abreCierraCar = () => {
    abrirCarrito.addEventListener('click', e =>{
        e.preventDefault();
        if(carritoMo.classList.contains('ocultar')){
            carritoMo.classList.remove('ocultar');
            setTimeout(function(){ 
                carritoMo.classList.remove('bloq');
                carritoMo.classList.add('none');
            console.log(carritoMo.className);
            },600);
        }else if (carritoMo.classList.contains('none')){
                carritoMo.classList.remove('none');
                carritoMo.classList.add('bloq');
            setTimeout(function(){ 
                carritoMo.classList.add('ocultar');
            },600);
        }
    
    })
    
    carritoClose.addEventListener('click',() =>{
        carritoMo.classList.remove('ocultar');
        setTimeout(function(){ 
            carritoMo.classList.remove('bloq');
            carritoMo.classList.add('none');
        },700); 
    })
}
abreCierraCar();

const btnLimpiar = document.querySelector('.vacia a')
// console.log(btnLimpiar)

btnLimpiar.addEventListener('click',e => {
    e.preventDefault();
    console.log("eliminando todo")
    carrito.length = 0;
    localStorage.setItem('carritoFunkos',JSON.stringify(carrito));
    contenedorCarrito.innerHTML= '';
    contadorProductos.innerHTML= 0;
    precioCarrito.innerHTML=0;
})

// console.log("carrito",carrito);
// console.log("contenedor car",contenedorCarrito)

