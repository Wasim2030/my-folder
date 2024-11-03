// const reqex =

const text = "Jarry is a very very nice awsome very good very boy";

console.log(text.replace("very", "VERY")); // ony first occurance is changed

// can change using like this

const regex = /very/g; // replace very globally

console.log(text.replace(regex, "VERY"));
