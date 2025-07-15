// currying --> f(a,b)==> f(a)(b)
function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}
function sum(a, b) {
  console.log(a + b);
}
function currySayName(f) {
  return function (name) {
    return function (surname) {
      return f(name, surname);
    };
  };
}
function sayName(name, surname) {
  alert(`${name} ${surname} welcome!`);
}
const curriedSum = curry(sum);
curriedSum(1)(2);

const curriedSayName = currySayName(sayName);
curriedSayName("omkar")("shelke");

// why do we use currying ?
/*
Following are the reasons why currying is good :

✅ It makes a function pure which makes it expose to less errors and side effects.

✅ It helps in avoiding the same variable again and again.

✅ It is a checking method that checks if you have all the things before you proceed.

✅ It divides one function into multiple functions so that one handles one set of responsibility.
*/

// implement(2)(6)(1)
const curryDoSum = (f) => (a) => (b) => (c) => f(a, b, c);

const threeSum = (a, b, c) => {
  console.log(a + b + c);
};
const curriedThreeSum = curryDoSum(threeSum);
curriedThreeSum(2)(6)(1);

// implement below function
/*
 evaluate("sum")(4)(2)=> 2 
 evaluate("subtract")(4)(2)=> 2 
 evaluate("multiply")(4)(2)=> 8 
 evaluate("divide")(4)(2)=> 2 
 */
const evaluate = (operation) => (a) => (b) => {
  if (operation === "sum") return "sum: " + a + b;
  else if (operation === "subtract") return "subtraction: " + (a - b);
  else if (operation === "multiply") return "product: " + a * b;
  else if (operation === "divide") return "division: " + a / b;
};

const mul = evaluate("multiply");

console.log(mul(1)(2));
console.log(mul(2)(10));

// implement infinite currying
// like sum(1)(2)(3)...(n)
function infiniteAdd(a) {
  return function (b) {
    if (b) return infiniteAdd(a + b);
    return a;
  };
}

console.log(infiniteAdd(1)(2)(3)(4)(5)());

// currying vs partial application
/*
in currying, the number of inner function (closures) depends on the number of argumetns we are passing while calling the functions

Partial functions --> here, we club together some args in one function and that is called as partial implementation 
*/
function partialSum(a) {
  return function (b, c) {
    return a + b + c;
  };
}
const doPartialSum = partialSum(1);
console.log(doPartialSum(2, 3));

console.log(partialSum(10)(11, 12));

// manipulating DOM using currying

function updateDomElement(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

function updateButtonElement(id) {
  return function (innerText) {
    document.querySelector("#" + id).innerText = innerText;
  };
}

const header = updateDomElement("heading");
header("hello roadside coder");
header("Hello coderofficial154");

const btn = updateButtonElement("Btn");
btn("login");
btn("signup");
