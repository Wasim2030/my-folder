// message = "Good global";

// function hello1() {
//   message = "Good morning";
//   {
//     console.log("Hello 1 " + message);
//   }
// }

// hello1();

console.log("***************************");

message = "Good global";

function hello1() {
  let message = "Good morning";
  {
    let message = "Good AfterNoon";
    console.log("Hello 1 " + message);
  }
  console.log(message);
}

hello1();
