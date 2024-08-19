import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


new Accordion('.about-info-list', {elementClass: 'info-item',
    triggerClass: 'info-icon-wrapper',
    panelClass: 'info-item-panel',
})

const swiper = new Swiper(".tec-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".arrow-btn-next",
  },
});


  
