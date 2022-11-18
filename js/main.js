
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

//Declaracion de variables 
let id = 0;
let nombre = "";
let precio = "";
let marca = "";
let genero = "";
let tipo = "";
let busca = "";
let descuento = 0;

let sumadorTotal = 0;
let sumaSinIva = 0;

/* declaracion de variables que usare: */
const arregloJuguetes = [];
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

//constructor
function funko(id, name, descripcion, price, discount, genero, tipo, linkImg1, linkImg2){
    //variables o propiedades publicas del objeto, se ven o acceden fuera del documento 
    this.id = id;
    this.nombre = name;
    this.descripcion = descripcion;
    this.precio = price;
    this.descuento = discount;
    this.genero = genero;
    this.tipo = tipo;
    this.imagenA = linkImg1;
    this.imagenB = linkImg2;


    // variable privada, solo se visualiza dentro del documento.
    let iva = 0.14;    
    
    //metodos, son funciones que seaplican a un objeto, las acciones que puede hacer el objeto
    let descuentoReal = this.descuento * 0.01;
    this.precioConDescuento = function(){
        return (this.precio - this.precio * descuentoReal); 
    }
    
    this.precioTotalMasIVA = function(){
        return (this.precioConDescuento() + this.precioConDescuento()  * iva);
    }
    this.describe_tipos = function(){
        if ( this.genero == "movies" ) {
            return "En esta seccion enconraras funkos relacionados con peliculas, ya sean de terror, siencia ficcion, y demas."
        }else if ( this.genero == "tv y series" ){
            return "Funkos relacionados con animaciones y series de tv... Los simpsons, futurama, series como mandalorian o game of throne."
        }else if(this.genero == "anime"){
            return "Anime , y cultura japonesa , asia y oriente... mangas y manwhas. Como pokemon, Dragon Ball, Naruto, shinigamis, Pakas, etc."
        }
    }
}

// const menuPrincipal = () => {
//     return valor = Number(prompt(
//         "++ ------ Menu Principal ------++\n"+
//         "|| 1) ver todos los funkos      \n"+
//         "|| 2) buscar una coincidencia   \n"+
//         "|| 3) comprar un producto       \n"+
//         "|| 4) ver carrito               \n"+
//         "|| 5) eliminar product carrito  \n"+
//         "|| 6) precio total              \n"+
//         "|| 7) probar suerte             \n"+
//         "|| 0) salir                     \n"+
//         "++ ---------- Fin Menu --------++\n"
//     ));
// }


//primer instancia de la clase funko
// id | nombre | descripcion | precio | genero | tipo | imagen | descuento

//Banner
const funko1 = new funko (1,"michael myers","funko pop de la serie de peliculas Halloween, del género slasher. Aparece por primera vez en Halloween (1978). ",200, 10,"movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/halloween/hallowen_xsqe9a.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102400/imgs/haloween/funkos/halloween/hallowen2_xhsuts.png")
const funko2 = new funko (2,"chucky","funko de la pelicula chuky el muñeco malvado. Es un muñeco Good Guy que fue poseído por medio de magia vudú por el asesino en serie Charles Lee Ray",1550, 10, "movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102422/imgs/haloween/funkos/halloween/chuki123_mh4o3b.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102328/imgs/haloween/funkos/halloween/chuki1111_kiwwds.png")
const funko3 = new funko (3,"sam","funko de la pelicula Trick 'r Treat criatura demoniaca parecida a una calabaza que actua como ejecutor de las reglas y tradiciones de Hallowen.", 1200, 10,"movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102426/imgs/haloween/funkos/halloween/trick_r_treat_uv2gny.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102303/imgs/haloween/funkos/halloween/trick_r_treat2_pg1j8x.png")

//Categoria
const funko4 = new funko (4,"yamcha y puar","funko dragon ball z yamcha y puar coleccion.", 1530, 10, "anime","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102390/imgs/haloween/funkos/dbz/yamcha2_ghsnru.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102427/imgs/haloween/funkos/dbz/yamcha3_i8rjfz.png")
const funko5 = new funko (5,"homer muumuu","funko de la coleccion simpsons, homero gordo esa mancha no se quita", 1021, 0, "tv y series","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1668210035/imgs/haloween/funkos/futurama/homero_gordo1_fgykwd.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107301/imgs/haloween/funkos/futurama/homero_gordo2_nuixxt.png")
const funko6 = new funko (6,"john wick","funko coleccionable, john wick + perro.", 1010, 0, "movies","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102369/imgs/haloween/funkos/pelis/jon_week3_axwmnn.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102405/imgs/haloween/funkos/pelis/jon_week_n4kpmi.png")

//ARREGLO DE OBJETOS
arregloJuguetes.push(funko1,funko2,funko3,funko4,funko5,funko6);

//Destacados
arregloJuguetes.push(new funko(7,"pennywise","funko pop de lapelicula it funko generico",1220, 0, "movies","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102295/imgs/haloween/funkos/halloween/it2222_mc4bmq.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102340/imgs/haloween/funkos/halloween/it3_xdclx3.png"));
arregloJuguetes.push(new funko(8,"t-8000","funko de la pelicula terminator, terminator abuelo t-8000",1150, 0, "movies","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/pelis/terminator1_uwdmzk.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102385/imgs/haloween/funkos/pelis/terminator4_t8viae.png"));
arregloJuguetes.push(new funko(9,"charizard","funko coleccion pokemon, pokemon inicial. serie rojo.",1200, 0, "anime","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/pokemon/charizard_wodreh.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456314/imgs/haloween/funkos/pokemon/charizard0_n5svia.png"));
arregloJuguetes.push(new funko(10,"daemon targaryen","funko coleccion house of dragons, game of throne.",1500, 0, "tv y serie","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112418/imgs/haloween/funkos/houseOfDragons/daemon_targaryen2_ynzag1.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102376/imgs/haloween/funkos/houseOfDragons/daemon_targaryen_ktydpy.png"));
arregloJuguetes.push(new funko(11,"otto","funko de la coleccion simpsons, otto escuchandomusica",1300, 0,  "tv y series","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/otto_sixm1m.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107309/imgs/haloween/funkos/futurama/otto3_qs2obj.png"));
arregloJuguetes.push(new funko(12,"duffman","funko de la coleccion simpsons, hombre duff, barry.",1300, 0, "tv y serie","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110729/imgs/haloween/funkos/futurama/duffman3_u7e3i5.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456636/imgs/haloween/funkos/futurama/duffman0_ghsthp.png"));

//figura
arregloJuguetes.push(new funko(13,"thresh","figura de accion articulada de la coleccion league of legends, campeones league of legends",1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102344/imgs/haloween/funkos/league/tresh1_lmbstr.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102367/imgs/haloween/funkos/league/tresh2_sqcvu7.png" ));
arregloJuguetes.push(new funko(14,"yasuo","figura de accion articulada de la coleccion league of legends, campeones league of legends",1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102334/imgs/haloween/funkos/league/yasuo1_wwewgv.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/league/yasuo2_ko8dma.png" ));
arregloJuguetes.push(new funko(15,"zed","figura de accion articulada de la coleccion league of legends, campeones league of legends",1500, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102322/imgs/haloween/funkos/league/zed1_tnzdjt.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102362/imgs/haloween/funkos/league/zed2_sbz4ly.png"));
arregloJuguetes.push(new funko(16,"ashe","figura de accion articulada de la coleccion league of legends, campeones league of legends",1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102339/imgs/haloween/funkos/league/ashe1_muh6cy.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102357/imgs/haloween/funkos/league/ashe2_alshkk.png"));
arregloJuguetes.push(new funko(17,"wukong","figura de accion articulada de la coleccion league of legends, campeones league of legends",1400, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102290/imgs/haloween/funkos/league/wukong1_wq0zmd.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102351/imgs/haloween/funkos/league/wukong2_gaknnf.png"));
arregloJuguetes.push(new funko(18,"darius","figura de accion articulada de la coleccion league of legends, campeones league of legends",1500, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102413/imgs/haloween/funkos/league/darius1_f7unlq.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102329/imgs/haloween/funkos/league/darius2_btafqi.png"));

//Depurador, solo para ver donde voy entrando y donde no
const depura = (texto) =>{
    let dep = "\n---- Depurador => "
    console.log(`${dep} ${texto} ---- \n`)
}
//para tener la extructura a mano
console.log(document.body);

// let tarjetas_destacadas = document.getElementById("destacados");
// console.log(tarjetas_destacadas);

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

const par = (val) =>{ //la usare para las posiciones
    return (val % 2) == 0; 
}
const left_right = (i) =>{
    par(i) ? posicion = "left" : posicion = "right";
    return posicion;
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
            `<section class="tarjeta tarjeta${i+1} ${posicion}">
                <div class="producto_imagen">
                    <section class="cont_img">
                        <img class="imgPrimaria" src="${array[i].imagenB}" alt="${array[i].descripcion}">
                        <img class="imgSecundaria" src="${array[i].imagenA}" alt="${array[i].descripcion}">
                        <div class="botones_func">
                            <a href="#" title="rotar" class="rotar"> 
                                <ion-icon name="sync-outline"></ion-icon> 
                            </a>
                            <a href="#" class="zoom" title="agrandar"> 
                                <ion-icon name="search-outline"></ion-icon> 
                            </a>
                            <a href="#" class="añadirCar" title="gustar"> 
                                <ion-icon name="heart-outline"></ion-icon>
                            </a>
                        </div>
                    </section>
                </div>
                <div class="textos_tarjeta">
                    <h2><a href="#">${array[i].nombre}</a></h2>
                    <h3>$${array[i].precio}&nbsp;$</h3>
                </div>
            </section>\n`;
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


depura("figuras");
console.log(tBanner);


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
productoImg = document.querySelectorAll(".rotar");
contieneImg1 = document.querySelectorAll(".imgPrimaria");
contieneImg2 = document.querySelectorAll(".imgSecundaria");

console.log(productoImg);
console.log(tarjetaDestacada1);

for (let i = 0; i < tarjetaDestacada1.length; i++) {
    productoImg[i].addEventListener('click', e =>{
        e.preventDefault();
        tarjetaDestacada1[i].classList.toggle('rotar');
        console.log(tarjetaDestacada1) //DEPURA
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

