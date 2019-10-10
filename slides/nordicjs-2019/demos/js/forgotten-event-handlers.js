function createButton() {
  var string = ""
  button = document.createElement('button')
  button.innerText = "Create large string"
  button.type = "button"
  button.onclick = () => string += generateString()
  document.getElementById("e-h").appendChild(button)
}

createButton()
