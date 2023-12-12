import { DataTypes, Model, STRING } from "sequelize";
import sequelizeDb from "../database/db.js";

class Yield extends Model {}

Yield.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    interestRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "yields",
  }
);

export default Yield;
