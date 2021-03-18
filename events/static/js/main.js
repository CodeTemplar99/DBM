console.log("Hello world")

const eventBox = document.querySelector('#event-box')
const countdownBox = document.querySelector('#countdown-box')

console.log(eventBox.textContent)
const eventDate = Date.parse(eventBox.textContent)
console.log(eventDate)

setInterval(() => {
  const now = new Date().getTime()
  // console.log(now)

  const diff = eventDate - now
  // console.log(diff)

  const d = Math.floor(eventDate / (1000 * 60 * 60 * 24) - (now / (1000 * 60 * 60  * 24)))
  console.log(d)
  
}, 2000);