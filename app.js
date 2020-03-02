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
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);
  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositNumber = parseFloat(currentDeposit);
  const totalDeposit = depositNumber + currentDepositNumber;

  document.getElementById("currentDeposit").innerText = totalDeposit;
  document.getElementById("depositAmount").value = "";
});

//withdraw button event handler
const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function() {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);
  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositNumber = parseFloat(currentDeposit);
  const totalDeposit = depositNumber + currentDepositNumber;

  document.getElementById("currentDeposit").innerText = totalDeposit;
  document.getElementById("depositAmount").value = "";
});
