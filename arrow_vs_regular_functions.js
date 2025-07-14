// what is the difference between arrow vs regular functions
// 1. syntax
const reguularFunction = function (first, second) {
  return first + second;
};

const arrowFunction = (first, second) => first + second;

// 2. implicit return statement
// arrow function has implicit return statement for single line but normal function does not have

// 3. arguments
function add() {
  console.log(arguments); // prints all the arguments passed while calling the function
}
add(1, 2, 3);

/*
const addArrow = () => {
  console.log(arguments); // error
};
addArrow(1, 2, 3);
*/

// this keyword inside a regular method and an arrow function belonging to an object

let user = {
  username: "roadside coder",
  rc1: () => {
    console.log("subscribe to " + this.username);
  },
  rc2() {
    console.log("subscribe to " + this.username);
  },
};
user.rc1();
user.rc2();
