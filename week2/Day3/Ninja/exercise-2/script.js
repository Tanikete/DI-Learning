// Function to calculate the average of grades
function calculateAverage(gradesList) {
    if (gradesList.length === 0) {
      return 0; // To avoid division by zero
    }
  
    let total = gradesList.reduce((acc, grade) => acc + grade, 0);
    return total / gradesList.length;
  }
  
  // Function to determine whether the user passed or failed
  function determinePassOrFail(average) {
    console.log("Average grade: " + average);
  
    if (average >= 65) {
      console.log("You passed the course!");
    } else {
      console.log("You failed the course and must repeat it.");
    }
  }
  
  // Main function that combines both steps
  function findAvg(gradesList) {
    let average = calculateAverage(gradesList);
    determinePassOrFail(average);
  }
  
  // Test the function with a list of grades
  let grades = [85, 92, 78, 60, 45];
  findAvg(grades);
  