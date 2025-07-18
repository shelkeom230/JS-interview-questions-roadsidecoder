var obj = {
  name: "omkar",
};

function sayHello(age) {
  return `Hello ${this.name} is ${age} years old`;
}

// sayHell0(15), prints hello <blank> is 15 years old

// we can use call here, call is used to utilise properties and methods of another objects in some other place there

console.log(sayHello.call(obj, 24));

// console.log(sayHello(20));

// APPLY -- it works same as how call works, but it takes args in form of an array

function getIntro(age, profession) {
  return `Hello , ${this.name} is ${age} years old and he is a ${profession}`;
}
console.log(getIntro.apply(obj, [22, "razorpay UI engineer."]));

// BIND -- bind returns a copy of that function which you can call latter with arguments , it is similar to call but call executes functoion immediately but bind allows executing  it after some time.

// the benefit is that , it gives you reusable function to call with varying args

const bindFunc = getIntro.bind(obj);

console.log(bindFunc(20, "designer"));
console.log(bindFunc(30, "web3 developer"));

// output based questions
const person = { name: "Piyush" };

function sayHi(age) {
  return `${this.name} is ${age} years old.`;
}

console.log(sayHi.call(person, 20)); // Piyush is 20 years old
console.log(sayHi.bind(person, 20)); // pritns the function body

// what is the output
const age = 10; // useless here

var myPerson = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

const person2 = { age: 24 };
console.log(myPerson.getAge.call(person2));

/* 
key reason for the output 
-- you are not invoking getAge in the context of myPerson. Instead, .call() sets the this value explicitly to person2

-- so, inside getAge, this becomes person2 and thus, 
return this.age returns person2.age which is 24 here.

in summary 
-- the output is 24, because getAge method uses the this keyword to access the age property. When using .call(person2), we explicitly set the value of this inside the getAge function to be person2. Since, person2 has an age of 24, that value is returned. The fact that objects are passed by reference has no relation to the this binding here -- it's .call() that sets this explicitly.
*/

// what is the output
var status = "smart emoji";

setTimeout(() => {
  const status = "heart smile emoji";

  const data = {
    status: "seen emoji",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // seen emoji
  console.log(data.getStatus.call(this));
  // smart emoji
}, 0);

/* 
-- the first output is "seen emoji" because getStatus() is called as method of data, so this refers to data 

-- the second output is "smart emoji" because the arrow function used in setTimeout does not have it's own this binding, and it inherits value from it's enclosing lexical context. so, this refers to the global object here, and data.getStatus.call(this) runs getStatus with this bound to the global object, where the status is "smart emoji"
*/

// call printanimals such that it prints all animals in this array of objects.
const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

// we need to call printAnimals for each object of array , so we will be using loop with call here
for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i); // pass the index for the object and the index itself.
}

// append an array to another array without using concat
const array = ["a", "b"];
const elements = [0, 1, 2];

// array.concat(elements); // returns a new array

// use spread operator.
// array.push(...elements);
// console.log(array);

// if you wan't to create a new array , use spread syntax for both the array
// const newArray=[...array,...elements];
// console.log(newArray);

// use apply method
array.push.apply(array, elements);
console.log(array);

// using apply to enhance built in functions in js

// find min/max number in an array
const numbers = [5, 6, 7, 8, 9, 10];

// using function
function findMinMax(arr) {
  let minele = +Infinity;
  let maxele = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minele) minele = arr[i];
    if (arr[i] > maxele) maxele = arr[i];
  }
  return [minele, maxele];
}
console.log(findMinMax(numbers));

// using forEach loop
let minele = Infinity;
let maxele = -1;
numbers.forEach((ele) => {
  if (ele > maxele) maxele = ele;
  if (ele < minele) minele = ele;
});
console.log(minele, maxele);

// we can do this in single line by using apply
console.log("minele: ", Math.min.apply(null, numbers));
console.log("maxele: ", Math.max.apply(null, numbers));

// bound function
function f() {
  console.log(this); // window object
}

let user = {
  g: f.bind(null),
};

user.g();

/*
the function f was bound using "f.bind(null)". so, this is fixed to null here. In non-strict mode, js automatically replaces null with "global window object".
so, when user.g() is called, this is the global object , which is why it is printed"
*/

// what will be the output --> bind chaining question it is

function f() {
  console.log(this.name);
}

f = f.bind({ name: "john" }).bind({ name: "anna" });
f(); // john
/*
once a function is bound using .bind(), it cannot be rebounded -- the this context is fixed permanantly.

chaining .bind() does not work -- only the first .bind() has an effect. 

in summary 
-- f.bind(...) returns a new function with this permanently set.
-- trying to re-bind it again does nothing - the original bound context remains

-- so, when you call function f(), you're effectively calling the first bound version - the one bound to {name : "john"}
*/

// fix the calling line for checkPassword function and make it point to user object here
function checkPassword(success, failed) {
  let password = prompt("password: ", "");
  if (password === "roadside coder") success();
  else failed();
}

let userPassword = {
  name: "omkar shelke",

  loginSuccessful() {
    console.log(`${this.name} logged in.`);
  },
  loginFailed() {
    console.log(`${this.name} failed to logged in.`);
  },
};

// checkPassword(
//   userPassword.loginSuccessful.bind(userPassword),
//   userPassword.loginFailed.bind(userPassword)
// );

// by using bind, we can bound this functions to point to our userPassword object so that it will take the name from the name property of our object.

// fix the function call here
function checkPassword2(ok, fail) {
  let password = prompt("password: ", "");
  if (password === "roadside coder") ok();
  else fail();
}

const userPassword2 = {
  name: "omkar shelke",
  login(result) {
    // if result===true, then only this function will execute.
    console.log(this.name + (result ? " login successful" : " login failed."));
  },
};

// we can use bind here to make our function point to the userPassword2 object
// checkPassword2(
//   userPassword2.login.bind(userPassword2, true),
//   userPassword2.login.bind(userPassword2, false)
// );

// explicit binding with arrow function
const mineAge = 10;

var minePerson = {
  name: "omkar",
  mineAge: 20,
  getAgeArrow: () => console.log(this.mineAge),
  getAge: function () {
    console.log(this.mineAge);
  },
};

var minePerson2 = { mineAge: 24 }; // undefined
minePerson.getAge.call(minePerson2); // 24
minePerson.getAgeArrow.call(minePerson2); // undefined

/*
In arrow functions, `this` is lexically bound — it refers to the `this` value in the scope where the arrow function was defined.

As a result, `.call`, `.apply`, and `.bind` have no effect on the `this` inside an arrow function.

Here, `getAgeArrow` was defined in the global scope (not inside a method), so `this` refers to the global object.

Since `window.mineAge` is undefined, the output is undefined.

______________________________
you may get confused with that global mineAge = 10 

In browsers, when you define a variable at the top level : 
var x=10 --> adds x to the window object i.e window.x===10 

let x=10 or const x=10 --> does not attach x to the window object 

this is the key difference here and that's why you get window.mineAge as undefined 

-- const mineAge=10; defines a block-scoped constant in the global space but does not becomes window.mineAge. 
so, this.mineAge (where this is window) is undefined.
*/

// polyfill for call method

const car = {
  color: "red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} for ${price} ${currency}`
  );
}
// my own polyfill for call
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable.");
  }

  context.fn = this;
  context.fn(...args);
};
// call takes in a context and args
// purchaseCar.myCall(car, "rs", "50L");

/*
detailed explanation 
line 1 -- you are adding a new method to all js functions via Function.prototype 

that means, any function you define can now use .myCall(...)

params 
context={}
if the user doesn't pass a context object, default to an empty object. this becomes the value of this during the function execution.

context.fn=this;
-- temporarily assigns the function (i.e this) to a property fn of the context object.

why ? ---> js functoins get their this value from how they are called.
obj.fn(); // now this will refer to the obj
so, by assigning the function as a method of context and calling it as context.fn(), you force the functoin to execute with this===context.


context.fn(...args); //calls the function with the passed-in args.
this inside the function will now refer to the context.
*/

// polyfill for apply function
Function.prototype.myApply = function (context = {}, args = []) {
  // attached thing is not a functoin
  if (typeof this !== "function") {
    throw new Error(this + " is not callable");
  }

  // if the args are not passed as an array
  if (!Array.isArray(args)) {
    throw new Error("args must be an array");
  }

  // attach a method where this points to that method/functoin
  context.fn = this;
  context.fn(...args);
};

// purchaseCar.myApply(car, ["rs", "50L"]);

// polyfill for bind function
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " cannot be bound as it's not callable.");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
const newFunc = purchaseCar.myBind(car, "rs", "50L");
newFunc();
