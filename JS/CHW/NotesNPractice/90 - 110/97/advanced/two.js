// const hello = require("./one");

// hello.hello();
// hello.ahello("wsi");
// hello.ahello("akh");

/**
 * Other way - destructring
 */

const { hello, ahello } = require("./one");

hello();
ahello("akas");

/**
 * Notes - require("./one") is an object
 * module.exports = { hello, ahello }; ----> { hello, ahello }
 */
