
const toggleBtn = document.querySelector('.nav1__toggleBtn');
const menu = document.querySelector('.nav1__menu');
const icons = document.querySelector('.nav1__icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
