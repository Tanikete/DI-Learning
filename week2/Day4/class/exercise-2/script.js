// Define the function that takes the 'myAge' parameter and returns your mom's age
function calculateMumAge(myAge) {
    let mumAge = myAge * 2;
    return mumAge;
}

// Call the function with your age as the parameter (you can change the value)
let myAge = 25; // Replace 25 with your actual age
let mumAgeResult = calculateMumAge(myAge);

// Log the result in the global scope
console.log("My mum's age is: " + mumAgeResult + " years old");
