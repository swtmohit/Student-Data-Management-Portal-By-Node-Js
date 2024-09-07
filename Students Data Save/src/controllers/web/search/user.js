const { app, apiPath, db } = require('rohit-node-app');

// Ensure you're using a SQL library that supports parameterized queries
app.get("/searchStudent", (req, res) => {
    // Fetching data from the query parameters
    const { phone } = req.query;

    console.log(phone, "--------mobile");

    if (!phone) {
        return res.status(400).json({ error: "Phone number is required" });
    }

    // Use a parameterized query to prevent SQL injection
    const sql = 'SELECT * FROM students WHERE phone = ?';

    db.query(sql, [phone], (err, results) => {
        if (err) {
            console.error(err.message, "----------error");
            return res.status(500).json({ error: "Internal server error" });
        }

        console.log(results, "--------------results");
        res.json(results);
    });
});
