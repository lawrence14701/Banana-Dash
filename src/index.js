import './styles/index.scss';

const canvas = document.getElementById("myCanvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


const ctx = canvas.getContext("2d"); //magic paint brush that creates 2d elements

ctx.fillRect(50,50,50,50);
ctx.fillRect(505, 50, 50, 50);
ctx.fillRect(50, 50, 50, 50);
ctx.fillRect(50, 50, 50, 50);

