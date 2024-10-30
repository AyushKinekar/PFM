function parseDebtInput(input) {
    return input.split(',').map(Number).filter(value => !isNaN(value) && value > 0);
}

function manageDebt() {
    const debts = parseDebtInput(document.getElementById("debtAmounts").value);
    const monthlyRepayment = parseFloat(document.getElementById("monthlyRepayment").value);

    if (debts.length === 0 || isNaN(monthlyRepayment) || monthlyRepayment <= 0) {
        document.getElementById("debtResult").innerHTML = "Please enter valid debt amounts and repayment.";
        return;
    }

    let totalDebt = debts.reduce((sum, debt) => sum + debt, 0);
    let monthsRequired = Math.ceil(totalDebt / monthlyRepayment);

    document.getElementById("debtResult").innerHTML = `
        With a total debt of ₹${totalDebt.toFixed(2)}, and a monthly repayment of ₹${monthlyRepayment.toFixed(2)},
        it will take approximately ${monthsRequired} months to repay all debts.
    `;
}
