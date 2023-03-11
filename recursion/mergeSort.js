function mergeSort(array) {
  // base case
  if (array.length < 2) {
    return array;
  }
  // recursive case
  else {
    const half = Math.ceil(array.length / 2);  
    const firstHalf = array.slice(0, half);
    const secondHalf = array.slice(half);
    const firstHalfSorted = mergeSort(firstHalf);
    const secondHalfSorted = mergeSort(secondHalf);
    const mergedArray = merge(firstHalfSorted, secondHalfSorted);
    return mergedArray;
  }
}

function merge(first, second) {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      mergedArray.push(first[i++]);
    } else {
      mergedArray.push(second[j++])
    } 
  }
  for ( ; i < first.length; i++) {
    mergedArray.push(first[i]);
  }
  for ( ; j < second.length; j++) {
    mergedArray.push(second[j]);
  }
  return mergedArray;
}

console.log(mergeSort([1, 5, 6, 0, 2, 5, 10, 2, 0]));
console.log(mergeSort([-5, -2, 20, 343, 1, 0, 25]));
console.log(mergeSort([15, 0, 5, 7, 3, 7, 1]));