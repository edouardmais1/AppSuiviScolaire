'use strict'
//importer le modules express-session
const session = require('express-session');

//importe le module express
const express = require("express");

//import le module cors
const cors = require("cors");

//importe le fichier main.js
const Route = require("./routes/main");

//initisaliser express
const app = express();

//utiliser json
app.use(express.json());

//utiliser les sessions
app.use(session({
    secret: "secret-key",
    name: "session-id",
    resave: false,
    saveUninitialized: false,
    cookie: {secure: true, httpOnly: true},
}))


//utiliser cors
app.use(cors());


//middleware intéraction serveur frontend && backend
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    next();
});

app.use(express.urlencoded({extended: true}));

//utiliser le router NodeJS
app.use('/',Route);


app.listen(3000, () => console.log('Server running at http://localhost:3000'));

module.exports = app;