import { param } from "express-validator";

class MaterialValidator {
  checkId() {
    return [param("id").notEmpty().isNumeric()];
  }
  checkTopic() {
    return [
      param("topic").notEmpty().isIn(["basics", "stock", "fund", "crypto"]),
    ];
  }
}
export default MaterialValidator;
