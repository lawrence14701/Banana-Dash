export default class Platforms {
  constructor(canvas, context, width, height) {
    this.height = height;
    this.width = width;
    this.context = context;
    this.canvas = canvas;
    this.platforms = new Map();
  }
  define(name, x, y) {
    let platform = {
      x: this.canvas.width - x,
      y: this.canvas.height - y,
      width: this.width,
      height: this.height
    };
    this.platforms.set(name, platform);
  }
  draw_platforms(name) {
    this.context.fillStyle = "blue";
    let platform = this.platforms.get(name);
    this.context.fillRect(
      platform.x,
      platform.y,
      platform.width,
      platform.height
    );
  }
}
