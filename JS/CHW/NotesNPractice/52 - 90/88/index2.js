// global scope, let p

let p = "global"; // can access it inside function

function func() {
  let a = 6;
  console.log(p);
  console.log(a);
}

func();
console.log(p);
