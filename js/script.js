var itemThumbs = new Swiper('.item-thumbs', {
  direction: 'vertical',
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var itemRight = new Swiper('.item-right', {
  spaceBetween: 20,
  centeredSlides: true,
  touchRatio: 0.4,

  navigation: {
    nextEl: '.basket-main-slider--next',
    prevEl: '.basket-main-slider--next',
  },
  thumbs: {
    swiper: itemThumbs
  }
});

