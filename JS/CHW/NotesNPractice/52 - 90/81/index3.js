class Animal {
  constructor(name) {
    // this.name = this.capitalize(name); => error => static method are not available for individual objects
    // this.name = capitalize(name); => also error
    // can be access with only class name e.g. Animal for ex-  this.name = Animal.capitalize(name);
    this.name = this.capitalize(name);
  }
  walk() {
    console.log(`Animal ${this.name} is walking`);
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

let j = new Animal("jack");
let t = new Animal("tack");

j.walk();
t.walk();

// this static method is not available for its object
console.log(j.capitalize("thisa")); // this does not work
