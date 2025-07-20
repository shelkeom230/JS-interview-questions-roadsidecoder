console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    let result = true;
    if (result) {
      resolve("subscribed to roadside coder");
    } else {
      reject(new Error("why aren't you subscribed to roadside coder?"));
    }
  }, 1000);
});

// what that sub contains --> it returns a promise
// console.log(sub);

// attach a callback to our promise
// sub.then((res) => console.log(res)).catch((err) => console.log(err));
// console.log("end");

// we can directly assign a promise to  a variable as well
const sub2 = Promise.resolve("subscribe to coderofficial154");
console.log(sub2); // promise pending
sub2.then((res) => console.log(res)).catch((err) => console.log(err)); // subscribe to coder official 154

// now , we will implement our subscribe like and share using promises
function someImportantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to ${username}`);
    }, 1000);
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

// attach callback to all promises
someImportantAction("roadside coder")
  .then((res) => {
    console.log(res);
    return likeTheVideo("js interview questions"); // this returns a promise and we are logging the response in the next callback functoins
  })
  .then((res) => {
    console.log(res);
    return shareTheVideo("js interview questions");
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// here we are maintaining the order using promise chaining.
