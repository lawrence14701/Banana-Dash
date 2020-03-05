export default class SpriteSheet {
  constructor(image, w = 128, h = 128) {
    this.image = image;
    this.width = w;
    this.height = h;
  }

  draw(context, x, y) {
    context.drawImage(this.image, x, y);
  }

}
