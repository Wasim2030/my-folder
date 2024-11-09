// conditionals

let input = prompt("ENTER a string");

if (input == "hello") {
  console.log("Hello World");
}

let input1 = prompt("ENTER a string");

if (input1 == "hello") {
  console.log("Hello World");
} else {
  console.log("good bye");
}

let input2 = prompt("ENTER a string");

if (input2 == "hello") {
  console.log("Hello World");
} else if (input2 == "goodbye") {
  console.log("good bye");
} else {
  console.log("invalid input");
}

let input3 = prompt("Enter a number");
if (input3 > 10) {
  console.log("Number is greater than 10");
} else if (input3 < 10) {
  console.log("Number is less than 10");
} else {
  console.log("Number is equal to 10");
}

const input4 = prompt("enter a string");
let res = input == "hello" ? "Hello World" : "Good bye";
console.log(res);
