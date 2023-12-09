import { DataTypes, Model } from "sequelize";
import sequelizeDb from "../database/db.js";

class Question extends Model {}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "questions",
  }
);

export default Question;
