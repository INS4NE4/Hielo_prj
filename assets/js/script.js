const navbarResp = document.querySelector('.toggler');
const navbarLinks = document.querySelector('.navigation');
navbarResp.addEventListener('click', navbarRespClick);

function navbarRespClick() {
  navbarResp.classList.toggle('toggler-open');
  navbarLinks.classList.toggle('active');
}
// Slider
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

