//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transArea = document.getElementById("transaction-area");
  transArea.style.display = "block";
});

//deposit button event handler
const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function() {
  const depositNumber = getInputNumber("depositAmount");

  //   const currentDeposit = document.getElementById("currentDeposit").innerText;
  //   const currentDepositNumber = parseFloat(currentDeposit);
  //   const totalDeposit = depositNumber + currentDepositNumber;
  //   document.getElementById("currentDeposit").innerText = totalDeposit;
  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);
  document.getElementById("depositAmount").value = "";
});

//withdraw button event handler
const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", function() {
  const withdrawNumber = getInputNumber("withdrawAmount");

  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id) {
  const Amount = document.getElementById(id).value;
  const amountNumber = parseFloat(Amount);
  return amountNumber;
}

function updateSpanText(id, depositNumber) {
  const currentBalance = document.getElementById(id).innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  document.getElementById(id).innerText = totalBalance;
}
