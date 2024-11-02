# Define getters and setters in short in javascript

Getters and setters in JavaScript are special methods that allow controlled access to object properties.

Getter: A method to retrieve (get) the value of a property.
Setter: A method to set (update) the value of a property, with optional validation.
They are defined using the get and set keywords.

Example

# code

class Person {
constructor(name) {
this.\_name = name;
}

get name() {
return this.\_name;
}

set name(newName) {
if (newName.length > 0) {
this.\_name = newName;
} else {
console.log("Name cannot be empty");
}
}
}

const person = new Person("Alice");
console.log(person.name); // "Alice" (uses getter)
person.name = "Bob"; // (uses setter)
console.log(person.name); // "Bob"

Here, name is accessed like a property but uses getter and setter methods to read and modify \_name.
