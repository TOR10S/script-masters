import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const accordion = new Accordion('.about-info-list', {elementClass: 'info-item',
    triggerClass: 'info-icon-wrapper',
    panelClass: 'info-item-panel',
})

accordion.open(0)

const nextBtn = document.querySelector('.about-button-next');

const swiperAbout = new Swiper('.tec-swiper-container', {
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: '.about-button-next',
  },
  keyboard: {
        enabled: true,
      },
});


  
