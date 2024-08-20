import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css';

const domElements = {
  reviewsSection: document.querySelector('.reviews-section'),
  cardsUl: document.querySelector('.reviews-cards'),
};
const { cardsUl, reviewsSection } = domElements;

export async function downloadCommentsFromServer() {
  cardsUl.innerHTML = '';

  try {
    const responseData = (
      await axios.get('https://portfolio-js.b.goit.study/api/reviews')
    ).data;

    if (responseData.length === 0) {
      reviewsSection.innerHTML =
        '<div class="not-found-div"><p class="not-found-message">No comments yet :(</p></div>';
    } else {
      const dataToHtml = responseData
        .map(comment => {
          return `<li class="swiper-slide reviews-cards-li"><svg class="icon" xmlns="http://www.w3.org/2000/svg">
          <image href="${comment.avatar_url}" width="48" height="48" />
        </svg><h4>${comment.author}</h4><p class="card-comment">${comment.review}</p></li>`;
        })
        .join('');
      cardsUl.insertAdjacentHTML('afterbegin', dataToHtml);
    }
  } catch (err) {
    reviewsSection.innerHTML =
      '<div class="not-found-div"><p class="not-found-message">Not Found! :(</p></div>';
    iziToast.error({
      title: 'Reviews error',
      message: `${err}`,
    });
  }
}

new Swiper('.swiper-reviews', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.right-arrow',
    prevEl: '.left-arrow',
  },
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 9,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 21,
    },
  },
});
