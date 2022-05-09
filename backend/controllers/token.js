'use strict'

const jwt = require('jsonwebtoken');

const access_token = '54654621HGJAHLKJZLEKJA'


function generateAccessToken(user){
    return jwt.sign(user, access_token,{expiresIn : '1800s'});
}


module.exports = {
    generateAccessToken,
}