console.log("Hello world")

const eventBox = document.querySelector('#event-box')
const countdownBox = document.querySelector('#countdown-box')

// console.log(eventBox.textContent)
const eventDate = Date.parse(eventBox.textContent)
// console.log(eventDate)

setInterval(() => {
  const now = new Date().getTime()
  // console.log(now)

  // const diff = eventDate - now
  // console.log(diff)

  const d = Math.floor(eventDate / (1000 * 60 * 60 * 24) - (now / (1000 * 60 * 60  * 24)))
  const h = Math.floor((eventDate / (1000 * 60 * 60) - (now / (1000 * 60 * 60 ))) % 24)
  const m = Math.floor((eventDate / (1000 * 60 ) - (now / (1000 * 60 ))) % 60)
  const s = Math.floor((eventDate / (1000) - (now / (1000))) % 1000)
  // console.log(d)
  // console.log(h)
  // console.log(m)
  // console.log(s)
  document.querySelector('#d-left-space').innerHTML= d
  document.querySelector('#h-left-space').innerHTML= h
  document.querySelector('#m-left-space').innerHTML= m
  document.querySelector('#s-left-space').innerHTML= s
  
}, 1000);
