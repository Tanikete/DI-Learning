//numbers user put with ,
let num1 = prompt('numbers seperated comma :');

// split the numbers
let numbersArray = num1.split(",");

//var to store number
let sum = 0;

//loop array and find sum
//let i = 0 initialize value i and set to 0
// i < numbersArray.lenght check if loop shud run
//i++ increase value of i by 1 and move to next array
// Use parseFloat to convert the string to a number
//!isNaN check if conditional statement is store in number to run the code inside if block
// sum+=number sum accumulated of all valid numbers inside loop

for (let i = 0; i < numbersArray.length; i++) {
    // Use parseFloat to convert the string to a number
    let number = parseFloat(numbersArray[i]);
    if (!isNaN(number)) {
        sum += number;
      }
    }
    //output shown in browser
    alert("The sum of the numbers is: " + sum);