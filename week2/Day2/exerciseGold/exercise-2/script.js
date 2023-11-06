let userInput = prompt("Enter your grade.");
userInput = parseInt(userInput);

if (userInput >= 90) {
    alert("A")
} else if (userInput >= 80 ) {
    alert("B") 
} else if (userInput >= 70) {
    alert("C")
} else if (userInput < 70) {
    alert("D")
}