let a = {
  name: "harry",
  language: "javascript",
  // if this method run() is not available in here, then it will be checked in its prototype
  run: () => {
    alert("run from a");
  },
};

let p = {
  run: () => {
    alert("run");
  },
};

// a ka protype p hai
a.__proto__ = p;
a.run();
