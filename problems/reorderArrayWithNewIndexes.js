// Time - O(n), Space O(1)
function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}

function sort(items, newOrder) { 
  let j

  for (let i = 0; i < items.length; i++) {
    j = newOrder[i]

    if (i !== j) {
      swap(items, i, j)
      swap(newOrder, i, j)
    }
  }
}

const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]
const res = sort(A, B)
console.log(A) // ['F', 'A', 'E', 'D', 'C', 'B'])