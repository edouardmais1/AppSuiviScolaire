'use strict'

const { json } = require("express");
const { response } = require("../app");
const {validationResult} = require("express-validator");

//IMPORTE LE FICHIER DATABASE.JS
const db = require('../config/database');
db.connect();

//utiliser les procédures...

const updateComportement = (id,result) =>{

    //RECUPERER LES INFORMATIONS D'UN UTILISATEUR
    db.query("UPDATE tb_Comportements SET Signature = 1  WHERE EleveID = ?;", [id], (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
            console.log("Request send with success");
        }
    });
}

const updateComportementById = (request, response) =>{
    updateComportement(request.params.id, (error,results)=>{
        if(error){
            response.send(error);
        }
        else{
            response.status(200).json(results)
        }
    })
}




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

module.exports = {
    updateComportementById,
    updateEleveById,
}