const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d','e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

let count = 0

// FIFO

function breadthSearch(graph, start, end) {
  let queue = [start]

  while (queue.length > 0) {
    count++
    const current = queue.shift()

    if (!graph[current]) {
      graph[current] = []
    }
    if (graph[current].includes(end)) {
      return true
    } else {
      queue.push(...graph[current])
    }
  }

  return false
}

console.log(breadthSearch(graph, 'a', 'b'))
console.log('count: ', count);
