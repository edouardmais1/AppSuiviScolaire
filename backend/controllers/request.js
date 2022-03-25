'use strict'

const { response } = require("../app");

//IMPORTE LE FICHIER  database.js
const db = require("../config/database");
db.connect();

//GET ALL STUDENTS
const getEleves = (request,response)=>{
    db.query('SELECT * FROM tb_Eleves',(err,result)=>{
        if(err){
            throw err;
        }
        else{
            response.send(result);
        }
    })
}

//GET ALL USERS
const getUtilisateur = (request,response)=>{
    db.query("SELECT * FROM tb_Utilisateurs",(err,result)=>{
        if(err){
            throw err;
        }
        else{
            response.send(result);
        }
    })
}

module.exports = {
    getEleves,
    getUtilisateur
}