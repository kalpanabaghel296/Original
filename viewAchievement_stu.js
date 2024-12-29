// Search functionality for achievements by Faculty ID
document.getElementById('searchBtn').addEventListener('click', function () {
  var searchInput = document.getElementById('searchInput').value.toLowerCase();
  var tableRows = document.querySelectorAll('.achievements-table tbody tr');

  // Loop through the table rows and hide those that don't match the search query
  tableRows.forEach(function (row) {
    var facultyId = row.cells[1].textContent.toLowerCase();
    if (facultyId.includes(searchInput)) {
      row.style.display = ''; // Show matching row
    } else {
      row.style.display = 'none'; // Hide non-matching row
    }
  });
});
