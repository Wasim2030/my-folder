const f = () => {
  try {
    let a = 0;
    console.log("Program ran successfully");
    return; // finally will alway run
  } catch (error) {
    console.log("this is an error");
    console.log(p);
  } finally {
    console.log("I am a good boy");
    // finally is used for final clean up,
    // it may be used for => close the file, exit the loop, write to the log file
  }
};

f();

console.log("end"); // finally will run before "end" e.g. finally is executed just before the control returns to the outer code
