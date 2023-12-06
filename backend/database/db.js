import { Sequelize } from "sequelize";

const sequelizeDb = new Sequelize("app", "", "", {
  storage: "src/database/database.sqlite",
  dialect: "sqlite",
  logging: false,
});

export default sequelizeDb;
