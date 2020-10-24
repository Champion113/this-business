
var inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: '#Pennb00tcamp',
    database: 'businessDB'
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
    createProduct();
  });
  

  