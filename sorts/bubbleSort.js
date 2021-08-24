const array = [1,7,2,9,1,0,25,32,155,12,10,38,43,41,225,5,7,4,1,83]
let count = 0;

// O(n2)

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      count++
      if (array[j+1] < array[j]) {
        const temp = array[j+1]
        array[j+1] = array[j]
        array[j] = temp
      }
    }
  }

  return array;
}

console.log(bubbleSort(array))
console.log('count: ', count);
