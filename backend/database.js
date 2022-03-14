//import module MySQL2
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config({path : './config.env'});

let connection = mysql.createConnection({
    host : '176.96.231.253',
    user : process.env.user,
    password : process.env.password,
    name : process.env.name,
    database : process.env.database
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });