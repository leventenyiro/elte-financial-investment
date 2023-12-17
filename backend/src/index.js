import express from "express";
import userRouter from "./routes/user_router.js";
import sequelizeDb from "./database/db.js";
import path from "path";
import { fileURLToPath } from "url";
import materialRouter from "./routes/material_router.js";
import newsRouter from "./routes/news_router.js";
import investmentRouter from "./routes/investments_router.js";
import helmet from "helmet";
import cors from "cors";
import notificationRouter from "./routes/notification_router.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(
  helmet(),
  cors(corsOptions),
  express.json(),
  express.static(path.join(__dirname, "public"))
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use("/user", userRouter);
app.use("/material", materialRouter);
app.use("/news", newsRouter);
app.use("/investment", investmentRouter);
app.use("/notification", notificationRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});

server.keepAliveTimeout = 600 * 1000;
server.headersTimeout = 610 * 1000;

export default app;
