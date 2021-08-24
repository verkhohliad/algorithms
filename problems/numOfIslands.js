
// v1 980ms, 77Mb
const getKey = (i, j) => `row(${i})col(${j})`

function getIslandPoints(grid, point) {
  let queue = [point]
  let landPoints = {
    [getKey(...point)]: point
  }

  while(queue.length > 0) {
    const [i, j] = queue.shift()

    if (Number(grid[i]?.[j-1]) && !landPoints[getKey(i, j-1)]) {
      queue.push([i, j-1])
      landPoints[getKey(i, j-1)] = [i, j-1]
    }
    if (Number(grid[i]?.[j+1]) && !landPoints[getKey(i, j+1)]) {
      queue.push([i, j+1])
      landPoints[getKey(i, j+1)] = [i, j+1]
    }
    if (Number(grid[i-1]?.[j]) && !landPoints[getKey(i-1, j)]) {
      queue.push([i-1, j])
      landPoints[getKey(i-1, j)] = [i-1, j]
    }
    if (Number(grid[i+1]?.[j]) && !landPoints[getKey(i+1, j)]) {
      queue.push([i+1, j])
      landPoints[getKey(i+1, j)] = [i+1, j]
    }

  }

  return landPoints
}

function numIslands(grid) {
  let result = 0
  let processed = {}

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (Number(grid[i][j]) && !processed[getKey(i,j)]) {

        processed = {
          ...processed,
          ...getIslandPoints(grid, [i, j])
        }

        result++
      }
    }
  }

  return result
}

// v2 72ms, 41.4Mb
function getIslandPoints(grid, point) {
  let stack = [point]

  while(stack.length > 0) {
    const [i, j] = stack.pop()

    if (grid[i]?.[j-1] === '1') {
      stack.push([i, j-1])
      grid[i][j-1] = '0'

    }
    if (grid[i]?.[j+1] === '1') {
      stack.push([i, j+1])
      grid[i][j+1] = '0'

    }
    if (grid[i-1]?.[j] === '1') {
      stack.push([i-1, j])
      grid[i-1][j] = '0'

    }
    if (grid[i+1]?.[j] === '1') {
      stack.push([i+1, j])
      grid[i+1][j] = '0'

    }

  }
}

function numIslands(grid) {
  let result = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        grid[i][j] = '0'

        getIslandPoints(grid, [i,j])

        result++
      }
    }
  }

  return result
}
