function myFunction(a, b) {
  return a - b;
}

console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction(10, 5)); // Output: 5
console.log(myFunction(NaN, 5)); //Output: NaN
console.log(myFunction(5, NaN)); // Output: NaN
console.log(myFunction(NaN, NaN)); // Output: NaN