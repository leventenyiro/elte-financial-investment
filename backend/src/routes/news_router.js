import NewsController from "../controllers/news_controller.js";
import errorHandler from "../middlewares/error_handler.js";
import authGuard from "../middlewares/auth_guard.js";
import express from "express";
import NewsValidator from "../validators/news_validator.js";

const newsRouter = express.Router();
const newsController = new NewsController();
const newsValidator = new NewsValidator();

newsRouter.get("/", authGuard, newsController.all);
newsRouter.get(
  "/id/:id",
  authGuard,
  newsValidator.checkId(),
  errorHandler,
  newsController.getNewsById
);

export default newsRouter;
