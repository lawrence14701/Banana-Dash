class SpriteSheet {
    constructor(image,width,height){
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }

    define(name,x,y){ 
        const tile = document.createElement('canvas');
        tile.width = this.width;
        tile.height = this.height;
        tile
        .getContext('2d')
        .drawImage(
            this.image,
            x * this.width,
            y * this.height,
            this.width,
            this.height
        );
        this.tiles.set(name,tile)
    }

    draw(name,context,x,y){
        const tile = this.tiles.get(name)
        context.drawImage(tile,x,y)
    }
}

export default SpriteSheet;
