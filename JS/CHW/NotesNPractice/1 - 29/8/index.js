// # Practice Set

// ## Q1: Using Logical Operators
// Create a JavaScript program to check if a age is between 10 and 20.

let age = prompt("enter your age");
age = Number.parseInt(age);

if (age > 10 && age < 20) {
  console.log("your age is between 10 and 20");
} else {
  console.log("your age is not between 10 and 20");
}

// *********************************************************************************************

// ## Q2: Using Switch Case
// Demonsrate the use of switch case in JavaScript.

const day = prompt("enter today's day");

switch (day) {
  case "monday":
    console.log("today is monday");
    break;
  case "tuesday":
    console.log("today is tuesday");
    break;
  case "wednesday":
    console.log("today is wednesday");
    break;
  case "thursday":
    console.log("today is thursday");
    break;
  case "friday":
    console.log("today is friday");
    break;
  case "satarday":
    console.log("today is satarday");
    break;
  case "sunday":
    console.log("today is sunday");
    break;
  default:
    console.log("enter a valid day");
}

// *********************************************************************************************

// Q3: Divisible by 2 and 3
// Create a JavaScript program to check if a number is divisible by 2 and 3.

let num = prompt("enter a number");
num = Number.parseInt(num);

if (num % 2 == 0 && num % 3 == 0) {
  console.log("the entered number is divisible by 2 and 3");
} else {
  console.log("Try again. The entered number is not divisible by 2 and 3");
}

// *********************************************************************************************

// ## Q4: Divisible by 2 or 3
// Create a JavaScript program to check if a number is divisible by 2 or 3.

let num1 = prompt("enter a number");
num1 = Number.parseInt(num1);

if (num1 % 2 == 0 || num1 % 3 == 0) {
  console.log("the entered number is divisible by 2 or 3");
} else {
  console.log("Try again. The entered number is not divisible by 2 or 3");
}

// *********************************************************************************************

// ## Q5: Using Ternary Operator
// Print "you can drive" if the age is greater than or equal to 18, otherwise print "you cannot drive". Use the ternary operator.

let ageForDriving = prompt("enter the age");

let weatherDriveOrNot =
  ageForDriving > 18 ? "you can drive" : "you can not drive";
console.log(weatherDriveOrNot);
