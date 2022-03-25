'use strict'

//importe le module express
const express = require('express');

//initialiser le router express
const router = express.Router();

//importe le fichier requests.js (contient le requetes vers la base de données)
const request = require('../controllers/request');


//API REST

//GET METHODS
router.get('/',request.getEleves);
router.get('/users',request.getUtilisateur)


//POST METHODS 


//DELETE METHODS


//PUT METHODS




module.exports = router;