import './styles/index.scss';
import SpriteSheet from './sprite_sheet'
import { loadImage } from './loaders.js'

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

loadImage('/src/img/tile.png')
.then(image => {
    const sprites = new SpriteSheet(image,25,25);
    ///////////
    //DEFINE//
    //////////
    sprites.define('ground',0,0)
    sprites.define('sky', 0, 0)
    ///////////
    //DRAW////
    /////////
    sprites.draw('ground',context,45,62)
})