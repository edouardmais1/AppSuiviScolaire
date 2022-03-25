'use strict'

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
app.use(cors());

//utiliser le router NodeJS
app.use('/',Route);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));

module.exports = app;