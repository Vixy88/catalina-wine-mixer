console.log('TEST: JavaScript file is working');

//GRID
const grid = document.querySelector('.grid');

// GRID VARIABLES
const width = 15;
const cellCount = width * width;
const cells = [];

// CREATE GRID
function createGrid() {
  for (let i = 0; i < 400; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.innerText = [i];
    grid.append(gridDiv);
  }
}

createGrid();


// CHARACTER ELEMENTS
class Character {
  constructor(height, width, x, xVelocity, y, yVelocity, jumping) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.xVelocity = xVelocity;
    this.y = y;
    this.yVelocity = yVelocity;
    this.jumping = jumping;
  }
}

const characterBrennan = new Character(32, 32, 0, 0, 0, 0, true);
const characterDale = new Character(32, 32, 0, 0, 0, 0, true);


// PLAYER CONTROLLER

const controller = {
  left: false,
  right: false,
  up: false,
  down: false,

  keyListener: function (event) {
    let keyState = (event.type === 'keydown') ? true : false;

    switch (event.keyCode) {
      case 1: // left arrow
        controller.left = keyState;
        break;
      case 2: // right arrow
        controller.right = keyState;
        break;
      case 3: // right arrow
        controller.up = keyState;
        break;
      case 4: // right arrow
        controller.down = keyState;
        break;
    }
  }
};

const gameLoop = function () {
  if (controller.up && characterBrennan.jumping === false) { // JUMP
    characterBrennan.yVelocity -= 20;
    characterBrennan.jumping = true;
  }
  if (controller.left) {
    characterBrennan.xVelocity -= 0.5;
  }
  if (controller.right) {
    characterBrennan.xVelocity += 0.5;
  }
  characterBrennan.yVelocity += 1.5; // gravity
  characterBrennan.x += characterBrennan.xVelocity;
  characterBrennan.y += characterBrennan.yVelocity;
  characterBrennan.xVelocity *= 0.9; // friction
  characterBrennan.yVelocity *= 0.9; // friction
};