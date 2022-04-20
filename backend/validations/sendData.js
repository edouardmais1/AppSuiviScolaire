const {body, checkSchema} = require ("express-validator");

const userDataValidationSchema = {
    Mail: {
        exists: {errorMessage: "le champ mail est requis"},
        isString: {errorMessage: "Le champ mail doit etre une chaine de caracteres"},
        trim: true,
        isLength:{
            options: {min:3, max:40},
            errorMessage: "le mail doit comporter entre 3 et 40 caractères"
        },
        errorMessage: "le champ mail est invalide"
    },

    MotDePasse: {
        exists: {errorMessage: "le champ Password est requis"},
        isString: {errorMessage: "Le champ password doit etre une chaine de caracteres"},
        trim: true,
        isLength:{
            options: {min:8, max:40},
            errorMessage: "le mail doit comporter entre 8 et 40 caractères"
        },
        errorMessage: "le champ password est invalide"
    },

    Nom: {
        exists: {errorMessage: "le champ Nom est requis"},
        isString: {errorMessage: "Le champ nom doit etre une chaine de caracteres"},
        trim: true,
        isLength:{
            options: {min:3, max:40},
            errorMessage: "le nom doit comporter entre 3 et 40 caractères"
        },
        errorMessage: "le champ nom est invalide"
    },

    Prenom: {
        exists: {errorMessage: "le champ prenom est requis"},
        isString: {errorMessage: "Le champ prenom doit etre une chaine de caracteres"},
        trim: true,
        isLength:{
            options: {min:3, max:40},
            errorMessage: "le prenom doit comporter entre 3 et 40 caractères"
        },
        errorMessage: "le champ prenom est invalide"
    },


};

module.exports = userDataValidationSchema;