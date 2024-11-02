// writing childs own constructor

class Employee {
  constructor(name) {
    console.log(`${name} Employee constructor is here`);
    this.name = name;
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
  // this constructor will throw error. We have to run super() with its arguments for this
  constructor(name) {
    // this.name = name; // it can't be used before super(), else throws error
    super(name);
    console.log(
      `${name} Programmer constructor is here. This is a newly written constuctor`
    );
  }

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
