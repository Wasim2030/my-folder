for (let i = 0; i < 7; i++) {
  console.log(i);
}

let sum = 0;
for (let i = 0; i < 6; i++) {
  // sum = sum + i;
  console.log("sum of " + sum + " + " + i + " is " + (sum = sum + i));
}

// ## sum of first n natural numbers

let sum1 = 0;
for (let i = 1; i < 6; i++) {
  sum1 = sum1 + i;
}
console.log(sum1);

// ## factorial

let fact = 1;
for (let i = 1; i < 6; i++) {
  fact = fact * i;
}
console.log(fact);

// ## for in loop

let obj = {
  sameer: 24,
  shahbaz: 87,
  avinash: 78,
  ashish: 74,
};

for (let names in obj) {
  // console.log(names);
  // console.log(obj[names]);
  console.log("Marks of " + names + " is " + obj.names); // will not work, refer Notes.md
  console.log("Marks of " + names + " is " + obj[names]);
}

// for of loop
for (let characters of "wasim") {
  console.log(characters);
}

let str = "wasim";
for (indx in str) {
  console.log(indx);
}

for (val of str) {
  console.log(val);
}

let arr = ["wasim", "akhter", "hello", "hhow"];
for (indx in arr) {
  console.log(indx);
}

for (val of arr) {
  console.log(val);
}

let obj1 = {
  name: "wasim",
  lName: "akhter",
  class: 88,
};
for (indx in obj1) {
  console.log(indx);
}

// for (val of obj1) {
//   // error for of loops through values of an iterable object
//   console.log(val);
// }
