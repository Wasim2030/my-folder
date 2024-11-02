# Define overriding constructor in short in javascript

Overriding a constructor in JavaScript happens when a subclass defines its own constructor, replacing the constructor inherited from its parent class.

When a subclass has its own constructor, it must call super() as the first line to invoke the parent class's constructor, allowing it to inherit the parent class's properties and methods.

Example

# code

class Animal {
constructor(name) {
this.name = name;
}
}

class Dog extends Animal {
constructor(name, breed) {
super(name); // Calls Animal's constructor
this.breed = breed;
}
}

const myDog = new Dog("Buddy", "Labrador");
console.log(myDog.name); // "Buddy"
console.log(myDog.breed); // "Labrador"

Here, the Dog subclass overrides the constructor of Animal to add a new property, breed, while still calling the Animal constructor to set name.
