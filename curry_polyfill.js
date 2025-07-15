// curry() implementation -- writing your own curry function which converts f(a,b,c) to f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    console.log(args.length, func.length);
    // return the final result only when the arguments passed one by one are equal to the length of the function
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;
const totalSum = curry(sum);
console.log(totalSum(1)(2)(3)(4));
