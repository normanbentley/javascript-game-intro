import { detectCollission } from "./collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");

    this.game = game;
    this.position = position;
    this.width = 80;
    this.height = 24;
    this.markedForDeletion = false;
  }
  update() {
    if (detectCollission(this.game.ball, this) === "horizontal") {
      this.markedForDeletion = true;
      this.game.ball.speed.x = -this.game.ball.speed.x;
    }
    if (detectCollission(this.game.ball, this) === "vertical") {
      this.markedForDeletion = true;
      this.game.ball.speed.y = -this.game.ball.speed.y;
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
