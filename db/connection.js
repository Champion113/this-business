const mysql = require('mysql2');
const util = require('util');
require('dotenv').config()

//connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: process.env.mySQLPASS,
    database: 'employee_db'
  });
  
  connection.connect();

  connection.query = util.promisify(connection.query)
  module.exports = connection;