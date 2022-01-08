console.log('TEST: JavaScript file is working');

//  VARIABLES


//GRID
const gridWrapper = document.querySelector('.grid-wrapper');
const grid = document.querySelector('.grid');

// GRID VARIABLES
const width = 15;
const cellCount = width * width;
const cells = [];

// CREATE GRID
function createGrid() {
  for (let i = 0; i < 100; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.innerText = [i];
    grid.append(gridDiv);
  }
}

createGrid();


// CHARACTER ELEMENTS


// PLAYER CONTROLLER
const playerOne = document.querySelector('.character');
let playerX = 0;
let playerY = 0;

const handleKeydown = (event) => {
  // LEFT AND RIGHT
  if (event.code === 'ArrowRight' && playerX <= 860) {
    // move player right
    playerOne.style.left = playerX + 'px';
    playerX += 15;
  }
  if (event.code === 'ArrowLeft' && playerX >= 5) {
    // move player left
    playerOne.style.left = playerX + 'px';
    playerX -= 20;
  }
  if (event.code === 'ArrowDown' && playerY <= 850) {
    playerOne.style.top = playerY + 'px';
    playerY += 20;
  }
  if (event.code === 'ArrowUp' && playerY >= 0) {
    playerOne.style.top = playerY + 'px';
    playerY -= 20;
  }
};

document.addEventListener('keydown', handleKeydown);

// START GAME LOGIC

const startButton = document.querySelector('.startBtn'); // GRAB BUTTON and store in variable

const startGame = () => {
  gridWrapper.classList.remove('hide'); // removes the class that hides the game screen on DOM load
};

startButton.addEventListener('click', startGame);





