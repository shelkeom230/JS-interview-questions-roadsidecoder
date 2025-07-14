// rest operator
// collects multiple elements into a single array, used only in functional arguments, it must be the last argument

// spread operator
// it expands the content of an array, object or iterable into individual elements or key,value pairs.

function multiply(...nums) {
  // rest
  console.log(nums[0] * nums[1]); // [1,2]
}

let arr = [1, 2];
multiply(...arr); // spread

// REST OPERATOR
// 1. function args
function myFunc(...args) {
  // rest operator
  console.log(args);
}
myFunc(1, 2, 3); // [1,2,3]

// 2. basic rest
function greet(...names) {
  // rest
  console.log("hello", names); // ["omkar","devil","akshay"]
}
greet("omkar", "devil", "akshay");

// 3. mixed params
function show(title, ...values) {
  // rest
  console.log("Title: ", title); // Fruits
  console.log("Values: ", values); // ["apple","banana","cherry"]
}
show("Fruits", "Apple", "banana", "cherry");

// SPREAD OPERATOR
// 1. function args
let nums = [1, 2, 3];
console.log(...nums); // spread 1 2 3

function add(a, b) {
  return a + b;
}
console.log(add(...[5, 7]));

// 2. combining arrays
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
console.log(c); //[1,2,3,4]

// 3. cloning objects
let obj1 = { x: 1, y: 2 };
let obj2 = { ...obj1 };

/* 
function func(a,...numbers,x,y){
    console.log(x,y);
}
func(1,2,3,4);

error --> rest parameter must be the last formal parameter.
*/

// a nornaml function
const normalFunction = function (first, second) {
  return first + second;
};
// an arrow function
const arrowFunction = (first, second) => first + second;
console.log(arrowFunction(1, 2));
