// DUDAS: debo declarar las variables que usio en el constructor, al comienzo del archivo ??? por las dudas lo hago con let... pero esto me genera dudas ya que sin declararlas al comienzom todo anda bien

//Declaracion de variables 
//const funko1 = 500;
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

//constructor
function funko(id, name, price, brand, genero, tipo, busca, discount){
    //variables o propiedades publicas del objeto, se ven o acceden fuera del documento 
    this.id = id;
    this.nombre = name;
    this.precio = price;
    this.marca = brand;
    this.genero = genero;
    this.tipo = tipo;
    this.busca = busca;
    this.descuento = discount;

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
const menuPrincipal = () => {
    return valor = Number(prompt(
        "++ ------ Menu Principal ------++\n"+
        "|| 1) ver todos los funkos      \n"+
        "|| 2) buscar una coincidencia   \n"+
        "|| 3) comprar un producto       \n"+
        "|| 4) ver carrito               \n"+
        "|| 5) eliminar product carrito  \n"+
        "|| 6) precio total              \n"+
        "|| 0) salir                     \n"+
        "++ ---------- Fin Menu --------++\n"
    ));
}


//primer instancia de la clase funko
const funko1 = new funko (1,"michael myers",2000,"pop","movies","funko","halloween", 10)
//Instancias de la clase funko
const funko2 = new funko (2,"chucky",  1550, "pop", "movies","funko","halloween", 10 )
const funko3 = new funko (3,"sam", 1200, "pop","movies","funko","halloween", 10 )
const funko4 = new funko (4,"yamcha y puar", 1530, "pop", "animation","funko","dragon ball", 10 )
const funko5 = new funko (5,"homer muumuu",  1021,  "pop", "television","funko","simpsons", 0 )
const funko6 = new funko (6,"neo", 1010, "pop", "movies","funko","ciencia ficcion", 0 )

// //ARREGLO DE OBJETOS
const arregloJuguetes = [];
arregloJuguetes.push(funko1,funko2,funko3,funko4,funko5,funko6);


// lo anterior puedo simplificarlo haciendo 
arregloJuguetes.push(new funko(7,"pennywise",1220,"pop","movies","funko","terror",0 ));
arregloJuguetes.push(new funko(8,"t-800",1150,"pop","movies","funko","ciencia ficcion",0 ));
arregloJuguetes.push(new funko(9,"charizard",1200,"pop","games","funko","pokemon",0 ));
arregloJuguetes.push(new funko(10,"daemon targaryen",1500,"pop","serie","funko",0 ));

arregloJuguetes.push(new funko(11,"thresh",1550,"spin master","games","figura","league of legends",0 ));
arregloJuguetes.push(new funko(12,"yasuo",1550,"spin master","games","figura","league of legends",0 ));
arregloJuguetes.push(new funko(13,"zed",1500,"spin master","games","figura","league of legends",0 ));
arregloJuguetes.push(new funko(14,"ashe",1550,"spin master","games","figura","league of legends",0 ));
arregloJuguetes.push(new funko(15,"wukong",1400,"spin master","games","figura","league of legends",0 ));
arregloJuguetes.push(new funko(16,"darius",1500,"spin master","games","figura","league of legends",0 ));

console.log(arregloJuguetes);
// funcion de bienvenida, retorna un codigo de error 
function bienvenido() {
    let ingresar = prompt("deseas ver mi web? si / no").toLowerCase();
    (ingresar === "si" && (ingresar != "" && ingresar != null))
        ? (alert("bienvenido!!!"), (sale = true)) : (alert("adios!!!"), (sale = false));
    return sale;
}

let textoMenu = "";
//funcion flecha permite mostrar por consola el menu

const menu = (texto) => {
    let i = 0;
    console.log(texto+"\n");
    for (const iterador of arregloJuguetes) {
        i++;
        console.log(i+" => "+iterador.nombre+" $"+iterador.precio+", descuento "+iterador.descuento+"\n");
    }
}

//funcion que busca un tipo especifico de dato
// for (const iterator of arregloJuguetes) {
//     console.log(iterator);
// }


//some me devolvera true o false si encuentra una referencia, asi que me sirve para hacer un filtro previo:
const verifica = (arreglo, valorBuscar) => {
    return(arreglo.some((n) => n.nombre == valorBuscar || n.genero == valorBuscar || n.tipo == valorBuscar || n.busca == valorBuscar ));
}

let resultado;
const buscaCoincidencia = (fun,arr) =>{
    let busca_object = prompt("buscador:");
    if (fun(arr, busca_object)) {
        //filter igual que filter pero retorna un nuevo array con los elementos que cumplan la condicion. sino array vacionn "" 
        return (resultado = arr.filter((m) => m.nombre == busca_object || m.genero == busca_object || m.tipo == busca_object || m.busca == busca_object ))
        
    } else{
        console.log("error");
    }
}

// console.log(resultado);
// console.log("--------- --------");
// console.log(resultado[1]);1

// const comprados = resultado.map((element) => element.nombre);
// console.log(comprados);


let opcion = 7;
while (opcion != 0) {
    opcion = menuPrincipal();
    switch (opcion) {
        case 1:
            console.log("eligio "+opcion);
            let val= "\n---- todos los productoos ---- ";
            menu(val);
            break;
        case 2:
            console.log("eligio "+opcion);
            const filtrados = buscaCoincidencia(verifica,arregloJuguetes);
            console.log(filtrados);
            for (const iterator of filtrados) {
                console.log(`nombre ${iterator.nombre}  precio ${iterator.precio}`);
            }
            break;
        case 3:
            console.log("eligio "+opcion);
            break;
        case 4:
            console.log("eligio "+opcion);
            break;
        case 5:
            console.log("eligio "+opcion);
            break; 
        case 6:
            console.log("eligio "+opcion);
            break;
        case 0:
            console.log("saliendo del menu");
            break;
        default:
            console.log("valor ingresado es incorrecto. seleccione opcion entre 0 y 6.")
            break;
    }
}
//find me permite retornar el 1° elemento del array que cumpla con la condicion, si no hay coincidencia undefined
// objeto = arregloJuguetes.find((el) => el.id === prod)
// console.log(objeto);

// console.log(menu())
// permite usar todas las funcioes antes creadas, simulando un carrito basico de compra iterando a travez del prompt y mostrando las salidas por consola.

// function compra_general() {
//     let entrarMenu = bienvenido();
//     console.log(entrarMenu);  //viendo que todo vaya bien
//     if (entrarMenu == true) {
//         if (confirm("si desea continuar debe abrir la consola.")) {

//             //bucle while, no crei necesario el uso de otro bucle mas  
//             do{
//                 prod = Number(prompt(menu()));
            
//                 if (prod.id <= 9 && prod.id > 0) {
//                     if (confirm("confirma la compra?")) {
                         //find me permite retornar el 1° elemento del array que cumpla con la condicion, si no hay coincidencia undefined
//                         objeto = arregloJuguetes.find((el) => el.id === prod)
//                         console.log(objeto);
//                         //console.log("precio de " + juguete_nombre(prod) + " :" + " $" + juguete_precio(prod));
//                         console.log("\n-------------\nProducto: " + objeto.id, objeto.nombre + "\nPrecio base: $" + objeto.precio + "\nMeno Descuento %" + objeto.descuento + ": $" + objeto.precioConDescuento() + "\n+IVA %14: " + objeto.precioTotalMasIVA());
//                         sumaSinIva += objeto.precioConDescuento();
//                         sumadorTotal += objeto.precioTotalMasIVA();

//                         if (confirm("seguir comprando???")) {
//                             continue;
//                         } else {
//                             break;
//                         }
//                     } else {
//                         console.log("rata inmunda");
//                         break
//                     }
//                 } else {
//                     alert("ingrese un valor numerico entre 1 / 9.");
//                     continue;
//                 }
//             }while(confirm("ver menu?"));

//             console.log("\n++-------------------------------++\n");
//             console.log("Carrito sin iva es de: $" + sumaSinIva);
//             console.log("Carrito + iva: " + sumadorTotal);
//         } else {
//             console.log("Chau !!! podes seguir viendo la pagina.");
//         }
//     } else {
//         console.log("ERROR " + 404)
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

// // funcion de orden superior 
// function obtenerRegalo(func1,func2) {
//     let a = confirm("desea probar su suerte:")
//     let objeto=arregloJuguetes.find((el) =>  el.id === func1());

//     if (a) {
//         (func2() == true) 
//         ?  console.log("¡¡¡Ganaste !!! \nfunko: ",objeto.nombre,", marca: ",objeto.marca)
//         : console.log("¡¡¡ Mala suerte, no ganaste !!!")
        
//     }else{
//         console.log("chau !!!");
//     }
// }

/* NOTA: siento que estoy usando muchas veces el if, cual seria la forma correcta de reducir el codigo, probe con encadenamiento opcional, pero nose si es correcto su uso.
*/

// // +++ TESTEAMOS  +++
// //lamamos a la funcion bienvenido

// compra_general();

// console.log("\n \n"); 

// obtenerRegalo(regalo,suerte);