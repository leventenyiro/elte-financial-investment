import { param, body } from "express-validator";

class InvestmentValidator {
  checkTopic() {
    return [param("topic").notEmpty().isIn(["stock", "fund", "crypto"])];
  }
  checkRisk() {
    return [param("risk").notEmpty().isIn(["high", "medium", "low"])];
  }
  checkId() {
    return [param("id").notEmpty().isNumeric()];
  }
  checkInv() {
    return [
      body("topic").notEmpty().isIn(["stock", "fund", "crypto"]),
      body("risk").notEmpty().isIn(["high", "medium", "low"]),
      body("title").notEmpty(),
      body("content").notEmpty(),
    ];
  }
}

export default InvestmentValidator;
