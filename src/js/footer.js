// const { default: axios } = require("axios");
import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const emailInput = document.getElementById('email');
const commentsInput = document.querySelector('.comments');
const form = document.querySelector('.work-together__form');
const message = document.getElementById('emailSuccessMessage');

const charCount = document.getElementById('charCount');
const btn = document.querySelector('.work-together__button');


emailInput.addEventListener('blur', validateEmail);

commentsInput.addEventListener('input', () => {
  charCount.style.display = 'block';
    const currentLength = commentsInput.value.length;
    charCount.textContent = `${currentLength}`;
});


form.addEventListener('submit', (event) => {
  event.preventDefault();



  axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

  axios.post('/requests', {
    email: emailInput.value.trim(),
    comment: commentsInput.value.trim()
  })
    .then(response => {
    console.log(response.data);
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
    btn.disabled = false;
    }  else  {
      emailInput.classList.remove('success');
      emailInput.classList.add('error');
      message.textContent = 'Invalid email, try again';
      message.style.color = '#e74a3b';

    }
}


