let menuBtn = document.querySelector('.menu-btn');
let menu__body = document.querySelector('.menu__body');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu__body.classList.toggle('active');
})
