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

module.exports = mergeSort;