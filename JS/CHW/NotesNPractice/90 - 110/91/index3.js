const x = {
  name: "Harry",
  role: "js developer",
  exp: 66,
  show: function () {
    let that = this;
    setTimeout(function () {
      console.log(`the name is ${that.name}`);
      console.log(`the role is ${that.role}`);
    }, 2000);
  },
};

x.show();
