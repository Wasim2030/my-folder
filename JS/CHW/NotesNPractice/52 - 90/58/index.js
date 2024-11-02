/**
 * Promise.all(promises)
 */

let p1 = new Promise((resovle, reject) => {
  setTimeout(() => {
    // console.log("its p1");
    resovle("value 1");
  }, 1000);
});

let p2 = new Promise((resovle, reject) => {
  setTimeout(() => {
    // resovle("value 2");
    reject(new Error("error"));
  }, 2000);
});

let p3 = new Promise((resovle, reject) => {
  setTimeout(() => {
    resovle("value 3");
  }, 3000);
});

let promise_all = Promise.all([p1, p2, p3]);

promise_all.then((value) => {
  console.log(value);
});
