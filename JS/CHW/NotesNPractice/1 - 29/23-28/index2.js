// alert("Enter the value of a: ");

// // let a = prompt("Enter a");

// // prompt can take 2nd argument - its a default value
// let a = prompt("Enter a", 786);

// document.write(a);

console.log("****************************");

let b = prompt(
  "If you write here and press ok in the next dialogue box, it will be written on the page"
);

let write = confirm("do you want to write something to the page");

if (write) {
  document.write(b);
} else {
  document.write("you have not written anything in the prompt");
}
