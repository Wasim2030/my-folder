// practice set chapter 3

// q1 print marks of students in an object using for loop

let marks = {
  wasim: 98,
  rohan: 70,
  aakash: 7,
};

// console.log(marks.wasim); // object.keys -> .keys must match the key name exactly
// console.log(marks["rohan"]); // object["keys"] -> [] - can be dynamic

// for (let i = 0; i < Object.keys(marks).length; i++) {
//   console.log(Object.keys(marks)[i]);
//   console.log(marks[Object.keys(marks)[i]]);
//   console.log(
//     "The Marks of " +
//       Object.keys(marks)[i] +
//       " is " +
//       marks[Object.keys(marks)[i]]
//   );
// }

// *******************************************************************

// q2 print above obj using for in loop

// for (let key in marks) {
//   console.log(key);
//   console.log(marks[key]);
//   console.log("Marks of " + key + " is " + marks[key]);
// }

// *******************************************************************

// q3 program to "try again" intil user enters a correct number

// let correctNo = 786;
// let num;
// while (num != correctNo) {
//   num = prompt("enter correct number");
// }
// console.log("you have entered a correct number");

// *******************************************************************

// q4 function to find the mean of 5 nums

// function mean(a, b, c, d, e) {
//   console.log((a + b + c + d + e) / 5);
// }
// mean(1, 2, 3, 4, 5);

// *******************************************************************

// q3 revisted

// let cn = 9;
// let gn = null;
// while (gn != cn) {
//   gn = prompt("enter a number");
//   if (gn == cn) {
//     break;
//   }
//   console.log("try again");
// }

// console.log("correct number inputted");

// *******************************************
