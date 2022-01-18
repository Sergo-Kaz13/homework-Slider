new Swiper('.swiper-s1', {
  // Optional parameters
  slidesPerView: 3.7,
  spaceBetween: 30,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
  },
});
