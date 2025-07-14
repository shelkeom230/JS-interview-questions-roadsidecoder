// function hoisting
functionName(); // due to hoisting
// console.log(x); // undefined
function functionName() {
  console.log(x);

  var x = 5;
  console.log("roadside coder");
}

/*
variables and functoins both are hoisted in javascript

entire function body is copied but variables holds the value undefined.
*/

// function hoisting -- o/p based question
var x = 21;

var fun = function () {
  console.log(x); // undefined
  var x = 20;
};
fun();

// this function is a function experssion i.e it is assigned to a variable, so, it's value is undefined during memory initiation phase
// also, here we have x present in the local scope, so we are going to check it's value only and will not refer to the global scope
// value of x in local scope is undefined , so the output is undefined.

// params and arguments
function square(num) {
  // parameters
  return num * num;
}
square(5); // arguments
