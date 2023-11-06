// first num
//parseFloat turns string into valid number
let num1 = parseFloat(prompt('Enter first number'));

//second num
let num2 = parseFloat(prompt('Enter second number'));

//check if valid numbers
//!isNaN check if its not a number
//&& logical AND => if statement is false it will follow through the conditions mentioned under the curly brackek 
if (!isNaN(num1) && !isNaN(num2)) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let divide = num1 / num2;

alert(
    `Results:\n
    Sum: ${sum}\n
    Difference: ${difference}\n
    Product: ${product}\n
    divide: ${divide}`
  );
} else {
  alert("Invalid input. Please enter valid numbers.");
}