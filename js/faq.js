
// // 1) transformamos objeto a JSON
// // 2) subo al local storage e arreglo convertido a JSON
// const guardaStorage = (clave,valor) => {
//     localStorage.setItem(clave,JSON.stringify(valor));
// }

// // localStorage.setItem('faq_storage',JSON.stringify(faqs)) //forma resumida
// guardaStorage("faq_storage",seccionAyuda);

// //lomismo, traemos y luego convertimos a objeto
// const seccionAyuda_storage = JSON.parse(localStorage.getItem('faq_storage'));
// console.log("---- FAQS ----")
// console.log(seccionAyuda)
// // console.log(faqs)

// if (seccionAyuda_storage) {
//     seccionAyuda = seccionAyuda_storage;
// }

// //generta la estructura completa en el 
// const renderAyuda = () => {
//     const cajaAyuda = document.querySelector('.caja_f_b')

//     seccionAyuda.forEach(element => {
        
//         const section = document.createElement('section');
//         section.className = "cont_faq";
//         section.innerHTML = `\n 
//             <div class="icon">
//                 <a href="">
//                     ${element.icon}
//                 </a>
//             </div>
//             <div class="textos">
//                 <h2><a href="">${element.titulo}</a></h2>
//                 <p>${element.parrafo}</p>
//             </div>
//         \n`;

//         cajaAyuda.append(section);
//     });

// }

// renderAyuda(); 

//Uso de promesas para traer los datos desdeun JSON Externo
const pedirTarjetas = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // solo para simular el tiempo de carga
            resolve(tarjetasFAQ)
        }, 1000);
    })
}
let tarjetasAyuda = [];
const cajaAyuda = document.querySelector('.caja_f_b')

const mostrarTarjetas = (array) => {

    array.forEach(element => {

        const section = document.createElement('section');
        section.className = "cont_faq";
        section.innerHTML = `\n 
                    <div class="icon">
                        <a href="">
                            ${element.icon}
                        </a>
                    </div>
                    <div class="textos">
                        <h2><a href="">${element.titulo}</a></h2>
                        <p>${element.parrafo}</p>
                    </div>
                \n`;

        cajaAyuda.append(section);
    });
}

pedirTarjetas()
    .then((res) => {
        tarjetasAyuda = res;
        mostrarTarjetas(tarjetasAyuda);
    })