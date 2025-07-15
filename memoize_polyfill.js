// Implement Caching / Memoize function in javascript.
// memoize polyfill
// our memoize functoin with callback
function memoize(func, context) {
  // store result here
  const res = {};

  // return a closure
  return function (...args) {
    // rest operator, create an array of args
    var argsCache = JSON.stringify(args);
    if (!res.hasOwnProperty(argsCache)) {
      res[argsCache] = func.apply(context || this, args);
    }
    return res[argsCache];
  };
}
const clumyProduct = (num1, num2) => {
  // some time consuming operation
  for (let i = 1; i <= 10000000; i++) {}

  return num1 * num2;
};

// call memoized functoin
const memoizedClumsyProduct = memoize(clumyProduct);
// measure the time
console.time("First call");
console.log(memoizedClumsyProduct(123458, 123568));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumsyProduct(12354, 98754));
console.timeEnd("Second call");

// difference between closure and scope
/*
1. whenever you return a functoin from another function, so that function is called as closure and it has access to it's parent/ outer function 
2. scope refers where you can access something, there are 2 things - is this variable in my  scope i.e can i access this variable at this location , - what is the scope of this variable ie. what is the limitation for the acess of this variable 

3. types of scope --> global , local or functional 
types of clousre, own or local, outer function and global 
*/
