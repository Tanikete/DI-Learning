const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let order = () => {
    colors.forEach((currentColor, index) => {
        console.log(`${index + 1}# choice is ${currentColor}`);
    });
    console.log(colors.includes("Violet") ? "Yeah" : "No...");
};

order();
