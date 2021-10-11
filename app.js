
const btnMenu = document.querySelector('.iconMenu'),
      menu = document.querySelector('.menu');

function showMenu() {
  menu.classList.toggle('showMenu')
}

btnMenu.addEventListener('click', showMenu);