const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // For handling cross-origin requests

// Create Express app
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',  // Replace with your MySQL password
  database: 'excellence_tracker',
});

// Test MySQL connection
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
});

// Route for handling user login
app.post('/login', (req, res) => {
  const { email, password, role } = req.body;
  
  // Query the database to find the user by email
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = results[0];
    
    // Check if the password matches
    bcrypt.compare(password, user.password, (err, match) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error comparing passwords' });
      }

      if (!match) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Check if the role matches
      if (user.role !== role) {
        return res.status(400).json({ message: 'Role mismatch' });
      }

      // Send success response with user info (excluding password)
      res.json({
        message: 'Login successful',
        userId: user.id,
        role: user.role,
      });
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
