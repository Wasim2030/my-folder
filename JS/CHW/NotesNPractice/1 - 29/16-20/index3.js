// map method

let arr38 = [3, 48, 2, 9, 98, 1];
let arrMap = arr38.map((element) => {
  console.log(element);
  // return element * element;
});

console.log(arrMap);

console.log("*********************************************");

// filter method

let arr39 = [3, 48, 2, 9, 98, 1];

let arr39Filter = arr39.filter((value) => {
  console.log(value < 10);
  return value < 10;
});

console.log(arr39Filter);

console.log("*********************************************");

// reduce method
// refer Notes1.md

let arr40 = [1, 2, 3, 4, 5];
let arr40Reduce = arr40.reduce((h1, h2) => {
  return h1 + h2;
});

console.log(arr40Reduce);

/**
 * let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => {
return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

Steps:
Initialize the accumulator: In this case, reduce() starts the accumulator at 0.
Iterate through the array: Each currentValue in numbers is added to accumulator.
Return the result: After all iterations, accumulator holds the total sum, 15.
 */
