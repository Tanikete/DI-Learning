let userInput = prompt("Enter a verb");
let userInputLength = userInput.length

if (userInputLength >= 3) {
    if (userInput.endsWith("ing")){
        userInput += "ly";
    } else {
        userInput += "ing";
    }
}
alert(userInput)