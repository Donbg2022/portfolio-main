const responsiveMenuBtn = document.querySelector('.responsive-menu-btn')
const navBarLinks = document.querySelector('.nav-links')
responsiveMenuBtn.addEventListener('click', () => {
  responsiveMenuBtn.classList.toggle('open')
  navBarLinks.classList.toggle('open')
})