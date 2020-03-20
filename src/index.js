import "./styles/index.scss";
import { intro_screen } from "./intro";
import { collisionCheck } from "./collisionCheck";
import LevelMaker from "./levels";
import Player from "./player";

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
const levels = new LevelMaker(canvas, context);
canvas.width = levels.tileSize * levels.levelCols; //canvas size changes as I add or remove tiles
canvas.height = levels.tileSize * levels.levelRows; //same as before

//sound
var sound = document.getElementById("background-music");
var jumpSound = document.getElementById("jump");

var soundFlag = false;
var gameStarted = false;
var keys = [];
var friction = 0.8;
var gravity = 0.98;
var completed = false;
let startX = levels.start()[0]; //player start x position for first level
let startY = levels.start()[1]; //player start y position for first level
const player = new Player(startX, startY, 60, 60, context);

function startGame() {
  gameStarted = true;
  soundFlag = true;
  if (soundFlag === true) {
    //restart the background music when it hits the end
    sound.addEventListener(
      "ended",
      function() {
        this.currentTime = 0;
        this.play();
      },
      false
    );
    sound.play();
  }
  clearCanvas();
  requestAnimationFrame(loop);
  // loop();
}

function loop() {
  clearCanvas();

  levels.draw_platforms();
  player.draw();

  if (keys[38] || keys[32]) {
    //player presses jump (spaceBar or up arrow)
    if (!player.jumping) {
      //add a jumping sound here, optional
      player.velY = -player.jumpStrength * 2;
      player.jumping = true;
    }
  }

  if (keys[39]) {
    //player moves right
    if (player.velX < player.speed) {
      player.running = true;
      player.velX++;
    }
  } else if (keys[37]) {
    //player moves left
    if (player.velX > -player.speed) {
      player.running = true;
      player.velX--;
    }
  } else {
    player.running = false;
  }

  player.x += player.velX;
  player.y += player.velY;

  player.velX *= friction;
  player.velY += gravity;
  let tiles = levels.platforms.tiles;
  player.grounded = false;
  for (var i = 0; i < tiles.length; i++) {
    var direction = collisionCheck(player, tiles[i]);

    if (direction == "left" || direction == "right") {
      player.velX = 0;
    } else if (direction == "bottom") {
      player.jumping = false;
      player.grounded = true;
    } else if (direction == "top") {
      player.velY *= -0.01;
    }
  }

  if (player.grounded) {
    player.velY = 0;
  }

  let goal = levels.platforms.bananas[0];
  if (collisionCheck(player, goal)) {
    if (levels.levelsIndex === levels.levels.length) {
      complete();
    } else {
      clearCanvas();
      levels.nextLevel();
      player.x = levels.start()[0]; //change player x position to fit the level
      player.y = levels.start()[1]; //change player y position to fit the level    }
    }
  }
  if (!completed) {
    requestAnimationFrame(loop);
  }
}

function complete() {
  clearCanvas();
  soundFlag = false;
  completed = true;
  context.font = "50 px Impact";
  context.fillStyle = "orange";
  context.textAlign = "center";
  context.fillText(
    "You Won! Press enter to start again",
    canvas.width / 2,
    canvas.height / 2 + 50
  );

  context.font = "20px Arial";
  context.fillText(
    "Press enter to play again",
    canvas.width / 2,
    canvas.height / 2
  );
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", function(event) {
  if (event.keyCode == 13 && !gameStarted) {
    startGame();
  }
  if (event.keyCode == 13 && completed) {
    reset();
  }
  keys[event.keyCode] = true;
});

document.body.addEventListener("keyup", function(event) {
  keys[event.keyCode] = false;
});

intro_screen(canvas, context);

// const canvas = document.getElementById("game");
// const context = canvas.getContext("2d");

//  for (var i = 1; i < NUMBER_OF_IDLE_IMAGES + 1; i++) {
//     document.body.append("<div id='preload-image-'"+NUMBER_OF_IDLE_IMAGES+"' style='background-image: url("+NUMBER_OF_IDLE_IMAGES+");'></div>");
//   }

// for (var i = 1; i < NUMBER_OF_R_IMAGES + 1; i++) {
//   document.body.append("<div id='preload-image-'"+NUMBER_OF_RUNNING_IMAGES+"' style='background-image: url("+NUMBER_OF_RUNNING_IMAGES+");'></div>");
// }

// const DURATION_IDLE = 200;
// const DURATION_JUMPING = 100;
// const DURATION_RUNNING = 200;

// const IDLE_MONKEY_PATH = "/src/img/idle";
// const JUMPING_MONKEY_PATH = "/src/img/jumping";
// const RUNNING_MONKEY_PATH = "/src/img/running";

// const NUMBER_OF_IDLE_IMAGES = 17;
// const NUMBER_OF_JUMPING_IMAGES = 4;
// const NUMBER_OF_RUNNING_IMAGES = 13;

// const TIME_PER_IDLE_FRAME = DURATION_IDLE / NUMBER_OF_IDLE_IMAGES;
// const TIME_PER_JUMPING_FRAME = DURATION_JUMPING / NUMBER_OF_JUMPING_IMAGES;
// const TIME_PER_RUNNING_FRAME = DURATION_RUNNING / NUMBER_OF_RUNNING_IMAGES;

// var timeWhenLastUpdate;
// var timeFromLastUpdate;
// var frameNumberIdle = 0;
// var frameNumberJumping = 0;
// var frameNumberRunning = 0;
// var key_state;

// var monkey = {
//   image: new Image(),
//   isIdle: true,
//   jumping: false,
//   running: false,
//   width: 100,
//   height: 100,
//   x_velocity: 0,
//   y_velocity: 0,
//   x: 100,
//   y: 0
// };

// const controller = {
//   left: false,
//   right: false,
//   up: false,
//   keyListener: function(event) {
//     key_state = event.type == "keydown" ? true : false;

//     switch (event.keyCode) {
//       case 37: // left key
//         controller.left = key_state;
//         break;
//       case 38: // up key
//         controller.up = key_state;
//         break;
//       case 39: // right key
//         controller.right = key_state;
//         break;
//     }
//   }
// };

// function step(startTime) {
//   // const backgroundImage = new Image();
//   // backgroundImage.src = "/src/img/background/background_1.png";
//   context.clearRect(0,0,canvas.width,canvas.height);
//   // context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
//   // renderLevel(monkey);

//   if (monkey.isIdle) {
//     if (!timeWhenLastUpdate) {
//       timeWhenLastUpdate = startTime;
//     }
//     timeFromLastUpdate = startTime - timeWhenLastUpdate;

//     if (timeFromLastUpdate > TIME_PER_IDLE_FRAME) {
//     monkey.image.src = IDLE_MONKEY_PATH + "/idle_" + frameNumberIdle + ".png";
//     context.drawImage(
//       monkey.image,
//       monkey.x,
//       monkey.y,
//       monkey.width,
//       monkey.height
//     );

//     timeWhenLastUpdate = startTime;
//     if (frameNumberIdle >= NUMBER_OF_IDLE_IMAGES) {
//       frameNumberIdle = 0;
//     } else {
//       frameNumberIdle++;
//     }
//     }
//   }
//   if (monkey.jumping) {
//     if (!timeWhenLastUpdate) {
//       timeWhenLastUpdate = startTime;
//     }
//     timeFromLastUpdate = startTime - timeWhenLastUpdate;
//     //   if (timeFromLastUpdate > TIME_PER_JUMPING_FRAME) {
//     monkey.image.src =
//       JUMPING_MONKEY_PATH + "/jumping_" + frameNumberJumping + ".png";
//     context.drawImage(
//       monkey.image,
//       monkey.x,
//       monkey.y,
//       monkey.width,
//       monkey.height,
//     );

//     timeWhenLastUpdate = startTime;
//     if (frameNumberJumping >= NUMBER_OF_JUMPING_IMAGES) {
//       frameNumberJumping = 0;
//     } else {
//       frameNumberJumping++;
//     }
//     //   }
//   }

//   if (monkey.running) {
//     if (!timeWhenLastUpdate) {
//       timeWhenLastUpdate = startTime;
//     }
//     timeFromLastUpdate = startTime - timeWhenLastUpdate;
//       if (timeFromLastUpdate > TIME_PER_RUNNING_FRAME) {
//     monkey.image.src =
//       RUNNING_MONKEY_PATH + "/running_" + frameNumberRunning + ".png";
//     context.drawImage(
//       monkey.image,
//       monkey.x,
//       monkey.y,
//       monkey.width,
//       monkey.height
//     );

//     timeWhenLastUpdate = startTime;
//     if (frameNumberRunning >= NUMBER_OF_RUNNING_IMAGES) {
//       frameNumberRunning = 0;
//     } else {
//       frameNumberRunning++;
//     }
//       }
//   }
//   // if (controller.up && monkey.jumping == false) {
//   //   monkey.y_velocity -= 30;
//   //   monkey.isIdle = false;
//   //   monkey.running = false;
//   //   monkey.jumping = true;
//   //   monkey.ground = false
//   // }

//   if (controller.left) {
//     monkey.x_velocity -= 0.5;
//   }

//   if (controller.right) {
//     monkey.isIdle = false;
//     monkey.running = true;
//     monkey.x_velocity += 0.5;
//   }

//   monkey.y_velocity += 1.5; // gravity
//   monkey.x += monkey.x_velocity;
//   monkey.y += monkey.y_velocity;
//   monkey.x_velocity *= 0.9; // friction
//   monkey.y_velocity *= 0.9; // friction

//   if (monkey.y > canvas.height - monkey.height) {
//     monkey.jumping = false;
//     monkey.y = canvas.height - monkey.height;
//     monkey.y_velocity = 0;
//   }

//   if (!key_state && !monkey.jumping) {
//     monkey.isIdle = true; //this is probably in the wrong spot
//     monkey.running = false;
//   }
//   // if(key_state){
//   //     monkey.isIdle = false
//   // }

//   requestAnimationFrame(step);
// }

// // window.requestAnimationFrame(loop);

// ///////////////////////////////////////////////tiles and levels////////////////////////////////

// // const levelArray = [
// //   "                    ",
// //   "                    ",
// //   "                    ",
// //   "                    ",
// //   "                    ",
// //   "                    ",
// //   "                    ",
// //   "                    ",
// //   "                    ",
// //   "                    ",
// //   "                    ",
// //   "                    ",
// //   "                    ",
// //   "               GR   ",
// //   "                   W",
// // class Tile {
// //   constructor(width, height) {
// //     this.path = "./src/img/tiles/";
// //     this.width = width;
// //     this.height = height;
// //   }
// //   draw(context, tilePath, x, y) {
// //     let image = new Image();
// //     image.src = this.path + tilePath;
// //     context.drawImage(image, x, y, this.width, this.height);
// //   }
// // }

// // // function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2){
// // //     // Check x and y for overlap
// // //     if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
// // //         return false;
// // //     }
// // //     return true;
// // // };

// // function renderLevel(monkey) {

// //   const grass = "grass.png";
// //   const dirt = 'dirt.png'
// //   const woodenBox = 'wooden_box.png'
// //   const platformEdgeRight = 'platform_right.png'
// //   const tile = new Tile(50, 50);

// //   let x = 0;
// //   let y = 0;

// //   for (let row = 0; row < levelArray.length; row++) {
// //     let tileRow = levelArray[row]
// //    for (let col = 0; col < tileRow.length; col++) {
// //      let singleTile = tileRow[col];
// //      if(singleTile === 'G'){
// //        tile.draw(context,grass,x,y)
// //        if (rectIntersect(x, y, 25, 25, monkey.x, monkey.y, monkey.width, monkey.height)){
// //           monkey.y = y - monkey.height
// //           monkey.jumping = false;
// //           monkey.y_velocity = 0;
// //           // monkey.x = x - 25;

// //        }
// //      } else if(singleTile === 'D'){
// //         tile.draw(context, dirt, x, y);
// //       if (rectIntersect(x, y, 25, 25, monkey.x, monkey.y, monkey.width, monkey.height)){
// //           monkey.y = y - monkey.height
// //           monkey.jumping = false;
// //           monkey.y_velocity = 0;

// //        }
// //        else if(singleTile === 'B'){
// //          debugger
// //         tile.draw(context, banana, 10, 10);
// //       // if (rectIntersect(x, y, 25, 25, monkey.x, monkey.y, monkey.width, monkey.height)){
// //       //     monkey.y = y - monkey.height
// //       //     monkey.jumping = false;
// //       //     monkey.y_velocity = 0;

// //       //  }
// //       }
// //        else if(singleTile === 'R'){
// //         tile.draw(context, platformEdgeRight, x, y);
// //       // if (rectIntersect(x, y, 25, 25, monkey.x, monkey.y, monkey.width, monkey.height)){
// //       //     monkey.y = y - monkey.height
// //       //     monkey.jumping = false;
// //       //     monkey.y_velocity = 0;

// //        }
// //      } else if (singleTile === 'W'){
// //        tile.draw(context,woodenBox,x,y)
// //        if (rectIntersect(x, y, 25, 25, monkey.x, monkey.y, monkey.width, monkey.height)){
// //           monkey.y = y - monkey.height
// //           monkey.jumping = false;
// //           monkey.y_velocity = 0;

// //        }
// //      }
// //      x += 50
// //    }
// //     y += 40
// //     x = 0
// //   }

// // }

// window.addEventListener("keydown", controller.keyListener);
// window.addEventListener("keyup", controller.keyListener);
// window.requestAnimationFrame(step);
