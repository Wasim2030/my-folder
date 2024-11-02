// when p1 completes then do this then() and when p2 completes (Of .then()). then do this - .then()

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("resolved after 2 sec");
    resolve(88);
  }, 2000);
});

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 2000);
  });
  return p2; // return value of p1.then
})
  .then((value) => {
    // when p2 promise is fulfilled then, run this .then()
    console.log(value);
    console.log("we are done");
    // below. it is a const value e.g. 2, not a promise -> we can still do .then() ->
    // js wil automatically convert into a promise (e.g. immediately resolved promise, which is being resolved with a true valu)
    return 2;
  })
  .then((value) => {
    console.log(value);
    console.log("now we are pakka done ");
  });
