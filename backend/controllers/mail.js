'use strict'

const { json } = require("express");

//FICHIER POUR L'ENVOI DE MAIL
const sendMail = (request,response)=>{
    const data = request.body;
    console.log(data);
}

module.exports = {
    sendMail,
}
