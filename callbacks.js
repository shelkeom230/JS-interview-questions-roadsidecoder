// sync vs async code
// sync code

/*
console.log("start");

console.log("subscribe to roadsidecoder");


setTimeout(() => {
  console.log("subscribing to roadside coder.");
}, 1000);
console.log("end");
*/
// _______________________________
console.log("start me");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 0);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    return cb(`Like the ${video} videos`);
  }, 1000);
}

function shareTheVideo(video, cb) {
  setTimeout(() => {
    return cb(`Share the ${video} videos.`);
  }, 2000);
}
const message = importantAction("roadside coder", (message) => {
  console.log(message);
  likeTheVideo("javascript interview questions", (action) => {
    console.log(action);
  });
  shareTheVideo("js interview questions", (share) => {
    console.log(share);
  });

  // callback hell is getting created here.
});
// console.log(message);
console.log("end me");
/*
the setTimeout() returns a string after 1 sec 
but , importantAction() itself doesn't return anythinng --> so it returns undefined by default.

to fix this, we can have a callack function in our implementAction function which prints the message and we can call the passed callback function inside settimeout with our message.
*/
