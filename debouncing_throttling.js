// create a button UI and debounce as follows-
//  -- show "button pressed <X> Times", every time button is pressed.
// -- increase "triggered <Y> times" after 800 ms of debounce

const btn = document.querySelector(".increment_button");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

// create debounce Polufill impementation
const myDebounce = function (cb, delay) {
  // take a timer
  let timer;

  // it returns a function
  return function (...args) {
    // it may have some args

    // if timer is already there, clear it
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

// create throttle polyfill implementation
const myThrottle = (cb, delay) => {
  // variable to count delay
  let start = 0;

  // returns a function
  return function (...args) {
    let now = new Date().getTime();
    if (now - start < delay) return;
    start = now; // update current time as start time
    return cb(...args);
  };
};
const debouncedCount = myDebounce(() => {
  count.innerHTML = ++triggerCount;
}, 800); // this functin is going to run only when the delay between 2 successive btn press exceeds 800ms

const start = new Date().getTime();
const throttledCount = myThrottle(() => {
  const currentTime = new Date().getTime();
  console.log(currentTime - start);
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  //   debouncedCount();
  throttledCount();
});
