'use strict'

//importe le module express
const express = require('express');
const { checkSchema } = require('express-validator');

//initialiser le router express
const router = express.Router();

//importe le fichier requests.js (contient le requetes vers la base de données)
const data = require('../controllers/data');

const mail = require('../controllers/mail');

//API REST

//GET METHODS
router.get('/users',data.getAllUsers);
router.get('/users/:mail',data.getUserByMail);

router.get('/eleves', data.getAllEleves);
router.get('/eleves/:id',data.getEleveById);

//temporaire /calendrier --> inutile ?
router.get('/calendrier',data.getCalendarData);
router.get('/calendrier/:classe',data.getCalendarByClasse);

router.get('/',data.getActualite);
router.get('/contacts',data.getContactDirectionSecretariat);

router.get('/classes',data.getAllClasses);


//POST METHODS
router.post('/eleves',data.insertStudent);

//route vers l'inscription 
router.post('/inscription',data.insertUser);

router.post('/sendMail',mail.sendMail);


//DELETE METHODS


//PUT METHODS




module.exports = router;