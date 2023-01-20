
//responsive nav menu

const responsiveMenuBtn = document.querySelector('.responsive-menu-btn')
const navBarLinks = document.querySelector('.nav-links')

const toggleMenuOpen = () => {
  responsiveMenuBtn.classList.toggle('open')
  navBarLinks.classList.toggle('open')
}

const toggleMenuRemove = () => {
  navBarLinks.classList.remove('open')
  responsiveMenuBtn.classList.remove('open')
}

export {toggleMenuOpen, toggleMenuRemove, responsiveMenuBtn, navBarLinks}