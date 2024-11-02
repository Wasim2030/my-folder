class Employee {
  login() {
    console.log(`Employee has logged in`);
  }
  logout() {
    console.log(`Employee has logged out`);
  }
  requestsLeaves(leaves) {
    console.log(`Employee has resuested ${leaves} leaves`);
  }
}

class Programmer extends Employee {
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }
}

let e = new Employee();

// let e = new Programmer();

e.login();
e.requestsLeaves(3);
