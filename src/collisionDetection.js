export function detectCollission(ball, gameObject) {
  let ballSides = {
    top: ball.position.y,
    right: ball.position.x + ball.size,
    bottom: ball.position.y + ball.size,
    left: ball.position.x,
    centerX: ball.position.x + ball.size / 2,
    centerY: ball.position.y + ball.size / 2
  };
  let objectSides = {
    top: gameObject.position.y,
    right: gameObject.position.x + gameObject.width,
    bottom: gameObject.position.y + gameObject.height,
    left: gameObject.position.x
  };

  let inlineVertically =
    ballSides.centerX >= objectSides.left &&
    ballSides.centerX <= objectSides.right;

  let inlineHorizontally =
    ballSides.centerY >= objectSides.top &&
    ballSides.centerY <= objectSides.bottom;

  let downwardCollision =
    ballSides.bottom >= objectSides.top &&
    inlineVertically &&
    ballSides.bottom <= objectSides.bottom;
  let upwardCollision =
    ballSides.top <= objectSides.bottom &&
    inlineVertically &&
    ballSides.top >= objectSides.top;
  let rightwardCollision =
    ballSides.right >= objectSides.left &&
    inlineHorizontally &&
    ballSides.right <= objectSides.right;
  let leftwardCollision =
    ballSides.left <= objectSides.right &&
    inlineHorizontally &&
    ballSides.left >= objectSides.left;
  if (leftwardCollision || rightwardCollision) {
    return "horizontal";
  } else if (downwardCollision || upwardCollision) {
    return "vertical";
  }
  return "";
}
