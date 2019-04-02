let frame = 0

function rotate () {
  if (frame === 119) {
    frame = 0
  } else {
    frame++
  }

  document.querySelectorAll('.rotate').forEach(
    elem => elem.setAttribute('style', `transform: rotate(${frame * 3}deg)`)
  )

  window.requestAnimationFrame(rotate)
}

window.requestAnimationFrame(rotate)
