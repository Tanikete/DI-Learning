while (true) {
let userInput = prompt("Please enter a number");
let num = parseFloat(userInput);

//check if is number
  if (isNaN(num)) {
    alert("not a number");
    break;
  }

 
//repeats unless 10 is entered
  if (!isNaN(num) && num === 10) {
    alert("Great!");
    break; 
  }
}