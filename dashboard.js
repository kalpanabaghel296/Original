// Function to navigate based on the module clicked
function navigateTo(module) {
    switch(module) {
      case 'student':
        // Redirect or show the student dashboard
        window.location.href = 'http://127.0.0.1:5500/student_dashboard.html';  // Replace with your actual student dashboard URL
        break;
      case 'faculty':
        // Redirect or show the faculty dashboard
        window.location.href = 'faculty_dashboard.html';  // Replace with your actual faculty dashboard URL
        break;
      case 'admin':
        // Redirect or show the admin dashboard
        window.location.href = 'admin_dashboard.html';  // Replace with your actual admin dashboard URL
        break;
      case 'department':
        // Redirect or show the department innovation dashboard
        window.location.href = 'department_innovation_dashboard.html';  // Replace with your actual department dashboard URL
        break;
      default:
        alert("Invalid Module Selected");
    }
  }
  