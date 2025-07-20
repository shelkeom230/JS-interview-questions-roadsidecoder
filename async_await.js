// async await are used to resolve promises and it is one of the cleanest way to do that

function someImportantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to ${username}`);
      //   reject(`subscribe to ${username}`);
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
    }, 500);
  });
}

const result = async () => {
  try {
    const message1 = await "roadside coder";
    const message2 = await likeTheVideo("js interview series");
    const message3 = await shareTheVideo("js interview series");

    console.log({ message1, message2, message3 });
  } catch (err) {
    console.log(err);
  }
};
// result();

// what is the output

/*
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => console.log(res));

console.log("end");
*/

/* 
Promise executors runs in sync mode 
.then() handlers run in async mode in microtask queues 
so all console.log() outside of .then runs first, then the .then handler runs after.

-- so first start will be printed 
-- then , js engine encounter that .then() , it starts executing that promise and gets the first console.log(1), it immediately prints 1 and then waits for 2 to get resolved
-- but, as we know, TIME, TIDE AND JAVASCRIPT does not wait for anything, so js engine moves forward and prints end on the console and now as the call stack is free, even loop schedules the callback to print 2 

so, the output is 
start 
1
end 
2
*/

// what is the output

/* 
console.log("promise 2 start");

const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise2.then((res) => console.log(res));
console.log("promise 2 end");
*/

// if the resolve or reject is not there inside the promise

/*
const promise3=new Promise((resolve,reject)=>{
    console.log(1);
    console.log(3);
    
})

promise3.then(res=> console.log(res)
)
here, there is no resolve or reject inside the promise, so js engine will not go inside that and prints 
start 
1 
3 
end 
*/

/*
console.log("promise 3 start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");

fn().then((res) => console.log(res));

console.log("end promise 3");
*/

/* 
again, here also , same process if followed 
first all sync mode code will be printed, then all async mode code will be printed 

output is 
start promise 3 
middle 
1 
end promise 3 
success 
*/

// what is the output
function job() {
  return new Promise((resolve, reject) => {
    reject();
  });
}
let promise = job();

promise
  .then(function () {
    console.log("success 1");
  })
  .then(function () {
    console.log("success 2");
  })
  .then(function () {
    console.log("success 3");
  })
  .catch((err) => console.log("error 1"))
  .then(function () {
    // this will be always exectued if it is after an error block by catch
    console.log("success 4");
  });
/* 
we are rejecting the promise and that's why first 3 then will not be executed and js engine will directly jump on to that catch error block and after that it goes into that success message.
*/
