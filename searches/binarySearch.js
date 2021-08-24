const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 21, 22,23,24,25,26,27,28,29,30,31]
let count = 0;
let count2 = 0;

// O(log n)

function binarySearch(array, item, start = 0, end = array.length) {
  const middle = Math.floor((start + end) / 2)

  count++;

  if (array[middle] === item) {
    return middle;
  }

  if (array[middle] > item) {
    return binarySearch(array, item, start, middle - 1);
  } else if (array[middle] < item) {
    return binarySearch(array, item, middle + 1, end);
  }
}

function binarySearchLoop(array, item) {
  let start = 0;
  let end = array.length;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    count2++;

    if (array[middle] === item) {
      return middle;
    }

    if (array[middle] > item) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return null;
}

console.log(binarySearch(array, 21))
console.log('count: ', count);

console.log(binarySearchLoop(array, 15))
console.log('count 2: ', count2);

