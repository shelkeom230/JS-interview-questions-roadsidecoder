let user = {
  firstName: "Piyush!",
  getName() {
    const firstName = "Piyush!";
    return this.firstName; // inside a method, this points to the object where this method is present

    // return firstName  now it will print firstName from the method itself.
  },
};
console.log(user.getName());

// what is the output
function makeUser() {
  return {
    name: "roadside coder",
    ref() {
      return this.name;
    }, // here, this points to the global window object as it is inside a returning object
    // to fix this, we will make ref() a functoin and now it will point to it;s parent objct and not global one
  };
}

const myUser = makeUser();
console.log(myUser.ref());

// what is the output
const userTwo = {
  name: "omkar shelke",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(function () {
  userTwo.logMessage();
}, 1000);
/* 
here, we are passing function ref, not calling it as a method, so when fun is called, it does not bind this to userTwo

so, this becomes window or undefined here

to fix this, we can avoid passing callback and wrap that function inside another anonymous function 
*/

// what is the output
// if we want arrow function to print something, do this.name or window.name="something" here.
const userThree = {
  name: "piyush",
  greet() {
    return `Hello, ${this.name}`; // prints hello piyush
  },
  farewell: () => {
    return `Goodbye, ${this.name}`; // hello undefined as window has no property name attached to it.
  },
};

console.log(userThree.greet()); // hello piyush
console.log(userThree.farewell()); // goodbye undefined

// create an object calculator
const calculator = {
  read() {
    this.a = +prompt("enter value of a: ", 0);
    this.b = +prompt("enter value of b: ", 0);
  },
  sum() {
    return parseInt(this.a) + parseInt(this.b);
  },
  subtract() {
    return this.a - this.b;
  },
  product() {
    return this.a * this.b;
  },
  divide() {
    return this.a / this.b;
  },
};
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.subtract());
// console.log(calculator.product());
// console.log(calculator.divide());

// what will be the output here
var length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    // [callback,2,3]
    // fn();
    console.log(arguments);
    arguments[0](); // this.length pritns the length of the args array which is 3 here.
  },
};

// object.method(callback); // 4
object.method(callback, 2, 3);

// implement this calc
const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this; //as we are doing currying, we need to return the object so that we can call other methods on that.
  },
  subtract(b) {
    this.total -= b;
    return this;
  },
  multiply(c) {
    this.total *= c;
    return this;
  },
  divide(d) {
    this.total /= d;
    return this.total;
  },
};
const result = calc.add(10).multiply(20).subtract(10).add(20);
console.log(result.total);
