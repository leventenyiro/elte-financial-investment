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
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
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
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    risk: {
      type: DataTypes.ENUM("low", "medium", "high"),
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "users",
  }
);

export default User;
