# how the string object looks like in javascript

In JavaScript, a string object is created using the String constructor, and it has properties and methods that allow for various operations on text. Although strings are usually created as primitive values (like "hello"), JavaScript temporarily wraps them in a String object when you use methods or properties on them.

Example of a String Object:
A string object can be created explicitly using new String(), but this is generally discouraged in favor of string literals.

- code
  let strObject = new String("Hello, World!");

Structure of a String Object:
Primitive Value: Holds the actual text.
Properties:
.length — shows the number of characters in the string.
Methods: Provides various operations, like .toUpperCase(), .slice(), .includes(), and more.
Example Usage:

- code
  let strObject = new String("Hello, World!");

// Accessing the primitive value:
console.log(strObject.valueOf()); // "Hello, World!"

// Using a property and a method:
console.log(strObject.length); // 13
console.log(strObject.toUpperCase()); // "HELLO, WORLD!"

Key Note:
Best Practice: Using string literals (let str = "Hello") is generally better because it’s simpler, faster, and avoids unnecessary object creation. JavaScript automatically wraps literals in String objects temporarily when you call properties or methods.
