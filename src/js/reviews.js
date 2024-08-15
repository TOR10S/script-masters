import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const domElements = {
  reviewsSection: document.querySelector('.reviews-section'),
  cardsUl: document.querySelector('.reviews-cards'),
  leftArrow: document.querySelector('.left-arrow'),
  rightArrow: document.querySelector('.right-arrow'),
};
const { cardsUl, leftArrow, rightArrow, reviewsSection } = domElements;

export async function downloadCommentsFromServer() {
  cardsUl.innerHTML = '';
  leftArrow.setAttribute('disabled', '');

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
          return `<li class="reviews-cards-li"><svg class="icon" xmlns="http://www.w3.org/2000/svg">
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
  } finally {
  }
}
