console.log(document.getElementsByTagName("span")[0]);

console.dir(document.getElementsByTagName("span")[0]);

console.log(document.body.firstChild.nodeName);

console.log(document.body.firstElementChild.nodeName);

console.log("**************************");

console.log(first.innerHTML); // first is the id of span tag

// can set inner html - can get and set innerHTML

first.innerHTML = "<i>Hey i am italic</i>";

// getting outer html

console.log(first.outerHTML);

// setting outerHTML

first.outerHTML = "<div>Setting outer div</div>"; // check console Element section

console.log("**************************");

console.log(document.body.firstChild); // its a text node

console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);

console.log("**************************");

console.log(document.body.textContent); // gives only text. Can copy all text of website

// document.getElementsByClassName("hid")[0].hidden = false;
