function calculateTip() {
    let userInput = parseInt(prompt("How much is the bill?"));
    if (isNaN(userInput)) {
        alert("Please put proper value");
    } else if (userInput < 50) {
        alert(`The tip is ${userInput * 0.2}`);
        
    } else if (userInput >= 50 && userInput <= 200) {
        alert(`The tip is ${userInput * 0.15}`);
    } else { (userInput > 200) 
        alert(`The tip is ${userInput * 0.1}`);
    }
}
calculateTip()