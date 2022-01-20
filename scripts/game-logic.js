console.log('TEST: JavaScript file is working');

// const variables
const body = document.querySelector('body');
const startButtonDale = document.querySelector('.startBtnDale'); // GRAB BUTTON and store in variable
const startButtonBrennan = document.querySelector('.startBtnBrennan'); // GRAB BUTTON and store in variable
const restartButton = document.getElementById('restartBtn');
const gameScreenDisplay = document.querySelector('.display-game-section');
const landingPageScreen = document.querySelector('.landing-page-section');
const grid = document.querySelector('.grid');
const gridWrapper = document.querySelector('.grid-wrapper');
const numberOfCells = 176;
const cells = [];
const rowLength = 22;
const champagneBottles = [];

// CREATE GRID
function createGrid() {
  for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if (Math.random() > 0.9) {
      cell.classList.add('champagneBottle');
      const champagneBottle = document.querySelectorAll('.champagneBottle');
      champagneBottles.push(champagneBottle);
    }
    grid.append(cell);
    cells.push(cell);
  }
}

// Function that adds the class containing the image of the Dale Character to the first cell on the grid
function addCharacterDale() {
  let characterStartingPosition = document.querySelector('.cell');
  characterStartingPosition.classList.add('characterDale');
}

function addCharacterBrennan() {
  let characterStartingPosition = document.querySelector('.cell');
  characterStartingPosition.classList.add('characterBrennan');
}

// PLAYER CONTROLLER
let playerScore = 0;
let playerCurrentPosition = 0;

const handleKeydown = (event) => {
  const playerDiv = document.querySelector('.cell.characterDale');
  if (event.code === 'ArrowRight' && playerCurrentPosition < 176) {
    cells[playerCurrentPosition].classList.remove('characterDale');
    playerCurrentPosition += 1;
    cells[playerCurrentPosition].classList.add('characterDale');
    console.log(`Player Index position: ${playerCurrentPosition}`);
    // CHAMPAGNE COLLECTION LOGIC
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      champagneBottles.pop();
      if (champagneBottles.length === 0) {
        const main = document.querySelector('main');
        const winScreenSection = document.querySelector('.win-screen-section');
        main.classList.add('hide');
        winScreenSection.classList.remove('hide');
      }
      document.getElementById('audio').play();
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (event.code === 'ArrowLeft' && playerCurrentPosition > 0) {
    // move player left but stop if reach the border
    cells[playerCurrentPosition].classList.remove('characterDale');
    playerCurrentPosition -= 1;
    cells[playerCurrentPosition].classList.add('characterDale');
    console.log(`Player Index position: ${playerCurrentPosition}`);
    // CHAMPAGNE COLLECTION LOGIC
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      champagneBottles.pop();
      if (champagneBottles.length === 0) {
        const main = document.querySelector('main');
        const winScreenSection = document.querySelector('.win-screen-section');
        main.classList.add('hide');
        winScreenSection.classList.remove('hide');
      }
      document.getElementById('audio').play();
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (event.code === 'ArrowDown' && playerCurrentPosition < 154) {
    // move player down but stop if reach the border
    cells[playerCurrentPosition].classList.remove('characterDale');
    playerCurrentPosition += rowLength;
    cells[playerCurrentPosition].classList.add('characterDale');
    console.log(`Player Index position: ${playerCurrentPosition}`);
    // CHAMPAGNE COLLECTION LOGIC
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      champagneBottles.pop();
      if (champagneBottles.length === 0) {
        const main = document.querySelector('main');
        const winScreenSection = document.querySelector('.win-screen-section');
        main.classList.add('hide');
        winScreenSection.classList.remove('hide');
      }
      document.getElementById('audio').play();
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (event.code === 'ArrowUp' && playerCurrentPosition > 22) {
    // move player up but stop if reach the border
    cells[playerCurrentPosition].classList.remove('characterDale');
    playerCurrentPosition -= rowLength;
    cells[playerCurrentPosition].classList.add('characterDale');
    console.log(`Player Index position: ${playerCurrentPosition}`);
    // CHAMPAGNE COLLECTION LOGIC
    if (playerDiv.classList.contains('champagneBottle')) {
      playerScore++;
      playerDiv.classList.remove('champagneBottle');
      champagneBottles.pop();
      if (champagneBottles.length === 0) {
        const main = document.querySelector('main');
        const winScreenSection = document.querySelector('.win-screen-section');
        main.classList.add('hide');
        winScreenSection.classList.remove('hide');
      }
      document.getElementById('audio').play();
      playerScore = Number(document.getElementById('playerScore').innerHTML = playerScore);
      startTime++;
    }
  }
  if (playerScore === 5) {
    miniGameOne();
  }
};

// COUNTDOWN TIMER LOGIC

const countDownClock = document.querySelector('#countDownTimer');
let startTime = 25;

function countDownTimer() {
  const countdown = setInterval(function () {
    if (startTime === 0) {
      const main = document.querySelector('main');
      const loseScreenSection = document.querySelector('.lose-screen-section');
      main.classList.add('hide');
      loseScreenSection.classList.remove('hide');
      clearInterval(countdown);
    } else {
      countDownClock.textContent = startTime;
      startTime -= 1;
    }
  }, 1000);
}

// START GAME LOGIC

const startGameDale = () => {
  gameScreenDisplay.classList.remove('hide'); // removes the class that hides the game screen on DOM load
  landingPageScreen.classList.add('hide'); // adds the class that hides the landing page screen
  createGrid();
  addCharacterDale();
  countDownTimer();
  console.log('TEST: The Game successfully started, playing with Dale');
};

const startGameBrennan = () => {
  gameScreenDisplay.classList.remove('hide'); // removes the class that hides the game screen on DOM load
  landingPageScreen.classList.add('hide'); // adds the class that hides the landing page screen
  createGrid();
  addCharacterBrennan();
  countDownTimer();
  console.log('TEST: The Game successfully started, playing with Brennan');
};

// restarts the game if the player wants to - this will restart the whole game when clicked
function restartGameBrennan() {
  if (confirm('Are you sure you want to restart the game? - you will lose all your progress')) {
    // window.location.reload(false);
    resetGlobalVariables();
  }
}

function resetGlobalVariables() {
  startTime = 25; // reset start time to 25 seconds
  playerScore = 0; // reset player score to 0
  Number(document.getElementById('playerScore').innerHTML = playerScore);
  // Reset Players Position to start position
  cells[playerCurrentPosition].classList.remove('characterDale');
  playerCurrentPosition = 0;
  cells[playerCurrentPosition].classList.add('characterDale');
  // Remove current Grid
  gridWrapper.remove('cell');
  // Create new grid
  const grid = document.createElement('div');
  grid.classList.add('grid');
  gameScreenDisplay.append(grid);
}

// Event listeners
startButtonDale.addEventListener('click', startGameDale);
startButtonBrennan.addEventListener('click', startGameBrennan);
restartButton.addEventListener('click', restartGameBrennan);
body.addEventListener('keydown', handleKeydown);

// MINI GAME LOGIC
let submitButton = document.getElementById('submitBtn');
const miniGameSection = document.querySelector('.mini-game-section');

function miniGameOne() {
  miniGameSection.classList.remove('hide');
  gridWrapper.classList.add('hide');
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