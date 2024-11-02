/**
 * throwing custom error
 */

// try {
//   throw new Error("haary is not good");
// } catch (error) {
//   console.log(error);
//   console.log(error.name);
//   console.log(error.message);
// }

console.log("******************************");

// throw new Error("errrrros........");

console.log("******************************");

// try {
//   throw new ReferenceError("haary is not good");
// } catch (error) {
//   console.log(error);
//   console.log(error.name);
//   console.log(error.message);
// }

try {
  // console.log(harry);
  throw new ReferenceError("haary is not good");
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
