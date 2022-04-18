// let menuBtn = document.querySelector('.menu-btn');
// let menu__body = document.querySelector('.menu__body');
//
// menuBtn.addEventListener('click', function() {
//   menuBtn.classList.toggle('active');
//   menu__body.classList.toggle('active');
// })

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("nonscroll")
  renderPopup();
}
function renderPopup() {
  popup.appendChild(menu);
}
