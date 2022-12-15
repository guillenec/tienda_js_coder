setTimeout(() => {

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slider',
    speed: 2000,
    initialSlider: 1,
    // If we need pagination
    autoplay: {
        delay:10000,
        pauseOnMouseEnter:true,
        disableOnInteraction:false,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

//Swipper

    const elementoSwipper = document.querySelector('.swiper-slide');
    if (elementoSwipper) {
        swiper.slideNext();
    }else{
        console.log('no anda el swipper')
}
}, 3000);

