let sentence = prompt("Enter a sentence containing the word 'Nemo':");

// Use the indexOf method to find the position of "Nemo" in the sentence
let nemoIndex = sentence.indexOf("Nemo");

if (nemoIndex !== -1) {
  // "Nemo" was found in the sentence
 alert(`I found Nemo at ${nemoIndex}`);
} else {
  // "Nemo" was not found in the sentence
 alert("I can't find Nemo");
}
