# I COMMENTED OUT THE MYSQL LINES THEN ADDED MYSQLITE3 AND TESTED IT ON KALI LINUX

# simple-student-mgmt
## 1. Setup MySQL Database:

#mariaDB COMMANDS
sudo mysql -u root = start mariadb
sudo systemctl status mariadb
sudo systemctl start mariadb
sudo systemctl restart mariadb
sudo systemctl enable mariadb


#CREATE DATABASE database_name;
#SHOW DATABASES;
#USE database_name;
#SHOW TABLES;
#DESCRIBE table_name;

#sudo netstat -tuln | grep 3306
#sudo lsof -i:3306
#sudo kill 737026

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


sudo netstat -tuln | grep 3306
sudo lsof -i:3306
sudo kill 737026

sudo apt update
sudo apt install nodejs

npm -v


mkdir my-node-project
cd my-node-project

npm init


npm install express


const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


node app.js




