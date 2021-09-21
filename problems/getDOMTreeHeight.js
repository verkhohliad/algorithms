// better version with time and space complexity 
function getHeight(tree) {
  if (!tree) return 0

  let height = 0

  function dfs(node, pointer = 0) {
    pointer++
    
    if (node.children.length === 0) {
      if (height < pointer) {
        height = pointer
      }
      return
    }

    for (let i = 0; i < node.children.length; i++) {
      dfs(node.children[i], pointer)
    }
  }

  dfs(tree)

  return height
}

// first normal version
function getHeight(tree) {
  if (!tree) return 0

  let endNodes = []
  let results = []

  // traversing the tree to get end nodes
  function dfs(node) {
    if (node.children.length === 0) {
      endNodes.push(node)
      return
    }

    for (let i = 0; i < node.children.length; i++) {
      dfs(node.children[i])
    }
  }

  dfs(tree)

  for (let i = 0; i < endNodes.length; i++) {
    let start = endNodes[i]
    let height = 0

    while (start) {
      start = start.parentElement
      height++
    }

    results.push(height)
  }

  return Math.max(...results)
}


// recursively solution (does not work properly)
function getHeight(tree) {
  if (!tree) return 0
  if (!tree.children) return 1

  let heights = []
  let index = 0

  const traverse = (node) => {
    if (!heights[index])
      heights[index] = 0

    heights[index]++

    if (node.children.length === 0) {
      index++
      return
    }

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i])
    }
  }

  traverse(tree)

  return Math.max(...heights)
}


const div = document.createElement('div')
div.innerHTML =`
<div>
  <p>
    <button>Hello</button>
    <span>
      <button>s</button>
    </span>
  </p>
</div>
<p>
  <span>World!</span>
</p>
<div>
  <p>
    <span>
      <div>
        <button>Hi there!</button>
      </div>
    </span>
  </p>
</div>
`


console.log(getHeight(div))