const countdownBox = document.querySelector('#countdown-box')
const eventBox = document.querySelector('#event-box')

const eventDate = Date.parse(eventBox.textContent)

const interval = setInterval(() => {
  const now = new Date().getTime()

  if (eventDate <= now)
  return clearInterval(interval) 
  const d = Math.floor(eventDate / (1000 * 60 * 60 * 24) - (now / (1000 * 60 * 60  * 24)))
  const h = Math.floor((eventDate / (1000 * 60 * 60) - (now / (1000 * 60 * 60 ))) % 24)
  const m = Math.floor((eventDate / (1000 * 60 ) - (now / (1000 * 60 ))) % 60)
  const s = Math.floor((eventDate / (1000) - (now / (1000))) % 1000)
  document.querySelector('#d-left-space').innerHTML= d < 0 ? 0 : d
  document.querySelector('#h-left-space').innerHTML= h < 0 ? 0 : h
  document.querySelector('#m-left-space').innerHTML = m < 0 ? 0 : m
  document.querySelector('#s-left-space').innerHTML = s < 0 ? 0 : s
  
}, 1000);

var i = 0;
var txt = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, rem?'; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('#home-text').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.onload(typeWriter())