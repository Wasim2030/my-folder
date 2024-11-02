const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const success = true; // Simulating success or failure

    if (success) {
      resolve("Operation succeeded!"); // Fulfilled
    } else {
      reject("Operation failed."); // Rejected
    }
  }, 1000);
});

// The Promise object
console.log(myPromise); // Promise { <pending> }

// Using the Promise
myPromise
  .then((result) => console.log(result)) // Logs "Operation succeeded!" if fulfilled
  .catch((error) => console.error(error)); // Logs "Operation failed." if rejected
