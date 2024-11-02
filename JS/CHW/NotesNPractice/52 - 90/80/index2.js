class Employee {
  constructor(name) {
    console.log(`${name} Employee constructor is here`);
    // this.name = name;
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
  //   constructor(...args) {
  //     super(...args);
  //   }

  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }
  requestsLeaves(leaves) {
    super.requestsLeaves(4);
    console.log("one extra is granted");
  }
}

let e = new Programmer("Harry");

e.login();
e.requestsLeaves(3);
