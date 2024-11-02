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

const cherry = async () => {
  console.log("Hey I am cherry and i am waiting...");
};

const main = async () => {
  console.log("Welcome to weather room");

  // phle promise.then use kr k result prapt hota tha,ab await laga k seedha apke variable k ander result aa gya

  // phle harry chalega, uski value "a" me aa jayegi
  // phir uske baad cherry chalega
  let a = await harry();
  let b = await cherry();

  // this will show error in console bcoz now a will have value
  //   a.then((value) => {
  //     console.log(value);
  //   });
};

main();
