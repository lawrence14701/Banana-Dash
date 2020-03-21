export function collisionCheck(character, platform) {
  //vector is distance between both the character and the platform
  var vectorX =
    (character.x + character.width / 2) - (platform.x + platform.width / 2); 
  var vectorY =
    character.y + character.height / 2 - (platform.y + platform.height / 2);

  var halfWidths = character.width / 3.2 + platform.width / 2; // i divided by 3 instead of 2 to account for the whitespace of pixels around my image
  var halfHeights = character.height / 2 + platform.height / 2; // i wanted to have a smaller representation of the characters width

  var collisionDirection = null;

  //checking if the vector is less than halfwidth AKA collision
  if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
    var offsetX = halfWidths - Math.abs(vectorX);
    var offsetY = halfHeights - Math.abs(vectorY);
    if (offsetX < offsetY) {
      if (vectorX > 0) {
        collisionDirection = "left";
        character.x += offsetX;
      } else {
        collisionDirection = "right";
        character.x -= offsetX;
      }
    } else {
      if (vectorY > 0) {
        collisionDirection = "top";
        character.y += offsetY;
      } else {
        collisionDirection = "bottom";
        character.y -= offsetY;
      }
    }
  }

  return collisionDirection;
}
