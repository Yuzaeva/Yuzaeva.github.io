const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('change', function() {
  if (navbarToggle.checked) {
    navbarMenu.classList.add('show');
  } else {
    navbarMenu.classList.remove('show');
  }
});
function openPopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('open');
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('open');
}