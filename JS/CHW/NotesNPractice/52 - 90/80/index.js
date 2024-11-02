// parent consturtor is automatically called in child,(even though child have no constuctor)
// it will work something like this
/**
 *class Programmer extends Employee {
  constructor() {
    super();
  }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }

  //   overriding method
  requestsLeaves(leaves) {
    super.requestsLeaves(4);
    console.log("one extra is granted");
  }
}
 */

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
  //   constructor() {
  //     super();
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
