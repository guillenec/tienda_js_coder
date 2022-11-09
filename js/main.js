
depura("usamos console")

console.dir(document.body);

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
const funko1 = new funko (1,"michael myers","funko pop de la pelicula halloween",200, 10,"movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/halloween/hallowen_xsqe9a.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102400/imgs/haloween/funkos/halloween/hallowen2_xhsuts.png")
//Instancias de la clase funko
    // id | nombre | descripcion | precio | genero | tipo | imagen | descuento

const funko2 = new funko (2,"chucky","funko de la pelicula chuky el muñeco malvado",1550, 10, "movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102422/imgs/haloween/funkos/halloween/chuki123_mh4o3b.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102328/imgs/haloween/funkos/halloween/chuki1111_kiwwds.png")
const funko3 = new funko (3,"sam","funko descripcion genericas", 1200, 10,"movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102426/imgs/haloween/funkos/halloween/trick_r_treat_uv2gny.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102303/imgs/haloween/funkos/halloween/trick_r_treat2_pg1j8x.png")
const funko4 = new funko (4,"yamcha y puar","funko dragon ball z yamcha y puar coleccion.", 1530, 10, "anime","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102390/imgs/haloween/funkos/dbz/yamcha2_ghsnru.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102427/imgs/haloween/funkos/dbz/yamcha3_i8rjfz.png")
const funko5 = new funko (5,"homer muumuu","funko de la coleccion simpsons, homero gordo esa mancha no se quita", 1021, 0, "animacion","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667541324/imgs/haloween/funkos/futurama/homero_gordo1_wm964f.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107301/imgs/haloween/funkos/futurama/homero_gordo2_nuixxt.png")
const funko6 = new funko (6,"neo","funko coleccionable, pelicula matrix neo.", 1010, 0, "movies","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114965/imgs/haloween/funkos/pelis/neo2_emykux.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114967/imgs/haloween/funkos/pelis/neo_sxbrav.png")

// //ARREGLO DE OBJETOS
arregloJuguetes.push(funko1,funko2,funko3,funko4,funko5,funko6);


// lo anterior puedo simplificarlo haciendo 
arregloJuguetes.push(new funko(7,"pennywise","funko pop de lapelicula it funko generico",1220, 0, "movies","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102295/imgs/haloween/funkos/halloween/it2222_mc4bmq.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102347/imgs/haloween/funkos/halloween/it_hxwkid.png"));
arregloJuguetes.push(new funko(8,"t-8000","funko de la pelicula terminator, terminator abuelo t-8000",1150, 0, "movies","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/pelis/terminator1_uwdmzk.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102398/imgs/haloween/funkos/pelis/terminator3_cp80xa.png"));
arregloJuguetes.push(new funko(9,"charizard","funko coleccion pokemon, pokemon inicial. serie rojo.",1200, 0, "anime","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/pokemon/charizard_wodreh.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102410/imgs/haloween/funkos/pokemon/charizard2_mxjcgr.png"));
arregloJuguetes.push(new funko(10,"daemon targaryen","funko coleccion house of dragons, game of throne.",1500, 0, "serie","destacados",""));
arregloJuguetes.push(new funko(11,"otto","funko de la coleccion simpsons, otto escuchandomusica",1300, 0,  "animacion","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/otto_sixm1m.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107309/imgs/haloween/funkos/futurama/otto2_ii1k0u.png"));
arregloJuguetes.push(new funko(12,"duffman","funko de la coleccion simpsons, hombre duff, barry.",1300, 0, "animacion","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110729/imgs/haloween/funkos/futurama/duffman3_u7e3i5.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110730/imgs/haloween/funkos/futurama/duffman_j4rand.png"));

arregloJuguetes.push(new funko(13,"thresh","figura de accion articulada de la coleccion league of legends, campeones league of legends",1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102344/imgs/haloween/funkos/league/tresh1_lmbstr.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102367/imgs/haloween/funkos/league/tresh2_sqcvu7.png" ));
arregloJuguetes.push(new funko(14,"yasuo","figura de accion articulada de la coleccion league of legends, campeones league of legends",1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102334/imgs/haloween/funkos/league/yasuo1_wwewgv.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/league/yasuo2_ko8dma.png" ));
arregloJuguetes.push(new funko(15,"zed","figura de accion articulada de la coleccion league of legends, campeones league of legends",1500, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102322/imgs/haloween/funkos/league/zed1_tnzdjt.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102362/imgs/haloween/funkos/league/zed2_sbz4ly.png"));
arregloJuguetes.push(new funko(16,"ashe","figura de accion articulada de la coleccion league of legends, campeones league of legends",1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102339/imgs/haloween/funkos/league/ashe1_muh6cy.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102357/imgs/haloween/funkos/league/ashe2_alshkk.png"));
arregloJuguetes.push(new funko(17,"wukong","figura de accion articulada de la coleccion league of legends, campeones league of legends",1400, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102290/imgs/haloween/funkos/league/wukong1_wq0zmd.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102351/imgs/haloween/funkos/league/wukong2_gaknnf.png"));
arregloJuguetes.push(new funko(18,"darius","figura de accion articulada de la coleccion league of legends, campeones league of legends",1500, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102413/imgs/haloween/funkos/league/darius1_f7unlq.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102329/imgs/haloween/funkos/league/darius2_btafqi.png"));


console.log(arregloJuguetes);
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

