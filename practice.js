// polyfill for promise

function myPromise(executor) {
  let onResolve, onReject;
  let isCalled = false; // indicates whether callback has been called.

  this.then = function (thenHandler) {
    onResolve = thenHandler;
    return this;
  };

  this.catch = function (catchHandler) {
    onReject = catchHandler;
    return this;
  };

  function resolve(val) {
    // resolves a value
    if (typeof onResolve === "function" && !isCalled) {
      // onResolve is a function and it is not called.
      onResolve(val); // call it with the passed val
      isCalled = true; // set isCalled to true
    }
  }
  function reject(err) {
    if (typeof onReject === "function" && !isCalled) {
      onReject(err);
      isCalled = true;
    }
    // throws an error
  }
  // call executor function with resolve and reject callbacks
  executor(resolve, reject);
}

let promise = new myPromise((resolve, reject) => {
  //   setTimeout(() => {
  resolve(1);
  //   }, 1000);
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));
