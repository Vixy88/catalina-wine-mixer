function init() {
  console.log('TEST: JavaScript file is working');

  // const variables
  const startButton = document.querySelector('.startBtn'); // GRAB BUTTON and store in variable
  const restartButton = document.getElementById('restartBtn')
  const gameScreenDisplay = document.querySelector('.display-game-section');
  const landingPageScreen = document.querySelector('.landing-page-section');

  //GRID
  const grid = document.querySelector('.grid');
  const numberOfCells = 20;

  // CREATE GRID
  function createGrid() {
    for (let i = 0; i < numberOfCells; i++) {
      var cell = document.createElement('div');
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

  // Function that gives the player a point everytime he moves into a cell with a champagnebottle and removes the champagnebottle class from the cell

  // PLAYER CONTROLLER
  const playerOne = document.querySelector('.characterDale');
  let playerScore = 0;
  let playerX = 0;
  let playerY = 0;

  const handleKeydown = (event) => {
    // LEFT AND RIGHT
    if (event.code === 'ArrowRight' && playerX <= 1000) {
      // move player right but stop if reach the border
      playerOne.style.left = playerX + 'px';
      playerX += 20;
    }
    if (event.code === 'ArrowLeft' && playerX >= 5) {
      // move player left but stop if reach the border
      playerOne.style.left = playerX + 'px';
      playerX -= 20;
    }
    if (event.code === 'ArrowDown' && playerY <= 1000) {
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
  let startTime = 60;

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

}

window.addEventListener('DOMContentLoaded', init);