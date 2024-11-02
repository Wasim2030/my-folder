console.log(document.cookie);

document.cookie = "name=harry123434";
document.cookie = "name1=harry1";

let key = prompt("enter your key");
let value = prompt("enter your value");

// document.cookie = `${key}=${value}`;

// the above will show unexpected thing when we give special character

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

console.log(document.cookie);

// %3B%3B%3B%3B%3B%3B%3B
let dec = decodeURIComponent("%3B%3B%3B%3B%3B%3B%3B");
console.log(dec);
