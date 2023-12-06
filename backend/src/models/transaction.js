import { DataTypes, Model } from "sequelize";
import sequelizeDb from "../database/db.js";

class Transaction extends Model {}

Transaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ccn: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    type: {
      type: DataTypes.ENUM("standard", "premium"),
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "transactions",
  }
);

export default Transaction;
