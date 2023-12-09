import express from "express";
import userRouter from "./routes/user_router.js";
import sequelizeDb from "./database/db.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import materialRouter from "./routes/material_router.js";
import newsRouter from "./routes/news_router.js";

await sequelizeDb.sync();

const app = express();
const port = 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(
  express.json(),
  cors(corsOptions),
  express.static(path.join(__dirname, "public"))
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use("/user", userRouter);
app.use("/material", materialRouter);
app.use("/news", newsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
