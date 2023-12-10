import { DataTypes, Model } from "sequelize";
import sequelizeDb from "../database/db.js";

class Investment extends Model {}

Investment.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    risk: {
      type: DataTypes.ENUM('high, medium, low'),
      allowNull: false,
      unique: true,
    },
    yield: {
      type: DataTypes.ENUM('fund, crypto, stock'),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "investments",
  }
);

export default Investment;
