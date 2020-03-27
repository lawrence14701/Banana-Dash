export default class Player {
  constructor(x, y, width, height, context) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 5;
    this.velX = 0;
    this.velY = 0;
    this.color = "#ff0000";
    this.jumpStrength = 7;

    this.idleRight = true;
    this.idleLeft = false;
    this.jumpingRight = false;
    this.jumpingLeft = false;
    this.grounded = false;
    this.runningRight = false;
    this.runningLeft = false;

    this.monkey; // = new Image();
    //idle
    this.durationIdle = 200;
    this.numberOfIdleImages = 17;
    this.timePerIdleFrame = this.durationIdle / this.numberOfIdleImages;
    this.frameNumberIdle = 0;
    //running
    this.durationRunning = 200;
    this.numberOfRunningImages = 14;
    this.timePerRunningFrame =
      this.durationRunning / this.numberOfRunningImages;
    this.frameNumberRunning = 0;
    //jumping
    this.durationJumping = 200;
    this.numberOfJumpingImages = 5;
    this.timePerJumpingFrame =
      this.durationJumping / this.numberOfJumpingImages;
    this.frameNumberJumping = 0;

    //animation variables
    this.timeWhenLastUpdate = null;
    this.timeFromLastUpdate = null;
    this.startTime = 0;
  }
  draw() {
    this.startTime = performance.now();
    if (this.jumpingRight) this.jumpingRightAnimation();
    else if (this.jumpingLeft) this.jumpingLeftAnimation();
    else if (this.runningRight) this.runningRightAnimation();
    else if (this.runningLeft) this.runningLeftAnimation();
    else if (this.idleLeft) this.idleLeftAnimation();
    else this.idleRightAnimation();
  }

  idleLeftAnimation() {
    this.monkey = document.getElementById("idle_left_" + this.frameNumberIdle);
    this.context.drawImage(
      this.monkey,
      60,
      100,
      510,
      475,
      this.x,
      this.y,
      this.width,
      this.height
    );

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
  idleRightAnimation() {
    this.monkey = document.getElementById("idle_" + this.frameNumberIdle);
    this.context.drawImage(
      this.monkey,
      60,
      100,
      510,
      475,
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (!this.timeWhenLastUpdate) {
      //initial picture that we render (starting point)
      this.timeWhenLastUpdate = this.startTime - this.timePerIdleFrame;
    }
    this.timeFromLastUpdate = this.startTime - this.timeWhenLastUpdate; //time in-between animation frames

    if (this.timeFromLastUpdate > this.timePerIdleFrame) { //checking when time in between animation frame is greater than timeperframe
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
  runningLeftAnimation() {
    this.monkey = document.getElementById(
      "running_left_" + this.frameNumberRunning
    );
    this.context.drawImage(
      this.monkey,
      60,
      100,
      510,
      475,
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (!this.timeWhenLastUpdate) {
      //initial picture that we render (starting point)
      this.timeWhenLastUpdate = this.startTime - this.timePerIdleFrame;
    }
    this.timeFromLastUpdate = this.startTime - this.timeWhenLastUpdate;

    if (this.timeFromLastUpdate > this.timePerRunningFrame) {
      //how long the image renders until we render the new one
      this.monkey = document.getElementById("idle_" + this.frameNumberRunning);
      this.timeWhenLastUpdate = this.startTime;
      if (this.frameNumberRunning < this.numberOfRunningImages - 1) {
        this.frameNumberRunning++;
      } else {
        this.frameNumberRunning = 0;
      }
    }
  }

  runningRightAnimation() {
    this.monkey = document.getElementById(
      "running_right_" + this.frameNumberRunning
    );
    this.context.drawImage(
      this.monkey,
      60,
      100,
      510,
      475,
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (!this.timeWhenLastUpdate) {
      //initial picture that we render (starting point)
      this.timeWhenLastUpdate = this.startTime - this.timePerIdleFrame;
    }
    this.timeFromLastUpdate = this.startTime - this.timeWhenLastUpdate;

    if (this.timeFromLastUpdate > this.timePerRunningFrame) {
      //how long the image renders until we render the new one
      this.monkey = document.getElementById("idle_" + this.frameNumberRunning);
      this.timeWhenLastUpdate = this.startTime;
      if (this.frameNumberRunning < this.numberOfRunningImages - 1) {
        this.frameNumberRunning++;
      } else {
        this.frameNumberRunning = 0;
      }
    }
  }

  jumpingRightAnimation() {
    this.monkey = document.getElementById("jumping_" + this.frameNumberJumping);
    this.context.drawImage(
      this.monkey,
      60,
      100,
      510,
      475,
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (!this.timeWhenLastUpdate) {
      //initial picture that we render (starting point) //draw is called 16 ms
      this.timeWhenLastUpdate = this.startTime - this.timePerJumpingFrame;
    }
    this.timeFromLastUpdate = this.startTime - this.timeWhenLastUpdate;

    if (this.timeFromLastUpdate > this.timePerJumpingFrame) {
      //how long the image renders until we render the new one
      this.monkey = document.getElementById(
        "jumping_" + this.frameNumberJumping
      );
      this.timeWhenLastUpdate = this.startTime;
      if (this.frameNumberJumping < this.numberOfJumpingImages - 1) {
        //we minus one bec we have to account for the 0th index
        this.frameNumberJumping++;
      } else {
        this.frameNumberJumping = 0;
      }
    }
  }
  jumpingLeftAnimation() {
    this.monkey = document.getElementById(
      "jumping_left_" + this.frameNumberJumping
    );
    this.context.drawImage(
      this.monkey,
      60,
      100,
      510,
      475,
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (!this.timeWhenLastUpdate) {
      //initial picture that we render (starting point) //draw is called 16 ms
      this.timeWhenLastUpdate = this.startTime - this.timePerJumpingFrame;
    }
    this.timeFromLastUpdate = this.startTime - this.timeWhenLastUpdate;

    if (this.timeFromLastUpdate > this.timePerJumpingFrame) {
      //how long the image renders until we render the new one
      this.monkey = document.getElementById(
        "jumping_left" + this.frameNumberJumping
      );
      this.timeWhenLastUpdate = this.startTime;
      if (this.frameNumberJumping < this.numberOfJumpingImages - 1) {
        //we minus one bec we have to account for the 0th index
        this.frameNumberJumping++;
      } else {
        this.frameNumberJumping = 0;
      }
    }
  }
}
