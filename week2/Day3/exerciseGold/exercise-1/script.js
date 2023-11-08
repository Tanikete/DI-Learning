let numbers = [123, 8409, 100053, 333333333, 7]
for (let i = 0; i < numbers.length; i++) {
    let DivisibleByThree = numbers[i] % 3 === 0;
    console.log(DivisibleByThree);
} 