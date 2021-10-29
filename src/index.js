import Paddle from "/src/paddle";
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

var paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
