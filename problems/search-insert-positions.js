// 61.68% faster, 83.15% less memory
 var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length
  let middle
  
  while (left <= right) {
      middle = Math.floor((right + left) / 2)
      
      if (!nums[middle]) return left
      
      if (nums[middle] === target) return middle
      
      if (nums[middle] > target) right = middle - 1
      
      if (nums[middle] < target) left = middle + 1
  }
  
  return left
};