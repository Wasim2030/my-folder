function loadScript(src, cb) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => cb(null, script);
  script.onerror = () =>
    cb(() => {
      throw new Error("failed");
    });
  document.head.append(script);
}

loadScript(
  "https://unpkg.com/react@18/umd/react.developmentt.js",
  (error, was) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(was.src + " Loaded");
    }
  }
);
