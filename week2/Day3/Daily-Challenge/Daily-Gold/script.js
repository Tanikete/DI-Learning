// Original array
const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// Convert the array to a string using .toString() method
const numbersToString = numbers.toString();
console.log(numbersToString);

// Convert the array to a string using .join() method with different delimiters
const joinPlus = numbers.join("+");
console.log(joinPlus);

const joinSpace = numbers.join(" ");
console.log(joinSpace);

const joinEmpty = numbers.join("");
console.log(joinEmpty);

// Bubble Sort to sort the array in descending order
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] < numbers[j + 1]) {
      // Swap values using a temporary variable
      const temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
  // Log the current state of the array after each pass
  console.log(`Pass ${i + 1}: [${numbers.join(", ")}]`);
}

// Final sorted array in descending order
console.log("Sorted in Descending Order:", numbers);
