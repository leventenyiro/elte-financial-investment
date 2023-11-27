import UserController from "../controllers/user_controller.js";
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

export default userRouter;
