// Introduction to js

// var and let
// let - block scoped

// using let
let name = "wasim";
{
  let name = "Akhter";
  console.log(name);
}
console.log(name);

// using var
var num = 11;
{
  var num = 100;
  console.log(num);
}
console.log(num);

console.log("**************************");

let a = null;
let b = 345;
let c = true;
let d = BigInt("567");

let e = BigInt("567") + BigInt("3");
let f = Symbol("I am a nice symbol");

let g = undefined;

console.log(a, b, c, d);
console.log(e);
console.log(f);

console.log(
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
  typeof g
);

console.log("***************************");

// question1 = create a variable of type string and try to add a number to it.
let str = "Wasim";
let num1 = 12;
let sum_of_string_and_number = str + num1;
console.log(sum_of_string_and_number); // it concatenates

// Question 2 = use typeof operator
console.log(typeof str);
console.log(typeof num1);
console.log(typeof sum_of_string_and_number); // it is also of string type

// Question 3 = create a const object. can you change the value of object to hold a number
// let obj = {
const obj = {
  name: "wasim",
  score: 1,
  interval: [10, 55, 89],
};
// obj = 99;
// it cant be changed as  Assignment to constant variable is not allowed
console.log(obj);

// Question 4 = in above - add a new key to the const object
obj["final_score"] = 89988786876;
console.log(obj); //it is allowed. But not the direct value

// Question 5 = write a program to create a dictionary of 5 words
let dict = {
  Absence: "The lack or unavailability of something or someone.",
  Approval: "Having a positive opinion of something or someone.",
  Answer: "The response or receipt to a phone call, question, or letter.",
  Attention: "Noticing or recognizing something of interest.",
  Amount: "A mass or a collection of something ",
  Baffle: "An event or thing that is a mystery and confuses.",
  Ban: "An act prohibited by social pressure or law. ",
  Banish: "Expel from the situation, often done officially.",
  "my word": "it is for testing",
};

console.log(dict.Absence);
console.log(dict["Approval"]);
console.log(dict["my word"]);
console.log(dict);
