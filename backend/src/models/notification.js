import { DataTypes, Model } from "sequelize";
import sequelizeDb from "../database/db.js";

class Notification extends Model {}

Notification.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    contentType: {
      type: DataTypes.ENUM,
      values: ["quiz", "investment", "material"],
      allowNull: false,
      validate: {
        isIn: [["quiz", "investment", "material"]],
      },
    },
    topic: {
      type: DataTypes.ENUM,
      values: ["crypto", "stock", "fund"],
      allowNull: false,
      validate: {
        isIn: [["fund", "crypto", "stock"]],
      },
    },
    seenByUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "notification",
  }
);

export default Notification;
