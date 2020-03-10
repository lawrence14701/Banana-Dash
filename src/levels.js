import Tile from './tile'


class LevelMaker {
    constructor(canvas,context) {
        this.canvas = canvas;
        this.context = context;
        this.levelCols = 11; // level width, in tiles
        this.levelRows = 9; // level height, in tiles
        this.tileSize = 32; // tile size, in pixels
        this.playerCol = 5; // player starting column
        this.playerRow = 4; // player starting column   
        this.levels = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
        this.platforms = []
    }

    draw_platforms() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "#333333";
        for(let i = 0;i< this.levelRows;i++){
            for(let j=0;j< this.levelCols;j++){
                if(this.levels[i][j]== 1){
                    this.platforms.push({
                      x: j*this.tileSize,
                      y: i*this.tileSize,
                      width: this.tileSize,
                      height: this.tileSize
                    });
                    this.context.fillRect(j*this.tileSize,i*this.tileSize,this.tileSize,this.tileSize);	
                }
            }
        }
    }
}


    export default LevelMaker

 


