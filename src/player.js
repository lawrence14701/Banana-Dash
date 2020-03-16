export default class Player {
  constructor(x,y,width, height,context) {
    this.context = context
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 5;
    this.velX = 0;
    this.velY = 0;
    this.color = "#ff0000";
    this.jumping = false;
    this.grounded = false;
    this.jumpStrength = 7;
  }
  draw() {
     this.context.fillStyle = this.color;
     this.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
