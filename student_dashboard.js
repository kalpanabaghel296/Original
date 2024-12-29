// home.js
// home.js

// Function to fetch the student details from the backend
function getStudentInfo() {
    fetch('http://localhost:5000/get-user') // Adjust the URL based on your server
      .then(response => response.json())
      .then(data => {
        if (data.name) {
          // Display the student's name on the home page
          document.getElementById('studentName').textContent = data.name;
        } else {
          // If no user is logged in, handle appropriately
          document.getElementById('studentName').textContent = 'Guest';
        }
      })
      .catch(error => {
        console.error('Error fetching student info:', error);
        document.getElementById('studentName').textContent = 'Error loading name';
      });
  }
  
  // Call the function on page load
  window.onload = getStudentInfo;
  
// For example, you could add a feature where clicking a button shows an alert message
document.querySelector('.option-card a').addEventListener('click', function() {
    alert('Redirecting you to the achievement form...');
  });
  