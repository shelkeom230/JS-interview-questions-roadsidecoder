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

// Promise.all() , if all promises are resolved, then it will return array of results
// if any one of the promise gets rejected, then it returns the error immediately

Promise.all([
  someImportantAction("subscribe to coder official 2005"),
  likeTheVideo("js interview questions"),
  shareTheVideo("js interview questions"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error("error. One of the promise failed", err));

// Promise.race(), it returns the response of first settled promise, it does not matter whether the first settled promise is fulfilled or rejected, it just returns the output of first settled promise

Promise.race([
  someImportantAction("coder frontend 2005"),
  likeTheVideo("DSA in js series"),
  shareTheVideo("DSA is js series"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Promise.allSettled(), it works similar to Promise.all(), but it waits for all promises to get settled and returns an aggregated response array

// if will not return immediately even though the first promise which is settled gets rejected.

Promise.allSettled([
  someImportantAction("roadside coder"),
  likeTheVideo("js interview series"),
  shareTheVideo("js interview series"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Promise.any() waits for the first promise to get fulfilled and returns it's output, the only difference in race and any is that, race does not waits further for any promise to get fullfilled, but any does so
Promise.any([
  someImportantAction("roadside coder"),
  likeTheVideo("js interview questions"),
  shareTheVideo("js interview questions"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
