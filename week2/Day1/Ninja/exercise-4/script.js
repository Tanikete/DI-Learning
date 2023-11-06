//takes input number and execute function
//numder < 2 = boom
//number % 2 === 0 this line let function know where to add letter m
//number % 5 === 0  this tell the function to make the result in uppercase 
function boomString(number) {
    if (number < 2) {
      return "boom";
    } else {
      let result = "B" + "o".repeat(number);
  
      if (number % 2 === 0) {
        result += "m!";
      }
  
      if (number % 5 === 0) {
        result = result.toUpperCase();
      }
  
      return result;
    }
  }
  
  // Prompt the user for a number
  //parseInt let user convert input into integer
  let userNumber = parseInt(prompt("Enter a number:"));
  
  // Call the function and display the result
  let resultString = boomString(userNumber);
 alert(resultString);