'use strict'

const { json } = require("express");
const { response } = require("../app");
const {validationResult} = require("express-validator");

//IMPORTE LE FICHIER DATABASE.JS
const db = require('../config/database');
db.connect();

//utiliser les procédures...

//UPDATE UN COMPORTEMENT PAR RAPPORT A SON ID
const updateComportementByMailParent = (request,response)=>{
    let sql = 'CALL updateComportementByMailParent (?)'
    db.query(sql, request.params.mail,(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    })
};




//UPDATE UN ELEVE PAR RAPPORT A SON ID
const updateEleveById = (request, response) =>{
    let sql = `CALL updateEleveByEleveId (?, ?, ?, ?, ?, ?)`
    db.query(sql, [request.body.id, request.body.Nom, request.body.Prenom, request.body.Mail, request.body.Classe, request.body.DateDeNaissance], (error, results)=>{
        if(error){
            throw error;
        }
        else{
            response.status(200).json(results);
        }
    })

}

//UPDATE UN ELEVE PAR RAPPORT A SON ID
const updateClasseMailProf = (request, response) =>{
    let sql = `CALL updateClasseMailProf (?, ?)`
    db.query(sql, [request.body.Mail, request.body.Classe], (error, results)=>{
        if(error){
            throw error;
        }
        else{
            response.status(200).json(results);
        }
    })

}

module.exports = {
    updateComportementByMailParent,
    updateEleveById,
    updateClasseMailProf,
}