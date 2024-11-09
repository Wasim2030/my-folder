// practice questions

// q1 Create an array of numbers and take input from the user to add numbers to this array.

// let arrNum1 = [12, 4, 989, 9];

// let num1 = prompt("enter a number");
// num1 = Number.parseInt(num1);

// arrNum1.push(num1);
// console.log(arrNum1);

// ***************************************************************************

// q2 Keep adding numbers to the array in Q1 until 0 is entered.

// let arrNum = [12, 4, 989, 9];

// let num = prompt("enter a number");
// num = Number.parseInt(num);

// while (num != 0) {
//   arrNum.push(num);
//   num = prompt("enter a number");
//   num = Number.parseInt(num);
// }

// console.log(arrNum);

// ***************************************************************************

// q3  Filter for numbers divisible by 10 from an array of numbers.

let arrDiv = [20, 33, 40, 88, 100];

let divFilter = arrDiv.filter((num) => {
  return num % 10 == 0;
});

console.log(divFilter);

// ***************************************************************************

// q4 ##Create an array of square of given numbers.

let arrSquare = [1, 2, 3, 4];

let newSquare = arrSquare.map((x) => {
  return x * x;
});

console.log(newSquare);

// ***************************************************************************

// ## Question 5
// Use the reduce method to calulate factorial of a given number from an array of first n natural numbers (n being the numbers whose factorial needs to be calculated).

let arrf = [1, 2, 3, 4, 5];

let arrfactorial = arrf.reduce((x, y) => {
  return x * y;
});

console.log(arrfactorial);
