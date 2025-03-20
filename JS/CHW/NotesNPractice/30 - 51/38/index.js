// question 1

// let fElementOfNav = document.body.firstElementChild.firstElementChild;
// or
// let fElementOfNav = document.getElementsByTagName("nav")[0].firstElementChild;

// fElementOfNav.style.color = "red";

// question 2

// question 3

// let divElem = document.body.firstElementChild;

// divElem.firstElementChild.style.color = "green";
// divElem.lastElementChild.style.color = "green";

// question 4

let allLi = document.getElementsByTagName("li");
console.log(allLi);

// 1st method
Array.from(allLi).forEach((element) => {
  element.style.background = "yellow";
});

// 2nd method
// for (let li of allLi) {
//   li.style.background = "cyan";
// }

// 3rd method
// let arr = Array.from(allLi);
// for (a of arr) {
//   a.style.background = "red";
// }

// question 5

// Answer is (d) None of these
// It tells about closest, but not farthest
