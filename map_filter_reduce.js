// map --> returns a new array by applying a function on each element of array

const arr = [1, 2, 3, 4];

const multiplyBy3 = arr.map((ele) => ele * 3);
console.log(multiplyBy3);

// filter --> it applies condition over all array elements and pushes those which satisfy the conidtion to output array

const greaterThan2 = arr.filter((ele) => ele > 2);
console.log(greaterThan2);

// reduce --> it takes an array of elements and returns a single value by applying some transformation on all array elements

const sum = arr.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);

const avg = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
console.log(avg);

// polyfill for Map
Array.prototype.myMap = function (cb) {
  // return a new array
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const doubleArray = arr.myMap((ele, i, arr) => {
  return ele * 2;
});
console.log(doubleArray);

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

const greaterThanTwo = arr.myFilter((ele) => ele > 2);
console.log(greaterThanTwo);

// polyfill for reduce
/*
arr.reduce((acc,curr,i,arr)=>{
  
  },initialValue);
*/
Array.prototype.myReduce = function (cb, initialValue) {
  // returns a single value
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? cb(accumulator, this[i], i, this)
      : (accumulator = this[i]);
  }
  return accumulator;
};

const mySum = arr.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(mySum);
