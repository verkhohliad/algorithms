var sortedSquares = function(nums) {
  const result = []
  
  let i = 0
  let j = nums.length - 1
  
  for (let k = nums.length - 1; k >= 0; k--) {
      if (Math.abs(nums[i]) > Math.abs(nums[j])) {
          result[k] = nums[i]**2
          i++
      } else {
          result[k] = nums[j]**2
          j--
      } 
  }
  
  return result
};

// [-4,-1,0,3,10]
// [0,1,9,16,100]