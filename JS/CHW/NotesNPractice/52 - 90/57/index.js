let p1 = new Promise((resolve, reject) => {
  console.log("Hey i am not resolved");
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

// console.log(p1);

p1.then(() => {
  console.log("congrats this promise is now resolved");
});

p1.then(() => {
  console.log("Hurray");
});

p1.then(() => {
  console.log("last........");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4); // this promise will be resolvd with 4
    }, 3000);
  });
}).then((value) => {
  console.log(value);
});
