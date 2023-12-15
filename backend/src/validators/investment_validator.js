import { param } from "express-validator";

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
}

export default InvestmentValidator;
