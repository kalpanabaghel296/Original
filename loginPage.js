// Wait for the DOM to be fully loaded before adding event listener
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    // You can add any validation here if necessary
    
    // Redirect to home.html
    window.location.href = "dashboard.html";
  });
});
