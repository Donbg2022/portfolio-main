
//responsive nav menu

const responsiveMenuBtn = document.querySelector('.responsive-menu-btn')
const navBarLinks = document.querySelector('.nav-links')
const nav = document.querySelector('nav')

const toggleMenuOpen = () => {
  responsiveMenuBtn.classList.toggle('open')
  navBarLinks.classList.toggle('open')
  nav.classList.toggle('links-bg-color')

  
}

const toggleMenuRemove = () => {
  navBarLinks.classList.remove('open')
  responsiveMenuBtn.classList.remove('open')
  nav.classList.toggle('links-bg-color')
  

}



export {toggleMenuOpen, toggleMenuRemove, responsiveMenuBtn, navBarLinks}