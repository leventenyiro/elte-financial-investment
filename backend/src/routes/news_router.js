import NewsController from "../controllers/news_controller.js";
import authGuard from "../middlewares/auth_guard.js";
import express from "express";

const newsRouter = express.Router();
const newsController = new NewsController();

newsRouter.get("/", authGuard, newsController.all);

export default newsRouter;
