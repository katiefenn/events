function generateString () {
  let string = ''

  for (var index = 0; index < 1000000; index++) {
    string += 'a'
  }

  return string
}
