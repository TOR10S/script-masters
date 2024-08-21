import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false,  
  effect: 'flip',
  slidesPerView: 1,

  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },

  keyboard: {
    enabled: true,
  },
});