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

let a = new Animal("harry");

a.fly();

console.log(a.name);
a.name = "Jack"; // directly using setter
console.log(a.name);
