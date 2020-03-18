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
    this.jumping = false;
    this.grounded = false;

    this.monkey = new Image();

    this.idleMonkeyPath = "/src/img/idle/Idle_";
    this.durationIdle = 200;
    this.numberOfIdleImages = 17;
    this.timePerIdleFrame = this.durationIdle / this.numberOfIdleImages;

    this.timeWhenLastUpdate = null;
    this.timeFromLastUpdate = null;
    this.frameNumberIdle = 0;
    this.frameNumberJumping = 0;
    this.frameNumberRunning = 0;
    this.started = false
    this.startTime = 0;

    // const DURATION_JUMPING = 100;
    // const DURATION_RUNNING = 200;

    // const JUMPING_MONKEY_PATH = "/src/img/jumping";
    // const RUNNING_MONKEY_PATH = "/src/img/running";

    // const NUMBER_OF_JUMPING_IMAGES = 4;
    // const NUMBER_OF_RUNNING_IMAGES = 13;

    // const TIME_PER_JUMPING_FRAME = DURATION_JUMPING / NUMBER_OF_JUMPING_IMAGES;
    // const TIME_PER_RUNNING_FRAME = DURATION_RUNNING / NUMBER_OF_RUNNING_IMAGES;
  }
  draw() {
    if(!this.started){
      this.startTime = performance.now();
      this.started = true;
    }
    this.idle();
  }

  idle() {
    this.monkey.src =
    this.idleMonkeyPath + this.frameNumberIdle + ".png";
    this.context.drawImage(this.monkey, this.x, this.y, this.width, this.height);

  if (!this.timeWhenLastUpdate) {
    this.timeWhenLastUpdate = this.startTime;
  }
  this.timeFromLastUpdate = this.startTime - this.timeWhenLastUpdate;

  if (this.timeFromLastUpdate > this.timePerIdleFrame) { //how long the image renders until we render the new one
    this.monkey.src =
      this.idleMonkeyPath + this.frameNumberIdle + ".png";
    this.context.drawImage(this.monkey, this.x, this.y, this.width, this.height);

    this.timeWhenLastUpdate = this.startTime;
    if (frameNumberIdle >= this.numberOfIdleImages) {
      this.frameNumberIdle = 0;
    } else {
      this.frameNumberIdle++;
    }
  }
  }

  running() {}

  jumping() {}
}

// function step(startTime) {
//   if (!this.timeWhenLastUpdate) {
//     this.timeWhenLastUpdate = startTime;
//   }
//   this.timeFromLastUpdate = startTime - this.timeWhenLastUpdate;

//   if (this.timeFromLastUpdate > this.timePerIdleFrame) {
//     this.monkey.src = this.idleMonkeyPath + "/idle_" + this.frameNumberIdle + ".png";
//     context.drawImage(
//       monkey,
//       this.x,
//       this.y,
//       this.width,
//       this.height
//     );

//     this.timeWhenLastUpdate = startTime;
//     if (frameNumberIdle >= this.numberOfIdleImages) {
//       this.frameNumberIdle = 0;
//     } else {
//       this.frameNumberIdle++;
//     }
//   }
//   requestAnimationFrame(step)
// }

// window.requestAnimationFrame(step)
