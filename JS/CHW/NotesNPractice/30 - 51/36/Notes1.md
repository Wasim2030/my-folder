# where is document.getElementById in window object

The document.getElementById method is part of the document object, which itself is a property of the window object in the browser. Since window is the global object in web browsers, properties and methods of window can be accessed directly without explicitly writing window. in front of them.

Hierarchy:
The window object is the global object representing the browser window.
document is a property of window, representing the HTML document loaded in the window.
getElementById is a method of document for accessing elements by their id attribute.
Accessing getElementById:

1. Direct Access:

javascript
Copy code
let element = document.getElementById("example"); // Directly accessing on `document`

2. Using the Full Path:

javascript
Copy code
let element = window.document.getElementById("example"); // Full path through `window`

Explanation:
Since document is a property of window, calling document.getElementById is equivalent to window.document.getElementById. However, in most cases, you don’t need to prefix it with window. because the document object is directly accessible in the global scope.
