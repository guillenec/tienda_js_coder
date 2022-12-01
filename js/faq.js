// genera un id aleatorio
function uniqueId(prefix) {
    var id = + new Date() + 'y' + Math.floor(Math.random() * 1000);
    return prefix ? prefix + id : id;
};

// arreglo de faqs tipo JSON
let seccionAyuda = [
    {
        'id': uniqueId('faq'),
        'icon': '<ion-icon name="shield-checkmark-outline"></ion-icon>',
        'titulo': 'pagos 100% seguros',
        'parrafo': 'envio de datos encriptados a travez de certificacion SSL.'
    },
    {
        'id': uniqueId('faq'),
        'icon': '<ion-icon name="wallet-outline"></ion-icon>',
        'titulo': 'metodos de pagos',
        'parrafo': 'aceptamos Mercadoo pago, PayPal, Tarjetas y Transferencias.'
    },
    {
        'id': uniqueId('faq'),
        'icon': '<ion-icon name="rocket-outline"></ion-icon>',
        'titulo': 'entregas rapidas',
        'parrafo': 'entregas en 24hs en la mayoria de los articulos.'
    },
    {
        'id': uniqueId('faq'),
        'icon': '<ion-icon name="send-outline"></ion-icon>',
        'titulo': 'envios gratis',
        'parrafo': 'gratis a partir de los $5000. o estando suscripto.'
    }
]

// // 1) transformamos objeto a JSON
// let faqsJSON = JSON.stringify(faqs)
// // 2) subo al local storage e arreglo convertido a JSON
// localStorage.setItem('faq_storage',faqsJSON);
const guardaStorage = (clave,valor) => {
    localStorage.setItem(clave,JSON.stringify(valor));
}

// localStorage.setItem('faq_storage',JSON.stringify(faqs)) //forma resumida
guardaStorage("faq_storage",seccionAyuda);

//lomismo, traemos y luego convertimos a objeto
const seccionAyuda_storage = JSON.parse(localStorage.getItem('faq_storage'));
console.log("---- FAQS ----")
console.log(seccionAyuda)
// console.log(faqs)

if (seccionAyuda_storage) {
    seccionAyuda = seccionAyuda_storage;
}

const renderAyuda = () => {
    const cajaAyuda = document.querySelector('.caja_f_b')

    seccionAyuda.forEach(element => {
        
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
            

    });

}
