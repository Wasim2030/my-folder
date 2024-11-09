Let’s break down how bracket notation works for both arrays and objects, step by step. We’ll look at how it’s used to access, modify, and add values.

1. Accessing Values in an Array Using Bracket Notation

let arr = [10, 20, 30];
let value = arr[1];
console.log(value); // Output: 20

Steps:
Define the array: let arr = [10, 20, 30];
JavaScript creates an array arr with three elements: 10, 20, and 30.
The elements are stored in consecutive positions (or indices): arr[0] = 10, arr[1] = 20, arr[2] = 30.
Access an element: arr[1]
The [] (bracket notation) is used to specify the index, 1, for accessing the second element of arr.
Retrieve the value: arr[1] returns 20, which is stored in value and printed.

2. Modifying an Array Value Using Bracket Notation

arr[1] = 25;
console.log(arr); // Output: [10, 25, 30]

Steps:
Specify the index and assign a new value: arr[1] = 25;
Here, arr[1] points to the element at index 1, which is 20.
Using = assigns 25 to this position, so arr[1] is now 25.
Update the array: The array arr now holds [10, 25, 30].

3. Accessing Values in an Object Using Bracket Notation

let obj = { name: "Alice", age: 25 };
let nameValue = obj["name"];
console.log(nameValue); // Output: "Alice"

Steps:
Define the object: let obj = { name: "Alice", age: 25 };
JavaScript creates an object obj with two properties: name and age.
obj["name"] holds the string "Alice", and obj["age"] holds the number 25.
Access a property: obj["name"]
The property name "name" is placed inside brackets to retrieve its value.
obj["name"] returns "Alice", which is stored in nameValue and printed.

4. Modifying an Object Property Using Bracket Notation

obj["age"] = 26;
console.log(obj); // Output: { name: "Alice", age: 26 }

Steps:
Specify the property and assign a new value: obj["age"] = 26;
The bracket notation obj["age"] accesses the age property.
The = operator assigns 26 to obj["age"], updating the value.
Update the object: The object obj is now { name: "Alice", age: 26 }.

5. Adding a New Property to an Object Using Bracket Notation

obj["city"] = "New York";
console.log(obj); // Output: { name: "Alice", age: 26, city: "New York" }

Steps:
Specify a new property and assign a value: obj["city"] = "New York";
Here, obj["city"] does not exist yet, so JavaScript creates this new property within obj.
The = assigns "New York" to obj["city"].
Update the object: The object obj now includes the new property: { name: "Alice", age: 26, city: "New York" }.

Summary of How Bracket Notation Works:
Arrays: [index] accesses or changes the value at the specified index.
Objects: ["propertyName"] accesses, changes, or adds a property with the specified name.
Dynamic Access: Bracket notation allows flexible access, especially useful in objects for dynamic properties using variables or computed strings.
