// message = "Good global";

// function hello1() {
//   let message = "Good morning";

//   console.log("Hello 1 " + message);

//   let c = function hello2() {
//     console.log("I am c function " + message);
//   };
//   return c; // here function is returning with its lexical environment -> called as closure
//   //   closure e.g. a function with its lexical environment
//   //   lexical environment e.g its surrounding environment
// }

// c = hello1();
// c();

console.log("**********************************");

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
