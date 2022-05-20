const {body} = require ("express-validator");

const comportementDataValidationSchema = [
    body("EleveID")
      .exists({ checkFalsy: true })
      .withMessage("EleveId is required")
      .withMessage("EleveId should be a int")
      .isLength({min: 1, max: 10}),
      
    body("Contenu")
      .exists({ checkFalsy: true })
      .withMessage("Contenu is required")
      .isString()
      .withMessage("Contenu should be a string")
      .isLength({min: 5}),

    body("Date")
      .exists({ checkFalsy: true })
      .withMessage("Date is required")
      .isDate()
      .withMessage("input should be Date"),
    
      body("Mail")
      .exists({ checkFalsy: true })
      .withMessage("Mail is required")
      .isEmail()
      .withMessage("input should be Mail")
      .isLength({min: 3, max: 40}),
    
];

module.exports = comportementDataValidationSchema;