// console.log(window.document);

// getElementById - is in prototypes prototypes.... check

/**
 * by id
 */

// let cById = document.getElementById("firstcard");
// cById.style.color = "green";

/**
 * by className
 */

// let cTitle = document.getElementsByClassName("card-title")[0];
// cTitle.style.color = "red";

/**
 * query selector
 */

let qS = document.querySelectorAll(".card-title");
qS[0].style.color = "red";
qS[1].style.color = "aqua";
qS[2].style.color = "green";

// console.log(qS);

// **************************************

document.querySelector(".this").style.color = "blue";
document.querySelector(".this").style.background = "cyan";

// **************************************

console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card-title").getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));

console.log(document.getElementsByName("search"));
