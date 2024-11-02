let a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(459);
  }, 2000);
});

let f = async () => {
  let b = await a;
  let c = await a;
  let d = await a;
  console.log(b, c, d);
};

// it will run
f();
