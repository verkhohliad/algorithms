//Runtime: 84 ms, faster than 92.57% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
// Memory Usage: 48.6 MB, less than 33.90% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.

// recurstion
var lowestCommonAncestor = function(root, p, q) {
  if (root === null) {
      return 0;
  }
  
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  const mid = (root === p || root === q) ? 1 : 0
  
  if (typeof left !== 'number')
      return left
  if (typeof right !== 'number')
      return right
  
  if (left + right + mid === 2)
      return root
  
  return left + right + mid
};