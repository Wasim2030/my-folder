class Animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log("Mai ud rha hun");
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

class Rabbit extends Animal {
  eatCarrot() {
    console.log("Eating carrot");
  }
}

let a = new Animal("harry");
let b = new Rabbit("harry");
let c = 88;

console.log(a instanceof Animal);
console.log(b instanceof Animal);
console.log(c instanceof Animal);
