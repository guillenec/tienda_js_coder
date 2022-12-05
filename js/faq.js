//simulamos traer los datos desde una db

//Uso de promesas para traer los datos desdeun JSON Externo
//funcion asincrona, si tiene errores la rechaza y da un error , sino la resuelve
const getTarjetas = () => {
    return new Promise((resolve, reject) => {
        if (tarjetasFAQ.length === 0) {
            reject(new Error('cargando datos...'));
        }
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

const mostrarError = (msjError) =>{
    const section = document.createElement('section');
        section.className = "cont_faq_err";
        section.innerHTML = `\n 
                    <div class="msjError">
                        <p href="">
                            ${msjError}
                        </p>
                    </div>
                \n`;

        cajaAyuda.append(section);
}

getTarjetas()
    .then((response) => { //cuando se resuelva la promesa
        tarjetasAyuda = response;
        mostrarTarjetas(tarjetasAyuda);
    })
    .catch((err) => {
        mostrarError(err.message)
    }) //cuando tenga algun error 

