// make a as function, it will return new promise every time

let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(459);
    }, 2000);
  });
};

let f = async () => {
  let b = await a();
  console.log(b);

  let c = await a();
  console.log(c);

  let d = await a();
  console.log(d);
};

f();
