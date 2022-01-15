console.log('TEST: JavaScript file is working');

// const variables
const startButton = document.querySelector('.startBtn'); // GRAB BUTTON and store in variable
const restartButton = document.getElementById('restartBtn')
const gameScreenDisplay = document.querySelector('.display-game-section');
const landingPageScreen = document.querySelector('.landing-page-section');
const grid = document.querySelector('.grid');
const gridWrapper = document.querySelector('.grid-wrapper');
const numberOfCells = 209;
const cells = [];
const rowLength = 19;

// CREATE GRID
function createGrid() {
  for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if (Math.random() > 0.9) {
      cell.classList.add('champagneBottle');
    }
    grid.append(cell);
    cells.push(cell);
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
let playerCurrentPosition = 0;

const handleKeydown = (event) => {
  const playerDiv = document.querySelector('.cell.characterDale');


  if (event.code === 'ArrowRight' && playerCurrentPosition < 208) {
    cells[playerCurrentPosition].classList.remove('characterDale');
    playerCurrentPosition += 1;
    cells[playerCurrentPosition].classList.add('characterDale');
    playerDiv.scrollIntoView();
    console.log(`Player Index position: ${playerCurrentPosition}`);
    // CHAMPAGNE COLLECTION LOGIC
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (event.code === 'ArrowLeft' && playerCurrentPosition > 0) {
    // move player left but stop if reach the border
    cells[playerCurrentPosition].classList.remove('characterDale');
    playerCurrentPosition -= 1;
    cells[playerCurrentPosition].classList.add('characterDale');
    playerDiv.scrollIntoView();
    console.log(`Player Index position: ${playerCurrentPosition}`);
    // CHAMPAGNE COLLECTION LOGIC
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (event.code === 'ArrowDown' && playerCurrentPosition < 190) {
    // move player down but stop if reach the border
    cells[playerCurrentPosition].classList.remove('characterDale');
    playerCurrentPosition += rowLength;
    cells[playerCurrentPosition].classList.add('characterDale');
    playerDiv.scrollIntoView();
    console.log(`Player Index position: ${playerCurrentPosition}`);
    // CHAMPAGNE COLLECTION LOGIC
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (event.code === 'ArrowUp' && playerCurrentPosition > 18) {
    // move player up but stop if reach the border
    cells[playerCurrentPosition].classList.remove('characterDale');
    playerCurrentPosition -= rowLength;
    cells[playerCurrentPosition].classList.add('characterDale');
    playerDiv.scrollIntoView();
    console.log(`Player Index position: ${playerCurrentPosition}`);
    // CHAMPAGNE COLLECTION LOGIC
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (playerScore === 10) {
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
let submitButton = document.getElementById('submitBtn');
const miniGameSection = document.querySelector('.mini-game-section');

function miniGameOne() {

  if (playerScore === 5) {
    miniGameSection.classList.remove('hide');
    gridWrapper.classList.add('hide');
  }
}

submitButton.addEventListener('click', function () {
  let questionOneInput = Number(document.getElementById('questionOneAnswer').value);
  if (questionOneInput === 2) {
    document.getElementById('correctOne').classList.remove('hide');
    playerScore += 10;
    playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
    miniGameSection.classList.add('hide');
    gridWrapper.classList.remove('hide');
  } else {
    document.getElementById('incorrectOne').classList.remove('hide');
  }
});