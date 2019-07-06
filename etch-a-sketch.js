//create divs of correct size
//starting out with grid 16x16. Then will make it dynamic with user input.

//full grid is 800px x 800px.
let cellWidth = 800/16 + 'px';
console.log(cellWidth);
let numCells = 16*16;

let gridContainer = document.getElementById("grid-container");
for (let i = 0; i < numCells; i++) {
  let div = document.createElement('div');
  div.id = i;
  gridContainer.appendChild(div);
}
gridContainer.style.display = 'grid';
gridContainer.style.height = '800px';
gridContainer.style.width = '800px';
gridContainer.style.gridTemplateColumns = `repeat(16, ${cellWidth})`

gridContainer.addEventListener('mouseover', function(event) {
  event.target.style.backgroundColor = 'black';
});
//append divs

//style as a grid