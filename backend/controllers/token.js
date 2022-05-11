'use strict'

const jwt = require('jsonwebtoken');
const { response } = require('../app');

const access_token = '54654621HGJAHLKJZLEKJA';
const refresh_token = '215675651321JAHKAJZHEKAJZH';

function generateAccessToken(user){
    return jwt.sign(user, access_token,{expiresIn : '1800s'});
}


function generateRefreshToken(user) {
    return jwt.sign(user, refresh_token , {expiresIn: '1y'});
  }


//middleware permettant de regarder si l'utilisateur à accès à la requete ou non
function authenticateToken(request, response, next){
    const authHeader = request.headers['authorization']

    const token = authHeader && authHeader.split(' ')[1]; // Bearer _ Token 

    if (!token) {
        return response.sendStatus(401);
      }
    
    jwt.verify(token, access_token , (err, user) => {
    if (err) {
        return response.sendStatus(401);
    }
    request.user = user; 
    next();
    });
}

function refreshToken(request, response){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.sendStatus(401);
    }
  
    jwt.verify(token, refresh_token, (err, user) => {
      if (err) {
        return res.sendStatus(401);
      }
      // TODO : check en bdd que le user a toujours les droit et qu'il existe toujours
      delete user.iat;
      delete user.exp;

      const refreshedToken = generateAccessToken(user);
      res.send({
        accessToken: refreshedToken,
      });
    });
}


module.exports = {
    generateAccessToken,
    authenticateToken,
    refreshToken
}