import Brick from "/src/brick";
const ROW_OFFSET = 30;
export function buildLevel(level, game) {
  let bricks = [];
  level.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col === 1) {
        bricks.push(
          new Brick(game, { x: rowIndex * 52, y: rowIndex * 24 + ROW_OFFSET })
        );
      }
    });
  });
  console.log("br");
  return bricks;
}

export const level1 = [
  [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
];
