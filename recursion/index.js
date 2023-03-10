function fibsRec(quantity) {
  // base cases
  if (quantity < 2) {
    return "ERROR";
  } else if (quantity === 2) {
    return [0, 1];
  }
  // recursive case
  let array = fibsRec(quantity - 1);
  array.push(array[array.length - 2] + array[array.length - 1])

  return array;
}

console.log(fibsRec(0));
console.log(fibsRec(5));
console.log(fibsRec(8));
console.log(fibsRec(20));