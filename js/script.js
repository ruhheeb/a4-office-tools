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

// Paymethod Select
const selected = document.querySelector('.paymethod__selected');
const selectedCurrent = document.querySelector('.paymethod__selected-current');
const selectedIcon = document.querySelector('.paymethod__selected-icon');
const optionContainer = document.querySelector('.paymethod__option-container');
const optionList = document.querySelectorAll('.paymethod__option');

selected.addEventListener('click', () => {
  optionContainer.classList.toggle('paymethod__option-container--active');
});

optionList.forEach(o => {
  o.addEventListener('click', () => {
    selectedCurrent.innerHTML = o.querySelector('label').innerHTML;
    optionContainer.classList.remove('paymethod__option-container--active');
  });
});

// Delmethod Select
const delmethodSelected = document.querySelector('.delmethod-select');
const delmethodSelectedCurrent = document.querySelector('.delmethod__selected-current');
const delmethodSelectedIcon = document.querySelector('.delmethod__selected-icon');
const delmethodOptionContainer = document.querySelector('.delmethod__option-container');
const delmethodOptionLabel = document.querySelector('.delmethod__option-label');
const delmethodOptionList = document.querySelectorAll('.delmethod__option');

delmethodSelected.addEventListener('click', () => {
  delmethodOptionContainer.classList.toggle('delmethod__option-container--active');

});

delmethodOptionList.forEach(delOptn => {
  delOptn.addEventListener('click', () => {
    delmethodSelectedCurrent.innerHTML = delOptn.querySelector('label').innerHTML;
  });
});


// Post Office Select
const postSelected = document.querySelector('.post-office__selected');
const postSelectedCurrent = document.querySelector('.post-office__selected-current');
const postOptionContainer = document.querySelector('.post-office__option-container');
const postOptionLabel = document.querySelector('.post-office__option-label');
const postOptionList = document.querySelectorAll('.post-office__option');

postSelected.addEventListener('click', () => {
  postOptionContainer.classList.toggle('post-office__option-container--active');
});

postOptionList.forEach(postOpt => {
  postOpt.addEventListener('click', () => {
    postSelectedCurrent.innerHTML = postOpt.querySelector('label').innerHTML;
    postOptionContainer.classList.remove('post-office__option-container--active');
  });
});

// City Select
const citySelected = document.querySelector('.city__selected');
const citySelectedCurrent = document.querySelector('.city__selected-current');
const cityOptionContainer = document.querySelector('.city__option-container');
const cityOptionLabel = document.querySelector('.city__option-label');
const cityOptionList = document.querySelectorAll('.city__option');

citySelected.addEventListener('click', () => {
  cityOptionContainer.classList.toggle('city__option-container--active');
});

cityOptionList.forEach(cityOpt => {
  cityOpt.addEventListener('click', () => {
    citySelectedCurrent.innerHTML = cityOpt.querySelector('label').innerHTML;
    cityOptionContainer.classList.remove('city__option-container--active');
  });
});

