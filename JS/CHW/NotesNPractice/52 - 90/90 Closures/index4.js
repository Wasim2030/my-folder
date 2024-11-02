function init() {
  var name = "Mozilla"; // name is a local variable created by init

  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }

  name = "Harry";
  return displayName;
}

let c = init();
c();

/**
 * When a closure is returned, then a function is returned e.g. displayName, usi k saath saath
 * uske lexical environment k references return hote hai, wo hardcoded value (e.g Mozilla) return nhi hoti hai. but ref variable of name is returned e.g. Harry
 */

/**
let c = init();
c();

jb hum log c = init(); kr rhe hai, jb ye function chal rha hai, to init() k ander saare local variable chale jayenge, lekin q k hum return kr rhe hai ek function ko, to function + uska lexical environment return kr diya jayega.
 */
