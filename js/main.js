
// depura("usamos console")

// console.dir(document.body);

// // Acceder a los nodos: formas 3

// getElementById()  //acceso al elemento por ID
// getElementByClassName() //"" Ppor SU Clase
// getElementByTagName()  //"" por ael nombre del elemento ej: div, img, section...

// //uso ej: <div id="app" class="cajitas"> 
// let div = document.getElementById("app"); 

// let div2 = document.getElementsByClassName("cajitas") //accedemos al conjunti de elementos que tengas esa clase.. retorna un array con las coincidencias..

// let div3 = document.getElementsByTagName("div") //accedemos a un conjunto de elementos por nombre de etiqueta como identificador.

// //InnerText: accedemos y modifica contenido textual.



// DUDAS: debo declarar las variables que usio en el constructor, al comienzo del archivo ??? por las dudas lo hago con let... pero esto me genera dudas ya que sin declararlas al comienzom todo anda bien.
// disculpe la cantidad de comentarios.. pero me ayudan a ir entendiendo lo que hago.. lo mismo con lo console.log


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

/* Funciones */
//Depurador, solo para ver donde voy entrando y donde no
const depura = (texto) =>{
    let dep = "\n---- Depurador => "
    console.log(`${dep} ${texto} ---- \n`)
}
//filtramos con filter y nos devuelve un array con los coincidentes: filtamos objetos por:
//Banner
const funkosBanner = arregloJuguetes.filter((el) => el.tipo.includes("banner"));
//Categorias
const funkosCategoria = arregloJuguetes.filter((el) => el.tipo.includes("categoria"));
//Destacados
const funkosDestacados = arregloJuguetes.filter((el) => el.tipo.includes("destacados"));
//Figuras
const funkosFiguras = arregloJuguetes.filter((el) => el.tipo.includes("figura"));

depura("filtrados");
console.log(funkosBanner)
console.log(funkosDestacados)
console.log(funkosCategoria)
console.log(funkosFiguras)

/* permite calcular par impar */
const par = (val) =>{ //la usare para las posiciones
    return (val % 2) == 0; 
}

/* si es par retorna left sino right, para las posiciones de las tarjetas*/
const left_right = (i) =>{
    par(i) ? posicion = "left" : posicion = "right";
    return posicion;
}

//Genera un modal para cada tarjeta
const generaModales = (array, j) =>{
    console.log("entre a GENERA MODAL")
    let precio;
    let descuento;
    //Nose si es lo mejor pero creamos un modal por cada elemento
    (array[j].precioConDescuento() > 0) ? (precio = array[j].precioConDescuento(), descuento="sin descuento") : (precio = array[j].precio , descuento = "descuento de " );
    console.log("entre")

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
    </section> \n`;   
        console.log("saliendo !!!!!!!! !!!!!! ")

    return textomod;
}

//Funcion que genera targetas para la seccion Destacados
let tarjeta = " "; //guardara la estructura de todas las tarjetas destacadas
let tarjeta1 = " ";
let trajeta3 = " ";
let tarjeta4 = " ";
const generaTarjetas = (array,buscador) => {
    let posicion; 
    if (buscador == "categoria") {
        j = 0; //contador
        array.forEach(element => {
            posicion = left_right(j);
            console.log(posicion);
            tarjeta1 += `<section class="targeta_simple ${posicion} ">
                    <img src="${element.imagenA}" alt="${element.descripcion}">
                    <div class="textos_target"> 
                        <a class="title_targ">${element.genero}</a>
                        <p>${element.describe_tipos()}</p>
                    </div>                  
                </section>\n`;
                j += 1;
            })
        return tarjeta1;
    } else if (buscador == "banner") {
        for (let i = 0; i < array.length; i++) {
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
        return tarjeta4;

    }else if (buscador == "destacados"){
        for (let i = 0; i < array.length; i++) {
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
                            <a href="#" class="añadirCar" title="gustar" data-id="${array[i].id}"> 
                                <ion-icon name="heart-outline"></ion-icon>
                            </a>
                        </div>
                    </section>
                </div>
                <div class="textos_tarjeta">
                    <h2><a href="#">${array[i].nombre}</a></h2>
                    <h3>$${array[i].precio}&nbsp;$</h3>
                    <span class"identificador">${array[i].id}</span>
                </div>
            </section>
            ${generaModales(array,i)}
            \n`;   
        }
        return tarjeta;

    }else if (buscador == "figura"){
        for (let i = 0; i < array.length; i++) {
            trajeta3 += `<section class="tarjeta_fig fig${i+1} ">
            <div class="textos_fig">
                <h2>${array[i].nombre}</h2>
                <h3>$${array[i].precioTotalMasIVA()}</h3>
            </div>
            <img src="${array[i].imagenA}" alt="${array[i].descripcion}">
            <a href="#" class="carrito"><ion-icon name="cart-outline"></ion-icon></a>
        </section>\n`;
        }
        return trajeta3;
    }
    
}
//llamamos a la funcion Genera Tarjeta Destacados, asigno a la variable targetaDestacada
let tDestacadas = generaTarjetas(funkosDestacados,"destacados");
//console.log(tDestacadas);
let tCategorias = generaTarjetas(funkosCategoria,"categoria");
//console.log(tCategorias)
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

/* Creacion de elemento para el titulo de la seccion Destacados */
let tituloDestacados = document.querySelector(".titDest")
let nuevoTitulo = document.createElement("span") //crea elemento nuevo
nuevoTitulo.innerHTML = "funkos destacados"
tituloDestacados.append(nuevoTitulo); //añadimos el elemento como hijo de .titDes
/* Remover Elemento */
//nuevotitulo.remove() //remove() permite eliminar un elemento  o varios 
// elemento= document.getElementsByClassName("li")
// elemento[0].remove

/* Permite cambiar automaticamente la clase de la tarjeta si la tocamos */
tarjetaDestacada1 = document.querySelectorAll(".tarjeta");
productoImg = document.querySelectorAll(".producto_imagen");
contieneImg1 = document.querySelectorAll(".imgPrimaria");
contieneImg2 = document.querySelectorAll(".imgSecundaria");

depura("PRODUCTO IMAGEN ---------")
console.log(productoImg);
console.log(tarjetaDestacada1);

for (let i = 0; i < tarjetaDestacada1.length; i++) {
    productoImg[i].addEventListener('click', e =>{
        e.preventDefault();
        tarjetaDestacada1[i].classList.toggle('rotar');
        console.log(tarjetaDestacada1); //DEPURA
        console.log(i);
    })
}
// classList.add : permite añadir una clase
// classList.remove : permite remover una clase
for (let i = 0; i < tarjetaDestacada1.length; i++) {
    contieneImg1[i].addEventListener('mouseover', e =>{
        tarjetaDestacada1[i].classList.add('rotar');       
        contieneImg2[i].onmouseout = () => tarjetaDestacada1[i].classList.remove('rotar');
        console.log(tarjetaDestacada1) //DEPURA
    })
}





// funcion de bienvenida, retorna un codigo de error 
// function bienvenido() {
//     let ingresar = prompt("deseas ver mi web? si / no").toLowerCase();
//     (ingresar === "si" && (ingresar != "" && ingresar != null))
//         ? (alert("bienvenido!!!"), (sale = true)) : (alert("adios!!!"), (sale = false));
//     return sale;
// }


//funcion flecha permite mostrar por consola el menu
// const menu = (texto, arreglo) => {
//     let i = 0;
//     console.log(texto+"\n");
//     for (const iterador of arreglo) {
//         i++;
//         console.log(i+" => "+iterador.nombre+" $"+iterador.precio+", descuento "+iterador.descuento+"\n");
//     }
// }

//funcion que busca un tipo especifico de dato
// for (const iterator of arregloJuguetes) {
//     console.log(iterator);
// }


//some me devolvera true o false si encuentra una referencia, asi que me sirve para hacer un filtro previo:
// const verifica = (arreglo, valorBuscar) => {
//     return(arreglo.some((n) => n.nombre == valorBuscar || n.genero == valorBuscar || n.tipo == valorBuscar || n.busca == valorBuscar ));
// }

// //Permite buscar una pañabra clave, utilizando una fuuncion que viene por parametro, la cual realiza  una validacion, si pasa con fid traemos el objeto coincidente.
// const buscaCoincidencia = (fun,arr) =>{
//     let busca_object = prompt("buscador:");
//     console.log("Depurando : ",busca_object);
//     if (fun(arr, busca_object)) {
//         //filter igual que filter pero retorna un nuevo array con los elementos que cumplan la condicion. sino array vacionn "" 
//         return (resultado = arr.filter((m) => m.nombre == busca_object || m.genero == busca_object || m.tipo == busca_object || m.busca == busca_object ))
        
//     } else{
//         console.log("error");
//         return redultado = false;
//     }
// }

// const comprados = resultado.map((element) => element.nombre);
// console.log(comprados);


//Permite mostrar por pantalla los objetos que vamos comprando y retorna la coleccion de todos los objetos comprados, 
// function compra_general() {
//     do {
//         prod = Number(prompt(menu("Todos los productos", arregloJuguetes)));
//         if (prod <= 17 && prod > 0) {
//             if (confirm("confirma la compra?")) {
//                 //find me permite retornar el 1° elemento del array que cumpla con la condicion, si no hay coincidencia undefined
//                 objeto = arregloJuguetes.find((el) => el.id === prod)
//                 funkosComprado.push(objeto);
//                 console.log(objeto);
//                 console.log(funkosComprado)
//                 //console.log("precio de " + juguete_nombre(prod) + " :" + " $" + juguete_precio(prod));
//                 // console.log("\n-------------\nProducto: " + objeto.id, objeto.nombre + "\nPrecio base: $" + objeto.precio + "\nMeno Descuento %" + objeto.descuento + ": $" + objeto.precioConDescuento() + "\n+IVA %14: " + objeto.precioTotalMasIVA());
//                 // sumaSinIva += objeto.precioConDescuento();
//                 // sumadorTotal += objeto.precioTotalMasIVA();

//                 if (confirm("seguir comprando???")) {
//                     continue;
//                 } else {
//                     console.log("\n salto de linea por ERROR \n");
//                 }
//             } else {
//                 console.log("rata inmunda");
//                 break
//             }
//             console.log("++---- DEPURANDO ----++")
//             return (funkosComprado);
//         } else {
//             alert("ingrese un valor numerico entre 1 / 17.");
//             continue;
//         }
//     } while (confirm("ver menu?"));
// }

// const precioFinal = (arreglo) =>{
//     retorno = arreglo.reduce((acumula, elemento) => acumula + elemento.precioTotalMasIVA(), 0);
//     return retorno;
// }

// let salir = true;
// let filtrados = false;
// //Algoritmo principal.. tambien puedo meterlo en una funcion principal y llamarlo al final, pero asi funciona, asi que lo dejo asi xD
// confirm("asegurese de tener abierta la consola, sino no podra ver nada de lo que sucede!!!! \n");

// while (opcion != 0) {
//     opcion = menuPrincipal();
//     switch (opcion) {
//         case 1:
//             console.log("\n+---- "+opcion+") Mostrar 1todos los funkos ----+");
//             console.log(menu("Todos los productos", arregloJuguetes));
//             break;
//         case 2:
//             console.log("\n+---- "+opcion+") Buscar palabra clave ----+");
//             do{
//                 filtrados = buscaCoincidencia(verifica,arregloJuguetes);
//                 console.log("#DEPURANDO 123: "+filtrados)
//                 if (filtrados == false) {
//                     console.log("disculpe, no hay coincidencia, pruebe con movies | anime | pokemon | bragon ball |siencia ficcion | terror etc..");
//                     salir = false;
//                 } else{
//                     console.log(filtrados);
//                     for (const iterator of filtrados) {
//                         console.log(`nombre ${iterator.nombre}  precio ${iterator.precio}`);
//                     }
//                     salir = confirm("salir del buscador?")
//                     console.log("#DEPURANDO: "+salir)
//                     if (salir == true) {alert("saliendo buscador!!!")}; 
//                 }
//             }while(salir == false);
            
//             break;
//         case 3:
//             console.log("\n+---- "+opcion+") realizar compra ----+");
//             carritoActual = compra_general();
//             console.log(carritoActual);
//             console.log("\n++---- DEPURANDO 2 ----++\n")
//             break;
//         case 4:
//             console.log("\n+---- "+opcion+") ver carrito ----+");
//             carritoActual.forEach(element => {
//                 console.log(`Producto: ${element.nombre}, Precio: ${element.precio}, Precio+IVA: ${element.precioTotalMasIVA()}  \n`);
//             });
//             break;
//         case 5:
//             console.log("+---- "+opcion+") eliminar product carrito ----+");
//             nElimina = Number(prompt(menu("+---- elimine uno del carrito ----+",carritoActual)));
//             carritoActual.splice(nElimina,1);
//             console.log(carritoActual);
//             break; 
//         case 6:
//             console.log("+---- "+opcion+") precio final: ----+");
//             valorFinal=precioFinal(carritoActual);
//             console.log(`Valor final del carriit: ${valorFinal}`);
//             break;
//         case 7:
//             console.log("eligio " + opcion);
//             obtenerRegalo(regalo,suerte);
//             break;
//         case 0:
//             console.log("saliendo del menu");
//             break;
//         default:
//             console.log("valor ingresado es incorrecto. seleccione opcion entre 0 y 6.")
//             break;
//     }
// }


// //FUNCION PARA RECIBIR UN REGALO ALEATORIO
// function regalo() { //genera un numero random
//     let max = 1;
//     let min = 8;
//     return Math.round(Math.random() * (max - min) + min);
// }
// function suerte(){
//     let max = 1;
//     let min = 100;
//     suerte1 = Math.round(Math.random() * (max - min) + min); 
//     (suerte1 === 32 || suerte1 === 72 || suerte1 <= 30) ? ret=true : ret=false ;
//     console.log(suerte1) 
//     return ret;
// }

// // funcion de orden superior, llamamos a las 2 funciones de suerte  para poder generar o buscar un objeto aleatorio
// function obtenerRegalo(func1,func2) {
//     let a = confirm("desea probar su suerte:")
//     //traemos el objeto que coincida con el numero aleatorio
//     let objeto=arregloJuguetes.find((el) =>  el.id === func1());

//     if (a) {
//         (func2() == true) 
//         ?  console.log("¡¡¡Ganaste !!! \nfunko: ",objeto.nombre,", marca: ",objeto.marca)
//         : console.log("¡¡¡ Mala suerte, no ganaste !!!")
        
//     }else{
//         console.log("chau !!!");
//     }
// }

