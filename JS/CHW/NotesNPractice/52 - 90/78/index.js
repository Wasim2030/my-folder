class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    console.log(this.name + " is running");
  }
  shout() {
    console.log(this.name + " is shouting");
  }
}

class Monkey extends Animal {
  eatBanana() {
    console.log(this.name + " is eating banana");
  }
}

let ani = new Animal("Bruno", "white");
let m = new Monkey("Chimpu", "Orange");

ani.shout();
m.eatBanana();
m.shout();

// ani.eatBanana(); // this will throw an error
