//responsive nav menu

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

//typewriter affect

const typewriter = document.querySelector('.homepage-text h1');
const typeString = '<Developer />'

let count = 0

//setinterval to add letter to html until count === length of string
// const intervalId = setInterval(function() {
//   typewriter.innerHTML += typeString[count]
//   count++

//   if(count === typeString.length){
//   clearInterval(intervalId)
// }

// }, 100)


//intersection observer for transitions

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show')
//     } 
//   })
// })

const hiddenElementsLeft = document.querySelectorAll('.hidden-left')
const hiddenElementsRight = document.querySelectorAll('.hidden-right')

// hiddenElementsLeft.forEach((el) => observer.observe(el))
// hiddenElementsRight.forEach((el) => observer.observe(el))

window.addEventListener('scroll', () => {
  hiddenElementsLeft[0].classList.add('show')
  
})