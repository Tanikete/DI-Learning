let userInput = prompt("Enter number:");
let userNumber = parseInt(userInput);
for (i= 0; i <= userNumber; i++) {
    if (i % 2 == 0) {
        alert(i + " is even");
    } else {
        alert(i + " is odd");
    }
}