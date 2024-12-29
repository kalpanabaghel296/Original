// server.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",           // Replace with your MySQL username
  password: "",           // Replace with your MySQL password
  database: "Excellence_tracker", // Ensure you have created this database
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
  } else {
    console.log("Connected to MySQL database.");
  }
});

// API endpoint to get achievements and statistics for a specific department
app.get("/api/achievements/:department", (req, res) => {
  const department = req.params.department;

  const sql = "SELECT * FROM achievements WHERE department = ?";
  db.query(sql, [department], (err, results) => {
    if (err) {
      console.error("Error fetching achievements:", err.message);
      return res.status(500).json({ message: "Server Error", error: err });
    }

    // Calculate statistics
    const totalAchievements = results.length;
    const researchAchievements = results.filter((a) => a.type === "Research").length;
    const entrepreneurshipAchievements = results.filter((a) => a.type === "Entrepreneurship").length;
    const placementAchievements = results.filter((a) => a.type === "Placement").length;

    res.json({
      department,
      totalAchievements,
      researchAchievements,
      entrepreneurshipAchievements,
      placementAchievements,
      achievements: results.map((a) => ({
        id: a.id,
        title: a.title,
        description: a.description,
        date: a.date,
      })),
    });
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
