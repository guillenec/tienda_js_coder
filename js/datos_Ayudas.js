function uniqueId(prefix) {
    var id = + new Date() + 'y' + Math.floor(Math.random() * 1000);
    return prefix ? prefix + id : id;
};

// arreglo de faqs tipo JSON
const tarjetasFAQ = [
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



