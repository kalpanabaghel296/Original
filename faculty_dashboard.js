// Check if the faculty is logged in, retrieve their name, and display it on the dashboard
document.addEventListener("DOMContentLoaded", () => {
    // Fetch faculty details from backend API
    fetch('/api/getUserDetails', {
      method: 'GET',
      credentials: 'include', // This will include cookies if the session is stored server-side
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch faculty details');
        }
        return response.json();
      })
      .then(data => {
        // Assuming the API response includes a 'role' and 'name' field
        if (data.role === 'faculty') {
          // Set the faculty name in the placeholder
          document.getElementById("facultyName").textContent = data.name;
        } else {
          // Redirect to login page if the role is not faculty
          window.location.href = 'login.html';
        }
      })
      .catch(error => {
        console.error('Error fetching faculty details:', error);
        alert('Error loading faculty dashboard. Please try again.');
        window.location.href = 'loginpage.html'; // Redirect to login if there is an error
      });
  });
  