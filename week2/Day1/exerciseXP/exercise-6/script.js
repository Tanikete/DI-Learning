console.log(5 + "34")
// Prediction: 534, 5+34
// Actual: 534

console.log(5 - "4")
// Prediction: 1, (5-4) => Js auto attempt to change string to num during this type of instance
// Actual: 1

console.log(10 % 5)
// Prediction: 0, 10/5 gives no remainder
// Actual: 0

console.log(5 % 10)
// Prediction: 5, 5/10 gives a remainder of 5
// Actual: 5

console.log("Java" + "Script")
// Prediction: JavaScript, "x" + "y"
// Actual: JavaScript

console.log( " " + " " )
// Prediction: " " , appending a string to an int => JS does it by thinking it's a string
// Actual:

console.log(" " + 0)
// Prediction:  "0", appending a string to an int => JS does it by thinking it's a string
// Actual: 0

console.log(true + true)
// Prediction: 2 , true counts as number 1 hence 1+1
// Actual:  2

console.log(true + false)
// Prediction: 1,  false counts as number 0 hence 0+1
// Actual: 1

console.log(false + true)
// Prediction: 1, 0+1
// Actual: 1

console.log(false - true)
// Prediction: 0, 0-1
// Actual: -1

console.log(!true)
// Prediction: false, Logical not operator turns true into false
// Actual: false

console.log(3 - 4)
// Prediction: -1, 3-4 = -1
// Actual: -1

console.log("Bob" - "bill")
// Prediction: NaN, cannot substract string to string
// Actual: NaN