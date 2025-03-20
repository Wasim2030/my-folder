# element.firstChild gives first child element or node

The element.firstChild property in JavaScript returns the first child node of the specified element, not necessarily the first child element. In the DOM, a node can be an element, a text node, a comment, or other types of nodes.

Key Points:
firstChild returns the first node: This could be an element, text (e.g., whitespace or line breaks), or other types of nodes.
For the first child element specifically, you would use element.firstElementChild, which only returns the first child that is an element node (ignoring text nodes, comments, etc.).
Example:

- code

<div id="example">
  <p>Hello, world!</p>
</div>

<script>
  const div = document.getElementById("example");

  console.log(div.firstChild);          // Returns a text node (often whitespace)
  console.log(div.firstElementChild);    // Returns the <p> element
</script>

In this example:

div.firstChild might return a text node if there’s whitespace before the <p> element.
div.firstElementChild directly returns the <p> element, ignoring any text nodes or comments.
