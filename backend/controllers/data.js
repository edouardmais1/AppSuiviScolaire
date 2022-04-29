'use strict'

const { json } = require("express");
const { response } = require("../app");
const {validationResult} = require("express-validator");

const session = require('express-session');


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

//recuperer les données de l'élèves en fonction de son Id
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

//requete finale sur base de la précédente.
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

//recuperer les données d'un user sur base de son mail.
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

//requete finale sur base de la précédente.
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

//recuperer les données de la table calendrier
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


const getDataActuByTitle = (titre, result)=>{

    //recuperer les actualités sur base de leurs titres
    db.query("SELECT Contenu, Date from tb_Actualites where Titre = ?", [titre], (err, results) =>{
        if(err){
            result(err,null)
        }
        else{
            result(null, results);
        }
    });
}

const getActuByTitle = (request, response) => {
    getDataActuByTitle(request.params.titre, (err, results) => {
        if (err){
            response.send(err);
        }else{
            response.status(200).json(results);
        }
    });
}


//POST 



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
            console.log("Request send with success");
        }
    });
};

const insertUser = (request,response,next)=>{
    const data = request.body;

    try{
        const errors = validationResult(request);

        if(!errors.isEmpty()){
            return response.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        
        dataUser(data,(err,results)=>{
            if(err){
                response.send(err);
            }
            else{
                response.status(200).json(results);
            }
        });

    }

    catch(error){
        console.log(error);
        next(error);
    }

}


//recuper le token d'un utilisateur et son mail
const getTokenMail = (mail,result) =>{

    //RECUPERER LES INFORMATIONS D'UN UTILISATEUR
    db.query("SELECT Token, Mail from tb_Utilisateurs where Mail = ?", [mail], (err,results)=>{
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

const connexionUser = (request, response,next) =>{
    getTokenMail(request.params.mail, (error,results)=>{
        if(error){
            response.send(error);
        }
        else{
            response.status(200).json(results);
        }
    })
}



//GET password by mail

const getDataPasswordByMail = (mail, result) => {
    
    //RECUPERER UN UTILISATEUR EN FONCTION DE SON MAIL
    db.query("SELECT MotDePasse FROM tb_Utilisateurs WHERE Mail = ?", [mail], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

const getPasswordByMail = (req, res) => {
    getDataPasswordByMail(req.params.mail, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.status(200).json(results);
        }
    });
}




//Comportement routes

const getAllComportement = (request,response)=>{

    db.query('SELECT * FROM tb_Comportements',(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    })
};

const getComportement = (id,result) =>{

    //RECUPERER LES INFORMATIONS D'UN UTILISATEUR
    db.query("SELECT * FROM tb_Comportements WHERE EleveID = ?", [id], (err,results)=>{
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

const getComportementById = (request, response) =>{
    getComportement(request.params.id, (error,results)=>{
        if(error){
            response.send(error);
        }
        else{
            response.status(200).json(results)
        }
    })
}

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




//Routes bulletin

const getAllBulletin = (request,response)=>{

    db.query('SELECT * FROM tb_Bulletins',(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    })
};

const getBulletin = (id,result) =>{

    //RECUPERER LES INFORMATIONS D'UN UTILISATEUR
    db.query("SELECT * FROM tb_Bulletins WHERE EleveID = ?", [id], (err,results)=>{
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

const getBulletinById = (request, response,next) =>{
    getBulletin(request.params.id, (error,results)=>{
        if(error){
            response.send(error);
        }
        else{
            response.status(200).json(results)
        }
    })
}




//INSERT AN STUDENT 
const dataStudent = (data,result)=>{

    //INSERER UN UTILISATEUR DANS LA TABLE UTILISATEURS
    db.query("INSERT INTO tb_Eleves SET ?", [data], (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
            console.log("Request send with success");
        }
    });
};

const insertStudent = (request,response,next)=>{
    const data = request.body;


    try{
        const errors = validationResult(request);

        if(!errors.isEmpty()){
            return response.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        
        dataStudent(data,(err,results)=>{
            if(err){
                response.send(err);
            }
            else{
                response.status(200).json(results);
            }
        });

    }

    catch(error){
        console.log(error);
        next(error);
    }

}



//GET USER BY TOKEN
const getDataUserByToken = (token, result) => {
    
    //RECUPERER UN UTILISATEUR EN FONCTION DE SON MAIL
    db.query("SELECT Nom, Prenom, Mail, Roles  FROM tb_Utilisateurs WHERE Token = ?", [token], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

const getUserByToken = (req, res) => {
    getDataUserByToken(req.params.token, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.status(200).json(results);
        }
    });
}


//INSERT AN Actuality
const dataActualite = (data,result)=>{

    //INSERER UN UTILISATEUR DANS LA TABLE UTILISATEURS
    db.query("INSERT INTO tb_Actualites SET ?", [data], (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
            console.log("Request send with success");
        }
    });
};

const insertActualite = (request,response,next)=>{
    const data = request.body;


    try{
        const errors = validationResult(request);

        if(!errors.isEmpty()){
            return response.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        
        dataActualite(data,(err,results)=>{
            if(err){
                response.send(err);
            }
            else{
                response.status(200).json(results);
            }
        });

    }

    catch(error){
        console.log(error);
        next(error);
    }

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
    getAllClasses,
    getPasswordByMail,
    connexionUser,
    getAllComportement,
    getComportementById,
    getAllBulletin,
    getBulletinById,
    getUserByToken,
    insertActualite,
    getActuByTitle,
    updateComportement,
    updateComportementById
    
}

