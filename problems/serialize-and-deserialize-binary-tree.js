// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

// ITERABLE BFS approach

/**
 * @param {Node} root
 * @return {string}
 */
 function serialize(root) {
  const array = []
  const queue = [root]

  while (queue.length > 0) {
    const node = queue.shift()
    
    array.push(node?.value ?? null)

    if (!node) continue 

    queue.push(node.left)
    queue.push(node.right)
  }

  return array.join(',')
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  const array = str.split(',')

  if (!array) return null
  
  const [rootValue] = array.splice(0, 1)

  if (!rootValue) return null

  let root = new Node(rootValue)

  const queue = [root]
  
  while (array.length > 0) {
    const node = queue.shift()

    const [left, right] = array.splice(0, 2)

    if (left) {
      node.left = new Node(left)

      queue.push(node.left)
    }
    if (right) {
      node.right = new Node(right)
      
      queue.push(node.right)
    }
  }

  return root
}

const tree = deserialize('[1,2,3,4,null,null,5,6,7,8,null,null,null,null,9]')
console.log({ tree })
const str = serialize(tree)
console.log({ str })

const str2 = serialize(null)
const tree2 = deserialize(str2)

console.log({ str2, tree2 })


// recursion DFS with cool serializer
function serialize(root) {
  if (!root) return '_'

  return `${root.val},${serialize(root.left)},${serialize(root.right)}`
}

function deserialize(str) {
  const q = str.split(',')

  return dfs(q)

  function dfs(que) {
    if (!que.length) return null

    const n = que.shift()

    if (n !== '_') {
      const node = new Node(n)

      node.left = dfs(que)
      node.right = dfs(que)

      return node
    }

    return null
  }
}