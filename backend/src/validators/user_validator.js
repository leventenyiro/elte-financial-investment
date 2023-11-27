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
    ];
  }
}

export default UserValidator;
