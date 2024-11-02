in JavaScript, a child class can use methods of its parent class without the need to override them or use the super keyword. The super keyword is only required when:

Calling the parent class's constructor in the child class's constructor.
Overriding a method and wanting to call the parent’s version of that method within the child’s overridden method.
If a method is inherited without overriding, the child class can simply call it directly.

Example Without Overriding
Here, the Dog class inherits the speak method from Animal without needing super.

# code

class Animal {
speak() {
console.log("Animal sound");
}
}

class Dog extends Animal {}

const myDog = new Dog();
myDog.speak(); // "Animal sound" - directly inherited from Animal

Example With Overriding and super
When overriding, super is used to call the parent’s version of the method.

# code

class Animal {
speak() {
console.log("Animal sound");
}
}

class Dog extends Animal {
speak() {
super.speak(); // Calls the parent class's speak method
console.log("Woof!");
}
}

const myDog = new Dog();
myDog.speak();
// Output:
// "Animal sound"
// "Woof!"

So, if you aren’t overriding the parent method in the child class, there’s no need to use super to access it; you can simply call the method.
