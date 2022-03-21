'use strict'

//IMPORTER LE PACKAGE MYSQL
const mysql = require('mysql2');

//IMPORTER LE FICHIER DOTENV
const dotenv = require('dotenv');


dotenv.config({path : './config.env'});

let db = mysql.createConnection({
    host : '176.96.231.253',
    user : process.env.user,
    password : process.env.password,
    name : process.env.name,
    database : process.env.database
});

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

module.exports = db;


/*

pour effectuer des requetes sur la db il faut :

--> const db = require("../../database");

db.query('SELECT * FROM tb_users,(err,result)=>{
  if(err) throw err;
  console.log(result)
})

--> placer ce query dans un get ou autres...

*/