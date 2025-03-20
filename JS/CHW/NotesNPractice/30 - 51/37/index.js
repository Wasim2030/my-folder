// console.log(id1); // not a good pracitce to use it directly

let id1 = document.getElementById("id1");

console.log(id1);

console.log(id1.matches(".class")); // false - does not matches selector

console.log(id1.matches("#id1"));
console.log(id1.matches(".box"));

console.log("*************************");

// let sp1 = document.getElementById("sp1");

console.log(sp1.closest("#sp1")); // console.log(id1); // not a good pracitce to use it directly

console.log("*************************");

console.log(id1.contains(sp1)); // console.log(id1); // not a good pracitce to use it directly
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));
