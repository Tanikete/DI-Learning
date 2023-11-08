const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

//Extract the first letter of each name and store them in an array
let firstName = names.map(name => name[0]);

//Sort the array in alphabetical order
let sortedNames = firstName.sort();

//Join all the letters together in a string
let societyName = sortedNames.join("");
console.log(societyName);
