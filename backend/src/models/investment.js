import { DataTypes, Model, STRING } from "sequelize";
import sequelizeDb from "../database/db.js";

class Investment extends Model {}

Investment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    risk: {
      type: DataTypes.ENUM,
      values: ["low", "medium", "high"],
      allowNull: false,
      validate: {
        isIn: [["low", "medium", "high"]],
      },
    },
    topic: {
      type: DataTypes.ENUM,
      values: ["fund", "crypto", "stock"],
      allowNull: false,
      validate: {
        isIn: [["fund", "crypto", "stock"]],
      },
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "investments",
  }
);

export default Investment;
