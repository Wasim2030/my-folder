class Employee {
  constructor() {
    console.log("Employee constructor is here");
  }
  login() {
    console.log(`Employee has logged in`);
  }
  logout() {
    console.log(`Employee has logged out`);
  }
  requestsLeaves(leaves) {
    console.log(`Employee has resuested ${leaves} leaves - auto approved`);
  }
}

class Programmer extends Employee {
  // if there is no constuctor in the child class, it is created automatically
  // arguments are also passed like this
  // ...args => any no of arguments passed as in parent
  //   constructor(...args) {
  //     super(...args);
  //   }

  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }

  //   overriding method
  requestsLeaves(leaves) {
    super.requestsLeaves(4);
    console.log("one extra is granted");
  }
}

let e = new Programmer();

e.login();
e.requestsLeaves(3);
