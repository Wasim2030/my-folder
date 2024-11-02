// spread operator

let arr = [3, 5, 8];
let obj = { ...arr };

console.log(obj);

function sum(v1, v2, v3) {
  return v1 + v2 + v3;
}

console.log("*************************");

console.log(sum(...arr));

// explore mdn for spread

console.log("*************************");

let a = "the";
let b = "no";

const c = { a, b };
console.log(c);

console.log("*************************");
