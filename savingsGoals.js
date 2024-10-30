function calculateGoal() {
    const goalAmount = parseFloat(document.getElementById("goal").value);
    const monthlySavings = parseFloat(document.getElementById("monthlySavings").value);

    if (isNaN(goalAmount) || isNaN(monthlySavings) || goalAmount <= 0 || monthlySavings <= 0) {
        document.getElementById("goalResult").innerHTML = "Please enter valid amounts for goal and savings.";
        return;
    }

    const monthsRequired = Math.ceil(goalAmount / monthlySavings);
    document.getElementById("goalResult").innerHTML = `
        To reach your goal of ₹${goalAmount.toFixed(2)}, you need to save for approximately ${monthsRequired} months.
    `;
}
