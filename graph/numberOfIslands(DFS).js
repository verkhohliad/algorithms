const options = [
  [0, +1],
  [0, -1],
  [+1, 0],
  [-1, 0],
];

function findIslands(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(grid, i, j);
      }
    }
  }

  return count;
}

function dfs(grid, i, j) {
  grid[i][j] = '0';

  for (let l = 0; l < options.length; l++) {
    const [k, t] = options[l];

    if (grid[i + k] && grid[i + k][j + t] === '1') {
      dfs(grid, i + k, j + t);
    }
  }
}

const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(findIslands(grid1));
console.log(findIslands(grid2));
