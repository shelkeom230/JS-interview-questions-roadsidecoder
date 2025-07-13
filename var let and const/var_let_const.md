# scope

- where you can access that variable

---

# Types of Scopes

1. **Global scope**

- You can access that variable anywhere inside the program. i.e, you can access it anywhere inside as well as outside block, function etc.

2. **Block Scope**

- You can only access that varible inside that block only

---

```javascript
{
  // here, let is block scoped.
  let a = 5;
  console.log(a); //5
}
console.log(a); // reference error, a is not defined.
```

3. **Function Scope**

- You can access that stuff inside that function only

---

```javascript
function fun() {
  // function scope
}
```

---

4. _const_ keyword

- it behaves the same like let, it is block scoped but it's value cannot be changed and it acts like a constant value.

---

```javascript
const pi = Math.PI;
const radius = 20;

pi = 30; // error
radius = 30; // error
```

---

- also, we can't access them outside of a block due to block scoped

```javascript
{
  const a = 3.1414;
  console.log(a); // 3.1414
}
console.log(a); //ref error.
```

---

5. **Rules about redeclaration**

- You can redefine varaibles created with var as many times with the same identifier name you wan't. Also, you can change the value by reassigning some other value.

- But, in case of let, you cannot redefine the variable with the same identifier name but you can reassign the value as many times as you wan't.

---

```javascript
{
  let a = 5; // block scope
  a = 10; // valid
  let a = 20; // not allowed, error
  console.log(a);
}

// for var
{
  var a = 5; // global scope
  a = 10; // allowed
  var a = 20; // *works
  console.log(a); // 20
}
console.log(a); // 20, as memory is allocated in global scope to a and reference a refers to the same memory locatoin everytime.
```

---

6. _let variables are shadowed for the block scope only, as soon as the scope ends, they get back to their original value_

```javascript
function test() {
  let a = "Hello";

  {
    let a = "Hi";
    console.log(a); // Hi
  }
  console.log(a); // Hello
}
test(); // Hi Hello
```

7. _if you try to shadow **let** variable using **var**, then, it gives you error.But, if you try to shadow **var** variable using **let**, if works fine_

```javascript
function test() {
  let a = "Hell0";
  var b = "goodbye";

  if (true) {
    var a = "Hi"; // error
    let b = "good"; // works fine
    console.log(a);
    console.log(b);
  }
  console.log(a);
  console.log(b);
}
test();
```

---

## Individual examples

```javascript
function test() {
  let a = "hello";

  if (true) {
    var a = "Hi"; // error
    // you cannot shadow a let variable using var
    console.log(a);
  }
  console.log(a);
}

function test() {
  var a = "hello";

  if (true) {
    let a = "hi"; // it is fine
    console.log(a); // hhi
  }
  console.log(a); // hi due to variable shadowing and memory is allocated in global scope, so changes are done at same place.
}
```

> this is called as **illegal shadowing**

8. ## Declarations

   > > **let & const** cannot be redeclared in the **same scope** > > **var** can be redeclared in the **same scope** > > **const** gives **missing initialiser error if not assigned a value while declaration**

   ***

   ```javascript
   let a;
   let a; // error

   var a;
   var a; // works fine

   const a;
   const a; // missing initialiser error
   ```

---

9. ## Declaration without initialisation

- let & const can be declared without initialisation and they hold _undefined_ value for that time
- const gives error in that case, it expects a value when it gets declared.

```javascript
let a; //valid
console.log(a); // undefined
var b;// valid
console.log(b); // undefined
const c; // error
```

---

### Note - **let & var can be reinitialised but const cannot be.**

---

```javascript
let a = 5;
a = 6; // valid

var b = 5;
b = 6; //valid

const c = 10;
c = 20; // error
```

---

- let and const variables are in temportal dead zone and they gives error if you try to access them before declaration
- let and const are hoisted in different memory space that global memory space and that's why you cannot access them , but they are also hoisted like your var
- var variable is hoisted in global memory space and that's why, their value is undefined before declaration.

---

```javascript
console.log(a); // undefined
var a = 5;

console.log(a); // error
let a = 10;
const a = 20; // error
```

- a cool question

```javascript
function abc() {
  console.log(a, b, c); // undefined
  // b gives error as b and c are in temportal dead zone, they are in scope but their value is not avaiable currently.

  const c = 30;
  let b = 20;
  var a = 10;
}
abc();
```
