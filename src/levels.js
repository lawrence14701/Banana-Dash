
class LevelMaker {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.levelCols = 16; // level width, in tiles
    this.levelRows = 15; // level height, in tiles
    this.tileSize = 50; // tile size, in pixels
    this.playerCol = 0; // player starting column
    this.playerRow = 0; // player starting column

    this.done = false
    this.levelsIndex = 0;
    this.levels = [
      [
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        // [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, "B", 11, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 3, 5, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 9, 0, 2, 2, 2, 2, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 4, 3, 3, 3, 3, 3, 3, 5, 0, 0, 0, 8],
        [8, 'P', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 2, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 12, 0, 8],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ],
      [
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        // [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "B", 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 4, 3, 3, 3, 3, 5, 0, 0, 0, 8],
        [8, 4, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 4, 3, 3, 5, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 8],
        [8, "P", 0, 0, 12, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 8],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ],
      [
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        // [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 'B', 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [8, "P", 0, 2, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 8],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ]
    ];
    this.platforms = {
      tiles: [],
      bananas: []
    };
  }


  draw(x, y, width, height, url) {
    let image = document.getElementById(url)
    this.context.drawImage(image, x, y, width, height);
  }
  drawSides(x,y){ //invisible boundaries to map
     this.platforms.tiles.push({
       x: x,
       y: y,
       width: 1,
       height: 3
     });
    this.context.fillStyle = "rgba(225,225,225,0.5)";
    this.context.fillRect(x, y, this.width, this.height);
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
        if (position === 8) this.drawSides(x, y);

        //environment
        if(position === 9) this.draw(x,y,50,60,'bush')
        if (position === 11) this.draw(x, y, 60, 70, "flag");
        if (position === 12) this.draw(x, y-100, 100, 170, "tree");



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
    if(this.levels.length === this.levelsIndex){
      this.done = true
    }
  }
}

export default LevelMaker;
