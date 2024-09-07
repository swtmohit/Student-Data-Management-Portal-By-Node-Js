const { app, db } = require('rohit-node-app');

app.get("/searchStudents", (req, res) => {
    const { id } = req.query; 

    console.log("Received ID:", id);

    if (!id) {
        return res.status(400).json({ error: "Student ID is required" }); 
    }

    const sql = 'SELECT * FROM students WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Database query error:", err.message);
            return res.status(500).json({ error: "Internal server error" });
        }

        if (results.length > 0) {
            res.json(results);
        } else {
            res.status(404).json({ error: "Student not found" });
        }
    });
});
app.post("/updateStudent", (req, res) => {
    const { id, name, phone, email, gender } = req.body;

    console.log("Received data:", { id, name, phone, email, gender });

    if (!id || !name || !phone || !email || !gender) {
        return res.status(400).json({ success: false, error: "All fields are required" });
    }

    const checkSql = 'SELECT * FROM students WHERE id = ?';
    db.query(checkSql, [id], (checkErr, checkResults) => {
        if (checkErr) {
            console.error("Database query error:", checkErr.message);
            return res.status(500).json({ success: false, error: "Internal server error" });
        }

        if (checkResults.length === 0) {
            return res.status(404).json({ success: false, error: "Student not found" });
        }

        const updateSql = 'UPDATE students SET name = ?, phone = ?, email = ?, gender = ? WHERE id = ?';
        db.query(updateSql, [name, phone, email, gender, id], (updateErr, updateResults) => {
            if (updateErr) {
                console.error("Database update error:", updateErr.message);
                return res.status(500).json({ success: false, error: "Internal server error" });
            }

            if (updateResults.affectedRows > 0) {
                res.json({ success: true });
            } else {
                res.status(404).json({ success: false, error: "Student not found" });
            }
        });
    });
});
