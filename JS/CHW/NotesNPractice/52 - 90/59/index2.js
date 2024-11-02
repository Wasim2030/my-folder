async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 degree");
    }, 2000);
  });

  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 degree");
    }, 5000);
  });

  console.log("fetching delhi weather please wait");
  let delhiW = await delhiWeather;
  console.log("fetched delhi weather: " + delhiW);

  console.log("fetching banglore weather please wait");
  let bangloreW = await bangloreWeather;
  console.log("fetched banglore weather: " + bangloreW);

  return [delhiW, bangloreW];
}

console.log("Welcome to weather room");
let a = harry();

// console.log(a);

a.then((value) => {
  console.log(value);
});
