import Tile from "./tile";
import Player from "./player";

class LevelMaker {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.levelCols = 16; // level width, in tiles
    this.levelRows = 15; // level height, in tiles
    this.tileSize = 50; // tile size, in pixels
    this.playerCol = 0; // player starting column
    this.playerRow = 0; // player starting column
    this.levelsIndex = 0;
    this.levels = [
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //2
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //3
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //4
        ["L", 0, 0, 0, 0, 0, 0, 0, "l", "_", "r", 0, "B", 0, 0, "R"], //5
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "l", "_", "r", 0, "R"], //6
        ["L", 0, 0, "l", "_", "r", 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //7
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //8
        ["L", 0, 0, 0, 0, 0, 0, "l", "_", "r", 0, 0, 0, 0, 0, "R"], //9
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //10
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "w", "w", 0, 0, "R"], //11
        ["L", 0, 0, 0, 0, 0, 0, 0, "l", "_", "_", "_", "r", 0, 0, "R"], //12
        ["L", 0, 0, "l", "_", "r", 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //13
        ["L", "P", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //14
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] //15
      ],
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //2
        ["L", 0, 0, 0, 0, 0, 'B', 0, 0, 0, 0, 0, 0, 0, 0, "R"], //3
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //4
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //5
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "l", "_", "r", 0, "R"], //6
        ["L", 0, 0, "l", "_", "r", 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //7
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //8
        ["L", 0, 0, 0, 0, 0, 0, "l", "_", "r", 0, 0, 0, 0, 0, "R"], //9
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //10
        ["L", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "w", "w", 0, 0, "R"], //11
        ["L", 0, 0, 0, 0, 0, 0, 0, "l", "_", "_", "_", "r", 0, 0, "R"], //12
        ["L", 0, 0, "l", "_", "r", 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //13
        ["L", "P", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "R"], //14
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] //15
      ]
    ];
    // 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10,11,12,13,14,15,16
    this.platforms = {
      tiles: [],
      bananas: []
    };
  }

  draw(x, y, width, height, url) {
    let image = new Image();
    image.src = "/src/img/" + url;
    this.context.drawImage(image, x, y, width, height);
  }

  draw_platforms() {
    if (this.levelsIndex === this.levels.length) return //don't run code if the levels are finished
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let level = this.levels[this.levelsIndex]; //single level
  

    for (let i = 0; i < this.levelRows; i++) {
      for (let j = 0; j < this.levelCols; j++) {
        let x = j * this.tileSize;
        let y = i * this.tileSize;
        if (this.levelsIndex === 1) {
        }
        if (level[i][j] === 1) {
          this.platforms.tiles.push({
            x: x,
            y: y,
            width: this.tileSize,
            height: this.tileSize
          });
          this.draw(x, y, this.tileSize, this.tileSize, "tiles/grass.png");
        }
        if (level[i][j] === "w") {
          this.platforms.tiles.push({
            x: x,
            y: y,
            width: this.tileSize,
            height: this.tileSize
          });
          this.draw(x, y, this.tileSize, this.tileSize, "tiles/wooden_box.png");
        }
        if (level[i][j] === "l") {
          this.platforms.tiles.push({
            x: x,
            y: y,
            width: this.tileSize,
            height: this.tileSize
          });
          this.draw(
            x,
            y,
            this.tileSize,
            this.tileSize,
            "tiles/platform_edge_left.png"
          );
        }
        if (level[i][j] === "_") {
          this.platforms.tiles.push({
            x: x,
            y: y,
            width: this.tileSize,
            height: this.tileSize
          });
          this.draw(x, y, this.tileSize, this.tileSize, "tiles/platform.png");
        }
        if (level[i][j] === "r") {
          this.platforms.tiles.push({
            x: x,
            y: y,
            width: this.tileSize,
            height: this.tileSize
          });
          this.draw(
            x,
            y,
            this.tileSize,
            this.tileSize,
            "tiles/platform_edge_right.png"
          );
        }
        if (level[i][j] === "R") {
          this.platforms.tiles.push({
            x: x,
            y: y,
            width: this.tileSize,
            height: this.tileSize
          });
          this.draw(x, y, this.tileSize, this.tileSize, "tiles/right.png");
        }
        if (level[i][j] === "L") {
          this.platforms.tiles.push({
            x: x,
            y: y,
            width: this.tileSize,
            height: this.tileSize
          });
          this.draw(x, y, this.tileSize, this.tileSize, "tiles/left.png");
        }
        if (level[i][j] === "B") {
          this.platforms.bananas.push({
            x: x,
            y: y,
            width: this.tileSize,
            height: this.tileSize
          });
          this.draw(
            x,
            y,
            this.tileSize,
            this.tileSize,
            "collectable/banana.png"
          );
        }
      }
    }
  }

  start() {
    if (this.levelsIndex === this.levels.length) return; //dont run code if levels are finished
    const level = this.levels[this.levelsIndex]; //single level

    for (let i = 0; i < this.levelRows; i++) {
      for (let j = 0; j < this.levelCols; j++) {
        if (level[i][j] === "P") {
          this.playerRow = i;
          this.playerCol = j;
        }
      }
    }
    var playerXPos = this.playerCol * this.tileSize; // converting X player position from tiles to pixels
    var playerYPos = this.playerRow * this.tileSize; // converting Y player position from tiles to pixels
    return [playerXPos, playerYPos];
  }

  nextLevel() {
    this.platforms = {
      tiles: [],
      bananas: []
    };
    this.levelsIndex += 1;
  }
}

export default LevelMaker;
