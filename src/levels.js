import Brick from "/src/brick";
const ROW_OFFSET = 50;
export function buildLevel(level, game) {
  let bricks = [];
  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        bricks.push(
          new Brick(game, {
            x: brickIndex * 80,
            y: rowIndex * 24 + ROW_OFFSET
          })
        );
      }
    });
  });
  return bricks;
}

export const level1 = [
  [0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1]
];
