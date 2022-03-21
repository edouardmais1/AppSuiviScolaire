'use strict'

//importe le package express
const express = require("express");

//import le package cors
const cors = require("cors");


const Route = require("./routes/main");

//initisaliser express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router
app.use('/',Route);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));

module.exports = app;