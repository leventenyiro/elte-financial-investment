import { param } from "express-validator";

class NewsValidator {
  checkId() {
    return [param("id").notEmpty().isNumeric()];
  }
}
export default NewsValidator;
