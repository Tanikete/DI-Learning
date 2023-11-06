let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not");
let wordBad= sentence.indexOf("bad");
// Check if "not" and "bad" are both present and "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
    
    //replace not..bad with good
    let result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(result);
} else {
    console.log(sentence);
}