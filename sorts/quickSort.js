const array = [1,7,2,9,1,0,25,32,155,12,10,38,43,41,225,5,7,4,1,83]
let count = 0;

// O(n log n)

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

   const middle = Math.floor(array.length / 2);
   const value = array[middle];
   const arr1 = [];
   const arr2 = [];

   for (let i = 0; i < array.length; i++) {
     count++;

     if (array[i] > value) {
       arr2.push(array[i]);
     } else if (array[i] < value) {
       arr1.push(array[i]);
     }
   }

   return [
     ...quickSort(arr1),
     value,
     ...quickSort(arr2),
   ]
}

console.log(quickSort(array))
console.log('count: ', count);

