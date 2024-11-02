class Animal {
  constructor(name) {
    // can also use capitalized mehtod on animal here
    this.name = Animal.capitalize(name);
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
