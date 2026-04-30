const billAmount = document.getElementById("bill_amount");
const tipPercentage = document.getElementById("tip_percentage");
const totalAmount = document.getElementById("total_amount");

function myTipCalculator() {
  const billAmountValue = Number(billAmount.value);
  const tipPercentageValue = Number(tipPercentage.value);
  const percentageAmount = Number((billAmountValue * tipPercentageValue) / 100);

  const result = billAmountValue + percentageAmount;
  totalAmount.textContent = Number.parseFloat(result).toFixed(2);
  console.log("Total:", result);
}
