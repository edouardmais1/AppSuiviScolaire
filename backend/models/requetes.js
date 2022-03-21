'use strict'

const db = require("../config/database");

//SELECT QUERY

db.query('SELECT * FROM tb_users',(err,result)=>{
    if(err) throw err;
    console.log(result);
})