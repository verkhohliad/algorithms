/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var reverse = function(array, start, end) {
  while (start <= end) {
      [array[start], array[end]] = [array[end], array[start]]
      start++
      end--
  }
}

var rotate = function(nums, k) {
  if (!nums) return
  
  k %= nums.length
  reverse(nums, 0, nums.length - 1 - k)
  reverse(nums, nums.length - k, nums.length - 1)
  reverse(nums, 0, nums.length - 1)
};