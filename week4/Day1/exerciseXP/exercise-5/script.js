const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((currentColor, index) => {
    console.log(`${index + 1}${ordinal[index + 1] || ordinal[0]} choice is ${currentColor}`);
}
);