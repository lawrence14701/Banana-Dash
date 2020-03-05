// var canvas
// var context
// var ballX = 75;
// var ballY = 75;
// var ballSpeedX = 5;
// var ballSpeedY = 5;

// const PADDLE_WIDTH = 100;
// const PADDLE_THICKNESS = 10;
// const PADDLE_DIST_FROM_EDGE = 60; //10% height of canvas
// var paddleX = 400;

// function updateMousePos(evt){
//     var rect = canvas.getBoundingClientRect();
//     var root = document.documentElement
//     var mouseX = evt.clientX - rect.left - root.scrollLeft;
//     // var mouseY = evt.clientY - rect.top - root.scrollTop;
//     paddleX = mouseX - PADDLE_WIDTH/2;
// }

// window.onload = function () {
//     canvas = document.getElementById('myCanvas')
//     context = canvas.getContext('2d');
//     var framesPerSecond = 30;
//     setInterval(updateAll, 1000/framesPerSecond);

//     canvas.addEventListener('mousemove', updateMousePos)
// }

// function updateAll(){
//     moveAll();
//     drawAll();
// }

// function ballReset(){
//     ballX = canvas.width/2
//     ballY = canvas.height/2;
// }

// function moveAll(){
//     ballX+= ballSpeedX
//     ballY += ballSpeedY
//     if(ballX > canvas.width){
//         ballSpeedX *= -1;
//     }
//     if (ballX < 0) {
//     ballSpeedX *= -1;
//     }
//     if (ballY < 0) {
//       ballSpeedY *= -1;
//     }
//     if(ballY > canvas.height){
//         ballReset()
//     }

//     var paddleTopEdgeY = canvas.height - PADDLE_DIST_FROM_EDGE;
//     var paddleBottomEdgeY = paddleTopEdgeY + PADDLE_THICKNESS
//     var paddleLeftEdgeX = paddleX
//     var paddleRightEdgeX = paddleTopEdgeY + PADDLE_THICKNESS;
// }

// function drawAll(){
//     colorRect(0, 0, canvas.width, canvas.height, 'black');
//     colorCircle(ballX, ballY, 10, 'white');
//     colorRect(paddleX, canvas.height - PADDLE_DIST_FROM_EDGE,PADDLE_WIDTH,PADDLE_THICKNESS,'white')
// }

// //////////////////////////////
// //draw ball and background////
// /////////////////////////////
// function colorRect(topLeftX, topLeftY,boxWidth, boxHeight, fillColor){
//      context.fillStyle = fillColor;
//      context.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
// }

// function colorCircle(centerX, centerY, radius, fillColor){
//       context.fillStyle = fillColor;
//       context.beginPath();
//       context.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
//       context.fill();
// }
