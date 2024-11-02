class Animal {
  constructor(name) {
    // this._name = name; // can do this as -> this._name to this.name
    this.name = name;
  }
  fly() {
    console.log("Mai ud rha hun");
  }

  get name() {
    // return this._name; // but here we can not do this as -> this._name to this.name
    return this.name; // it will throw an error
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
