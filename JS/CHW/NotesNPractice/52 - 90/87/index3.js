console.log("Important for react");

let obj2 = {
  name: "Harry",
  company: "company xyz",
  address: "xyz road",
};

console.log(obj2);

// changing name of obj2
// all objects will be same and given key will be changed from the object
console.log({ ...obj2, name: "John" });

// above-
// ...obj2 -> taking everything of obj2 e.g. name, company, address, after that,
// name: "John" -> over riding, name, of obj2 with value, John

// this will print obj2 object without changing any values
console.log({ name: "John", company: "lmn", ...obj2 }); // in this case, values of name e.g. "John" and value of company e.g "lmn" will be overridden

console.log("**************");

// console.log({ name: "John", company: "lmn", city: "delhi", ...obj2 });
// console.log({ ...obj2, name: "John", company: "lmn", city: "nagpur" });
