import express from "express";
import userRouter from "./routes/user_router.js";
import sequelizeDb from "./database/db.js";
import cors from "cors";
await sequelizeDb.sync();

const app = express();
const port = 4000;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.json(), cors(corsOptions));

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
