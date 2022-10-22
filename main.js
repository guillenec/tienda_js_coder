//Declaracion de variables 
const funko1=500;
const funko2=550;
const funko3=800;
const funko4=900;
const funko5=700;
const funko6=600;
const iva=0.16; 
const descuento = 0.10;
let sumaPrecioTotal = 0;
let sale=0

//las 2 siguientes funciones son solo para cumplir con las consignas y usar un switch

//retorna un msj personalizado de acuerdo a la eleccion
const juguete_nombre = (funco) =>{
    switch (funco){
        case 1:
            return "juguete kaoanashi";
            break;
        case 2:
            return "juguete kaoanashi duo";
            break;
        case 3:
            return "juguete clafueguito";
            break;
        default:
            return 444;
            break;
    }
}

//retorna el precio con descuento del producto
const juguete_precio = (funco) =>{
    switch (funco){
        case 1:
            return funko1 - (funko1 * descuento) ;
            break;
        case 2:
            return funko2 - (funko2 * descuento);
            break;
        case 3:
            return funko3 - (funko3 * descuento) ;
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
    ? (alert("bienvenido!!!"), (sale=4000)) : (alert("adios!!!"), (sale=500));
    return sale;
}

//funcion flecha para el menu
const eleccion = () => {
    return ("1- kaonash : "+funko1+"\n2 - kaonashi duo : "+funko2+"\n3- calafuego : "+funko3+"\n4- sombrero: "+funko3+"\ncual comprara: ");
}          

//permite usar todas las funcioes antes creadas, simulando un carrito basico de compra iterando a travez del prompt y mostrando las salidas por consola.
function compra_general() {
    let entrarMenu=bienvenido();
    console.log(entrarMenu);  //viendo que todo vaya bien
    if (entrarMenu == 4000){
        if (confirm("si desea continuar debe abrir la consola.")) {

            while (confirm("ver menu?")) {
                let prod = Number(prompt(eleccion()));
        
                if (confirm("confirma la compra?")) {
                    console.log("gracias por comprar "+juguete_nombre(prod))+" !!!"; 
                    sumaPrecioTotal+=juguete_precio(prod);
    
                    if (confirm("seguir comprando???")) {
                        continue;
                    }else{
                        break;
                    }
                    
                } else {
                    console.log("rata inmunda");
                    break
                }
        
            }
            console.log("precio total carrito : "+iva_total(sumaPrecioTotal));
        } else{
            console.log("Chau !!! podes seguir viendo la pagina.");
        }
    } else{
        console.log("ERROR "+404)
    }


}

/* NOTA: siento que estoy usando muchas veces el if, cual seria la forma correcta de reducir el codigo, probe con encadenamiento opcional, pero nose si es correcto su uso.
*/

// +++ TESTEAMOS  +++
//lamamos a la funcion bienvenido
compra_general();