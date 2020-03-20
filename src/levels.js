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
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], //1
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //2
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //3
        [7, 'B', 11, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //4
        [7, 4, 3, 3, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //5
        [7, 0, 0, 0, 0, 0, 4, 3, 5, 0, 0, 0, 0, 0, 0, 6], //6
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 5, 0, 0, 0, 6], //7
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 6], //8
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 5, 0, 6], //9
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 6], //10
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 6], //11
        [7, 0, 0, 0, 0, 9, 0, 2, 2, 2, 2, 0, 0, 0, 0, 6], //12
        [7, 0, 0, 4, 3, 3, 3, 3, 3, 3, 3, 5, 0, 0, 0, 6], //13
        [7, "P", 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 6], //14
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] //15
      ],
      [
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], //1
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //2
        [7, 0, 0, 0, 0, 0, 'B', 0, 0, 0, 0, 0, 0, 0, 0, 6], //3
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //4
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //5
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 5, 0, 6], //6
        [7, 0, 0, 4, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //7
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //8
        [7, 0, 0, 0, 0, 0, 0, 4, 3, 5, 0, 0, 0, 0, 0, 6], //9
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //10
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 6], //11
        [7, 0, 0, 0, 0, 0, 0, 0, 4, 3, 3, 3, 5, 0, 0, 6], //12
        [7, 0, 0, 4, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //13
        [7, 'P', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6], //14
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
    let image = document.getElementById(url)
    debugger
    this.context.drawImage(image, x, y, width, height);
  }


  pushAndDraw(x,y,url){
    this.platforms.tiles.push({
      x: x,
      y: y,
      width: this.tileSize,
      height: this.tileSize
    });
    this.draw(x, y, this.tileSize, this.tileSize, url);
  }

  draw_platforms() {
    //p = player
    //b = banana
    //1 = grass
    //2 = wooden box
    //3 = middle platform
    //4 = left platform
    //5 = right platform
    //6 = right edge
    //7 = left edge
    if (this.levelsIndex === this.levels.length) return //don't run code if the levels are finished
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let level = this.levels[this.levelsIndex]; //single level
  

    for (let i = 0; i < this.levelRows; i++) {
      for (let j = 0; j < this.levelCols; j++) {
        let x = j * this.tileSize;
        let y = i * this.tileSize;
        let position = level[i][j]
        //platforms
        if (position === 1) this.pushAndDraw(x,y,'grass')
        if (position === 2) this.pushAndDraw(x,y,'woodenBox') 
        if (position === 4) this.pushAndDraw(x,y,'platformEdgeLeft')
        if (position === 3) this.pushAndDraw(x,y,'platform')
        if (position === 5) this.pushAndDraw(x,y,'platformEdgeRight')
        if (position === 6) this.pushAndDraw(x,y,'right')
        if (position === 7) this.pushAndDraw(x,y,'left')
        if (position === 8) this.pushAndDraw(x, y, "dirt");

        

        //environment
        if(position === 9) this.draw(x,y,50,60,'bush')
        if (position === 11) this.draw(x, y, 60, 70, "flag");


        if (position === "B") {
          this.platforms.bananas.push({ //this is pushing to bananas array of platform hash
            x: x,
            y: y,
            width: this.tileSize,
            height: this.tileSize
          });
          this.draw(x, y, this.tileSize, this.tileSize, "banana");
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
