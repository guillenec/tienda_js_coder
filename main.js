const funko1=500;
const funko2=600;
const funko3=900;
const funko4=1000;
const funko5=700;
const iva=0.16;

// funcion normal de bienvenida
function bienvenido() {
    let ingresar = prompt("deseas ver mi web ??? si / no").toLowerCase();
    (ingresar === "si" && (ingresar != "" || ingresar != null))?
        alert("bienvenido") : (alert("adios") && console.log("ERROR"))
}

//funcion flecha para el menu
const eleccion = () => {
    return ("1- kaonash : "+funko1+"\n2 - kaonashi duo : "+funko2+"\n3- calafuego : "+funko3+"\n4) gorrito: "+funko3+"\ncual comprara: ");
}

const iva_total = (total) => {
    total * iva + total;
}

// +++ TESTEAMOS  +++
//lamamos a la funcion bienvenido
bienvenido();

if (confirm("si desea continuar debe abrir la consola.")) {

    while (confirm("ver menu?") == true) {
        let prod = prompt(""+eleccion());
    
        if (confirm("confirma la compra?")) {
            console.log("gracias por comprar!!! ") 
            break;
        } else {
            console.log("rata inmunda");
            break
        }

    }
} else{
    console.log("CHAU");
}
