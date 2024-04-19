const express = require('express');
const sqlite3 = require('sqlite3').verbose(); //importing sqlite3 
//const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3306;

//connect to sqlite3 database
const db = new sqlite3.Database('/home/solo/Desktop/PLP_data/Databases/simple-student-mgmt/student_management_system.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite3 database');
    }
});


// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '', // Change to your MySQL password
//     database: 'student_management_system'
// });

// db.connect((err) => {
//     if (err) throw err;
//     console.log('MySQL connected');
// });

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
    //db.query(sql, [name, age, grade], (err, result) => {
        // if (err) {
        //     console.error('Error adding student:', err);
        //     res.status(500).send('Error adding student to the database');
        //     return;
        // }
        // console.log('Student added successfully');
        // res.status(200).send('Student added successfully');
    //});


    db.run(sql, [name, age, grade], function(err) {
        if (err) {
            console.error('Error adding student:', err.message);
            res.status(500).send('Error adding student to the database');
            return;
        }
        console.log('Student added successfully');
        res.status(200).send('Student added successfully');
    });

});

// app.get('/students', (req, res) => {
//     const sql = 'SELECT * FROM students';
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.json(result);
//     });
// });


app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Error retrieving students:', err.message);
            res.status(500).send('Error retrieving students from the database');
            return;
        }
        res.json(rows);
    });
});

// app.delete('/deleteStudent/:id', (req, res) => {
//     const id = req.params.id;
//     const sql = 'DELETE FROM students WHERE id = ?';
//     db.query(sql, id, (err, result) => {
//         if (err) throw err;
//         res.send('Student deleted successfully');
//     });
// });

app.delete('/deleteStudent/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM students WHERE id = ?';
    db.run(sql, id, function(err) {
        if (err) {
            console.error('Error deleting student:', err.message);
            res.status(500).send('Error deleting student from the database');
            return;
        }
        console.log('Student deleted successfully');
        res.status(200).send('Student deleted successfully');
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
