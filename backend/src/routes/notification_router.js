import NotificationController from "../controllers/notification_controller.js";
import NotificationValidator from "../validators/notification_validator.js";
import authGuard from "../middlewares/auth_guard.js";
import errorHandler from "../middlewares/error_handler.js";
import express from "express";

const notificationRouter = express.Router();
const notificationValidator = new NotificationValidator();
const notificationController = new NotificationController();

notificationRouter.patch(
  "/",
  authGuard,
  notificationValidator.checkId(),
  errorHandler,
  notificationController.updateStatus
);
notificationRouter.get("/", authGuard, notificationController.all);

export default notificationRouter;
