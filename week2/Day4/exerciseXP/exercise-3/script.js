function isDivisible(diviser) {
    let sum = 0;
    for (i = 0; i <= 500 ; i++) {
        if (i % diviser === 0) {
            console.log(i)
            sum += i;
        }
    }
    console.log("The sum of numbers divisible by 23 is: " + sum);
    return sum; 
}
let divisibleSum = isDivisible();
console.log(divisibleSum);