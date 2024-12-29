const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'excellence_tracker'
});

// Check connection to database
db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

// Endpoint to verify login and send faculty details
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Query to find user by email and password (assuming this is how your login is structured)
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  
  db.query(query, [email, password], (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Error fetching data from database' });
    } else {
      if (result.length > 0) {
        const user = result[0];
        
        // Check if the user is a faculty
        if (user.role === 'faculty') {
          res.status(200).send({
            message: 'Login successful',
            user: {
              id: user.id,
              name: user.name,
              department: user.department,
              email: user.email
            }
          });
        } else {
          res.status(400).send({ message: 'Unauthorized user role' });
        }
      } else {
        res.status(400).send({ message: 'Invalid email or password' });
      }
    }
  });
});

// Fetch faculty dashboard data (such as their achievements or any other data)
app.get('/faculty-data/:facultyId', (req, res) => {
  const facultyId = req.params.facultyId;
  
  const query = 'SELECT * FROM achievements WHERE faculty_id = ?';
  
  db.query(query, [facultyId], (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Error fetching achievements' });
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
