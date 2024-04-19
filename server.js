const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Change to your MySQL password
    database: 'student_management_system'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected');
});

// Serve static files from the default directory
app.use(express.static(__dirname));

// Set up middleware to parse incoming JSON data
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addStudent', (req, res) => {
    // Extract student data from the request body
    const { name, age, grade } = req.body;

    // SQL query to insert a new student record into the database
    const sql = 'INSERT INTO students (name, age, grade) VALUES (?, ?, ?)';
    
    // Execute the SQL query with the student data
    db.query(sql, [name, age, grade], (err, result) => {
        if (err) {
            console.error('Error adding student:', err);
            res.status(500).send('Error adding student to the database');
            return;
        }
        console.log('Student added successfully');
        res.status(200).send('Student added successfully');
    });
});

app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.delete('/deleteStudent/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM students WHERE id = ?';
    db.query(sql, id, (err, result) => {
        if (err) throw err;
        res.send('Student deleted successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
