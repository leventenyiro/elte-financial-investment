import { body, param } from "express-validator";

class InvestmentValidator {
  checkTopic() {
    return [param("topic").notEmpty().isIn(["stock", "fund", "crypto"])];
  }
  checkRisk() {
    return [param("topic").notEmpty().isIn(["high", "medium", "low"])];
  }

  checkDate() {
    return [
      body("startDate")
        .notEmpty()
        .withMessage("Start date should not be empty"),
      body("endDate").notEmpty().withMessage("End date should not be empty"),
    ];
  }
}

export default InvestmentValidator;
