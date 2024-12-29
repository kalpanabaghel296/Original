// server.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// Setup MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Excellence_tracker',
});

// Connect to database
db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to fetch latest 5 achievements and a random achievement
app.get('/fetch-achievements', (req, res) => {
  const query = `
    SELECT a.title, a.description, a.file_path, s.name AS student_name, s.roll_no 
    FROM achievements a
    JOIN students s ON a.student_id = s.student_id
    ORDER BY a.created_at DESC LIMIT 5;
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching achievements:', err);
      return res.status(500).send({ message: 'Error fetching achievements' });
    }

    // Randomly pick one achievement from the results for the first row
    const randomAchievement = results[Math.floor(Math.random() * results.length)];

    res.json({
      achievements: results,
      randomAchievement: randomAchievement
    });
  });
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
