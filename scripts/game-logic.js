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
const countDownClock = document.querySelector('#countDownTimer'); // grabs the count down timer in the DOM and stores in variable
const numberOfCells = 100;
const cells = [];
const rowLength = 10; // sets the row length of the game for the movement function Up and Down to work
const champagneBottles = [];
const mobileNavigation = document.querySelector('.mobileNavigation');

// GLOBAL VARIABLES
let currentPlayer = 'characterDale';
let startTime = 25;

// CREATE GRID
function createGrid() {
  grid.innerHTML = ''; // HTML inside of grid is set as blank ** without this the restart function does not work
  for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if (Math.random() > 0.9) { // Creats random number of champagne bottles and places them in the grid
      cell.classList.add('champagneBottle');
      const champagneBottle = document.querySelectorAll('.champagneBottle');
      champagneBottles.push(champagneBottle); // pushes champagneBottle instances into the champagneBottles array
    }
    grid.append(cell);
    cells[i] = cell;
  }
}

// Function that adds the class containing the image of the Dale Character to the first cell on the grid
function addCharacter() {
  let characterStartingPosition = document.querySelector('.cell');
  characterStartingPosition.classList.add(currentPlayer);
}

// PLAYER CONTROLLER
let playerScore = 0;
let playerCurrentPosition = 0;

const handleKeydown = (event) => {
  const playerDiv = document.querySelector(`.${currentPlayer}`);
  if (event.code === 'ArrowRight' && playerCurrentPosition < 99) {
    cells[playerCurrentPosition].classList.remove(currentPlayer);
    playerCurrentPosition += 1;
    cells[playerCurrentPosition].classList.add(currentPlayer);
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
    cells[playerCurrentPosition].classList.remove(currentPlayer);
    playerCurrentPosition -= 1;
    cells[playerCurrentPosition].classList.add(currentPlayer);
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
  if (event.code === 'ArrowDown' && playerCurrentPosition < 90) {
    // move player down but stop if reach the border
    cells[playerCurrentPosition].classList.remove(currentPlayer);
    playerCurrentPosition += rowLength;
    cells[playerCurrentPosition].classList.add(currentPlayer);
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
  if (event.code === 'ArrowUp' && playerCurrentPosition > 9) {
    // move player up but stop if reach the border
    cells[playerCurrentPosition].classList.remove(currentPlayer);
    playerCurrentPosition -= rowLength;
    cells[playerCurrentPosition].classList.add(currentPlayer);
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

// COUNTDOWN TIMER

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

function startGame() {
  gameScreenDisplay.classList.remove('hide'); // removes the class that hides the game screen on DOM load
  landingPageScreen.classList.add('hide'); // adds the class that hides the landing page screen
  mobileNavigation.classList.remove('hide'); // shows the mobile controls when starting the game (Mobile Only)
  createGrid(); // Creates a grid when the game is started
  addCharacter(); // adds the character to the grid when game is started
  countDownTimer(); // starts the countdown clock
}

// This function sets the playable character as Dale
const startGameDale = () => {
  currentPlayer = 'characterDale';
  startGame();
  console.log('TEST: The Game successfully started, playing with Dale');
};

// This function sets the playable character as Brennan
const startGameBrennan = () => {
  currentPlayer = 'characterBrennan';
  startGame();
  console.log('TEST: The Game successfully started, playing with Brennan');
};

// restarts the game if the player wants to - this will restart the whole game when clicked
function restartGame() {
  if (confirm('Are you sure you want to restart the game? - you will lose all your progress')) {
    startTime = 25; // reset start time to 25 seconds
    playerScore = 0; // reset player score to 0
    Number(document.getElementById('playerScore').innerHTML = playerScore);
    // Create new grid
    createGrid();
    // Reset Players Position to start position
    playerCurrentPosition = 0;
    cells[playerCurrentPosition].classList.add(currentPlayer);
  }
}

// Function used to launch new game from the win and lose game views
function launchNewGame() {
  window.location.reload(false);
}

// Event listeners
startButtonDale.addEventListener('click', startGameDale);
startButtonBrennan.addEventListener('click', startGameBrennan);
restartButton.addEventListener('click', restartGame);
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


// MOBILE CONTROLS

const btnUp = document.getElementById('upBtn');
const btnLeft = document.getElementById('leftBtn');
const btnRight = document.getElementById('rightBtn');
const btnDown = document.getElementById('downBtn');

btnUp.addEventListener('click', () => {
  const playerDiv = document.querySelector(`.${currentPlayer}`);
  if (playerCurrentPosition > 9) {
    // move player up but stop if reach the border
    cells[playerCurrentPosition].classList.remove(currentPlayer);
    playerCurrentPosition -= rowLength;
    cells[playerCurrentPosition].classList.add(currentPlayer);
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
    if (playerScore === 5) {
      miniGameOne();
    }
  }
});

btnLeft.addEventListener('click', () => {
  const playerDiv = document.querySelector(`.${currentPlayer}`);
  if (playerCurrentPosition > 0) {
    // move player left but stop if reach the border
    cells[playerCurrentPosition].classList.remove(currentPlayer);
    playerCurrentPosition -= 1;
    cells[playerCurrentPosition].classList.add(currentPlayer);
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
    if (playerScore === 5) {
      miniGameOne();
    }
  }
});

btnRight.addEventListener('click', () => {
  const playerDiv = document.querySelector(`.${currentPlayer}`);
  if (playerCurrentPosition < 99) {
    cells[playerCurrentPosition].classList.remove(currentPlayer);
    playerCurrentPosition += 1;
    cells[playerCurrentPosition].classList.add(currentPlayer);
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
    if (playerScore === 5) {
      miniGameOne();
    }
  }
});

btnDown.addEventListener('click', () => {
  const playerDiv = document.querySelector(`.${currentPlayer}`);
  if (playerCurrentPosition < 90) {
    // move player down but stop if reach the border
    cells[playerCurrentPosition].classList.remove(currentPlayer);
    playerCurrentPosition += rowLength;
    cells[playerCurrentPosition].classList.add(currentPlayer);
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
    if (playerScore === 5) {
      miniGameOne();
    }
  }
});