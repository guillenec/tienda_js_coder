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


// Now you can use all slider methods like
swiper.slideNext();
