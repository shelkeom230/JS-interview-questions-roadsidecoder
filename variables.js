// console.log(count); // undefined
var count = 1;

// console.log(a);
let a;

function abc() {
  console.log(a, b, c); // undefined

  const c = 30;
  let b = 20;
  var a = 10;
}
abc();
