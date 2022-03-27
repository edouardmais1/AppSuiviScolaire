'use strict'

const { json } = require("express");
const { response } = require("../app");

//IMPORTE LE FICHIER DATABASE.JS
const db = require('../config/database');
db.connect();


//GET

//GET ALL ELEVES

const getAllEleves = (request,response)=>{

    //RECUPERER LES ETUDIANTS DANS LA BASE DE DONNEES
    db.query('SELECT * FROM tb_Eleves',(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    });
};

//GET ELEVE BY ID
const getDataEleve = (id, result) => {

    //RECUPERER UN ELEVE EN FONCTION DE SON ID
    db.query("SELECT * FROM tb_Eleves WHERE EleveId = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

const getEleveById = (req, res) => {
    getDataEleve(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


//GET ALL USERS
const getAllUsers = (request,response)=>{

    //RECUPERER LES UTILISATEURS DE L'APPLICATION
    db.query("SELECT * FROM tb_Utilisateurs",(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    });
};

//GET USER BY MAIL

const getDataUser = (mail, result) => {
    
    //RECUPERER UN UTILISATEUR EN FONCTION DE SON MAIL
    db.query("SELECT * FROM tb_Utilisateurs WHERE Mail = ?", [mail], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

const getUserByMail = (req, res) => {
    getDataUser(req.params.mail, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}



//GET CALENDAR DATA 
const getCalendarData = (request,response)=>{

    //RECUPERER TOUS LES EVENEMENTS DES CALENDRIERS
    db.query('SELECT * FROM tb_Calendrier',(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    });
}


//GET DIRECTION-SECRETARIAT CONTACTS

const getContactDirectionSecretariat = (request,response)=>{
    
    //RECUPERER LES MAILS DES MEMBRES DU PERSONNEL
    db.query("SELECT Mail FROM `tb_Utilisateurs` WHERE Mail like '%@secretariat.be' or Mail Like '%@direction.be'",(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    });
}


//POST


//INSERT A STUDENT
const dataStudent = (data,result)=>{

    //INSERER UN UTILISATEUR DANS LA TABLE ELEVE
    db.query("INSERT INTO tb_Eleves SET ?", [data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
        }
    });
}

const insertStudent = (request,response)=>{
    const data = request.body;

    dataStudent(data,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
}


//INSERT AN USER 
const dataUser = (data,result)=>{

    //INSERER UN UTILISATEUR DANS LA TABLE UTILISATEURS
    db.query("INSERT INTO tb_Utilisateurs SET ?", [data], (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
        }
    });
};

const insertUser = (request,response)=>{
    const data = request.body;

    dataUser(data,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results)
        }
    });
}








module.exports = {
    getAllEleves,
    getAllUsers,
    getCalendarData,
    getEleveById,
    getUserByMail,
    insertStudent,
    insertUser,
    getContactDirectionSecretariat
}

