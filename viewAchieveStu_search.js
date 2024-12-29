// Route to search achievements by roll number
app.get('/search-achievements', (req, res) => {
    const rollNo = req.query.roll_no;
    
    if (!rollNo) {
      return res.status(400).send({ message: 'Roll number is required' });
    }
  
    const query = `
      SELECT a.title, a.description, a.file_path, s.name AS student_name, s.roll_no 
      FROM achievements a
      JOIN students s ON a.student_id = s.student_id
      WHERE s.roll_no = ?
    `;
  
    db.query(query, [rollNo], (err, results) => {
      if (err) {
        console.error('Error searching achievements:', err);
        return res.status(500).send({ message: 'Error searching achievements' });
      }
      res.json(results);
    });
  });
  