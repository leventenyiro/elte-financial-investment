import { body } from "express-validator";

class UserValidator {
  checkReg() {
    return [
      body("firstName")
        .notEmpty()
        .withMessage("The firstName value should not empty."),
      body("lastName")
        .notEmpty()
        .withMessage("The lastName value should not empty."),
      body("email").notEmpty().withMessage("The email value should not empty."),
      body("email").isEmail().withMessage("The email field should be email."),
      body("password")
        .notEmpty()
        .withMessage("The password value should not empty."),
      body("survey")
        .notEmpty()
        .withMessage("The survey value should not empty."),
      body("survey.answer1").notEmpty().isNumeric(),
      body("survey.answer2").notEmpty().isNumeric(),
      body("survey.answer3").notEmpty().isNumeric(),
      body("survey.answer4").notEmpty().isNumeric(),
      body("survey.answer5").notEmpty().isNumeric(),
      body("survey.answer6").notEmpty().isNumeric(),
      body("survey.answer7").notEmpty().isNumeric(),
      body("survey.answer8").notEmpty().isNumeric(),
      body("survey.answer9").notEmpty().isNumeric(),
      body("survey.answer10").notEmpty().isNumeric(),
      body("survey.answer11").notEmpty().isNumeric(),
      body("survey.answer12").notEmpty().isNumeric(),
    ];
  }
  checkLogin() {
    return [
      body("email").notEmpty().withMessage("The email value should not empty."),
      body("email").isEmail().withMessage("The email field should be email."),
      body("password")
        .notEmpty()
        .withMessage("The password value should not empty."),
    ];
  }
  checkUpdate() {
    return [
      body("email").notEmpty().withMessage("The email value should not empty."),
      body("email").isEmail().withMessage("The email field should be email."),
      body("firstName")
        .notEmpty()
        .withMessage("The firstName value should not empty."),
      body("lastName")
        .notEmpty()
        .withMessage("The lastName value should not empty."),
      body("risk").notEmpty().withMessage("The risk value should not empty."),
    ];
  }
}

export default UserValidator;
