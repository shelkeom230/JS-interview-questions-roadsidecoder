// polyfill for Map()

// array.map((ele,i,arr)=> {})

Array.prototype.myMap = function (cb) {
  let temp = [];

  // this refers to the array on which you called map
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// polyfill for filter
Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

// polyfill for reduce

// arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

// polyfill for call
Function.prototype.myCall = function (context = {}, ...args) {
  // check if the caller is a function
  if (typeof this !== "function") {
    return new Error(this + " is not callable.");
  }

  // add the function inside the object and call that with the arguments
  context.fn = this;
  context.fn(...args);
};

// polyfill for myapply
Function.prototype.myApply = function (context = {}, args = []) {
  // if the attached context is not callable
  if (typeof this !== "function") {
    return new Error(this + " is not callable.");
  }

  // if the args are not passed as an array
  if (!Array.isArray(args)) {
    return new Error("args must be an array");
  }

  // attach the function to the object and call that function with the args
  context.fn = this;
  context.fn(...args);
};

// polyfill for bind
Function.prototype.myBind = function (context = {}, ...args) {
  // if the attached stuff is not a function
  if (typeof this !== "function") {
    throw new Error(this + " is not callable.");
  }

  //attach a function to the object
  context.fn = this;

  // returns a new function
  return function (...newArgs) {
    return context.fn(...args, ...newArgs); // it combines both args into an array
  };
};

// polyfill for once -- call a function only once
function once(func, context) {
  let ran;

  // returns a function
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

// polyfill for memoize
function memoize(fn, context) {
  let res = {};

  // returns a function
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

// polyfill for Promise
function PromisePolyFill(executor) {
  let onResolve, onReject;

  function resolve(val) {
    onResolve(val);
  }
  function reject(err) {
    onReject(err);
  }
  this.then = function (callback) {
    onResolve = callback;
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };
}

// polyfill for debounce
const myDebounce = function (cb, delay) {
  let timer;

  return function (...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

// polyfill for throttle
const myThrottle = (cb, delay) => {
  let start = 0;

  return function (...args) {
    let current = new Date().getTime();
    if (current - start < delay) return;

    start = current;
    return cb(...args);
  };
};
