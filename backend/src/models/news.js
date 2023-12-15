import { DataTypes, Model } from "sequelize";
import sequelizeDb from "../database/db.js";

class News extends Model {}

News.init(
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
    extract: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    topic: {
      type: DataTypes.ENUM,
      values: ["crypto", "stock", "fund", "other"],
      allowNull: false,
      validate: {
        isIn: [["fund", "crypto", "stock", "other"]],
      },
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "news",
  }
);

export default News;
