let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(459);
    }, 2000);
  });
};

// iife
// below,all the entities(a,b,c) will be executed and all the memory these variables are taking will be released
(async () => {
  let b = await a();
  console.log(b);

  let c = await a();
  console.log(c);

  let d = await a();
  console.log(d);
})();

// will not pollute global namespace
console.log(d); // d in not in the scope
