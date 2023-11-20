let bankAmount = 1000;
const vat = 0.17;
const expenses = ["+200", "-100", "+146", "+167", "-2900"];

for (let i = 0; i < expenses.length; i++) {
    let expense = parseFloat(expenses[i]);
    expenses[i] = (expense * (1 + vat)).toFixed(2);
    bankAmount -= expense;
}

console.log("Bank Account Standing at the end of the month: $" + bankAmount.toFixed(2));
