function myFunc(a, b) {
  if (b === 0) {
    return Infinity; // Or NaN, or throw a custom error
  } else if (a === 0) {
    return 0;
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Returns Infinity
console.log(myFunc(0,10)); //Returns 0
console.log(myFunc(10,2)); //Returns 5