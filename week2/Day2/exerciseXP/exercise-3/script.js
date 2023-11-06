let userInput = prompt("Enter a number;");
let number = parseInt(userInput);

if (isNaN(number)) {
alert("Invalid input. Enter a valid number");
} else{
    if (number % 2 === 0) {
        alert(number + " is an even number");
    } else {
        alert(number + " is an odd number")
    }
}
