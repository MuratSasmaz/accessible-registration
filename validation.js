document.getElementById("registrationForm").addEventListener("submit", function (e) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorDiv = document.getElementById("error-message");

  if (password !== confirmPassword) {
    e.preventDefault();
    errorDiv.textContent = "Passwords do not match!";
  } else {
    errorDiv.textContent = "";
  }
});
