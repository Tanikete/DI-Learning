// user enter word
let userInput = prompt("Enter a word:");

//check if user entered word
//if entered del vowels & replace string userInput with /[aeiou]/gi (g means global match and i case-insensitive match)
//then replace all match element with "" in resultWithoutVowels
if (userInput){
    let resultWithoutVowels = userInput.replace(/[aeiou]/gi, "");

    //provide a call back function to the replace
    //match.toLowerCase to convert into lowercase 
    //then use switch to map each vowel to corresponding number
    let resultWithNumbers = userInput.replace(/[aeiou]/gi, function(match) {
        switch (match.toLowerCase()) {
            case 'a':
                return '1';
                case 'e':
                    return '2';
                  case 'i':
                    return '3';
                  case 'o':
                    return '4';
                  case 'u':
                    return '5';
                  default:
                    return match;
}
 });
 //results 
 alert(resultWithoutVowels);
 alert(resultWithNumbers);
} else {
    alert(" no word entered.")
}