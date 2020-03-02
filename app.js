const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transArea = document.getElementById("transaction-area");
  transArea.style.display = "block";
});
