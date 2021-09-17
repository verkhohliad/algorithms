// v1
/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  // if (rootA === target) {
  //   return rootB;
  // }

  // const queueB = [rootB];
  // const queueA = [rootA];

  // while (queueA.length > 0) {
  //   const currentNode = queueA.pop();
  //   const currentNodeB = queueB.pop();

  //   for (let i = 0; i < currentNode.children.length; i++) {
  //     queueA.push(currentNode.children[i]);
  //     queueB.push(currentNodeB.children[i]);

  //     if (currentNode.children[i] === target) {
  //       return currentNodeB.children[i];
  //     }
  //   }
  // }

  const stackA = [rootA]
  const stackB = [rootB]

  while (stackA.length > 0) {
    const currentNodeA = stackA.pop()
    const currentNodeB = stackB.pop()

    if (currentNodeA === target) {
      return currentNodeB
    }

    stackA.push(...currentNodeA.children)
    stackB.push(...currentNodeB.children)
  }

  return null;
};

// v2

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  const indexes = [];

  let start = target;
  while (start) {
    if (start.parentElement) {
      const index = Array.from(start.parentElement.children).indexOf(start);

      indexes.push(index);
    }

    start = start.parentElement;
  }

  let root = rootB;
  for (let i = indexes.length - 1; i >= 0; i--) {
    root = root.children[indexes[i]];
  }

  return root;
};
