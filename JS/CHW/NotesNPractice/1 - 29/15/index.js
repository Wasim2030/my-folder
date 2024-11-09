// practice set 4

// q1

console.log("was\n".length);

console.log("*************************************************************");

// q2 includes, startsWith, endsWith

let sentance = "He is a good boy";
console.log(sentance);
console.log("it includes 'is' : " + sentance.includes("is"));
console.log("it includes 'happy' : " + sentance.includes("happy"));
console.log("it starts with 'He' : " + sentance.startsWith("H"));
console.log("it starts with 'i' : " + sentance.startsWith("i"));
console.log("it ends with 'oy' : " + sentance.endsWith("oy"));
console.log("it starts with 'b' : " + sentance.endsWith("b"));

let sentance1 = "the quick brown fox jumps over the lazy dog";
const word = "fox";
console.log(
  `The word "${word}" ${
    sentance1.includes(word) ? "is" : "is not"
  } in the sentence1`
);

console.log("*************************************************************");

// q3 = conver a string to lowercase

let con = "wasIM AKHter";
console.log(con);
console.log(con.toLowerCase());
console.log(con.toUpperCase());
console.log(con);

let newCon = con.toLowerCase();
console.log(newCon);
console.log(con);
console.log("*************************************************************");

// q4 extract 1000 from the string => Please give me Rs 1000

let sum = "Please give me Rs 1000";
let slice1000 = sum.slice(18);
console.log(slice1000);

let slice111 = Number.parseInt(sum.slice("Please give me Rs ".length));
console.log(slice111);

console.log("*************************************************************");

// q5 try to change 4th character of a string

let str1 = "Akhter";
let str2 = (str1[5] = "a");
str1[5] = "a";

console.log(str1);
console.log(str2);

console.log("*************************************************************");
