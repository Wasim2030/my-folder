// printing 1-100 using for loop

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// *************************************************************************

// sum of first n natural numbers

let n = prompt("enter a number");
n = Number.parseInt(n);
let sum = 0;
for (let i = 1; i < n; i++) {
  sum = sum + i;
}
console.log(sum);

// *************************************************************************

// factorial n

let num = prompt("enter a number");
num = Number.parseInt(num);
let fact = 1;
for (let i = 1; i < num; i++) {
  fact = fact * i;
}
console.log(fact);

// *************************************************************************

// for in loop

let marks = {
  wasim: 99,
  roshan: 89,
  sahil: 34,
};

for (names in marks) {
  console.log("Marks of " + names + " is " + marks[names]);
}

// *************************************************************************

// for of loop

let arr = ["wasim", "rashid", "sohail", "aamir"];
for (people of arr) {
  console.log(people);
}

// *************************************************************************
