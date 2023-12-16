import { DataTypes, Model } from "sequelize";
import sequelizeDb from "../database/db.js";

class Material extends Model {}

Material.init(
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    topic: {
      type: DataTypes.ENUM,
      values: ["crypto", "stock", "fund", "basics"],
      allowNull: false,
      validate: {
        isIn: [["fund", "crypto", "stock", "basics"]],
      },
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "materials",
  }
);

export default Material;
