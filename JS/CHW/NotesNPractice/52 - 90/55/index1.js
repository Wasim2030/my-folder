// let promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("done");
//   }, 3000);
// });

// promise.then(alert);

console.log("**************************************");

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    resolve(true);
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    reject(new Error("I am error"));
  }, 2000);
});

// to get the value
// p1.then((value) => {
//   console.log("then value", value);
// });

// catching error without using catch
p2.then(
  (value) => {
    console.log("success value", value);
  },
  (error) => {
    console.log("error value", error);
  }
);
