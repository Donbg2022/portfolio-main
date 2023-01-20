//typewriter affect

const typewriter = document.querySelector('.homepage-text h1');
const typeString = '<Developer />'

let count = 0

// setinterval to add letter to html until count === length of string
const intervalId = setInterval(function() {
  typewriter.innerHTML += typeString[count]
  count++

  if(count === typeString.length){
  clearInterval(intervalId)
}

}, 100)

export {typeString, typewriter, intervalId}