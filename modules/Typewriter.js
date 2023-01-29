//typewriterEl affect

const typewriterEl = document.querySelector('#name');
const typeString = 'DONOVANB-G'

let count = 0

// setinterval to add letter to html until count === length of string
const intervalId = setInterval(function() {
  typewriterEl.innerHTML += typeString[count]
  count++

  if(count === typeString.length){
  clearInterval(intervalId)
}

}, 100)

export {typeString, typewriterEl, intervalId}