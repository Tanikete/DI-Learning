let str1 = "mix";
let str2 = "pod";

//slice out first 2 characters
let sliceStr1 = str1.slice(0, 2)
let sliceStr2 = str2.slice(0, 2)

//swap first 2 characters
let newstr1 = sliceStr2 + str1.slice(2);
let newstr2 = sliceStr1 + str2.slice(2);
console.log(newstr1)
console.log(newstr2)

// combine
let newWord = (`${newstr1} ${newstr2}`)
console.log(newWord)

