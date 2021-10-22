import MyArray from "./data-structures/array.js";

const myArray = new MyArray();

console.log('Array size: ', myArray.length);

myArray.push("e1");
myArray.push("e2");
myArray.push("e3");
myArray.push("e4");
myArray.pop();

console.log('Array: ', myArray);

