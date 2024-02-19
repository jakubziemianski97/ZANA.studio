const swiper = new Swiper('.mySwiper', {
	spaceBetween: 30,
	loop: true,
    keyboard: {
        enabled: true,
      },
	centeredSlides: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
