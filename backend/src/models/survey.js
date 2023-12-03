import { DataTypes, Model } from "sequelize";
import sequelizeDb from "../database/db.js";

class Survey extends Model {}

Survey.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    answer1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer5: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer6: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer7: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer8: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer9: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer10: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer11: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer12: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "surveys",
  }
);

export default Survey;
