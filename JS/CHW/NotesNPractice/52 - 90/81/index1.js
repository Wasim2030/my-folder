class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`Animal ${this.name} is walking`);
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

// can also use capitalized mehtod on animal here
let j = new Animal(Animal.capitalize("jack"));
let t = new Animal(Animal.capitalize("tack"));

j.walk();
t.walk();
