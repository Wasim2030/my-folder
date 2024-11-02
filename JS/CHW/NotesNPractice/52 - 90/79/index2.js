class Employee {
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
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }

  //   overriding method
  requestsLeaves(leaves) {
    super.requestsLeaves(4); // able to use method of Employee class in Programmer class without overriding
    console.log("one extra is granted");
  }
}

let e = new Programmer();

e.login();
e.requestsLeaves(3);
