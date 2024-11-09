// function

// function without arguments. not using return eg don't return any value.
// note : console.log is not used while calling function

function greet() {
  console.log("helllllllo");
}
greet();
// console.log(greet());

// *****************************************************************************

// function with arguments

function greet1(name) {
  console.log("hello " + name);
}
greet1();

// *****************************************************************************

// function with return eg output

function greet2(name) {
  return "hello " + name;
}
greet2("wasim"); // ????? its output is not showing (on using return)
console.log(greet2("wasim"));

// *****************************************************************************

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 6));

// *****************************************************************************

// function as variable (using arrow function - modern js)

let sum1 = (x, y) => {
  return x + y;
  console.log(x + y); // return is used  at last. put this log above retutn. its unrechable code as suggested by vs code
};
console.log(sum1(9, 9));

// anothe method of calling

let summation = sum1(22, 22);
console.log(summation);

// *****************************************************************************
