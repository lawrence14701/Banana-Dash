
Collision Detection Algo

```javascript
export function collisionCheck(character, platform) {
  //vector represents the distance between the character and the platform
  var vectorX =
    character.x + character.width / 2 - (platform.x + platform.width / 2);
  var vectorY =
    character.y + character.height / 2 - (platform.y + platform.height / 2);
    //taking half the width of both the platform and the character
  var halfWidths = character.width / 2 + platform.width / 2;
  var halfHeights = character.height / 2 + platform.height / 2;

  var collisionDirection = null;

  //if the character touches a platform 
  if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
    var offsetX = halfWidths - Math.abs(vectorX);
    var offsetY = halfHeights - Math.abs(vectorY);
    if (offsetX < offsetY) {
      if (vectorX > 0) {
        collisionDirection = "left";
        character.x += offsetX;
      } else {
        collisionDirection = "right";
        character.x -= offsetX;
      }
    } else {
      if (vectorY > 0) {
        collisionDirection = "top";
        character.y += offsetY;
      } else {
        collisionDirection = "bottom";
        character.y -= offsetY;
      }
    }
  }

  return collisionDirection;
}
```

#In my main loop function I iterate over my platforms objects with my player objects. Here is a snippet of my loop function where I implement this concept. 

```javascript
player.grounded = false;
for (var i = 0; i < levels.platforms.length; i++) {
    var direction = collisionCheck(player, levels.platforms[i]);

    if (direction == "left" || direction == "right") {
      player.velX = 0;
    } else if (direction == "bottom") {
      player.jumping = false;
      player.grounded = true;
    } else if (direction == "top") {
      player.velY *= -1;
    }
  }
   if (player.grounded) {
    player.velY = 0;
  }
```








Background

Banana dash is a simple platformer that allows the user to run and jump onto platforms as a monkey collecting bananas. However its a race against the clock. The user must collect as many bananas as he can before time runs out. Each banana collected adds 10 points to the score, and 5 seconds to the clock. 

MVPS

- timer
- start and pause button
- music audio
- audio for collecting bananas, jumping, and losing
- user can input score
- score calculator
- sprite animations




technologies

HTML5 canvas
JS
running server on npm server



day one

-learn how to user canvas and place tiles onto the screen
-set up and configure dependecies accordingly
-organize the files in accordance with your game structure AKA, game logic, user input, game pieces

day two 
-learn how to implement sprite animations
- learn how to install audio


day three
-create the user unput,
-test if animation responds to user input

day 4 
-create the game logic. set up a timer and implement a feature that keeps track of score. 

day 5
-styline



bonus feautres
-mutiplayer setup which allows users to race against eachother to see who can collect more points




