const countdownBox = document.querySelector('#countdown-box')
const eventBox = document.querySelector('#event-box')

const eventDate = Date.parse(eventBox.textContent)

setInterval(() => {
  const now = new Date().getTime()

  const d = Math.floor(eventDate / (1000 * 60 * 60 * 24) - (now / (1000 * 60 * 60  * 24)))
  const h = Math.floor((eventDate / (1000 * 60 * 60) - (now / (1000 * 60 * 60 ))) % 24)
  const m = Math.floor((eventDate / (1000 * 60 ) - (now / (1000 * 60 ))) % 60)
  const s = Math.floor((eventDate / (1000) - (now / (1000))) % 1000)
  document.querySelector('#d-left-space').innerHTML= d
  document.querySelector('#h-left-space').innerHTML= h
  document.querySelector('#m-left-space').innerHTML= m
  document.querySelector('#s-left-space').innerHTML= s
  
}, 1000);
