import { intro_screen } from "./canvas_slides";
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
var bananaSound = document.getElementById('collect-banana-sound')
var jumpSound = document.getElementById("jump");

var keys = [];
var friction = 0.8;
var gravity = 0.98;
let startX = levels.start()[0]; //player start x position for first level
let startY = levels.start()[1]; //player start y position for first level
const player = new Player(startX, startY, 60, 60, context);

function startGame() {
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
  
  clearCanvas();
  requestAnimationFrame(loop);
}

function loop() {
  clearCanvas();

  levels.draw_platforms();
  player.draw();

  if (keys[38] || keys[32]) {
    //player presses jump (spaceBar or up arrow)
    if (!player.jumpingRight && !player.jumpingLeft) {
      //add a jumping sound here, optional
      if(player.idleLeft) player.jumpingLeft = true
      if(player.idleRight) player.jumpingRight = true
      player.velY = -player.jumpStrength * 2;
    }
  }

  if (keys[39]) {
    //player moves right
    if (player.velX < player.speed) {
      player.runningRight = true; //animation running right
      player.idleLeft = false
      player.idleRight = true
      player.velX++;
    }
  } else if (keys[37]) {
    //player moves left
    if (player.velX > -player.speed) {
      player.runningLeft = true; //animation running left
      player.idleRight = false
      player.idleLeft = true
      player.velX--;
    }
  } else {
    player.runningRight = false;
    player.runningLeft = false;
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
      player.jumpingRight = false;
      player.jumpingLeft = false;
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
      bananaSound.play();
      bananaSound.currentTime = 0; //reset banana sound
      clearCanvas();
      levels.nextLevel();
      if(!levels.done){
        player.y = levels.start()[1]; //change player y position to fit the level
        player.x = levels.start()[0]; //change player x position to fit the level
      }
    }
  if (!levels.done) {
    requestAnimationFrame(loop);
  } else {
    complete();
  }
}

function reset() {
  sound.addEventListener(
    "ended",
    function() {
      this.currentTime = 0;
      this.play();
    },
    false
  );
  sound.play();
  levels.levelsIndex = 0
  levels.done = false
  player.x = startX;
  player.y = startY;
  player.grounded = true;
  player.velY = 0;
  player.velX = 0;

  requestAnimationFrame(loop);
}


function complete() {
  clearCanvas();
  sound.pause();
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



//event listeners
intro_screen(canvas, context);

document.body.addEventListener("keydown", function(event) {
  if (event.keyCode == 13 && !levels.done) {
    startGame();
  }
  if (event.keyCode == 13 && levels.done) {
    reset();
  }
  keys[event.keyCode] = true;
});

document.body.addEventListener("keyup", function(event) {
  keys[event.keyCode] = false;
});

