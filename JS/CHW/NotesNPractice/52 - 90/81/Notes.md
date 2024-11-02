# Define static method in short in javascript

A static method in JavaScript is a method defined on a class itself, not on instances of the class. Static methods are called directly on the class and are typically used for utility functions related to the class, rather than specific to any instance.

Example

# code

class MathUtils {
static add(a, b) {
return a + b;
}
}

console.log(MathUtils.add(3, 4)); // 7

In this example, add is a static method on MathUtils, called directly on the class (MathUtils.add()), not on an instance.
