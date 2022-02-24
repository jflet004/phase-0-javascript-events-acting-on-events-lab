// Your code here
const dodger = document.getElementById('dodger'); // select dodger element


function moveDodgerLeft() { // function to move dodger left
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if(left > 0) { // make sure it doesnt go off grid
    dodger.style.backgroundColor = "#f70000"
    dodger.style.left = `${left - 10}px`;
  }
};

function moveDodgerRight() { // function to move dodger right
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
  
  if(left < 300) { // make sure it doesnt go off grid. Grid is 400px while dodger is 40px
    dodger.style.backgroundColor = "#ffffff"
    dodger.style.left = `${left + 10}px`;
  } 
};

document.addEventListener('keydown', (e) => { // event function checking which key was pressed and what to do with it
  if(e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});