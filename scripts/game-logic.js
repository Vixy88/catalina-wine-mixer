console.log('TEST: JavaScript file is working');

//GRID
const grid = document.querySelector('.grid');
const numberOfCells = 22;

// CREATE GRID
function createGrid() {
  for (let i = 0; i < numberOfCells; i++) {
    var gridDiv = document.createElement('div');
    gridDiv.classList.add('cell');
    grid.append(gridDiv);
    // CREATE CHAMPAGNE BOTTLES IN A RANDOM LOCATIONS
    const champagneBottle = document.createElement('div');
    champagneBottle.classList.add('champagneBottle');
    grid.append(champagneBottle);
    champagneBottle.style.top = Math.floor((Math.random() * 100) + 1) + 'px';
    champagneBottle.style.left = Math.floor((Math.random() * 100) + 1) + 'px';
  }
}

createGrid();

// PLAYER CONTROLLER
const playerOne = document.querySelector('.characterDale');
let playerScore = 0;
let playerX = 0;
let playerY = 0;

const handleKeydown = (event) => {
  // LEFT AND RIGHT
  if (event.code === 'ArrowRight' && playerX <= 840) {
    // move player right but stop if reach the border
    playerOne.style.left = playerX + 'px';
    playerX += 20;
  }
  if (event.code === 'ArrowLeft' && playerX >= 5) {
    // move player left but stop if reach the border
    playerOne.style.left = playerX + 'px';
    playerX -= 20;
  }
  if (event.code === 'ArrowDown' && playerY <= 500) {
    // move player down but stop if reach the border
    playerOne.style.top = playerY + 'px';
    playerY += 20;
  }
  if (event.code === 'ArrowUp' && playerY >= 0) {
    // move player up but stop if reach the border
    playerOne.style.top = playerY + 'px';
    playerY -= 20;
  }
};

document.addEventListener('keydown', handleKeydown);

// COUNTDOWN TIMER LOGIC

const countDownClock = document.querySelector('#countDownTimer');
let startTime = 5;

function countDownTimer() {
  setInterval(function () {
    if (startTime === 0) {
      clearInterval(setInterval);
      countDownClock.textContent = 'OH NO!!! You ruined the Catalina F***** Winemixer';
    } else {
      countDownClock.textContent = startTime;
      startTime -= 1;
    }

  }, 1000);
}

// START GAME LOGIC

const startButton = document.querySelector('.startBtn'); // GRAB BUTTON and store in variable
const gameScreenDisplay = document.querySelector('.display-game-section');
const landingPageScreen = document.querySelector('.landing-page-section');

const startGame = () => {
  gameScreenDisplay.classList.remove('hide'); // removes the class that hides the game screen on DOM load
  landingPageScreen.classList.add('hide'); // adds the class that hides the landing page screen
  countDownTimer();
  console.log('TEST: The Game successfully started');
};

startButton.addEventListener('click', startGame);