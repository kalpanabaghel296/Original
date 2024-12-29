document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get the values of the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation: Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Add server-side integration if needed (e.g., POST the form data)
    // You can use fetch() or XMLHttpRequest for this purpose

    // Redirect to loginpage.html upon successful sign-up
    alert("Sign-up successful! Redirecting to login page...");
    window.location.href = "loginpage.html";
  });
});
