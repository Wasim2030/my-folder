let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

// console.log(obj);

// console.table(obj );

// console.log("hey");

// console.info("hey this is an important info");

// console.table(console);

// note label must be same for time and timeEnd eg ("forLoop");

/*
console.time("forLoop");

// for (let p = 0; p < 3000; p++) {
//   console.log(p);
// }

console.timeEnd("forLoop");
*/

/**
 * compare for loop and while loop which runs faster
 */

console.time("forLoop");

for (let p = 0; p < 10; p++) {
  console.log(p);
}

console.timeEnd("forLoop");

console.time("whileLoop");

let p = 0;
while (p < 10) {
  console.log(p);
  p++;
}

console.timeEnd("whileLoop");

/**
 * check console sidebar - it has
 * errors - failed assertion will come under this. console.assert
 * warnings
 * info  - cosole.log and console.info both comes under this
 * messages
 * user messages
 *
 */
