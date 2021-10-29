export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 20;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }
  draw(ctx) {
    ctx.fillStyle = "hotpink";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // how much time has changed since this has been updated?
  // moves 5 frames a second
  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x += 5 / deltaTime;
  }
}
