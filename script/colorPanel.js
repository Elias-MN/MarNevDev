const colorPanelElement = document.getElementById("colorPanel")

const DEFAULTROWS = window.innerWidth / 10;
const DEFAULTCOLUMNS = 10;

function generateGrid(maxRows, maxColumns) {
  for (column = 0; column < maxColumns; column++) {
    let columnElement = document.createElement("div");
    columnElement.classList.add("col");
    for (row = 0; row < maxRows; row++) {
      let boxElement = document.createElement("div");
      boxElement.classList.add("box");
      boxElement.addEventListener('mouseover', setColor);
      columnElement.appendChild(boxElement);
    }
    colorPanelElement.appendChild(columnElement);
  }
}



function getRandomColor() {

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  const colorHex = `#${rHex}${gHex}${bHex}`;

  return colorHex;
}

function setDefaultColor(event) {
  event.target.style.backgroundColor = "#3e3e3e";
}

function setColor(event) {
  event.target.style.backgroundColor = getRandomColor();
  setTimeout(() => {
    event.target.style.backgroundColor = "#3e3e3e";
  }, 500);
}

generateGrid(DEFAULTROWS, DEFAULTCOLUMNS);
