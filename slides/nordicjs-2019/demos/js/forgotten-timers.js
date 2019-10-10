function startTimer () {
  let string = ''
  timer = setInterval(() => {
    string += generateString()
  }, 1000)
}

function stopTimer () {
  clearInterval(timer)
}
