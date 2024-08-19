import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


new Accordion('.about-info-list', {elementClass: 'info-item',
    triggerClass: 'info-icon-wrapper',
    panelClass: 'info-item-panel',
})

const swiper = new Swiper('.tec-swiper-container', {
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  breakpointsBase: 'container',
  slidesPerView: 2,
  // slidesPerGroup: 2,
  // slidesPerGroupSkip: 1,
  // centeredSlides: false,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: '.about-button-next',
  },
  keyboard: {
        enabled: true,
      },
});


  
