/**
 * notes - nodes also refers to comment nodes, text nodes, elements nodes
 *
 * element gives only elements nodes
 */

// Element only navigation

let a = document.body;

console.log("First child of b is: ", a.firstChild); // gives node e.g. text node
console.log("First Elemet Child of b is: ", a.firstElementChild); // gives element

const chageBgRed = () => {
  document.body.firstElementChild.style.background = "red";
};

// chageBgRed();

console.log(document.body.children); // gives elements only eg children elements

// Access <ul> element using document.body
const ul = document.body.firstElementChild.firstElementChild;
console.log(ul);
