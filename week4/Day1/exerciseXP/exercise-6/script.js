let bankAmount = 1000;
const vat = 0.17;
const expenses = ["+200", "-100", "+146", "+167", "-2900"]
for (let i = 0; i < expenses.length; i++) {
    let expense = parseInt(expenses[i]);
    if (expense > 0) {
        bankAmount += expense;
    } else {
        bankAmount += expense - (expense * vat);
    }
}
console.log("Bank Account Standing at the end of the month: $" + bankAmount.toFixed(2));