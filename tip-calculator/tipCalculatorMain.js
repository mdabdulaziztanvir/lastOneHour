const billAmmount = document.getElementById("billAmmount");
const tipPercentage = document.getElementById("tipPercentage");
const tipCalculateButton = document.getElementById("tipCalculateButton");
const calulatedTips = document.getElementById("calulatedTips");
const successBallon = document.getElementById("successBallon");

tipCalculateButton.addEventListener("click", (e) => {
  e.preventDefault();

  const tipPercentageValue = Number(tipPercentage.value);
  const billAmmountValue = Number(billAmmount.value);

  const percentageCalculation = (tipPercentageValue * billAmmountValue) / 100;
  const total = billAmmountValue + percentageCalculation;

  if (!tipPercentageValue || !billAmmountValue) {
    calulatedTips.style.color = "red";
    calulatedTips.textContent = "Please Enter Something";
  } else if (billAmmountValue < 1 || tipPercentageValue < 0) {
    calulatedTips.style.color = "red";
    calulatedTips.textContent = "Please Enter Only Positive Number";
  } else {
    calulatedTips.style.color = "black";

    calulatedTips.textContent = total;
    successBallon.style.display = "block";
    setInterval(() => {
      successBallon.style.display = "none";
    }, 3000);
  }
});
