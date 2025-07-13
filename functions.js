// 1. what are function declaration
/* 
function square(num){
    return num*num;
}
it is also called as function definition or function statement
*/

// 2. what is function expression --> function stored inside a variable
const square = function (num) {
  return num * num;
};
// console.log(square(5));

// 3. what is first class functions --> a function can behave as a varible in js
// i.e it can be passed as an argument and returned as an output from a function

function square2(num) {
  return num * num;
}

function displaySquare(fn, value) {
  console.log("square is : " + fn(value));
}
displaySquare(square2, 10);

// 4. what is IIFE --> Immediately Invoked function expression
// function is called at the time of declaration only without calling them explicitly
(function cube(n) {
  console.log(`cube of ${n} is ${n ** 3}`);
})(10);

// 5. output based IIFE question
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// function scope and closures

let num1 = 20,
  num2 = 3,
  name = "roadside coder";

function multiply() {
  return num1 * num2; // 60
}
console.log(multiply());

// A nested function example
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}
console.log(getScore());
