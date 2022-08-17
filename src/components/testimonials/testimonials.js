// eslint-disable-next-line no-new, no-undef
new Swiper('.testimonials__slider', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  pagination: {
    el: '.testimonials__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});
