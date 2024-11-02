//  quiz

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);

    script.onload = () => {
      resolve("script has been loaded");
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

let p1 = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
);

p1.then((value) => {
  console.log(value);
  return loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
  );
})
  .then((value) => {
    console.log("second script ready");
    console.log(value);
  })
  .catch((error) => {
    console.log("error loading this script");
  });
