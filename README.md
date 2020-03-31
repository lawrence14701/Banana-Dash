# Banana Dash

###### A simple platform jumping game where the user plays as a monkey character. The player is given the challenge of collecting bananas in each level. Only once the player collects all the bananas will he/she move onto the next level

# Live link

<a href='https://lawrence14701.github.io/Banana-Dash/'>Click here to go to live version of Banana Dash</a>

# Technologies and languages used
* JS
* Canvas html5
* webpack
* CSS3


# Functionality and MVPs

* intro screen/game over screen
* audio for collecting bananas
* sprite animations
* collision detection 



# Collision Detection Algo

###### iterates through each platform in the canvas and simultaneously check it against the players x/y coordinates. 

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
        character.x += offsetX; //offset prevents the player from moving within the boundaries set by the platform
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


# Player animations

###### 

```javascript
 if (!this.timeWhenLastUpdate) {
      //initial picture that we render (starting point) //draw is called 16 ms
      this.timeWhenLastUpdate = this.startTime - this.timePerIdleFrame;
    }
    this.timeFromLastUpdate = this.startTime - this.timeWhenLastUpdate;

    if (this.timeFromLastUpdate > this.timePerIdleFrame) {
      //how long the image renders until we render the new one
      this.monkey = document.getElementById("idle_" + this.frameNumberIdle);
      this.timeWhenLastUpdate = this.startTime;
      if (this.frameNumberIdle < this.numberOfIdleImages - 1) {
        this.frameNumberIdle++;
      } else {
        this.frameNumberIdle = 0;
      }
    }
  }
```




















