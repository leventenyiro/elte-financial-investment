import { DataTypes, Model } from "sequelize";
import sequelizeDb from "../database/db.js";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["user", "admin"],
      allowNull: false,
      validate: {
        isIn: [["user", "admin"]],
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
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
    fund: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    stock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    crypto: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "users",
  }
);

export default User;
