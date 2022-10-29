// DUDAS: debo declarar las variables que usio en el constructor, al comienzo del archivo ??? por las dudas lo hago con let... pero esto me genera dudas ya que sin declararlas al comienzom todo anda bien

//Declaracion de variables 
//const funko1 = 500;
let id = 0;
let nombre = "";
let precio = "";
let material = "";
let marca = "";
let descuento = 0;

let sumadorTotal = 0;
let sumaSinIva = 0;

//constructor
function funko(id, name, price, material, brand, discount){
    //variables o propiedades publicas del objeto, se ven o acceden fuera del documento 
    this.id = id;
    this.nombre = name;
    this.precio = price;
    this.material = material;
    this.marca = brand;
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

//primer instancia de la clase funko
const funko1 = new funko (0, "kaoanashi",  500,  "plastco blando", "toys", 10 )
//Instancias de la clase funko
const funko2 = new funko (1,"kaoanashi duo",  550, "plastco blando",  "lego", 10 )
const funko3 = new funko (2,"clafueguito", 800, "plastco blando", "bandai", 10 )
const funko4 = new funko (3,"huesito", 530, "plastco blando", "hasbro", 10 )
const funko5 = new funko (4,"caramelo",  521,  "plastco blando", "toys", 0 )
const funko6 = new funko (5,"espanta suegra", 710, "plastco blando", "toys", 0 )
const funko7 = new funko (6,"chupetin", 600,  "plastco blando", "matel", 0 )
const funko8 = new funko (7,"calabaza",  560, "plastco blando", "hasbro", 0 )
const funko9 = new funko (8,"fantasma", 760, "plastco blando", "bandai", 0 )


// //ARREGLO DE OBJETOS
const arregloJuguetes = [];
arregloJuguetes.push(funko1,funko2,funko3,funko4,funko5,funko6,funko7,funko8,funko9);


// funcion de bienvenida, retorna un codigo de error 
function bienvenido() {
    let ingresar = prompt("deseas ver mi web? si / no").toLowerCase();
    (ingresar === "si" && (ingresar != "" && ingresar != null))
        ? (alert("bienvenido!!!"), (sale = true)) : (alert("adios!!!"), (sale = false));
    return sale;
}

let textoMenu = "";
//funcion flecha para el menu
const menu = () => {
    let i = 0;
    for (const iterador of arregloJuguetes) {
        i++;
        textoMenu += ( i+" => "+iterador.nombre+" $"+iterador.precio+", descuento "+iterador.descuento+"\n");
    }
    return (textoMenu + "Cual comprara: ");
}

// console.log(menu())
// permite usar todas las funcioes antes creadas, simulando un carrito basico de compra iterando a travez del prompt y mostrando las salidas por consola.

function compra_general() {
    let entrarMenu = bienvenido();
    console.log(entrarMenu);  //viendo que todo vaya bien
    if (entrarMenu == true) {
        if (confirm("si desea continuar debe abrir la consola.")) {

            //bucle while, no crei necesario el uso de otro bucle mas  
            while (confirm("ver menu?")) {

                let prod = Number(prompt(menu()));
                if (prod <= 9 && prod >= 0) {
                    if (confirm("confirma la compra?")) {
                        objeto = arregloJuguetes.find((el) =>  el.id === prod)    
                        console.log(objeto);
                        //console.log("precio de " + juguete_nombre(prod) + " :" + " $" + juguete_precio(prod));
                        console.log("\n-------------\nProducto: "+objeto.id, objeto.nombre+"\nPrecio base: $"+objeto.precio +"\nMeno Descuento %"+objeto.descuento+": $"+objeto.precioConDescuento()+ "\n+IVA %14: "+objeto.precioTotalMasIVA());
                        sumaSinIva += objeto.precioConDescuento();
                        sumadorTotal += objeto.precioTotalMasIVA();

                        if (confirm("seguir comprando???")) {
                            continue;
                        } else {
                            break;
                        }
                    } else {
                        console.log("rata inmunda");
                        break
                    }
                } else {
                    alert("ingrese un valor numerico entre 1 / 9.");
                    continue;
                }
            }
            console.log("\n++-------------------------------++\n");
            console.log("Carrito sin iva es de: $" + sumaSinIva);
            console.log("Carrito + iva: " + sumadorTotal);
        } else {
            console.log("Chau !!! podes seguir viendo la pagina.");
        }
    } else {
        console.log("ERROR " + 404)
    }
}

//FUNCION PARA RECIBIR UN REGALO ALEATORIO
function regalo() { //genera un numero random
    let max = 1;
    let min = 8;
    return Math.round(Math.random() * (max - min) + min);
}
function suerte(){
    let max = 1;
    let min = 100;
    suerte1 = Math.round(Math.random() * (max - min) + min); 
    (suerte1 === 32 || suerte1 === 72 || suerte1 <= 30) ? ret=true : ret=false ;
    console.log(suerte1) 
    return ret;
}

function obtenerRegalo(func1,func2) {
    let a = confirm("desea probar su suerte:")
    let objeto=arregloJuguetes.find((el) =>  el.id === func1());

    if (a) {
        (func2() == true) 
        ?  console.log("¡¡¡Ganaste !!! \nfunko: ",objeto.nombre,", marca: ",objeto.marca)
        : console.log("¡¡¡ Mala suerte, no ganaste !!!")
        
    }else{
        console.log("chau !!!");
    }
}



/* NOTA: siento que estoy usando muchas veces el if, cual seria la forma correcta de reducir el codigo, probe con encadenamiento opcional, pero nose si es correcto su uso.
*/

// // +++ TESTEAMOS  +++
// //lamamos a la funcion bienvenido

compra_general();

console.log("\n \n"); 

obtenerRegalo(regalo,suerte);