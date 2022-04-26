const {body} = require ("express-validator");

const elevesDataValidationSchema = [
    body("Prenom")
      .exists({ checkFalsy: true })
      .withMessage("User Prenom is required")
      .isString()
      .withMessage("User prenom should be string")
      .isLength({min: 3, max: 40}),
      
    body("Nom")
      .exists({ checkFalsy: true })
      .withMessage("User Prenom is required")
      .isString()
      .withMessage("User prenom should be string")
      .isLength({min: 3, max: 40}),

    body("Mail")
      .exists({ checkFalsy: true })
      .withMessage("Mail is required")
      .isEmail()
      .withMessage("input should be Mail")
      .isLength({min: 3, max: 40}),
    
    body("Classe")
      .exists({ checkFalsy: true })
      .withMessage("Password is required")
      .isString()
      .withMessage("Password should be a string")
      .isLength({max: 2}),
    
];

module.exports = elevesDataValidationSchema;