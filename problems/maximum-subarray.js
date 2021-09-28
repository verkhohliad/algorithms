var maxSubArray = function(nums) {
  let maxSoFar = nums[0]
  let maxEndingHere = nums[0]
  
  for (let i = 1; i < nums.length; i++) {
      maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i])
      maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }
  
  return maxSoFar
};



var maxSubArray = function(nums) {
  let result = nums[0]
  let accumulator = nums[0]
  
  for (let i = 1; i < nums.length; i++) {
      if (accumulator + nums[i] > nums[i]) {
          accumulator = accumulator + nums[i]
      } else {
          accumulator = nums[i]
      }
      
      if (accumulator > result) {
          result = accumulator
      }
  }
  
  return result
};