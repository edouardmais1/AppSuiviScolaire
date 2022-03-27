'use strict'

//importe le module express
const express = require('express');

//initialiser le router express
const router = express.Router();

//importe le fichier requests.js (contient le requetes vers la base de données)
const data = require('../controllers/data');


//API REST

//GET METHODS
router.get('/users',data.getAllUsers);
router.get('/users/:mail',data.getUserByMail)
router.get('/eleves', data.getAllEleves);
router.get('/eleves/:id',data.getEleveById);
router.get('/calendrier',data.getCalendarData);
router.get('/contact',data.getContactDirectionSecretariat);


//POST METHODS
router.post('/eleves',data.insertStudent);
router.post('/users',data.insertUser);


//DELETE METHODS


//PUT METHODS




module.exports = router;