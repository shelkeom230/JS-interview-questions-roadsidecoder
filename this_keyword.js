// explain this keyword
// meaning of this keyword depends on the context we are currently in

this.a = 5; // here, this points to our global object
console.log(this.a); // 5

console.log(this); // global window object for your js runtine, for node js , it is global object

function getParams() {
  console.log(this.a); // here, this inside a normal functoin targets to global object
  console.log(this); // global window object
}
getParams();

// this inside object
let user = {
  name: "omkar",
  age: 20,
  getDetails() {
    console.log(this.name); // inside a method belonging to an object, this keyword points to the object itself, so , here it prints user.name, here this is pointing to it's parent object only
  },
};

let customer = {
  name: "omkar",
  age: 20,
  childObj: {
    newName: "roadside coder",
    getDetails() {
      console.log(this.newName, "and", this.name); // roadside coder and undefined, in nestead object , this has access to it's parent object only and the the second level object properites, here this points to child object and not customer.
    },
  },
};

let arrowObject = {
  name: "roadside coder",
  age: 20,
  getDetails: () => {
    console.log(this.name); // prints nothing
    console.log(this); // arrow functions  does not have its own this binding, they take the value of this keyword from their enclosing lexical scope
  },
  getNestedDetails() {
    const nestedArrow = () => console.log(this.name); // as we know this inside arrow function points to it's enclosing lexical context, here it getNestedDetails() and value of this is the object itself for that
    nestedArrow();
  },
};
// customer.childObj.getDetails();
arrowObject.getNestedDetails();

// this keyword inside classes
class userClass {
  constructor(n) {
    this.name = n; // inside of a class, this keyword points to everything inside of a constructor
  }
  getName() {
    console.log(this.name); // prints passed name
  }
}
const userobj = new userClass("omkar");
console.log(userobj);
