const {body} = require ("express-validator");

const calendarDataValidationSchema = [
    body("Classe")
      .exists({ checkFalsy: true })
      .withMessage("Title is required")
      .isString()
      .withMessage("Title should be a string")
      .isLength({min: 3, max: 40}),
      
    body("Contenu")
      .exists({ checkFalsy: true })
      .withMessage("Contenu is required")
      .isString()
      .withMessage("Contenu should be a string")
      .isLength({min: 15}),

    body("Date")
      .exists({ checkFalsy: true })
      .withMessage("Date is required")
      .isDate()
      .withMessage("input should be Date"),
    
];

module.exports = calendarDataValidationSchema;