import { DataTypes, Model } from "sequelize";
import sequelizeDb from "../database/db.js";

class Quiz extends Model {}

Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "quizzes",
  }
);

export default Quiz;
