'use strict'

const { json } = require("express");
const { response } = require("../app");
const {validationResult} = require("express-validator");
const Cookies = require("js-cookie");




//IMPORTE LE FICHIER DATABASE.JS
const db = require('../config/database');
db.connect();


const token = require('./token');


//GET

//GET ALL CLASSES 
const getAllClasses = (request, response) =>{

    let sql = `CALL getAllClasses()`
    db.query(sql, (error, results)=>{
        if(error){
            throw error;
        }

        else{
            response.status(200).json(results);
        }
    })
}

//GET ALL CLASSES AND PROF MAIL
const getAllClassesAndMailProf = (request, response) =>{

    let sql = `CALL getAllClassesAndMailProf()`
    db.query(sql, (error, results)=>{
        if(error){
            throw error;
        }

        else{
            response.status(200).json(results);
        }
    })
}

//GET PROF MAIL
const getAllMailProf = (request, response) =>{

    let sql = `CALL getAllMailProf()`
    db.query(sql, (error, results)=>{
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

    let sql = `CALL getAllEleves()`

    //RECUPERER LES ETUDIANTS DANS LA BASE DE DONNEEs
    db.query(sql,(err,results)=>{
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


//GET Eleve BY MAIL
const getDataEleveByMail = (mail, result) => {
    
    //RECUPERER UN eleve EN FONCTION DE SON MAIL
    db.query("SELECT Nom, Prenom, DateDeNaissance, Classe FROM tb_Eleves WHERE Mail = ?", [mail], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//requete finale sur base de la précédente.
const getEleveByMail = (req, res) => {
    getDataEleveByMail(req.params.mail, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.status(200).json(results);
        }
    });
}


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


//GET CALENDAR BY CLASSE
const getDataCalendarByClass = (classe, result) => {

    //RECUPERER LES EVENEMENTS EN FONCTION DES CLASSES
    db.query("SELECT Titre as 'description', Contenu as 'title', StartTime as 'start', StopTime as 'end' FROM tb_Calendrier Where Classe = ?", [classe], (err, results) => {             
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
    db.query("SELECT Contenu, Date, ActualiteID from tb_Actualites where Titre = ?", [titre], (err, results) =>{
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



//recuper le token d'un utilisateur et son mail
const getDataByMail = (mail,result) =>{

    //RECUPERER LES INFORMATIONS D'UN UTILISATEUR
    db.query("SELECT Mail, Roles, Nom, Prenom, Jeton from tb_Utilisateurs where Mail = ?", [mail], (err,results)=>{
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

const connexionUser = (request, response) =>{
    getDataByMail(request.params.mail, (error,results)=>{
        if(error){
            response.send(error);
        }
        else{
            const access_token = token.generateAccessToken(results[0]);
            const refresh_token = token.generateRefreshToken(results[0]);
            results[0].token = access_token;
            results[0].refresh_token = refresh_token;
            response.status(200).json(results);
        }
    })
}


//obtenir le role d'un utilisateur
const getDataRole = (mail, result) => {
    
    //RECUPERER UN UTILISATEUR EN FONCTION DE SON MAIL
    db.query("SELECT Roles FROM tb_Utilisateurs WHERE Mail = ?", [mail], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

const getRoleByMail = (req, res) => {
    getDataRole(req.params.mail, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.status(200).json(results);
        }
    });
}


//validation identité d'un utilisateur
const getAuthentification = (request, response)=>{
    let sql = `CALL getAuthentification (?, ?)`
    db.query(sql, [request.params.mail, request.params.jeton], (error, results)=>{
        if(error){
            throw error;
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

    db.query('SELECT ComportementID, Mail, Contenu, EleveID, Date, Signature FROM tb_Comportements',(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    })
};

const getComportement = (id,result) =>{

    db.query("SELECT Mail, Contenu, Date, Signature, EleveID FROM tb_Comportements WHERE EleveID = ?", [id], (err,results)=>{
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




const getEventByClassAndDate = (request,response)=>{
    let sql = 'CALL getEventByClassAndDate (?,?)'
    db.query(sql, [request.params.class, request.params.date],(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    })
};

const getComportementByMailProf = (request,response)=>{
    let sql = 'CALL getComportementByMailProf (?)'
    db.query(sql, request.params.mail,(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    })
};

//ROUTES POUR AJOUT DE COMPORTEMENT
const getClasseByMailProf = (request,response)=>{
    let sql = 'CALL getClasseByMailProf (?)'
    db.query(sql, request.params.mail,(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    })
};

const getEleveByClasse = (request,response)=>{
    let sql = 'CALL getEleveByClasse (?)'
    db.query(sql, request.params.mail,(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    })
};

const getEleveIdByMailParent = (request,response)=>{
    let sql = 'CALL getEleveIdByMailParent (?)'
    db.query(sql, request.params.mail,(err,results)=>{
        if(err){
            throw err;
        }
        else{
            response.status(200).json(results);
        }
    })
};
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
const getDataUserByAuth = (auth, result) => {
    
    //RECUPERER UN UTILISATEUR EN FONCTION DE SON MAIL
    db.query("SELECT Nom, Prenom, Mail  FROM tb_Utilisateurs WHERE Jeton = ?", [auth], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


const getUserInfosByAuth = (req, res) => {
    getDataUserByAuth(req.params.auth, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.status(200).json(results);
        }
    });
}



//POST


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



//INSERT AN Actuality
const dataCalendar = (data,result)=>{

    //INSERER UN UTILISATEUR DANS LA TABLE UTILISATEURS
    db.query("INSERT INTO tb_Calendrier SET ?", [data], (err,results)=>{
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

const insertDataCalendar = (request,response,next)=>{
    const data = request.body;


    try{
        const errors = validationResult(request);

        if(!errors.isEmpty()){
            return response.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        
        dataCalendar(data,(err,results)=>{
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







module.exports = {
    getAllEleves,
    getAllUsers,
    getCalendarByClasse,
    getActualite,
    getEleveById,
    getUserByMail,
    insertStudent,
    insertUser,
    getAllClasses,
    getPasswordByMail,
    connexionUser,
    getAllComportement,
    getComportementById,
    getUserInfosByAuth,
    insertActualite,
    getActuByTitle, 
    insertDataCalendar,
    getEventByClassAndDate,
    getAllClassesAndMailProf,
    getAllMailProf,
    getRoleByMail,
    getAuthentification,
    getEleveByMail,
    getComportementByMailProf,
    getEleveIdByMailParent,
}

