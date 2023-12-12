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
      values: ["Material", "Quiz", "Investment"],
      allowNull: false,
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
