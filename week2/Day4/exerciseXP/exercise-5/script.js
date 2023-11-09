function changeEnough(itemPrice, amountOfChange) {
    let quatersvalue = 0.25;
    let dimesvalue = 0.1;
    let nickelsvalue = 0.05;
    let penniesvalue = 0.01;
    let totalChange = amountOfChange[0] * quatersvalue + amountOfChange[1] * dimesvalue + amountOfChange[2] * nickelsvalue + amountOfChange[3] * penniesvalue;

    if (totalChange >= itemPrice) {
        return true;
    } else {
        return false;
    }
}
let canAfford = changeEnough(0.75, [0,0,0,5]);
console.log(canAfford);