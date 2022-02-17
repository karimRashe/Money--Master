document.getElementById('button-In').addEventListener('click', function () {
    //  Income
    const tenIncome = document.getElementById('Income-input');
    const incomeAmountText = tenIncome.value;
    const depositAmount = parseFloat(incomeAmountText);
    // console.log(incomeAmount);
    const incomeTotal = document.getElementById('total-Expenses');
    const incomeAmountTotal = incomeTotal.innerText;
    const previousincomeToral = parseFloat(incomeAmountTotal);
    incomeTotal.innerText = previousincomeToral + depositAmount;
    tenIncome.value = '';
    // console.log(incomeAmountTotal);
    // clrar field


})


// food food-input
document.getElementById('button-In').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodAmountText = foodInput.value;

    const foodAmountTextTotal = document.getElementById('total-Expenses');
    const foodAmountText = foodAmountTextTotal.innerText;

    foodAmountTextTotal.innerText = foodAmountTextTotal + foodAmountText;

})

