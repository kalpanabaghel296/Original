// Example: Node.js with MySQL (Assuming you're using Express.js)

// Import your database connection
const db = require('./db');  // Assuming you have a db.js file where you connect to your MySQL database

// API endpoint to get achievements by category and department
app.get('/department/innovation-stats', async (req, res) => {
  try {
    // Get achievements counts for each department in the three categories
    const departments = ['Institute of Engineering Technology', 'Institute of Management', 'Design'];

    let stats = {};

    for (let department of departments) {
      const query = `
        SELECT category, COUNT(*) AS count
        FROM achievements
        WHERE department = ? 
        GROUP BY category
      `;
      const results = await db.query(query, [department]);
      stats[department] = {
        research: 0,
        entrepreneurship: 0,
        placements: 0,
      };

      // Process the results and categorize them
      results.forEach(result => {
        if (result.category === 'Research') {
          stats[department].research = result.count;
        } else if (result.category === 'Entrepreneurship') {
          stats[department].entrepreneurship = result.count;
        } else if (result.category === 'Placements') {
          stats[department].placements = result.count;
        }
      });
    }

    res.json(stats);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});
