'use strict'

const { json } = require("express");
const { response } = require("../app");

//IMPORTE LE FICHIER DATABASE.JS
const db = require('../config/database');
db.connect();


//GET

//GET ALL CLASSES 

const getAllClasses = (request, response) =>{
    db.query('SELECT Classe from tb_Classe', (error, results)=>{
        if(error){
            throw error;
        }

        else{
            response.status(200).json(results);
        }
    })
}





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
            result(null, results);
        }
    });   
}

const getEleveById = (req, res) => {
    getDataEleve(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.status(200).json(results);
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
            result(null, results);
        }
    });   
}

const getUserByMail = (req, res) => {
    getDataUser(req.params.mail, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.status(200).json(results);
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


//GET CALENDAR BY CLASSE
const getDataCalendarByClass = (classe, result) => {

    //RECUPERER LES EVENEMENTS EN FONCTION DES CLASSES
    db.query("SELECT Contenu as 'title', Date as 'date' FROM tb_Calendrier Where Classe = ?", [classe], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

const getCalendarByClasse = (request, response) => {
    getDataCalendarByClass(request.params.classe, (err, results) => {
        if (err){
            response.send(err);
        }else{
            response.status(200).json(results);
        }
    });
}



//GET DIRECTION-SECRETARIAT CONTACTS

const getContactDirectionSecretariat = (request,response)=>{
    
    //RECUPERER LES MAILS DES MEMBRES DU PERSONNEL
    db.query("SELECT Mail from tb_Utilisateurs where Roles = 2 or Roles = 3",(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    });
}


//GET ACTUALITY OF SCHOOL

const getActualite = (request,response)=>{

    //RECUPERER LES ACTUALITES DE L'ECOLE
    db.query('SELECT * FROM tb_Actualites',(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    })
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
            response.send(err);
        }
        else{
            response.json(results)
        }
    });
}








module.exports = {
    getAllEleves,
    getAllUsers,
    getCalendarData,
    getCalendarByClasse,
    getActualite,
    getEleveById,
    getUserByMail,
    insertStudent,
    insertUser,
    getContactDirectionSecretariat,
    getAllClasses
}

