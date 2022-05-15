const {body} = require ("express-validator");

const calendarDataValidationSchema = [
    body("Classe")
      .exists({ checkFalsy: true })
      .withMessage("Title is required")
      .isString()
      .withMessage("Title should be a string"),
      
    body("Contenu")
      .exists({ checkFalsy: true })
      .withMessage("Contenu is required")
      .isString()
      .withMessage("Contenu should be a string")
      .isLength({min: 15}),


    body("Titre")
      .exists({ checkFalsy: true })
      .withMessage("Titre is required")
      .isString()
      .withMessage("input should be String")
      .isLength({min: 3, max: 30}),
    
];

module.exports = calendarDataValidationSchema;