let btn = document.getElementById("btn");

// btn.addEventListener("click", (e) => {
//   console.log("this is done by add event listener function");
//   console.log(e);
//   console.log(e.target);
//   console.log(btn.id);
//   console.log(btn.className || "not available");
// });

console.log("******************");

// btn.addEventListener("click", () => {
//   console.log("Hello World 1");
// });

// btn.addEventListener("click", () => {
//   console.log("Hello World 2");
// });

// let a = prompt("what is the number");

// if (a == "2") {
//   btn.removeEventListener("click", () => {
//     console.log("Hello World 1");
//   });
// }

/**
 * Notes - the above will not work bcoz, the function in both addEventListener and removeEventListener are not the same.
 * to make it work, both must be same, eg referncing to the same event
 */

console.log("******************");

// let x = function (e) {
//   console.log("Hello world 1");
// };

// let y = function (e) {
//   console.log("Hello world 2");
// };

// btn.addEventListener("click", x);

// btn.addEventListener("click", y);

// let a = prompt("what is the number");

// /**
//  * removeEventListener works only, when our function object is same, in both add and remove case
//  */
// if (a == "2") {
//   btn.removeEventListener("click", x);
// }

console.log("****************** Event object");

btn.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target); // returns target on which it was clicked
  console.log(e.type);
  console.log(e.currentTarget);
  console.log(e.clientX, e.clientY);
});
