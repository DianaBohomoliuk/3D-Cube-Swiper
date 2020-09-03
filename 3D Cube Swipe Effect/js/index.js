const mySwiper = new Swiper ('.swiper-container', {
effect: 'cube',
grabCursor: true,
cubeEffect: {
    shadow: false,
    slideShadows: false,
    shadowOffset: 20,
    shadowScale: 0.94,
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}
})
