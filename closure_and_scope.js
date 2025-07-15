// local or function scope

var username = "roadside coder"; // global scope

function local() {
  // function or local scope
  console.log(username); // roadside coder
}
function local2() {
  // function or local scope
  var username2 = "omkar"; // error
}
// console.log(username2);

// what will be the output
function subscribe() {
  // inner scope 2
  var name = "roadside coder";
  function displayName() {
    // inner scope
    //alert(name); // roadside coder
  }
  displayName();
}
subscribe();

// due to lexical scope, function displayName has access to name property of it's parent

// now using closure
function subscribeClosure() {
  let username = "roadsider coder";

  function displayName() {
    // closure
    console.log(username);
  }
  return displayName;
}
const func = subscribeClosure();
func();

// even though, subscribeClosure() function is fully executed, we have access to the name property of that function
// reason is, inner function displayName() maintains a closure with it's parent and that's why we can access the name anytime in our program just by calling that func()

// closure scope chain
/*
every closure has access to it's closure scope chain 
1. local/own scope
2. outer function scope
3. global scope
*/
const e = 5;
const sum = (a) => (b) => (c) => (d) => a + b + c + d + e;
// console.log(sum(1)(2)(3)(4));

// what will be the output here
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // shadowing
    console.log(count); //1
  }
  console.log(count); // 0
})();
// here, count=1 shadows global count=0 and prints 1, but outside that, count refers to the global count value which is 0
// also, an IIFE does not forms a closure,rather directly refers to the global scope,also, as it is invoked instantly , there is no concept of closure involved here.

// write below closure for createBase
// this function adds 6 to the value you pass to it
function createBase(num) {
  return function (innerNum) {
    console.log(num + innerNum);
  };
}
var addsix = createBase(6);
addsix(10); // 16
addsix(21); //27

// the inner function has access to value of num=6 due to closure.

// Time optimization
function find(index) {
  let arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr[i] = i * i;
  }
  console.log(arr[index]);
}
console.time("6");
find(6);
console.timeEnd("6");
console.time("12");
find(100);
console.timeEnd("12");

// this is very time consuming , can we do this with the help of closure.
function findClosure() {
  // we will make this loop common
  let arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr[i] = i * i;
  }
  // closure
  return function (index) {
    console.log(arr[index]);
  };
}

const closure = findClosure();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(100);
console.timeEnd("12");

// here, when findClosure() completes, we have complete array values for each index and due to closure, we have access to the whole array and now closure(6) quickly prints the value at index 6 in the array

// block scope and set timeout
function aa() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
// aa();
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      function log(j) {
        console.log(j); // 3
      },
      i * 1000,
      i
    );
  }
}
// a();

function aaa() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    inner(i);
  }
}
// aaa();

// how would you use a closure to create a priavte counter.

// using private varaible
function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return "counter value: " + _counter;
  }
  return {
    add,
    retrieve,
  };
}
const c = counter();
c.add(5);
c.add(20);
console.log(c.retrieve());
c.add(10);
console.log(c.retrieve());

function makeCounter() {
  var counter = 0;
  return function () {
    console.log("counter value: ", counter);
    return counter++;
  };
}
let myCounter = makeCounter();
myCounter();
myCounter();
myCounter();
myCounter();

// what is a module pattern
// it is a design pattern that uses closures to create private and public encapsulation in javascript

var module = (function () {
  function privateMethod() {
    // do something
    console.log("private");
  }

  return {
    publicMethod: function () {
      // can call private method here.
      console.log("public");
    },
  };
})();

module.publicMethod(); // public method
// module.privateMethod(); //error

const myModule = (function () {
  // private variable
  var counter = 0;

  // logCount function
  function logCount() {
    console.log("counter value: " + counter);
  }

  // public api
  return {
    increment: function () {
      ++counter;
      logCount(); // can access privat function
    },
    getCount: function () {
      return counter;
    },
  };
})();

myModule.increment();
myModule.increment();
myModule.increment();
console.log(myModule.getCount());

// make this function call only once
let view;
function subscribe() {
  // make a private variable
  let called = 0;
  // return a closure
  return function () {
    if (called > 0) {
      console.log("already called subscribe to roadside coder ");
    } else {
      view = "roadside coder";
      console.log("subscribe to " + view);
      ++called;
    }
  };
}
let isSubscribed = subscribe();
isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();

// write your own polyfill for once which runs a function once
function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}
const hello = once(() => console.log("hello"));
hello();
hello();
hello();
hello();
hello();

const addition = once((a, b) => console.log("addition ", a, b));
addition(1, 2);
addition(1, 2);
addition(1, 2);
addition(1, 2);
addition(1, 2);
