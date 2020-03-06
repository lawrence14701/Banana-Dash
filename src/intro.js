export function intro_screen(canvas, context) {
  context.font = "50px Impact";
  context.fillStyle = "orange";
  context.textAlign = "center";
  context.fillText("Banana Dash", canvas.width / 2, canvas.height / 2);

  context.font = "20px Arial";
  context.fillText(
    "Press Enter To Start",
    canvas.width / 2,
    canvas.height / 2 + 50
  );
}
