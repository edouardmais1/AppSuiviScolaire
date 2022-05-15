'use strict'

//importe le module express
const express = require('express');

const { checkSchema } = require('express-validator');

//initialiser le router express
const router = express.Router();

//importe le fichier requests.js (contient le requetes vers la base de données)
const data = require('../controllers/data');

//fichier pour l'envoi de mails
const mail = require('../controllers/mail');

//middleware de vérification de requete
const checkToken = require("../controllers/token")

//fichier pour de la modification de données
const dataUpdate = require('../controllers/dataUpdate');
const dataDelete = require('../controllers/dataDelete');


//Middleware de validation de données
const userDataValidationSchema = require('../validations/sendDataUser');
const elevesDataValidationSchema = require('../validations/sendDataEleves')
const actuDataValidationSchema = require('../validations/sendDataActualite');
const calendarDataValidationSchema = require('../validations/sendDataCalendar');
const { ChainCondition } = require('express-validator/src/context-items');

//API REST
//GET METHODS

//récupération des informations d'un user
router.get('/users',data.getAllUsers);
router.get('/users/:mail',data.getUserByMail);

//récupération des infos d'un elève
router.get('/eleves', data.getAllEleves);
router.get('/eleves/:id',data.getEleveById);

//recupération des données d'un enfant + middleware entre 2
router.get('/elevesByMail/:mail',checkToken.authenticateToken,data.getEleveByMail);

//récupération des informations d'un calendrier et vérification de la validité du token 
router.get('/calendrier/:classe',checkToken.authenticateToken,data.getCalendarByClasse);
//récupérer evenement de classe
router.get('/calendrier/:class/:date',data.getEventByClassAndDate);

//récupérer l'actualité
router.get('/',data.getActualite);
router.get('/actualite/:titre',data.getActuByTitle);

router.get('/classes',data.getAllClasses);



//récuperer le mot de passe en fonction du mail
router.get('/passwords/:mail',data.getPasswordByMail);

//récuperer le token et le mail de l'utilisateur
router.get('/connexion/:mail',data.connexionUser);

//obtenir les informations d'un utilisateur + middleware d'authentification
router.get('/infos/:auth',checkToken.authenticateToken,data.getUserInfosByAuth);

//routes vers comportement 
router.get('/comportement',data.getAllComportement);
router.get('/comportement/:id',data.getComportementById);

//routes vers le bulletin
router.get('/bulletin',data.getAllBulletin);
router.get('/bulletin/:id',data.getBulletinById);

//routes vers classe
router.get('/allclassdata', data.getAllClassesAndMailProf);  
router.get('/allmailprof', data.getAllMailProf);

//obtenir le role d'un utilisateur
router.get("/role/:mail",data.getRoleByMail);

//appel API vérification d'identité
router.get("/authentification/:mail/:jeton", data.getAuthentification);




//POST METHODS

//route permettant de rajouter une actualité + middleware
router.post('/actualite',actuDataValidationSchema, checkToken.authenticateToken ,data.insertActualite)

//route permettant de rajouter un événement en DB + middleware
router.post('/calendrier',calendarDataValidationSchema,checkToken.authenticateToken,data.insertDataCalendar);

//route permettant de rajouter un élève dans la base de donnée + middleware
router.post('/eleves',elevesDataValidationSchema, checkToken.authenticateToken ,data.insertStudent);

//route vers l'inscription 
router.post('/inscription',userDataValidationSchema,data.insertUser);

//rafraichir le token utilisateur ---> en cours de développement
router.post('/refreshToken',checkToken.refreshToken);


//route pour l'envoi de mails
router.post('/sendMail',mail.sendMail);


//DELETE METHODS
router.delete('/deleteEleve/:id', checkToken.authenticateToken , dataDelete.deleteEleveById);
router.delete('/deleteActualite/:id', checkToken.authenticateToken ,dataDelete.deleteActualiteById);
router.delete('/deleteEvent/:id',checkToken.authenticateToken , dataDelete.deleteEventById);

//UPDATE METHODS

router.post('/updateEleve/:id', elevesDataValidationSchema, checkToken.authenticateToken ,dataUpdate.updateEleveById);

router.post('/updateSignature/:id', dataUpdate.updateComportementById);

module.exports = router;