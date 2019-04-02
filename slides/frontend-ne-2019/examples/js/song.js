var count = 99

function addVerse () {
  printVerse(count)
  count = count - 1
}

function printVerse (count) {
  const elem = document.createElement('div')
  const text = document.createTextNode(
        `${count} bottles of beer on the wall,
         ${count} bottles of beer,
         you take one down and pass it around,
         ${count - 1} bottles of beer on the wall`)
  elem.appendChild(text)
  elem.className = 'verse'

  document.querySelector('.present .verses').appendChild(elem)
}
