// server.js

const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Setup MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'excellence_tracker',
});

// Connect to database
db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Setup multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
  },
});

const upload = multer({ storage: storage });

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('uploads')); // Serve static files like images

// Route to handle achievement submission
app.post('/submit-achievement', upload.single('achievementFile'), (req, res) => {
  const { student_id, achievement_title, achievement_description } = req.body;
  const filePath = req.file ? req.file.path : null; // Store file path if file is uploaded
  
  // SQL query to insert achievement data into the database
  const query = `
    INSERT INTO achievements (student_id, title, description, file_path)
    VALUES (?, ?, ?, ?)
  `;
  
  db.query(query, [student_id, achievement_title, achievement_description, filePath], (err, result) => {
    if (err) {
      console.error('Error saving achievement:', err);
      return res.status(500).send('Error saving achievement');
    }
    res.json({ message: 'Achievement submitted successfully!' });
  });
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
