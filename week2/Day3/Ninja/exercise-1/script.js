// Create the first person object
let person1 = {
  FullName: "John Doe",
  Mass: 80,      // Mass in kilograms
  Height: 1.75,  // Height in meters
  calculateBMI: function () {
    return this.Mass / (this.Height * this.Height);
  }
};

// Create the second person object
let person2 = {
  FullName: "Jane Smith",
  Mass: 65,      // Mass in kilograms
  Height: 1.65,  // Height in meters
  calculateBMI: function () {
    return this.Mass / (this.Height * this.Height);
  }
};

// Function to compare BMI and display the person with the largest BMI
function compareBMI(personA, personB) {
  let BMI_A = personA.calculateBMI();
  let BMI_B = personB.calculateBMI();

  if (BMI_A > BMI_B) {
    return personA.FullName;
  } else if (BMI_B > BMI_A) {
    return personB.FullName;
  } else {
    return "Both have the same BMI.";
  }
}

// Compare the BMI of both persons and display the result
let personWithLargestBMI = compareBMI(person1, person2);
console.log("The person with the largest BMI is: " + personWithLargestBMI);

