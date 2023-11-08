const people = ["Greg", "Mary", "Devon", "James"];
people.splice(people.indexOf("Greg"), 1); 
people.splice(people.indexOf("James"), 1, "Jason");
people.push("Yu");
console.log(people.indexOf("Mary"));
let peopleSlice = people.slice(1, 3);
console.log(peopleSlice);
console.log(people.indexOf("Foo")); // -1 because it doesn't exist
console.log(people)
let peopleLength = people.length;
console.log(peopleLength);
let last = people[people.length - 1];
console.log(last);
//part 2
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
for (let i = 0; i < people.length; i++) {
    if (people[i] === "Devon") {
        break;
    }
    console.log(people[i]);
}