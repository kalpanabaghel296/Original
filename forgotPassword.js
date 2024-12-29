document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents the default form submission
  
      const email = document.getElementById("email").value;
  
      // Display a message to the user (for demonstration purposes)
      alert(`A password reset link has been sent to ${email}`);
  
      // Here, you would typically send a POST request to your backend with the email address
      // Example:
      // fetch('/api/request-password-reset', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })
      // .then(response => response.json())
      // .then(data => {
      //   if (data.success) {
      //     alert("Password reset link sent!");
      //   } else {
      //     alert("Error: " + data.message);
      //   }
      // });
  
      // Optionally, redirect back to the login page
      window.location.href = "loginPage.html";
    });
  });
  