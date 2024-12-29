document.getElementById('search-button').addEventListener('click', function() {
    const rollNo = document.getElementById('search-student').value;
    
    fetch(`/search-achievements?rollNo=${rollNo}`)
      .then(response => response.json())
      .then(data => {
        const tableBody = document.getElementById('achievements-table').querySelector('tbody');
        tableBody.innerHTML = '';  // Clear any previous results
  
        if (data.achievements.length > 0) {
          data.achievements.forEach(achievement => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${achievement.rollNo}</td>
              <td>${achievement.title}</td>
              <td>${achievement.status}</td>
            `;
            tableBody.appendChild(row);
          });
        } else {
          const row = document.createElement('tr');
          row.innerHTML = '<td colspan="3">No achievements found for this roll number.</td>';
          tableBody.appendChild(row);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  