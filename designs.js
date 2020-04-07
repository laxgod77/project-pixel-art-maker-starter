// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const height = document.getElementById("inputHeight")
const width = document.getElementById("inputWidth")
const table = document.getElementById("pixelCanvas")

function makeGrid(e) {
  e.preventDefault()
  deleteGrid()
  height.setAttribute('value', height.value)
  width.setAttribute('value', width.value)
  for (let i = height.min; i <= height.value; i++) {
    const row = document.createElement("TR")
    table.appendChild(row)
    for (let j = width.min; j <= width.value; j++) {
      const column = document.createElement("TD")
    table.appendChild(column)
    }
  }
  
}

function deleteGrid() {
  while(table.firstChild) {
    table.removeChild(table.firstChild);
  }
}

const sizeSubmit = document.getElementById("sizePicker")
sizeSubmit.onsubmit = makeGrid
console.log(sizeSubmit)