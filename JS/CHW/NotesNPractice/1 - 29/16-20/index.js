// array

let arr = [12, 34, 4, 98, 987];
let arr1 = ["wasim", "akhter", "rahul", "raj", "sameer"];
console.log(arr);

let arr2 = arr[3];
let arr3 = arr1[2];
console.log(arr1, typeof arr1);
console.log(arr2, typeof arr2);
console.log(arr3, typeof arr3);
console.log(arr.length);

console.log("*******************************************************");

// changing and adding the values to array

let arr4 = [324, 4, 34, 234];
let arr5 = (arr4[0] = 22);
console.log(arr4);
console.log(arr5);

arr4[4] = 3;
console.log(arr4);

console.log("*******************************************************");

// arrays methods

// tostring()

let arr6 = [12, 34, 4, 98, 987];

let b = arr6.toString();
console.log(arr6);
console.log(b);
console.log(typeof b);

console.log("*******************************************************");

// join()

let arr7 = [12, 34, 4, 98, 987];
let arr8 = arr7.join(" and ");
console.log(arr7);
console.log(arr8);
console.log(typeof arr8);

console.log("*******************************************************");

// pop()

let arr9 = [12, 34, 4, 98, 987];
let arr10 = arr9.pop();
console.log(arr9);
console.log(arr10);

console.log("*******************************************************");

// push()

let arr11 = [12, 34, 4, 98, 987];
let arr12 = arr11.push(343, 234, 2);
console.log(arr11);
console.log(arr12);

console.log("*******************************************************");

// shift()

let arr13 = [12, 34, 4, 98, 987];
let arr14 = arr13.shift();
console.log(arr13);
console.log(arr14);

console.log("*******************************************************");

// unshift()

let arr15 = [12, 34, 4, 98, 987];
let arr16 = arr15.unshift(1, 2, 3);
console.log(arr15);
console.log(arr16);

console.log("*******************************************************");
