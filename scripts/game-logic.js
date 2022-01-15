console.log('TEST: JavaScript file is working');

// const variables
const startButton = document.querySelector('.startBtn'); // GRAB BUTTON and store in variable
const restartButton = document.getElementById('restartBtn')
const gameScreenDisplay = document.querySelector('.display-game-section');
const landingPageScreen = document.querySelector('.landing-page-section');
const grid = document.querySelector('.grid');
const gridWrapper = document.querySelector('.grid-wrapper');
const numberOfCells = 24;

// CREATE GRID
function createGrid() {
  for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if (Math.random() > 0.5) {
      cell.classList.add('champagneBottle');
    }
    grid.append(cell);
  }
  addCharacter();
}

createGrid();

// Function that adds the class containing the image of the Dale Character to the first cell on the grid
function addCharacter() {
  let characterStartingPosition = document.querySelector('.cell');
  characterStartingPosition.classList.add('characterDale');
}

// PLAYER CONTROLLER
let playerY = 0;
let playerScore = 0;
var miniGameSection = document.querySelector('.mini-game-section');

const handleKeydown = (event) => {
  const playerDiv = document.querySelector('.cell.characterDale');
  // LEFT AND RIGHT
  if (event.code === 'ArrowRight') {
    // move player right but stop if reach the border
    playerDiv.nextElementSibling.classList.add('characterDale');
    playerDiv.classList.remove('characterDale');
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (event.code === 'ArrowLeft') {
    // move player left but stop if reach the border
    playerDiv.previousElementSibling.classList.add('characterDale');
    playerDiv.classList.remove('characterDale');
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (event.code === 'ArrowDown') {
    // move player down but stop if reach the border
    playerDiv.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('characterDale');
    playerDiv.classList.remove('characterDale');
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (event.code === 'ArrowUp' && playerY >= 0) {
    // move player up but stop if reach the border
    playerDiv.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('characterDale');
    playerDiv.classList.remove('characterDale');
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (playerScore === 5) {
    miniGameOne();
  }
};

document.addEventListener('keydown', handleKeydown);

// COUNTDOWN TIMER LOGIC

const countDownClock = document.querySelector('#countDownTimer');
let startTime = 60;

function countDownTimer() {
  setInterval(function () {
    if (startTime === 0) {
      clearInterval(setInterval);
      countDownClock.textContent = 'You Lost!';
    } else {
      countDownClock.textContent = startTime;
      startTime -= 1;
    }

  }, 1000);
}

// START GAME LOGIC

const startGame = () => {
  gameScreenDisplay.classList.remove('hide'); // removes the class that hides the game screen on DOM load
  landingPageScreen.classList.add('hide'); // adds the class that hides the landing page screen
  countDownTimer();
  console.log('TEST: The Game successfully started');
};

// restarts the game if the player wants to - this will restart the whole game when clicked
function restartGame() {
  window.location.reload();
}

// Eventlisteners
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

// MINIGAME LOGIC

const numOne = Number(document.getElementById('numOne').textContent);
const numTwo = Number(document.getElementById('numTwo').textContent);

function miniGameOne() {

  if (playerScore === 5) {
    miniGameSection.classList.remove('hide');
    gridWrapper.classList.add('hide');
  }


}