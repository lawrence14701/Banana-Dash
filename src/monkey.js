export default class Monkey {
  constructor(width, height,cropCordX,cropCordY) {
    this.width = width;
    this.height = height;
    this.idle = this.idle();
  }

  loadImage(png) {
    const img = new Image();
    img.src = 'src/img/' + png
  }

  idle() {
    let frameArray = [];
    let numberOfFrames = 17
    for (let frameNumber = 0; frameNumber < numberOfFrames; frameNumber++) {
        frameArray.push(this.loadImage('idle/idle_' + frameNumber + '.png'))
        frameNumber ++
    }
    return frameArray
  }

  runRight(x, y) {

  }

  runLeft(x, y) {

  }

  jump(x, y) {

  }
}
