let t = document.body.firstElementChild.firstElementChild;

console.log(t);

console.log(t.rows); // all rows in the form of html collection

/**
 * check explore t.caption -
 * innerHTML: "\n          Table of legends\n        "
 * innerText: "Table of legends"
 */
console.log(t.caption);

console.log(t.tHead);
console.log(t.tHead.firstElementChild); // explore its options - children, childNodes

console.log(t.tHead.firstElementChild.childNodes);

console.log(t.tFoot);

console.log(t.tBodies);

console.log("**************************");

console.log(t.rows[0].rowIndex);
