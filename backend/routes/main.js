'use strict'

//importe le module express
const express = require('express');

const { checkSchema } = require('express-validator');

//initialiser le router express
const router = express.Router();

//importe le fichier requests.js (contient le requetes vers la base de données)
const data = require('../controllers/data');
const mail = require('../controllers/mail');

const userDataValidationSchema = require('../validations/sendDataUser');
const elevesDataValidationSchema = require('../validations/sendDataEleves')
const actuDataValidationSchema = require('../validations/sendDataActualite');

//API REST
//GET METHODS

//récupération des informations d'un user
router.get('/users',data.getAllUsers);
router.get('/users/:mail',data.getUserByMail);

//récupération des infos d'un elève
router.get('/eleves', data.getAllEleves);
router.get('/eleves/:id',data.getEleveById);

//récupération des informations d'un calendrier
router.get('/calendrier',data.getCalendarData);
router.get('/calendrier/:classe',data.getCalendarByClasse);

//récupérer l'actualité
router.get('/',data.getActualite);
router.get('/actualite/:titre',data.getActuByTitle);

router.get('/contacts',data.getContactDirectionSecretariat);
router.get('/classes',data.getAllClasses);

//récuperer le mot de passe en fonction du mail
router.get('/passwords/:mail',data.getPasswordByMail);

//récuperer le token et le mail de l'utilisateur
router.get('/connexion/:mail',data.connexionUser);

//récupérer les informations d'un user sur base de son Token
router.get('/infos/:token',data.getUserByToken);

//routes vers comportement 
router.get('/comportement',data.getAllComportement);
router.get('/comportement/:id',data.getComportementById);

//routes vers le bulletin
router.get('/bulletin',data.getAllBulletin);
router.get('/bulletin/:id',data.getBulletinById);



//POST METHODS

//route permettant de rajouter une actualité + middleware
router.post('/actualite',actuDataValidationSchema,data.insertActualite)

//route permettant de rajouter un élève dans la base de donnée + middleware
router.post('/eleves',elevesDataValidationSchema,data.insertStudent);

//route vers l'inscription 
router.post('/inscription',userDataValidationSchema,data.insertUser);


//route pour l'envoi de mails
router.post('/sendMail',mail.sendMail);


//DELETE METHODS


//PUT METHODS


module.exports = router;