# what is html collection

An HTMLCollection is a collection of HTML elements that is live-updating and index-based. It’s automatically updated as the document changes, so it reflects the current state of the DOM at all times.

Key Points:
Live Collection: Changes in the document (like adding or removing elements) are immediately reflected in the HTMLCollection.
Indexed Access: You can access elements by index (like an array) or by the element’s name or id attribute.
Not an Array: Although it looks similar, an HTMLCollection is not a real array and lacks array methods like map() and forEach(). However, it can be looped over using for...of or a regular for loop.
How It’s Created:
HTMLCollections are typically created when you use DOM methods that return multiple elements, such as:

document.getElementsByTagName()
document.getElementsByClassName()
document.forms (for forms within the document)
Example:

- code

// Select all paragraphs in the document
let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs); // Logs an HTMLCollection of <p> elements

// Access the first paragraph
console.log(paragraphs[0]);

// Loop through the HTMLCollection
for (let p of paragraphs) {
console.log(p.textContent);
}

In this example:

paragraphs is an HTMLCollection of all <p> elements in the document.
It can be accessed by index (paragraphs[0]) or looped over to process each <p> element individually.
