// objects
const user = {
  name: "roadside coder",
  age: 24,
  "like this video": true,
};

user.name = "piyush agarwal"; //modify

// delete user.age -- remove a property

console.log(user.name); // access
console.log(user);

// what it will print
const employee = (function (salary) {
  delete salary;
  return salary;
})(10000);

console.log(employee); // prints 10000
/*
delete operator only works on deleting the properties of objects, here we are using a function expression and using delete does not at all affects the value of salary, also we are using IIFE functoin here.
*/

// access a property using subscript array operator
// delete user["like this video"]

console.log(user["like this video"]);

// adding dynamic properties to user
const property = "firstName";
const name = "omkar";

const newUser = {};

// easy way
newUser[property] = name;

/*
standard way 
const newUser={
[property]:name
}
*/
console.log(newUser);

// iterate over an object
// use for  loop
for (key in user) {
  console.log(key, user[key]);
}

// use for each loop
Object.keys(user).forEach((key) => console.log(key));

Object.values(user).forEach((value) => console.log(value));

Object.entries(user).forEach(([key, value]) =>
  console.log(`${key} => ${value}`)
);

// what will be the output ?
const obj = {
  a: "one",
  b: "two",
  a: "three",
};
// duplicate key assignment in obj overrides the value
console.log(obj); // a:three, b:two

// create a function multiplyNumericBy2(obj) which takes in an object and multiplies all of it's numeric properties by 2

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};
function multiplyNumericBy2(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  return obj;
}

console.log(multiplyNumericBy2(nums));

// what will be the output
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

/*
this works if we use map here 
const a=new Map();
const b={key:"b"};
const c={key: "c"};

a.set(b,123);
a.set(c,456);

console.log(a.get(b)); // it prints 123;
/*
when we do a[b] and a[c]
it works like 
a["[object Object]"]=123;
a["[objet Object]"]=456;
as  b and c are object itself and we are not converting them into string, they are assigned like above and value 123 is overriden by 456.
*/

// what is JSON.stringify and JSON.parse ?
const company = {
  name: "disney",
  isProduct: true,
};

// print normal object
console.log(company);

// print company object as string -- use JSON.stringify()
console.log(JSON.stringify(company));

const strObject = JSON.stringify(company);

// convert string back to object -- use JSON.parse()
console.log(JSON.parse(strObject));

// where we can use this --> we can store an object as a string in local storage and get it back as an object by parsing it from local storage itself

/*
localStorage.setItem(JSON.stringify("test"));

JSON.parse(localStorage.getItem("test"));
*/

let result = [..."Lydia"]; // spread this string over characters and return an array of chars
console.log(result);

console.log([..."omkar"]);

// what is the output
const famousUser = { name: "siddhu moosewala", age: 24 };
const admin = { admin: true, ...famousUser }; // here doing ...famousUser will seprate this object and add all of it's properties to admin object here.

console.log(admin);

// what is the outupt
const settings = {
  username: "Piyush",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
// json.stringify(object,[array of args]) here, the second parameter is the replacer array
// when the replacer is an array of property names , it tell JSON.stringify() to only include those keys in the output.
// it tells JS engine to only serialize the level and health properties from settings.

console.log(data);

// what will be the output
const shape = {
  radius: 10,
  diameter() {
    return Math.PI * this.radius * this.radius;
  },
  perimeter: () => {
    return 2 * Math.PI * this.radius;
  },
};
// here, this does not have it's own binding in case of arrow functions, so here,it refers to the global object which is undefined , so the value is NaN
console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NAN

// what is destructuring in an object
// we can get back some required properties from an object using this syntax
const userInfo = {
  username: "coder",
  age: 20,
  domain: "frontend",
  fullName: {
    first: "Omkar",
    last: "Shelke",
  },
};
// how can we rename this -- we can just use colon syntax
const username = "roadside coder";
const { username: myUserName } = userInfo; // destructure
console.log(myUserName);

// nested destructuring -- dont use direct first, as it will be renamnig syntax , instead use {property name}
const {
  fullName: { first },
} = userInfo;
console.log(first); // print only first name from the fullname objecct from userInfo object.

// what is the output
/*
always, rest operator must be last parameter of your params list but same is not applicable for the spread operator
*/
function getItem(fruitList, favouriteFruit, ...args) {
  return [...fruitList, ...args, favouriteFruit];
}

console.log(getItem(["apple", "banana"], "mango", "kiwi"));

// what is the output
let cc = { greeting: "Hey !" };
let d;

d = cc; // we are not passing the object, rather , we are passing the reference of cc to variable d

cc.greeting = "Hello";
console.log(d.greeting);

// what is the output
// both of them as false , as javascript compares object by reference and not by values.
console.log({ a: 1 } == { a: 1 }); // true
// console.log({ a: 1 } === { a: 1 }); //always false

// what is the output
let person = { name: "Lydia" };
const members = [person];
person = null;
// person.name=null; -- now this will affect name and set it to null
console.log(members); // [{name: "Lydia"}]

/* 
some important points 
1. in js, objects are reference types
2. assigning an object to another variable( or putting it in an array) copies the reference, not the object itself.
3. setting person=null doesn't delete or change the original object -- it just breaks on of the reference to it.still, you can do the modifications to the object using the second reference i.e members 
*/

// what is the output
const val = { number: 10 };

const multiply = (x = { ...val }) => {
  console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20
multiply(val); // 20
multiply(val); // 20*2=40

// when no args are passed, the default value is the shallow clone of val
// passing val directly causes mutations to affect the original object
// in js, objects are passed by reference , unless explicitly cloned.

// what is the output
function chnageAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "john",
    age: 50,
  };
  return person;
}

const personObj1 = {
  name: "alex",
  age: 50,
};

const personObj2 = chnageAgeAndReference(personObj1);
console.log(personObj1); // age will be changed to 25 due to reference passing
console.log(personObj2); // as it is person in function

// what is shallow copy and what is deep copy
// now, how to deep copy / clone an object ?
