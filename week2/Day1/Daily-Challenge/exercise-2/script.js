const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

//access orange
//moreFruits[1] access 2nd element in the array which is itself an array
//moreFruits[1][1] access the 2nd element of that inner array 
//moreFruits[1][1][0] access the first element of innermost array 
let oranges = moreFruits[1][1][0];
console.log(oranges);