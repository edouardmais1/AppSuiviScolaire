'use strict'
//importe le module express
const express = require("express");
//import le module cors
const cors = require("cors");
//importe le fichier main.js
const Route = require("./routes/main");
//initisaliser express
const app = express();

//importer le module cookie-session
const cookieSession = require('cookie-session')

//importer le module express-session
const session = require('express-session');
//importer le module body-parser
const bodyParser = require('body-parser');
//importer le module cookie-parser
const cookieParser = require('cookie-parser');



//utiliser json
app.use(express.json());


//utiliser cors
app.use(cors({
    //origin: ["http://localhost:8080"], //location of the VueJS app
    methods: ["GET", "POST", "PUT", "DELETE", "UPDATE"],
    credentials: true,
    exposedHeaders: ['set-cookie']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//middleware intéraction serveur frontend && backend
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    next();
});

app.use(express.urlencoded({extended: true}));

//utiliser le router NodeJS
app.use('/',Route);
app.listen(3000, () => {console.log('Server running on port 3000')});



module.exports = app;