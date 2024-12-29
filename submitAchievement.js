document.getElementById('submitAchievementForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload for demonstration

  // Display a success message
  const statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = 'Your achievement has been successfully sent to the admin.';
  
  // Optionally, clear the form
  this.reset();
});
