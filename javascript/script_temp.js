var swiper = new Swiper('.card-slider', {
    // direction: 'vertical',
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: false,
    mousewheel:{
        invert: false,
    },
    pagination: {
        el: '.card_slider_pagination',
        clickable: true,
    }
})