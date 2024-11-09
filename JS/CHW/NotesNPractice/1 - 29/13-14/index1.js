let name1 = "wasim";
let name2 = "AKHter";

console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name2.toLowerCase());

console.log(name1.slice(1, 3));
console.log(name2.slice(2));

let name3 = "Wasim bhai";

let newName = name3.replace("bhai", "akhter");

console.log(name3);
console.log(newName);

let n1 = "hey";
let n2 = "hows";
let n3 = "going";

let concat = n1.concat(n2, n3, "extra");

console.log(concat);

let n4 = "     heyhowareyou     ";

let n5 = n4.trim();
console.log(n5);

let str = "harry";
let friend = "Naman";

console.log(str.concat(" is a friend of ", friend, " ok"));

console.log("*********************************************");

let newStr = "random str";
for (let i = 0; i < newStr.length; i++) {
  console.log(newStr[i]);
}
