// ########   looping through arrays

// foreach()

// let arr34A = [3, 48, 2, 9, 98, 1];
// for (let i = 0; i < arr34A.length; i++) {
//   console.log(arr34A[i]);
// }

// let arr34 = [3, 48, 2, 9, 98, 1];
// arr34.forEach((x) => {
//   console.log(x);
//   // console.log(typeof x);
// });

let arr35 = [3, 48, 2, 9, 98, 1];
arr35.forEach((y) => {
  console.log(y * y);
});

console.log("*******************************************************");

// from()

let str = "wasim";
let str1 = Array.from(str);
console.log(str);
console.log(str1);

console.log("*******************************************************");

// for in loop

let arr36 = [3, 48, 2, 9, 98, 1];
for (num in arr36) {
  console.log(num);
  // console.log(arr36[num]);
}
console.log(arr36);

console.log("*******************************************************");

// for of loop

let arr37 = [3, 48, 2, 9, 98, 1];
for (num of arr37) {
  console.log(num);
}
console.log(arr37);

// ***************************************************************************
