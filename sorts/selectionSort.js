const array = [1,7,2,9,1,0,25,32,155,12,10,38,43,41,225,5,7,4,1,83]
let count = 0;

// O(n2), but faster then bubble sort

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minimumIndex = i;

    for (let j = i+1; j < array.length; j++) {
      count++;
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }

    const temp = array[i]
    array[i] = array[minimumIndex]
    array[minimumIndex] = temp
  }

  return array;
}

console.log(selectionSort(array))
console.log('count: ', count);
