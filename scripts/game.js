// Game Configuration
const CONFIG = {
  GRID_SIZE: 100,
  ROW_LENGTH: 10,
  INITIAL_TIME: 25,
  BOTTLE_SPAWN_RATE: 0.9,
};

class Game {
  constructor() {
    this.score = 0;
    this.timeRemaining = CONFIG.INITIAL_TIME;
    this.playerPosition = 0;
    this.bottlesRemaining = 0;
    this.currentPlayer = '';
    this.isGameActive = false;
    this.countdownInterval = null;

    // DOM Elements
    this.grid = document.querySelector('.grid');
    this.cells = [];
    this.scoreDisplay = document.getElementById('playerScore');
    this.timerDisplay = document.getElementById('countDownTimer');
    this.winScreen = document.getElementById('winScreen');

    // Event Listeners
    document
      .querySelector('.startBtnDale')
      .addEventListener('click', () => this.startGame('characterDale'));
    document
      .querySelector('.startBtnBrennan')
      .addEventListener('click', () => this.startGame('characterBrennan'));
    document.addEventListener('keydown', (e) => this.handleKeydown(e));
    document
      .getElementById('restartBtn')
      .addEventListener('click', () => window.location.reload());
  }

  startGame(character) {
    this.currentPlayer = character;
    this.isGameActive = true;
    document.querySelector('.landing-page-section').classList.add('hide');
    document.querySelector('.display-game-section').classList.remove('hide');
    this.createGrid();
    this.startTimer();
  }

  createGrid() {
    this.grid.innerHTML = '';
    this.cells = [];
    this.bottlesRemaining = 0;

    for (let i = 0; i < CONFIG.GRID_SIZE; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      // Add bottles with 10% chance
      if (Math.random() > CONFIG.BOTTLE_SPAWN_RATE) {
        cell.classList.add('champagneBottle');
        this.bottlesRemaining++;
      }

      this.grid.appendChild(cell);
      this.cells[i] = cell;
    }

    // Ensure at least 5 bottles
    while (this.bottlesRemaining < 5) {
      const randomCell = Math.floor(Math.random() * CONFIG.GRID_SIZE);
      if (!this.cells[randomCell].classList.contains('champagneBottle')) {
        this.cells[randomCell].classList.add('champagneBottle');
        this.bottlesRemaining++;
      }
    }

    // Add player
    this.cells[0].classList.add(this.currentPlayer);
  }

  handleKeydown(event) {
    if (!this.isGameActive) return;

    const key = event.code;
    let newPosition = this.playerPosition;

    switch (key) {
      case 'ArrowRight':
        if (this.playerPosition % CONFIG.ROW_LENGTH < CONFIG.ROW_LENGTH - 1)
          newPosition++;
        break;
      case 'ArrowLeft':
        if (this.playerPosition % CONFIG.ROW_LENGTH > 0) newPosition--;
        break;
      case 'ArrowDown':
        if (this.playerPosition < CONFIG.GRID_SIZE - CONFIG.ROW_LENGTH)
          newPosition += CONFIG.ROW_LENGTH;
        break;
      case 'ArrowUp':
        if (this.playerPosition >= CONFIG.ROW_LENGTH)
          newPosition -= CONFIG.ROW_LENGTH;
        break;
    }

    if (newPosition !== this.playerPosition) {
      this.movePlayer(newPosition);
    }
  }

  movePlayer(newPosition) {
    // Remove player from current position
    this.cells[this.playerPosition].classList.remove(this.currentPlayer);

    // Add player to new position
    this.playerPosition = newPosition;
    this.cells[this.playerPosition].classList.add(this.currentPlayer);

    // Check if bottle collected
    if (this.cells[this.playerPosition].classList.contains('champagneBottle')) {
      this.collectBottle();
    }
  }

  collectBottle() {
    this.cells[this.playerPosition].classList.remove('champagneBottle');
    this.score++;
    this.bottlesRemaining--;
    this.scoreDisplay.textContent = this.score;

    // Play sound
    document.getElementById('audio')?.play();

    // Check win condition
    if (this.bottlesRemaining === 0) {
      this.win();
    }
  }

  win() {
    this.isGameActive = false;
    clearInterval(this.countdownInterval);
    this.winScreen.classList.remove('hide');
  }

  startTimer() {
    this.countdownInterval = setInterval(() => {
      this.timeRemaining--;
      this.timerDisplay.textContent = this.timeRemaining;

      if (this.timeRemaining <= 0) {
        clearInterval(this.countdownInterval);
        window.location.reload();
      }
    }, 1000);
  }
}

// Start game when page loads
document.addEventListener('DOMContentLoaded', () => {
  new Game();
});
