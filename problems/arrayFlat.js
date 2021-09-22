
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
 function flat(arr, depth = 1) {
  if (depth === 0) {
    return arr
  }
  
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result.push(arr[i])
    } else if (Array.isArray(arr[i])) {
      result.push(...flat(arr[i], depth--))
    }
  }

  return result
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr))
// [1, 2, 3, [4]]

console.log(flat(arr, 1))
// [1, 2, 3, [4]]

console.log(flat(arr, 2))
// [1, 2, 3, 4]
