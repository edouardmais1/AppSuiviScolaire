'use strict'

//CONTIENT LA ROUTE VERS LE FICHIER MAIN DE NOTRE APPLICATION

const express = require('express');

//initialiser le router express
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("hello world")
})


module.exports = router;