const arr = []

function addLargeStringToArray () {
  let str = ''
  console.timeStamp('Click!')
  for (var index = 0; index < 3000000; index ++) {
    str += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  arr.push(str)
}
