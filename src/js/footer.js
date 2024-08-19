import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const emailInput = document.getElementById('email');
const commentsInput = document.querySelector('.comments');
const form = document.querySelector('.work-together__form');
const message = document.getElementById('emailSuccessMessage');

const charCount = document.getElementById('charCount');
const btn = document.querySelector('.work-together__button');


// modal
const overlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-btn');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');

emailInput.addEventListener('blur', validateEmail);


commentsInput.addEventListener('input', () => {
  const currentLength = commentsInput.value.length;

  if (window.matchMedia('(min-width: 768px)').matches) {
    charCount.style.display = 'block';
  }

  charCount.textContent = `${currentLength}`;

  validateEmail();
});


form.addEventListener('submit', (event) => {
  event.preventDefault();
  charCount.style.display = 'none';

  modal.classList.remove('is-hiden');
  overlay.classList.remove('is-hiden');

  axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

  axios.post('/requests', {
    email: emailInput.value.trim(),
    comment: commentsInput.value.trim()
  })
    .then(response => {
      modalTitle.textContent = response.data.title;
      modalText.textContent = response.data.message;
    })
    .catch((error) => {
      iziToast.show({
          message: error.response?.data?.message || error.message || 'An error occurred',
          backgroundColor: "#ef4040",
          position: "topRight",
          messageSize: 16,
          messageColor: '#fff',
          messageLineHeight: "150%",

          timeout: 4000
        });
    })
    .finally(() => {
      form.reset();
      charCount.textContent = '0';
      emailInput.classList.remove('error');
      emailInput.classList.remove('success');
      message.textContent = '';
      btn.disabled = true;
    })

})



function validateEmail() {
  if (emailInput.checkValidity() && emailInput.value.trim() !== "") {
    emailInput.classList.remove('error');
    emailInput.classList.add('success');
    message.textContent = 'Success!';
    message.style.color = '#3cbc81';

    }  else  {
    emailInput.classList.remove('success');
    emailInput.classList.add('error');
    message.textContent = 'Invalid email, try again';
    message.style.color = '#e74a3b';
  }

    const isEmailValid = emailInput.checkValidity() && emailInput.value.trim() !== "";
    const isCommentFilled = commentsInput.value.trim() !== "";
    btn.disabled = !(isEmailValid && isCommentFilled);
}



/* modal */
btn.addEventListener('click', () => {
  modal.classList.remove('.is-hiden')
})

const closeModal = () => {
  modal.classList.add("is-hiden");
  overlay.classList.add("is-hiden");
};

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

