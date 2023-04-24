const swiper = new Swiper('.swiper', {
    // speed: 400,
    spaceBetween: 15,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
})
