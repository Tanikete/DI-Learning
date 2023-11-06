console.log(typeof(15))
// Prediction: Number, its a number
// Actual: Number

console.log(typeof(5.5))
// Prediction: Number, its a number
// Actual: Number

console.log(typeof(NaN))
// Prediction: Number, Not a Number (arithmetic operations with non-numeric values such as a "Number * String")
// Actual: Number

console.log(typeof("hello"))
// Prediction: String, its a string
// Actual: String

console.log(typeof(true))
// Prediction: Boolean,  its a boolean (true/false)
// Actual: Boolean

console.log(typeof(1 != 2))
// Prediction: Boolean, its a boolean
// Actual: Boolean

console.log("hamburger" + "s")
// Prediction: hamburgers, adding "x" + "y"
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: NaN, cannot directly substract from string
// Actual: NaN

console.log("1" + "3")
// Prediction: 13, adding "x" + "y"
// Actual: 13

console.log("1" - "3")
// Prediction: NaN, cannot directly substract from string
// Actual: NaN

console.log("johnny" + 5)
// Prediction: johnny5, adding string "x" +  number "y"
// Actual: johnny5

console.log("johnny" - 5)
// Prediction: NaN, cannot substract string from number
// Actual: NaN

console.log(99 * "hello")
// Prediction: NaN, hello is not a numerical number
// Actual: NaN

console.log(1 != 1)
// Prediction: false, !=  check if it has inequality between two values
// Actual: false

console.log(1 == "1")
// Prediction: true,  == means it check if it has same value/data
// Actual: true

console.log(1 === "1")
// Prediction: false, === means it check whetner it has same value and data
// Actual: false