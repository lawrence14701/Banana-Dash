import Tile from "./tile";
import Player from "./player";

class LevelMaker {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.levelCols = 16; // level width, in tiles
    this.levelRows = 15; // level height, in tiles
    this.tileSize = 50; // tile size, in pixels
    this.playerCol = 2; // player starting column
    this.playerRow = 14; // player starting column
    this.levels = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //2
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //3
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //4
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //5
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //6
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //7
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //8
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //9
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //10
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //11
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //12
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //13
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //14
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] //15
    ];
    // 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10,11,12,13,14,15,16
    this.platforms = [];
  }

  draw_platforms() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "#333333";
    for (let i = 0; i < this.levelRows; i++) {
      for (let j = 0; j < this.levelCols; j++) {
        let x = j * this.tileSize;
        let y = i * this.tileSize;
        if (this.levels[i][j] == 1) {
          this.platforms.push({
            x: x,
            y: y,
            width: this.tileSize,
            height: this.tileSize
          });
          this.context.fillRect(
            j * this.tileSize,
            i * this.tileSize,
            this.tileSize,
            this.tileSize
          );
        }
      }
    }
  }

  start() {
    var playerXPos = this.playerCol * this.tileSize; // converting X player position from tiles to pixels
    var playerYPos = this.playerRow * this.tileSize; // converting Y player position from tiles to pixels
    return [playerXPos,playerYPos];
  }
}

export default LevelMaker;
