const names = ["john", "sarah", 23, "Rudolf", 34];

// Write the solution of exercise 1 here
for (let i = 0; i < names.length; i++) {
    if (typeof names[i] === "string") {
        if (names[i][0] !== names[i][0].toUpperCase()) {
            names[i] = names[i][0].toUpperCase() + names[i].substr(1);
        }
        console.log(names[i]);
    }
}

// Write the solution of exercise 2 here
for (let i = 0;i < names.length; i++) {
    if (typeof names[i] !== "string") {
        break;
    }
    console.log(names[i]);
}