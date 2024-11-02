// // destructuring

// let arr = [3, 5];

// // one way
// let a = arr[0];
// let b = arr[1];

// console.log(a);
// console.log(b);

// // dest
// let [x, y] = arr;
// console.log(x);
// console.log(y);

// console.log("**********************");

// let arr1 = [8, 23, 6];

// let [e, f, g, h] = arr1;
// // console.log(e, f, g, h);

// console.log("**********************");

let arr2 = [4, 9, 8, 23, 6, 20];

let [a1, a2, ...rest] = arr2;
// console.log(a1, a2);

// rest
console.log(a1, a2, rest); // in an array

// console.log("**********************");

let arr3 = [4, 9, 8, 23, 6, 20];

let [a, , , ...rest1] = arr3;

console.log(a, rest1);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
