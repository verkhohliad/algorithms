const arr = [10, 21, 10, 2, 4, 6, 8, 2, 88, 93, 21, 15]
let count = 0;

// O(n)

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count++
    if (array[i] === item) {
      return i;
    }
  }

  return null;
}

console.log(linearSearch(arr, 8));
console.log('count: ', count);
