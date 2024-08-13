const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");

// Regular expression pattern for email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Event listener for input field
emailInput.addEventListener("input", validateEmail);

// Function to validate email
function validateEmail() {
  const email = emailInput.value.trim();

  if (emailPattern.test(email)) {
    // Valid email
    emailError.textContent = "";
    emailInput.classList.remove("invalid");
  } else {
    // Invalid email
    emailError.textContent = "Please enter a valid email address.";
    emailInput.classList.add("invalid");
  }
}
