# simple-student-mgmt
## 1. Setup MySQL Database:

First, create a MySQL database named student_management_system.
```bash
CREATE DATABASE student_management_system;
```

Create a table named students having the following fields:
```bash
    id (INT, AUTO_INCREMENT, PRIMARY KEY)
    name (VARCHAR)
    age (INT)
    grade (VARCHAR)

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    grade VARCHAR(255) NOT NULL
);
```

## 2. Setup Node.js Project:

Create a new folder for your project and initialize it with npm:
```bash
npm init -y
```
Install required dependencies:

```bash
npm install express mysql body-parser
```

## 3. Create HTML Interface:

Create an index.html file for the user interface.

## 4. Create CSS Styles:

Create a styles.css file to style your HTML interface as needed.

## 5. Create JavaScript Functionality:

Create a script.js file to handle client-side interactions.

## 6. Create Node.js Server:

Create a server.js file to handle server-side logic.

## 7. Run the Application:

Start the Node.js server:

```bash
node server.js
```

Now, you can access your student management system by opening http://localhost:3000 in your web browser.
