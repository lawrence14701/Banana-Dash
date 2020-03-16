export default class Player {
  constructor(width, height,context) {
    this.context = context
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
 
  draw(x,y) {
     this.context.fillStyle = this.color;
     this.context.fillRect(x, y, this.width, this.height);
  }
}
