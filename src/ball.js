import { detectCollission } from "./collisionDetection";

export default class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.image = document.getElementById("img_ball");

    this.game = game;
    this.velocity = 5;
    this.speed = { x: this.velocity, y: this.velocity };
    this.position = { x: 10, y: 10 };
    this.size = 16;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    if (detectCollission(this, this.game.paddle) === "vertical") {
      this.speed.y = -this.speed.y;
    }
    if (detectCollission(this, this.game.paddle) === "horizontal") {
      this.speed.x = -this.speed.x;
    }
  }
}
