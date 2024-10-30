function parseInput(input) {
    return input.split(',').map(Number).filter(value => !isNaN(value) && value > 0);
}

function knapsackAlgorithm(values, budget) {
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () => Array(budget + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= budget; w++) {
            if (values[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - values[i - 1]]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    const selected = [];
    let w = budget;
    for (let i = n; i > 0 && w > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
            selected.push(values[i - 1]);
            w -= values[i - 1];
        }
    }

    return { maxSavings: dp[n][budget], selected };
}

function optimizeBudget() {
    const income = parseFloat(document.getElementById("income").value);
    const essentialExpenses = parseInput(document.getElementById("essentialExpenses").value);
    const nonEssentialExpenses = parseInput(document.getElementById("nonEssentialExpenses").value);

    const essentialTotal = essentialExpenses.reduce((sum, expense) => sum + expense, 0);
    const budgetLimit = income - essentialTotal;

    if (budgetLimit < 0) {
        document.getElementById("result").innerHTML = "Income is not enough to cover essential expenses!";
        return;
    }

    const { maxSavings, selected } = knapsackAlgorithm(nonEssentialExpenses, budgetLimit);
    const recommendedTotal = selected.reduce((sum, expense) => sum + expense, 0);

    document.getElementById("result").innerHTML = `
        <strong>Monthly Income:</strong> ₹${income.toFixed(2)}<br>
        <strong>Essential Expenses:</strong> ₹${essentialTotal.toFixed(2)}<br>
        <strong>Optimized Budget Output:</strong> <br> Maximum Savings: ₹${(budgetLimit - recommendedTotal).toFixed(2)}, <br> Recommended Non-Essential Expenses: <br> ${selected.join(', ')}
    `;
}
