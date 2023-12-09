import MaterialController from "../controllers/material_controller.js";
import authGuard from "../middlewares/auth_guard.js";
import errorHandler from "../middlewares/error_handler.js";
import MaterialValidator from "../validators/material_validator.js";
import express from "express";

const materialRouter = express.Router();
const materialValidator = new MaterialValidator();
const materialController = new MaterialController();

materialRouter.get("/", authGuard, materialController.all);

materialRouter.get(
  "/id/:id",
  authGuard,
  materialValidator.checkId(),
  errorHandler,
  materialController.getMaterialById
);
materialRouter.get(
  "/topic/:topic",
  authGuard,
  materialValidator.checkTopic(),
  errorHandler,
  materialController.getMaterialByTopic
);
materialRouter.get(
  "/id/:id/quiz",
  authGuard,
  materialValidator.checkId(),
  errorHandler,
  materialController.getQuiz
);

export default materialRouter;
