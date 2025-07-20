function someImportantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`subscribe to ${username}`);
      reject(`subscribe to ${username}`);
    }, 100);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like ${video} videos`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share ${video} videos`);
    }, 1000);
  });
}

// resolve these promises recursively one by one
function recursiveResolvePromises(funcPromises) {
  // an array of promises to resolve

  // if no promise left, then just return
  if (funcPromises.length === 0) return;

  // take the next promise from the array using shift() method
  // shift() method works as dequeue operation in queue which just gives you first element from the front
  const currentPromise = funcPromises.shift();

  // resolve current promise
  currentPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  // call the next set of promises in the array
  recursiveResolvePromises(funcPromises);
}

recursiveResolvePromises([
  someImportantAction("roadside coder"),
  likeTheVideo("js interview questions"),
  shareTheVideo("js interview questions"),
]);

// Promise polyfill implementation
function PromisePolyfill(executor) {
  let onResolve, onReject;

  // functions to reoslve and reject promise
  function resolve(value) {
    onResolve(value);
  }

  function reject(value) {
    onReject(value);
  }

  this.then = function (callback) {
    onResolve = callback; // now onResolve becomes a function
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };
  // now , call the executor functoin with resolve,reject
  executor(resolve, reject);
}

const myPromise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
