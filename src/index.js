import "./styles/index.scss";

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

const DURATION_IDLE = 200;
const DURATION_JUMPING = 100;
const DURATION_RUNNING = 200;

const IDLE_MONKEY_PATH = "/src/img/idle";
const JUMPING_MONKEY_PATH = "/src/img/jumping";
const RUNNING_MONKEY_PATH = "/src/img/running";

const NUMBER_OF_IDLE_IMAGES = 17;
const NUMBER_OF_JUMPING_IMAGES = 4;
const NUMBER_OF_RUNNING_IMAGES = 13;

// const TIME_PER_IDLE_FRAME = DURATION_IDLE / NUMBER_OF_IDLE_IMAGES;
// const TIME_PER_JUMPING_FRAME = DURATION_JUMPING / NUMBER_OF_JUMPING_IMAGES;
// const TIME_PER_RUNNING_FRAME = DURATION_RUNNING / NUMBER_OF_RUNNING_IMAGES;

var timeWhenLastUpdate;
var timeFromLastUpdate;
var frameNumberIdle = 0;
var frameNumberJumping = 0;
var frameNumberRunning = 0;
var key_state;

var monkey = {
  image: new Image(),
  isIdle: true,
  jumping: false,
  running: false,
  width: 100,
  height: 100,
  x_velocity: 0,
  y_velocity: 0,
  x: 100,
  y: 0
};

const controller = {
  left: false,
  right: false,
  up: false,
  keyListener: function(event) {
    key_state = event.type == "keydown" ? true : false;

    switch (event.keyCode) {
      case 37: // left key
        controller.left = key_state;
        break;
      case 38: // up key
        controller.up = key_state;
        break;
      case 39: // right key
        controller.right = key_state;
        break;
    }
  }
};

function step(startTime) {
  const backgroundImage = new Image();
  backgroundImage.src = "/src/img/background/background_1.png";
  context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  renderLevel();

  if (monkey.isIdle) {
    if (!timeWhenLastUpdate) {
      timeWhenLastUpdate = startTime;
    }
    timeFromLastUpdate = startTime - timeWhenLastUpdate;
    // if (timeFromLastUpdate > TIME_PER_IDLE_FRAME) {
    monkey.image.src = IDLE_MONKEY_PATH + "/idle_" + frameNumberIdle + ".png";
    context.drawImage(
      monkey.image,
      monkey.x,
      monkey.y,
      monkey.width,
      monkey.height
    );

    timeWhenLastUpdate = startTime;
    if (frameNumberIdle >= NUMBER_OF_IDLE_IMAGES) {
      frameNumberIdle = 0;
    } else {
      frameNumberIdle++;
    }
    // }
  }
  if (monkey.jumping) {
    if (!timeWhenLastUpdate) {
      timeWhenLastUpdate = startTime;
    }
    timeFromLastUpdate = startTime - timeWhenLastUpdate;
    //   if (timeFromLastUpdate > TIME_PER_JUMPING_FRAME) {
    monkey.image.src =
      JUMPING_MONKEY_PATH + "/jumping_" + frameNumberJumping + ".png";
    context.drawImage(
      monkey.image,
      monkey.x,
      monkey.y,
      monkey.width,
      monkey.height
    );

    timeWhenLastUpdate = startTime;
    if (frameNumberJumping >= NUMBER_OF_JUMPING_IMAGES) {
      frameNumberJumping = 0;
    } else {
      frameNumberJumping++;
    }
    //   }
  }

  if (monkey.running) {
    if (!timeWhenLastUpdate) {
      timeWhenLastUpdate = startTime;
    }
    timeFromLastUpdate = startTime - timeWhenLastUpdate;
    //   if (timeFromLastUpdate > TIME_PER_RUNNING_FRAME) {
    monkey.image.src =
      RUNNING_MONKEY_PATH + "/running_" + frameNumberRunning + ".png";
    context.drawImage(
      monkey.image,
      monkey.x,
      monkey.y,
      monkey.width,
      monkey.height
    );

    timeWhenLastUpdate = startTime;
    if (frameNumberRunning >= NUMBER_OF_RUNNING_IMAGES) {
      frameNumberRunning = 0;
    } else {
      frameNumberRunning++;
    }
    //   }
  }
  if (controller.up && monkey.jumping == false) {
    monkey.y_velocity -= 30;
    monkey.isIdle = false;
    monkey.running = false;
    monkey.jumping = true;
  }

  if (controller.left) {
    monkey.x_velocity -= 0.5;
  }

  if (controller.right) {
    monkey.isIdle = false;
    monkey.running = true;
    monkey.x_velocity += 0.5;
  }

  monkey.y_velocity += 1.5; // gravity
  monkey.x += monkey.x_velocity;
  monkey.y += monkey.y_velocity;
  monkey.x_velocity *= 0.9; // friction
  monkey.y_velocity *= 0.9; // friction

  if (monkey.y > canvas.height - monkey.height) {
    monkey.jumping = false;
    monkey.y = canvas.height - monkey.height;
    monkey.y_velocity = 0;
  }
  if (!key_state && !monkey.jumping) {
    monkey.isIdle = true; //this is probably in the wrong spot
    monkey.running = false;
  }
  // if(key_state){
  //     monkey.isIdle = false
  // }

  requestAnimationFrame(step);
}

// window.requestAnimationFrame(loop);

///////////////////////////////////////////////tiles and levels////////////////////////////////

const levelArray = [
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "GGGGGGGGGGGGGGGGGGGG",
  "DDDDDDDDDDDDDDDDDDDD"
];

class Tile {
  constructor(width, height) {
    this.path = "./src/img/tiles/";
    this.width = width;
    this.height = height;
  }
  draw(context, tilePath, x, y) {
    debugger
    let image = new Image();
    image.src = this.path + tilePath;
    context.drawImage(image, x, y, this.width, this.height);
  }
}

function renderLevel() {
  const grass = "grass.png";
  const dirt = 'dirt.png'
  const woodenBox = 'wooden_box.png'
  const tile = new Tile(50, 50);

  let x = 0;
  let y = 0;

  for (let row = 0; row < levelArray.length; row++) {
    let tileRow = levelArray[row]
   for (let col = 0; col < tileRow.length; col++) {
     let singleTile = tileRow[col];
     if(singleTile === 'G'){
       tile.draw(context,grass,x,y)
     } else if(singleTile === 'D'){
      tile.draw(context, dirt, x, y);
     }
     x += 50
   }
    y += 40
    x = 0
  }
  
}

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(step);
