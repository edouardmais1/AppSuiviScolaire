'use strict'

//importer le module Express
const express = require('express');

const app = express();


const indexRoute = require('./routes/index');

//appliquer le css qui se trouve dans le dossier public
app.use('/public', express.static('public'));


//définition du moteur d'affichage
app.set('view engine', 'ejs');

//définition route Page d'index
app.use('/',indexRoute);


//test de route

app.get('/test',(req,res)=>{
    res.send("hello world")
})

//définition route vers ...


//définition route vers ...


//définition route vers ...


//définition route vers ...




//exporter 'app.js'
module.exports = app;