let isString = (str) => typeof str === 'string' ? "true" : "false";

console.log(isString(`hello`)); // true
console.log(isString([1, 2, 3])); // false
