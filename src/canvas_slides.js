


export function intro_screen(canvas, context) {
  // const image = document.getElementById('logo')
  // const width = 400;
  // const x = canvas.width/2 - (width/2)
  // const y = canvas.height - 400
  // context.drawImage(image, x, y, width, 200);
  
  context.font = "50px Impact";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText("Banana Dash", canvas.width / 2, canvas.height / 2);

  context.font = "20px Arial";
  context.fillText(
    "Press Enter To Start",
    canvas.width / 2,
    canvas.height / 2 + 60
  );
}


