const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const inputSubscribe = document.getElementById("inputSubscribe");
const emailSend = document.getElementById("emailSend");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", validateEmail);
inputSubscribe.addEventListener("click", subscribe);

function validateEmail() {
  const email = emailInput.value.trim();

  if (emailPattern.test(email)) {
    emailError.textContent = "";
    emailInput.classList.remove("invalid");
  } else {
    emailError.textContent = "Please enter a valid email address.";
    emailInput.classList.add("invalid");
  }
}
function subscribe() {
  const email = emailInput.value.trim();
  if (emailPattern.test(email)) {
    emailSend.textContent = "Thank you for subscribing!";
    emailSend.display = "block";
    emailError.textContent = "";
    setTimeout(() => {
      emailSend.style.display = "none";
    }, 3000);
    
  }
  
}

