const x = {
  name: "Harry",
  role: "js developer",
  exp: 66,
  show: function () {
    // let that = this;
    setTimeout(() => {
      // arrow function automatically, this phle waale apne lexical parent se le leta hai, called as lexical this
      console.log(`the name is ${this.name}`);
      console.log(`the role is ${this.role}`);
    }, 2000);
  },
};

x.show();

// inside arrow function, this window object nhi hoga, wo iske bahar waale environment me jo this hoga wahi hoga. Ye apna this nahi banata, ye apne parent se this le leta hai
// arrow function uses its lexical this
