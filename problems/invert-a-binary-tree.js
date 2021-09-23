function invert(node) {
  if (!node) return null
  
  // DFS
  invert(node.left)
  invert(node.right)

  let temp = node.left 
  node.left = node.right
  node.right = temp


  // BFS
  // const stack = [node]

  // while(stack.length > 0) {
  //   const node = stack.pop()

  //   let temp = node.left
  //   node.left = node.right
  //   node.right = temp

  //   if (node.left) stack.push(node.left)
  //   if (node.right) stack.push(node.right)
  // }
}