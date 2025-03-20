/**
 * video - 32
 */

console.log(document.body.firstChild); // text node
console.log(document.body.lastChild);
console.log(document.body.childNodes);

console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[5]);

console.log(document.body.childNodes.length);

console.log(document.body.hasChildNodes("text"));

/**
 * childNods looks like an array, But it is actually an collecton of nodeList
 * To change it to an array - use Array.from()
 */

console.log(document.body.childNodes);

let arr = Array.from(document.body.childNodes);

console.log(arr);

// console.log(typeof document.body.childNodes);
// console.log(typeof arr);

// arr[1].textContent = "wasim";

// document.body.childNodes[3].textContent = "akhter"; // ????????????
