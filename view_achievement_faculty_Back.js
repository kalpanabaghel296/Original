const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 3000;

// Configure MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "Excellence_tracker"
});

// Connect to MySQL
db.connect(error => {
  if (error) {
    console.error("Database connection error:", error);
    return;
  }
  console.log("Connected to MySQL database.");
});

// API endpoint to fetch faculty achievements
app.get("/api/facultyAchievements", (req, res) => {
  const facultyId = req.query.facultyId;
  let query = "SELECT * FROM faculty_achievements";

  if (facultyId) {
    query += " WHERE facultyId = ?";
  }

  db.query(query, [facultyId], (error, results) => {
    if (error) {
      console.error("Error fetching achievements:", error);
      res.status(500).send("Database error");
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
