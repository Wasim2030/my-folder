// function loadScript(src) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("Loaded script with src: ", src);
//   };
//   document.head.append(script);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
// );

/**
 * To run custom function instead of 
 *    script.onload = function () {
     console.log("Loaded script with src: ", src);
   };
 */

// function loadScript(src, cb) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("Loaded script with src: ", src);
//     cb(src);
//   };
//   document.head.append(script);
// }

// function hello(link) {
//   alert("hello world " + link);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
//   hello
// );

/**
 * Handling error. Change cdn
 */

function loadScript(src, cb) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded script with src: ", src);
    cb(null, src);
  };
  script.onerror = function () {
    console.log("Error loading with script with src: ", src);
    cb(new Error("src got some error"));
  };
  document.head.append(script);
}

function hello(error, link) {
  if (error) {
    console.log(error);
    return;
  }
  alert("hello world " + link);
}

loadScript(
  "https://cdn.jsdelivrrr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
  hello
);
