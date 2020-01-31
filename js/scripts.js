const button = document.querySelector('.header__icon-menu');
const contnr = document.querySelector('.header');
const body = document.querySelector('.body-main');

const close = document.querySelector('.header__icon-close');


button.addEventListener('click', function() {
  button.style.display = 'block';
  contnr.style.backgroundColor = 'red';
  body.style.overflow = 'hidden';
})

// close.addEventListener('click', function() {
//   button.style.display = 'block';
//   close.style.display = 'none';
// })