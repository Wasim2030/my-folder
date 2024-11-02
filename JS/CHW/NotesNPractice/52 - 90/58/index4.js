/**
 * Promise.resolve(value)
 */

let promise_all = Promise.resolve(6);

promise_all.then((value) => {
  console.log(value);
});

let promise_reject = Promise.reject(new Error("errors....."));

promise_reject.then((value) => {
  console.log(value);
});
