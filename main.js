/* +-- NOTA IMPORTANTE --+ */
/* Simulare un carrito de compra basico, se usare un solo bucle while en la fucion principal, ya que no creo que haga falta mas para esta entrega.

El programa principal preguntara si deseamos ingresar al menu de compra, si lo hacemos nos mostrarauna una lista de productos disponibles y los podremos elegir por su numero identificador. si se ingresa otro valor , nos avisara.
A su vez se iran sumando los productos comprados y se calcularan los descuentos previamente cargados automatiocamente. 
Estos se mostraran por consola con un console.log. ya que me resulta engorroso el uso excesivo de alerts.
Se calculata el precio total sin iva, +iva y tambien a medida que interactuemos se mostrara el nombre y precio del producto que estamos comprando.. 

Observacion: 
se que tengo un exceso de condicionales.
Los productos que en la pagina tienen un 10 % de descuento tambien los tienen dentro de la funcuion juguetes precios, po lo que si un valor es menor al esperado, posiblemente se le este aplicando un descuento del 10%.

*/

//Declaracion de variables 
const funko1 = 500;
const funko2 = 550;
const funko3 = 800;
const funko4 = 550;
const funko5 = 500;
const funko6 = 800;
const funko7 = 600;
const funko8 = 550;
const funko9 = 800;

const iva = 0.16;
const descuento = 0.10;
let sumaPrecioTotal = 0;
let sale = 0
let val;

//las 2 siguientes funciones son solo para cumplir con las consignas y usar un switch

//retorna un msj personalizado de acuerdo a la eleccion
const juguete_nombre = (funco) => {
    switch (funco) {
        case 1:
            return "juguete kaoanashi";
            break;
        case 2:
            return "juguete kaoanashi duo";
            break;
        case 3:
            return "juguete clafueguito";
            break;
        case 4:
            return "juguete huesito";
            break;
        case 5:
            return "juguete caramelo";
            break;
        case 6:
            return "juguete espanta suegras";
            break;
        case 7:
            return "juguete chupetin";
            break;
        case 8:
            return "juguete calabaza";
            break;
        case 9:
            return "juguete fantasma";
            break;
        default:
            return 444;
            break;
    }
}

//retorna el precio con descuento del producto
const juguete_precio = (funco) => {
    switch (funco) {
        case 1:
            return funko1 - (funko1 * descuento);
            break;
        case 2:
            return funko2 - (funko2 * descuento);
            break;
        case 3:
            return funko3 - (funko3 * descuento);
            break;
        case 4:
            return funko4;
            break;
        case 5:
            return funko5;
            break;
        case 6:
            return funko6;
            break;
        case 7:
            return funko4;
            break;
        case 8:
            return funko5;
            break;
        case 9:
            return funko6;
            break;
        default:
            return 444;
            break;
    }
}

//retorna precio real + iva.
const iva_total = (total) => {
    return (total * iva) + total;
}

// funcion de bienvenida, retorna un codigo de error 
function bienvenido() {
    let ingresar = prompt("deseas ver mi web? si / no").toLowerCase();
    (ingresar === "si" && (ingresar != "" && ingresar != null))
        ? (alert("bienvenido!!!"), (sale = 4000)) : (alert("adios!!!"), (sale = 500));
    return sale;
}

//funcion flecha para el menu
const menu = () => {
    return ("1- kaonash : " + funko1 + "\n2 - kaonashi duo : " + funko2 + "\n3- calafuego : " + funko3 + "\n4- huesito: " + funko3 + "\n5- caramelo: " + funko5 + "\n6- espanta suegras: " + funko6 + "\n7- chupetin: " + funko7 + "\n8- calabaza: " + funko8 + "\n9- fantasma: " + funko9 + "\nCual comprara: ");
}


//permite usar todas las funcioes antes creadas, simulando un carrito basico de compra iterando a travez del prompt y mostrando las salidas por consola.
function compra_general() {
    let entrarMenu = bienvenido();
    console.log(entrarMenu);  //viendo que todo vaya bien
    if (entrarMenu == 4000) {
        if (confirm("si desea continuar debe abrir la consola.")) {

            //bucle while, no crei necesario el uso de otro bucle mas  
            while (confirm("ver menu?")) {

                let prod = Number(prompt(menu()));
                if (prod <= 9 && prod >= 0) {
                    if (confirm("confirma la compra?")) {
                        sumaPrecioTotal += juguete_precio(prod);
                        console.log("precio de " + juguete_nombre(prod) + " :" + " $" + juguete_precio(prod));

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
            console.log("el precio sin iva es de: $" + sumaPrecioTotal);
            console.log("precio total carrito + iva: " + iva_total(sumaPrecioTotal));
        } else {
            console.log("Chau !!! podes seguir viendo la pagina.");
        }
    } else {
        console.log("ERROR " + 404)
    }

}
const max= 1;
const min = 8;
function regalo() {
    return Math.round(Math.random() * (max - min) + min);
}

console.log(regalo());

function obtenerRegalo() {
    val = regalo(); 
    for (i=0; i<=8 ;i++){
        if (i == val) {
            console.log("¡¡¡OBTUVISTE UN REGALO!!!");
            console.log(juguete_nombre(i));
            break;
        } 
    }
}

compra_general();
console.log("\n \n"); 
obtenerRegalo();

/* NOTA: siento que estoy usando muchas veces el if, cual seria la forma correcta de reducir el codigo, probe con encadenamiento opcional, pero nose si es correcto su uso.
*/

// +++ TESTEAMOS  +++
//lamamos a la funcion bienvenido
//compra_general();
