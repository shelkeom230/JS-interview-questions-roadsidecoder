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

// what is the difference between map and foreach

/*
1. map returns a new array whereas forEach does not
2. you can chain other functions to the result of map as it returns an array but can't do the same with forEach as it does not returns an array 
*/

const array = [3, 4, 5, 6, 7];

// double each element
const mapResult = array.map((ele) => ele * 2);

//triple each element
const forEachResult = array.forEach((ele, i) => (arr[i] = ele * 3));

// print original array
console.log(`original array ${array}`);

// map output
console.log(`map output ${mapResult}`);

// forEach result
console.log(`forEach output ${forEachResult}`);

// output based questions

// Q1 --> return name of the students in capital letters
let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "DilPreet", rollNumber: 7, marks: 55 },
];

// using for loop only
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name.toUpperCase());
}

// using foreach loop
students.forEach((student) => console.log(student.name.toUpperCase()));

// using map function
let studentsCapitalNameMap = students.map((student) =>
  student.name.toUpperCase()
);
console.log(studentsCapitalNameMap);

// using filter function - not recommended at all as it returns entire object with names in uppercase
let studentCapitalNameFilter = students.filter((student) => {
  student.name = student.name.toUpperCase();
  return true;
});
console.log(studentCapitalNameFilter);

// using reduce function
let studentCapitalNameReduce = students.reduce((acc, currStudent) => {
  acc.push(currStudent.name.toUpperCase());
  return acc;
}, []);
console.log(studentCapitalNameReduce);
