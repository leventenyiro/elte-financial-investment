import express from "express";
import userRouter from "./routes/user_router.js";
import sequelizeDb from "./database/db.js";

await sequelizeDb.sync({ force: true });

const app = express();
const port = 4000;

app.use(express.json());

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
