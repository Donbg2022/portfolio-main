import {observer, hiddenElementsLeft, hiddenElementsRight} from './modules/Animations.js'
import {toggleMenuOpen, toggleMenuRemove, responsiveMenuBtn, navBarLinks} from './modules/MenuButton.js'
import {typeString, typewriterEl, intervalId} from './modules/typewriter.js'

//using intersection observer to trigger animations
hiddenElementsLeft.forEach((el) => observer.observe(el))
hiddenElementsRight.forEach((el) => observer.observe(el))


//responsive nav menu event listeners 
//functions located in MenuButton module
responsiveMenuBtn.addEventListener('click', toggleMenuOpen)
navBarLinks.addEventListener('click', toggleMenuRemove)


const video = document.querySelectorAll('video')

const vidPlaying = () => {
  let fired = 0
  for (let i = 0; i < video.length; i++) {
    if (video[i].paused && fired < 4){
      video[i].play()
      fired++
  }else {
    console.log('playing')
  }
  }
  
}
window.addEventListener('scroll', () => vidPlaying())
