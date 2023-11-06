//#method 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = "I watched " + myWatchedSeriesLength + " series : " + myWatchedSeries;
console.log(myWatchedSeriesSentence)

//#method 2
let myWatchedSeriesLength1 = myWatchedSeries.length;
let myWatchedSeriesSentence1 =(`I watched ${myWatchedSeriesLength1} series : ${myWatchedSeries}`)
console.log(myWatchedSeriesSentence1)

//part 2
// change to friends
myWatchedSeries.splice(myWatchedSeries.indexOf("the big bang theory"), 1, "friends");

// add serie at end
myWatchedSeries.push("The Witcher")

//at start add fav serie
myWatchedSeries.unshift("Lucifer");

// remove black mirror
myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"), 1);

//third letter of money heist
let moneyHeist = myWatchedSeries.find(series => series === "money heist");
if (moneyHeist) {
    let thirdLetter = moneyHeist[2];
    console.log(thirdLetter)
}

//changes made
console.log(myWatchedSeries)
