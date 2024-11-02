let a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(459);
  }, 2000);
});

let b = await a;
let c = await a;
let d = await a;

// will throw an error
console.log(b, c, d);
