let colors = ["Blue", "Black", "White", "Pink", "Violet"];
let suffix = ["st", "nd", "rd", "th" , "th"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffix[i]} choice is ${colors[i]}`);
}