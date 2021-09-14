function getIslandPoints(grid, point) {
  let stack = [point];

  while (stack.length > 0) {
    const [i, j] = stack.pop();

    if (grid[i]?.[j - 1] === '1') {
      stack.push([i, j - 1]);
      grid[i][j - 1] = '0';
    }
    if (grid[i]?.[j + 1] === '1') {
      stack.push([i, j + 1]);
      grid[i][j + 1] = '0';
    }
    if (grid[i - 1]?.[j] === '1') {
      stack.push([i - 1, j]);
      grid[i - 1][j] = '0';
    }
    if (grid[i + 1]?.[j] === '1') {
      stack.push([i + 1, j]);
      grid[i + 1][j] = '0';
    }
  }
}

function numIslands(grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        grid[i][j] = '0';

        getIslandPoints(grid, [i, j]);

        result++;
      }
    }
  }

  return result;
}
