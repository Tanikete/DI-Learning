let userInput = parseInt(prompt("Enter a number of beers :"));
//using for method
// function song(userInput) {
//     for (let i = userInput; i > 0; i--) {
//         let currentBottle = i;
//         let nextBottle = i - 1;
//         if (currentBottle === 0) {
//             console.log("No more bottles of beer on the wall, no more bottles of beer.");
//         } else if (currentBottle === 1) {
//             console.log("1 bottle of beer on the wall, 1 bottle of beer.");
//         } else {
//             console.log(`${currentBottle} bottles of beer on the wall, ${currentBottle} bottles of beer.`);
//         } 
//         if (nextBottle === 0) {
//             console.log("Take one down and pass it around, no more bottles of beer on the wall.");
//         } else if (nextBottle === 1) {
//             console.log(`Take one down and pass it around, ${nextBottle} bottles of beer on the wall.`);
//     } 
//     else{
//         console.log(`Take one down and pass it around, ${nextBottle} bottles of beer on the wall.`);
//     }
// }
// }
// song(userInput);

// using while method
function song(userInput) { 
    let i = userInput;
    while (i > 0) {
    let currentBottle = i;
    let nextBottle = i - 1;
    if (currentBottle === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
    } else if (currentBottle === 1) {
        console.log("1 bottle of beer on the wall, 1 bottle of beer.");
    } else {
        console.log(`${currentBottle} bottles of beer on the wall, ${currentBottle} bottles of beer.`);
    } 
    if (nextBottle === 0) {
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    } else if (nextBottle === 1) {
        console.log(`Take one down and pass it around, ${nextBottle} bottles of beer on the wall.`);
    }else {
            console.log(`Take one down and pass it around, ${nextBottle} bottles of beer on the wall.`);
        }
        i--;
    }
}
song(userInput);   
