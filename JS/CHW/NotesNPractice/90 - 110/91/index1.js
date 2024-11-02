const x = {
  name: "Harry",
  role: "js developer",
  exp: 66,
  show: function () {
    setTimeout(function () {
      console.log(this); // window object e.g. global window object
      console.log(`the name is ${this.name}`);
      console.log(`the role is ${this.role}`);
    }, 2000);
  },
};

x.show();

// agar event k ander aap this ka use kr rhe ho to, this ek event k ander refer krega, us element ko jisne event ko receive kiya hai
