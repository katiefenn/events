var count = 0
var interval

function startCounter () {
  count = 0

  interval = setInterval(incrementCounter, 1000)
}

function stopCounter () {
  clearInterval(interval)
}

function incrementCounter () {
  count++
  document.querySelectorAll('.present .counter').forEach(elem => elem.innerText = count)
}
