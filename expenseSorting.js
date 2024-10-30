function parseInput(input) {
    return input.split(',').map(Number).filter(value => !isNaN(value));
}

function sortExpenses() {
    const expenses = parseInput(document.getElementById("expenses").value);
    const sortedExpenses = expenses.sort((a, b) => a - b);

    document.getElementById("sortResult").innerHTML = `
        <strong>Sorted Expenses:</strong> ${sortedExpenses.join(', ')}
    `;
}
