async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 degree");
    }, 1000);
  });

  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 degree");
    }, 3000);
  });

  delhiWeather.then(alert); // another way is, e.g. delhiWeather jo vi return krne waala hai use ek variable me le sakta hun. e.g let delhiW = await delhiWeather.
  // iske baad jo vi delhiWeather resolve kregi ye promise value wo delhiW me aa jayegi
  bangloreWeather.then(alert);
}

console.log("Welcome to weather room");
harry();
