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
const comportementDataValidationSchema = require('../validations/sendDataComportement');
const { ChainCondition } = require('express-validator/src/context-items');

//API REST
//GET METHODS

//récupération des informations d'un user
router.get('/users/:mail',data.getUserByMail);

//récupération des infos d'un elève
router.get('/eleves', data.getAllEleves);
router.get('/eleves/:id',data.getEleveById);

//recupération des données d'un enfant + middleware entre 2
router.get('/elevesByMail/:mail',data.getEleveByMail);

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
router.get('/infos/:auth',data.getUserInfosByAuth);

//routes vers comportement 
//router.get('/comportement',data.getAllComportement);
router.get('/comportement/:id',data.getComportementById);

//routes vers classe
router.get('/allclassdata', data.getAllClassesAndMailProf);  
router.get('/allmailprof', data.getAllMailProf);

//obtenir le role d'un utilisateur
router.get("/role/:mail",data.getRoleByMail);

//appel API vérification d'identité
router.get("/authentification/:mail/:jeton", data.getAuthentification);

//obtenir comportement par mail du prof
router.get("/comportement/prof/:mail", data.getComportementByMailProf);

//obtenir comportement par mail du parent
router.get('/comportement/parent/:mail',data.getComportementByMailParent);

//obtenir la classe par un prof
router.get("/classeByMailProf/:mail", data.getClasseByMailProf);


//obtenir les eleves correspondant à ces classes 
router.get("/elevesByClasse/:classe", data.getEleveByClasse);


//obtenir comportement par mail du prof (SIMON)
router.get("/eleveid/:mail", data.getEleveIdByMailParent);
//POST METHODS

//route permettant de rajouter une actualité + middleware
router.post('/actualite',actuDataValidationSchema, checkToken.authenticateToken ,data.insertActualite);

//route permettant de rajouter un événement en DB + middleware
router.post('/calendrier',calendarDataValidationSchema,checkToken.authenticateToken,data.insertDataCalendar);

//route permettant de rajouter un élève dans la base de donnée + middleware
router.post('/eleves',elevesDataValidationSchema, checkToken.authenticateToken ,data.insertStudent);

//route permettant de rajouter un note dans la base de donnée + middleware
router.post('/comportement',comportementDataValidationSchema, checkToken.authenticateToken ,data.insertComportement);

//route vers l'inscription 
router.post('/inscription',userDataValidationSchema,data.insertUser);

//rafraichir le token utilisateur ---> en cours de développement
router.post('/refreshToken',checkToken.refreshToken);

//route pour vérifier les hash des password
router.post('/verifyPassword', data.checkPassword);


//DELETE METHODS
router.delete('/deleteEleve/:id', checkToken.authenticateToken , dataDelete.deleteEleveById);
router.delete('/deleteActualite/:id', checkToken.authenticateToken ,dataDelete.deleteActualiteById);
router.delete('/deleteEvent/:id',checkToken.authenticateToken , dataDelete.deleteEventById);
router.delete('/deleteComportement/:id',checkToken.authenticateToken , dataDelete.deleteComportementById);

//UPDATE METHODS
router.post('/updateEleve/:id', elevesDataValidationSchema, checkToken.authenticateToken ,dataUpdate.updateEleveById);
router.post('/updateClasseByMailProf', dataUpdate.updateClasseMailProf);
router.post('/updateSignature/:mail', dataUpdate.updateComportementByMailParent);


module.exports = router;