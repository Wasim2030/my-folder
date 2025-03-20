/**
 * Question 1
 */

// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");

// btn1.addEventListener("click", function () {
//   alert("hey i am button 1");
// });
// btn2.addEventListener("click", function () {
//   alert("hey i am button 2");
// });
// btn3.addEventListener("click", function () {
//   alert("hey i am button 3");
// });

/**
 * Question 3
 */

// document.getElementById("google").addEventListener("click", function () {
//   let url = "https://google.com/search?q=javascript";
//   let win = window.open(url);
//   win.focus();
// });

// document.getElementById("google").addEventListener("click", function () {
//   window.location = "https://google.com";
// });

/**
 * Question 4
 * https://jsonplaceholder.typicode.com/
 */

// https://jsonplaceholder.typicode.com/todos/1

// const fetchContent = async (url) => {
//   let con = await fetch(url);
//   let a = await con.json();
//   return a;
// };

// setInterval(async function () {
//   let url = "https://jsonplaceholder.typicode.com/todos/1";
//   console.log(await fetchContent(url));
// }, 2000);

/**
 * Question 5
 */

setInterval(async () => {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 1000);
