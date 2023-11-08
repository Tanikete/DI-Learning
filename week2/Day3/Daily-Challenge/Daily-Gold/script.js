// Original array
const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// Convert the array to a string using .toString() method
const numbersToString = numbers.toString();
console.log(numbersToString);

// Convert the array to a string using .join() method with different delimiters
let joinPlus = numbers.join("+");
console.log(joinPlus);

let joinSpace = numbers.join(" ");
console.log(joinSpace);

let joinEmpty = numbers.join("");
console.log(joinEmpty);

// Bubble Sort to sort the array in descending order
// -1 is used to make sure largest number is always on the left
// -1 -i for nested loop part because i is already sorted from above loop
// j + 1 check if j is smaller than j +1 
// if it is, swap the values

for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] < numbers[j + 1]) {
      // Swap values using a temporary variable
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
  // Log the current state of the array after each pass
  console.log(`Pass ${i + 1}: [${numbers.join(", ")}]`);
}

// Final sorted array in descending order
console.log("Sorted in Descending Order:", numbers);
