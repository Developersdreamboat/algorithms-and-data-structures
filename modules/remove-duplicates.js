function removeDuplicatesFromSortedArray(array) {
  let currentElement = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] === currentElement) {
      array.splice(i, 1);
      i--; // as we delete duplicate element, array indexation changes, so we need to return to previous count
    } else {
      currentElement = array[i];
    }
  }

  return array;
}

module.exports = removeDuplicatesFromSortedArray;