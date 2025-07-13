let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "DilPreet", rollNumber: 7, marks: 55 },
];

// Q2 --> return only the details of those students who scored more than 60 marks

// using for loop
for (let i = 0; i < students.length; i++) {
  if (students[i].marks > 60) {
    console.log(students[i]);
  }
}

// using for each loop
students.forEach((student) => {
  if (student.marks > 60) {
    console.log(student);
  }
});

// using map function
let result = [];
students.map((student) => {
  if (student.marks > 60) {
    result.push(student);
  }
});
console.log(result);

// using filter function - recommended
const filterResult = students.filter((student) => student.marks > 60);
console.log(filterResult);

// using reduce function
const reduceResult = students.reduce((acc, currStudent) => {
  if (currStudent.marks > 60) acc.push(currStudent);
  return acc;
}, []);
console.log(reduceResult);

// Q3 --> more than 60 marks and rollNumber greater than 15 , return only those students
const filterResultQ3 = students.filter(
  (student) => student.marks > 60 && student.rollNumber > 15
);
console.log(filterResultQ3);

// using reduce
const reduceResultQ3 = students.reduce((acc, currStudent) => {
  if (currStudent.marks > 60 && currStudent.rollNumber > 15) {
    acc.push(currStudent);
  }
  return acc;
});
console.log(reduceResultQ3);

// Q4 - get the sum of marks of all students
const marksSumQ4Reduce = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);
console.log(marksSumQ4Reduce);

// Q5 - return only name of students who scored more than 60 - use filter and then map
const question5 = students
  .filter((student) => student.marks > 60)
  .map((filterStudent) => filterStudent.name);
console.log(question5);

// return total marks for students with marks greater than 60 after 20 marks has been added to those who scored less than 60
/* 
1. first add 20 marks to students whose score are less than 60 
2. then find the students with marks greater than 60
3. then find the sum at last 
*/

const question6 = students
  .filter((stu) => stu.marks < 60) // <60 marks students
  .map((stu) => ({
    ...stu,
    marks: stu.marks + 20,
  })) // add 20 marks
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(question6);
