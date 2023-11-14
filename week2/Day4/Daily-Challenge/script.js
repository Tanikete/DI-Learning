function createFrame(words) {
    // Split the input string into an array of words
    let wordArray = words.split(',').map(word => word.trim());

    // Find the length of the longest word
    let maxLength = Math.max(...wordArray.map(word => word.length));

    // Create the top border of the frame
    let topBorder = '*'.repeat(maxLength + 4);

    // Initialize the frame string with the top border
    let frame = topBorder + '<br>';

    // Add the words with side borders and proper alignment to the frame string
    wordArray.forEach(word => {
        let spaces = ' '.repeat(maxLength - word.length);
        frame += `* ${spaces}${word} *<br>`;
    });

    // Add the bottom border to the frame string
    frame += topBorder;
   


    // Return the frame string
    return frame;
}

// Prompt the user for input
let userInput = prompt("Enter several words separated by commas:");

// Display the words in a rectangular frame on the page
document.write(createFrame(userInput));
