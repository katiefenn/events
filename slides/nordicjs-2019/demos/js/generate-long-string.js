function generateLongString () {
  let string = ''

  for (var index = 0; index < 10000000; index++) {
    string += 'a'
  }

  return string
}
