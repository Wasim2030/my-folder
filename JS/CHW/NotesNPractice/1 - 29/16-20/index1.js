// delete

let arr17 = [12, 34, 4, 98, 987];

delete arr17[1];
console.log(arr17);

let arr18 = delete arr17[4];
console.log(arr17);
console.log(arr18);

console.log("*******************************************************");

// concat()

let arr19 = [12, 34, 4, 98, 987];
let arr20 = [1, 4, 8, 0];
let arr21 = ["was", "akh", "sam"];

let arr22 = arr19.concat(arr20, arr21);
console.log(arr22);

console.log("*******************************************************");

// sort()

let arr23 = [12, 34, 4, 98, 987];
let arr24 = ["banana", "orange", "promegrante", "papaya", "apple"];
arr23.sort();
console.log(arr23);

let arr25 = arr24.sort();
console.log(arr24);
console.log(arr25);

// ***************************************************************************

// sort() with compare function = sort(compare)

let arr26 = [9, 4, 1, 7, 8];

let arr27 = arr26.sort((a, b) => {
  return a - b;
});

console.log(arr27);

/**
 * It returns a - b, which determines the order:
If a - b is negative, a should appear before b.
If a - b is positive, a should appear after b.
If a - b is zero, their order stays the same.
This is a common way to sort numbers in ascending order.

Here’s a breakdown of some comparisons it might make:

First Comparison: compare(9, 4) → 9 - 4 = 5 (positive), so 9 is placed after 4.
Second Comparison: compare(4, 1) → 4 - 1 = 3 (positive), so 4 is placed after 1.
Further Comparisons: This continues until all elements are arranged in ascending order.

After sorting, arr is now [1, 4, 7, 8, 9].
console.log(arr); outputs the sorted array.
 */

console.log("*******************************************************");

// splice()

let arr28 = [3, 48, 2, 9, 98, 1];
let arr29 = arr28.splice(1, 2, 908, 987, 98797, 98);
// let arr29A = arr28.splice(1, 0, 908, 987, 98797, 98);
console.log(arr28);
console.log(arr29);

console.log("*******************************************************");

// slice()

let arr30 = [3, 48, 2, 9, 98, 1];
let arr31 = arr30.slice(1, 4);
console.log(arr30);
console.log(arr31);
console.log(arr30.slice(2));

console.log("*******************************************************");

// reverse()

let arr32 = [3, 48, 2, 9, 98, 1];
let arr33 = arr32.reverse();
console.log(arr32);
console.log(arr33);

// ***************************************************************************
