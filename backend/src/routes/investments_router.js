import InvestmentsController from "../controllers/investments_controller.js";
import InvestmentValidator from "../validators/investment_validator.js";
import authGuard from "../middlewares/auth_guard.js";
import errorHandler from "../middlewares/error_handler.js";
import express from "express";

const investmentRouter = express.Router();
const investmentController = new InvestmentsController();
const investmentValidator = new InvestmentValidator();

investmentRouter.get(
  "/risk/:risk",
  authGuard,
  investmentValidator.checkRisk(),
  errorHandler,
  investmentController.getRisk
);
investmentRouter.get(
  "/topic/:topic",
  authGuard,
  investmentValidator.checkTopic(),
  errorHandler,
  investmentController.getTopic
);
investmentRouter.get(
  "/weekly",
  authGuard,
  investmentValidator.checkDate(),
  errorHandler,
  investmentController.getWeekly
);
investmentController.get(
  "/id/:id",
  authGuard,
  investmentValidator.checkId(),
  errorHandler,
  investmentController.getById()
);

export default investmentRouter;
