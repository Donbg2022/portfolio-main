const responsiveMenuBtn = document.querySelector('.responsive-menu-btn')
const navBarLinks = document.querySelector('.nav-links')
responsiveMenuBtn.addEventListener('click', () => {
  responsiveMenuBtn.classList.toggle('open')
  navBarLinks.classList.toggle('open')
})

navBarLinks.addEventListener('click', () => {
  navBarLinks.classList.remove('open')
  responsiveMenuBtn.classList.remove('open')


})