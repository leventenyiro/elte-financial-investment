import UserController from "../controllers/user_controller.js";
import authGuard from "../middlewares/auth_guard.js";
import errorHandler from "../middlewares/error_handler.js";
import UserValidator from "../validators/user_validator.js";
import express from "express";

const userRouter = express.Router();
const userValidator = new UserValidator();
const userController = new UserController();

userRouter.post(
  "/registration",
  userValidator.checkReg(),
  errorHandler,
  userController.create
);

userRouter.post(
  "/login",
  userValidator.checkLogin(),
  errorHandler,
  userController.login
);

userRouter.get("/me", authGuard, userController.getMe);
userRouter.patch(
  "/me",
  authGuard,
  userValidator.checkUpdate(),
  errorHandler,
  userController.updateMe
);
userRouter.get("/logout", authGuard, userController.logout);

export default userRouter;
