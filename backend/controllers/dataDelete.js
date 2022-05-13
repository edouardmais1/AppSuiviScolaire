'use strict'

const { json } = require("express");
const { response } = require("../app");
const {validationResult} = require("express-validator");



//IMPORTE LE FICHIER DATABASE.JS
const db = require('../config/database');
db.connect();

//DELETE UN ELEVE PAR RAPPORT A SON ID
const deleteEleveById = (request, response) =>{

    let sql = `CALL deleteEleveByEleveId (?)`
    db.query(sql, request.params.id, (error, results)=>{
        if(error){
            throw error;
        }

        else{
            response.status(200).json(results);
        }
    })
}

//DELETE UNE ACTUALITE PAR RAPPORT A SON ID
const deleteActualiteById = (request, response) =>{

    let sql = `CALL deleteActuByActuId (?)`
    db.query(sql, request.params.id, (error, results)=>{
        if(error){
            throw error;
        }

        else{
            response.status(200).json(results);
        }
    })
}

//DELETE UNE ACTUALITE PAR RAPPORT A SON ID
const deleteEventById= (request, response) =>{

    let sql = `CALL deleteEventById (?)`
    db.query(sql, request.params.id, (error, results)=>{
        if(error){
            throw error;
        }

        else{
            response.status(200).json(results);
        }
    })
}


module.exports = { 
    deleteEleveById,
    deleteActualiteById,
    deleteEventById,
}