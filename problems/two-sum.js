

var twoSum = function(nums, target) {
  var map = {}
  
  for (let i = 0; i < nums.length; i++) {
      if (typeof map[nums[i]] === 'number')
          return [map[nums[i]], i]
      
      map[target - nums[i]] = i
  }
};

