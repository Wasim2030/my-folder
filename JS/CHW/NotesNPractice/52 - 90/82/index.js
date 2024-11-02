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
}

let a = new Animal("harry");

a.fly();

// getter - aap directly, bina function call kiye a.name print kr sakte hai
console.log(a.name); // it seems like its an object(a) property(name)
