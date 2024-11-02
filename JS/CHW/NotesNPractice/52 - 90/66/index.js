// https://goweather.herokuapp.com/weather/Ny

// https://dummyjson.com/todos

let p = fetch("https://dummyjson.com/todos"); // it gives us a promise

// resolving promise with another promise aur iski value final result hoti hai
p.then((value1) => {
  console.log(value1);
  console.log(value1.status);
  console.log(value1.body);
  return value1.json();
  // final result in below
}).then((value2) => {
  console.log(value2); // got value here and can do anything with this value
});

// console.log(p);
