'use strict'

//importe le module mysql2
const mysql = require('mysql2');

//crée la connection avec la base de données
let db = mysql.createConnection({
    host : require('dotenv').config()["parsed"]["DB_HOST"],
    user : require('dotenv').config()["parsed"]["DB_USER"],
    password : require('dotenv').config()["parsed"]["DB_PASSWORD"],
    name : require('dotenv').config()["parsed"]["DB_NAME"],
    database : require('dotenv').config()["parsed"]["DB_DATABASE"]
});


//connection à la DB
db.connect(function(err) {
    if (err) {



      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

module.exports = db;

