#

for (let names in obj) {

console.log("Marks of " + names + " is " + obj.names);
console.log("Marks of " + names + " is " + obj[names]);
}

why is obj.names is not working

# Answer

- The reason obj.names is not working as expected is that obj.names looks for a property literally named names in obj, but your loop is iterating through dynamic property names (keys) in obj, not a static property called names.

Explanation
In JavaScript, when accessing properties:

Dot notation (e.g., obj.names) tries to find a property with the exact name names inside obj. Since obj doesn't have a property literally named names, it returns undefined.

Bracket notation (e.g., obj[names]) allows you to use the value of names as a dynamic key. This means if names is "Math", obj[names] is equivalent to obj["Math"], allowing you to access the actual value associated with each key in obj.

Example Code:
Assuming obj is:

- code
  let obj = {
  Math: 95,
  Science: 90,
  English: 85
  };

for (let names in obj) {
console.log("Marks of " + names + " is " + obj.names); // This won't work
console.log("Marks of " + names + " is " + obj[names]); // This will work
}

- obj.names will return undefined because obj doesn't have a property called names.
  obj[names] will correctly return the marks for each subject because names holds each key (like "Math", "Science") during each iteration of the loop.
  So, use bracket notation obj[names] to dynamically access properties based on the variable's value.
