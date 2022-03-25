'use strict'

//importe le module mysql2
const mysql = require('mysql2');

//crée la connection avec la base de données
let db = mysql.createConnection({
    host : '176.96.231.253',
    user : 'appscolaire',
    password : 'appscolaireephec',
    name : 'appscolaire',
    database : 'appscolaire'
});

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

module.exports = db;

