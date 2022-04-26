'use strict'

//ce dossier sera utiliser pour la création d'url dynamiques.
const URL = "http://localhost:3000";

function concatUrl(stringToConcat){
    let newUrl = URL.concat(stringToConcat);
    return newUrl;

}

module.exports = {
    concatUrl,
}