const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', // Change to your MySQL password
    database: 'student_management_system'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected');
});

app.use(bodyParser.json());

app.post('/addStudent', (req, res) => {
    const { name, age, grade } = req.body;
    const sql = 'INSERT INTO students (name, age, grade) VALUES (?, ?, ?)';
    db.query(sql, [name, age, grade], (err, result) => {
        if (err) throw err;
        res.send('Student added successfully');
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
