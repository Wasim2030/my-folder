let a = {
  name: "harry",
  language: "javascript",
};

console.log(a);

console.log("*************************************");

let p = {
  run: () => {
    alert("run");
  },
};

// p.run();

// a.run(); // it will thorow an error. to run it use __proto__
// we can set prototype of any object

a.__proto__ = p; // e.g make prototype of a related to p
a.run();
