import Paddle from "/src/paddle";
import Ball from "/src/ball";
import InputHandler from "/src/input";
import { buildLevel, level1 } from "/src/levels";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    let bricks = buildLevel(level1, this);
    this.gameObjects = [this.ball, this.paddle, ...bricks];
    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime));
  }
  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx));
  }
}
