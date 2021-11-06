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
    ballSides.centerX <=d objectSides.right;

  let inlineHorizontally =
    ballSides.centerY >= objectSides.top &&
    ballSides.centerY <= objectSides.bottom;

  let downwardCollision =
    ballSides.bottom >= objectSides.top &&
    inlineVertically &&
    ballSides.top <= objectSides.top;
  let upwardCollision =
    ballSides.top <= objectSides.bottom &&
    inlineVertically &&
    ballSides.bottom > objectSides.bottom;
  if (downwardCollision || upwardCollision ) {
    ball.speed.y = -ball.speed.y;
  }

  let rightwardCollision =
    ballSides.right >= objectSides.left &&
    inlineHorizontally &&
    ball.left <= objectSides.left;
  let leftwardCollision =
    ballSides.left <= objectSides.right &&
    inlineHorizontally &&
    ballSides.right >= objectSides.right;
  if (leftwardCollision || rightwardCollision) {
    ball.speed.x = -ball.speed.x;
  }
}
