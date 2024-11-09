// practice questions

// ## Question 1
// Write a program using the prompt function to take input of age as a value from the user and use alert to tell them if they can drive or not.

// let userInput = prompt("enter your age");
// userInput = Number(userInput);

// if (userInput >= 18) {
//   alert("you can drive");
// } else {
//   alert("you can not drive");
// }

/**
 * by using function
 */

// let uInput = prompt("enter your age");
// uInput = Number.parseInt(uInput);

// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };

// if (canDrive(uInput)) {
//   alert("you can drive");
// } else {
//   alert("you can not drive");
// }

// ***************************************************************************

// ## Question 2
// In question 1, use confirm to ask the user if they want to see the prompt again and want to get prompted again for the age.

// let userInput;

// do {
//   userInput = prompt("enter your age");
//   if (userInput >= 18) {
//     alert("you can drive");
//   } else {
//     alert("you can not drive");
//   }
// } while (confirm("do you want to check your age again"));

// ***************************************************************************

// ## Question 3
// In the previous question, use console.error to log the error of age is 0 or negative.

// let userInput;

// do {
//   userInput = prompt("enter your age");
//   if (userInput > 0) {
//     if (userInput >= 18) {
//       alert("you can drive");
//     } else {
//       alert("you can not drive");
//     }
//   } else {
//     console.error("not valid number for age");
//   }
// } while (confirm("do you want to check your age again"));

// ***************************************************************************

// ## Question 4
// Write a program to prompt the user to input a number and change the URL to `https://google.com` if the user enters a number greater than 4 **(Hint: location.href)**.

// let input = prompt("enter a number");
// if (input > 4) {
//   location.href = "https://www.google.com";
// }

// ***************************************************************************

// ## Question 5
// Change the background of the page to yellow, red or any other color based on user input through prompt.

// let colorInput = prompt("enter a color");

// document.body.style.background = colorInput;
