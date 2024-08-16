const menuBtn = document.querySelector('.header-menu-btn');
const closeBtn = document.querySelector('.header-close');
const modalWindow = document.querySelector('.modal-window');
const mobileLink = document.querySelector('.mobile-link');

if (menuBtn && closeBtn && modalWindow && mobileLink) {
  let isMenuOpen = false;

  function toggleModalWindowClass() {
    if (isMenuOpen) {
      modalWindow.classList.add('open');
    } else {
      modalWindow.classList.remove('open');
    }
  }

  function handleMenuBtnClick() {
    isMenuOpen = !isMenuOpen;
    toggleModalWindowClass();
  }

  function handleCloseMobileMenu() {
    isMenuOpen = false;
    toggleModalWindowClass();
  }

  menuBtn.addEventListener('click', handleMenuBtnClick);
  closeBtn.addEventListener('click', handleCloseMobileMenu);
  mobileLink.addEventListener('click', handleCloseMobileMenu);
}
