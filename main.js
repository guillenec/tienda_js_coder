const funko1=500;
const funko2=600;
const funko3=900;
const funko4=1000;
const funko5=700;
const iva=0.16;

function bienvenido() {
    let ingresar = prompt("deseas ver mi web ??? si / no").toLowerCase();
    (ingresar === "si" && (ingresar != "" || ingresar != null))?
        alert("bienvenido") : (alert("adios") && console.log("ERROR"))
}

bienvenido();

if (confirm("si desea continuar debe abrir la consola.")) {

    while (confirm("ver menu?") == true) {
        let prod = prompt("1- kaonash : "+funko1+"\n2 - kaonashi duo : "+funko2+"\n3- calafuego : "+funko3+"\n4) gorrito: "+funko3+"\ncual comprara: ");

    
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




const eleccion = () => {
    console.log("cual de los funcos te gusto: [1..6]: ");
}

function resta(a, b) {
    return a - b;
}

eleccion();