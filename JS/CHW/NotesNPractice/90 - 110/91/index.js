// const x = {
//   name: "Harry",
//   role: "js developer",
//   exp: 66,
//   show: function () {
//     // this refers to this object e.g. x for normal js function
//     console.log(`the name is ${this.name}`);
//     console.log(`the role is ${this.role}`);
//   },
// };

// x.show();

console.log("**********************");

const x = {
  name: "Harry",
  role: "js developer",
  exp: 66,
  show: function () {
    setTimeout(function () {
      console.log(`the name is ${this.name}`); // the name is
      console.log(`the role is ${this.role}`); //the role is undefined
    }, 2000);
  },
};

x.show();
