const hello = () => {
  console.log("Hello one");
};

const ahello = (name) => {
  console.log("Hello " + name);
};

module.exports = { hello, ahello };
// module.exports = { hello: hello, ahello: ahello }; // same as above
