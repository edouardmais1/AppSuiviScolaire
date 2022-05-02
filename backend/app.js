'use strict'

//importer le module express-session
const session = require('express-session');
//importer le module body-parser
const bodyParser = require('body-parser');
//importer le module cookie-parser
const cookieParser = require('cookie-parser');

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
//utiliser cors
app.use(cors({
    //origin: ["http://localhost:8080"],
    methods: ["GET", "POST", "PUT", "DELETE", "UPDATE"],
    credentials: true,
}));

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}));

//utiliser les sessions
app.use(session({
    key : "userId",
    secret : "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}))




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