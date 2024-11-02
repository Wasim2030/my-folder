let promise = new Promise(function (resolve, reject) {
  console.log("Helllo Promise");
  resolve(56); // resolving with value 56
});

console.log("outside one");

console.log(promise);

console.log("************************");

// let promise = new Promise(function (resolve, reject) {
//   console.log("Helllo Promise");
//   reject("error"); // resolving with value 56
// });

// console.log("outside one");

// console.log(promise);

console.log("************************");
