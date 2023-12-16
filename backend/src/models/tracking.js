import { DataTypes, Model, STRING } from "sequelize";
import sequelizeDb from "../database/db.js";

class Tracking extends Model {}

Tracking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    content: {
      type: DataTypes.ENUM,
      values: ["material", "quiz", "investment"],
      allowNull: false,
      validate: {
        isIn: [["quiz", "investment", "material"]],
      },
    },
    contentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "tracking",
  }
);

export default Tracking;
