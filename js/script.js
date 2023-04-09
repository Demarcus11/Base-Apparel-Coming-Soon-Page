const input = document.querySelector(".base-apparel-input"),
  errorMessage = document.querySelector(".error-message"),
  errorIcon = document.querySelector(".error-icon"),
  form = document.querySelector(".base-apparel-form");

function validateEmail() {
  const email = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Show error styles when email is invalid
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Please provide a valid email";
    input.style.borderColor = "red";
    errorIcon.style.display = "block";
    return false;
  }

  // Reset to base styles when user enters a valid email
  errorMessage.textContent = "";
  input.style.borderColor = "hsl(0, 36%, 70%)";
  errorIcon.style.display = "none";
  return true;
}

// If the input field is blank and the user clicks off the input, hide error styles
input.addEventListener("blur", function () {
  if (input.value.trim() === "") {
    errorMessage.textContent = "";
    input.style.borderColor = "hsl(0, 36%, 70%)";
    errorIcon.style.display = "none";
  }
});
