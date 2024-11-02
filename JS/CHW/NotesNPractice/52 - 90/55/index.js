/**
 * Promise = initially pending
 * resolve() -> fulfilled e.g promiseState -> fulfilled and PromiseResult will have resolved value
 * reject() -> rejected e.g promiseState -> rejected and PromiseResult will have rejected value e.g. error thrown
 */

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("i am a promise and i am resolved");
    resolve(true); // when resolved, giving a value
  }, 2000);
});

// console.log(p1);

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("i am a promise and i am rejected");
    reject(new Error("I am error")); // when rejected, giving an error
  }, 2000);
});

console.log(p1, p2);

// to get the value
p1.then((value) => {
  console.log("then value", value);
});

/**
 * the error is coming in console
 * catching that error => we will not get error in console
 */

// to catch the error
p2.catch((error) => {
  console.log("some error occured in p2");
  console.log("reject cb error", error);
});
