









/* modal */
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.modal-overlay');

const closeModal = () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
};

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
