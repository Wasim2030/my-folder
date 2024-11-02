const x = {
  name: "Harry",
  role: "js developer",
  exp: 66,
  show: function () {
    console.log(this); // will give an object, e.g. object x
    setTimeout(function () {
      console.log(`the name is ${this.name}`);
      console.log(`the role is ${this.role}`);
    }, 2000);
  },
};

x.show();
