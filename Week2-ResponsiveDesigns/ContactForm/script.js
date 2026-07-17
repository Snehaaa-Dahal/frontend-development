const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  // Prevent the form from actually submitting/reloading the page
  event.preventDefault();

  let isValid = true;

  // Get all the values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Clear old error messages first
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").style.display = "none";

  // Validate name - just check it's not empty
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Validate email - check it's not empty AND matches a basic email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate message - just check it's not empty
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    isValid = false;
  }

  // If everything passed, show success message and reset form
  if (isValid) {
    document.getElementById("successMessage").style.display = "block";
    form.reset();
  }
});