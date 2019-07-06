//create divs of correct size
//starting out with grid 16x16. Then will make it dynamic with user input.

//full grid is 800px x 800px.

let newGridButton = document.getElementById("new-grid");
newGridButton.addEventListener('click', function(event) {
  let gridContainer = document.getElementById("grid-container");

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  let squares = prompt('How many squares per side should the new grid be?');
  let cellWidth = 800/squares + 'px';
  console.log(cellWidth);
  let numCells = squares*squares;


  for (let i = 0; i < numCells; i++) {
    let div = document.createElement('div');
    div.id = i;
    gridContainer.appendChild(div);
  }
  gridContainer.style.display = 'grid';
  gridContainer.style.height = '800px';
  gridContainer.style.width = '800px';
  gridContainer.style.gridTemplateColumns = `repeat(${squares}, ${cellWidth})`

  gridContainer.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'black';
});



});


/*
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
*/
//append divs

//style as a grid