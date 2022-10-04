const board = document.querySelector('#board');
const SQUARE_NUMBER = 810;
const colors = ['#ed26cc', '#3d23e8', '#12de3efa', '#dade12fa', '#de9a12fa', '#127bdefa', '#78de12fa', '#de2a12fa'];


for(let i = 0; i < SQUARE_NUMBER; i++) {
const square = document.createElement('div');
square.classList.add('square');

square.addEventListener('mouseover', () => 
setColor(square));

square.addEventListener('mouseleave', () => 
removeColor(square));
board.append(square);
}

function setColor(element) {
   const color = getRandomColor();
   element.style.backgroundColor = color;
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
   element.style.backgroundColor = '#1d1d1d';
   element.style.boxShadow = `0 0 2px #000`;
}  

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index];
}