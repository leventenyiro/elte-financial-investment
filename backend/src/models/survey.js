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
      type: DataTypes.ENUM(
        "Rövid távú célok",
        "Középtávú célok",
        "Hosszú távú célok"
      ),
      allowNull: false,
    },
    answer2: {
      type: DataTypes.ENUM(
        "Utazások",
        "Lakásvásárlás",
        "Nyugdíj",
        "Tartalék képzés"
      ),
      allowNull: false,
    },
    answer3: {
      type: DataTypes.ENUM(
        "Alacsony kockázat",
        "Közepes kockázat",
        "Magas kockázat"
      ),
      allowNull: false,
    },
    answer4: {
      type: DataTypes.ENUM(
        "Nem fontos",
        "Kevésbé fontos",
        "Fontos",
        "Nagyon fontos"
      ),
      allowNull: false,
    },
    answer5: {
      type: DataTypes.ENUM("Változó", "Stabil", "Növekvő"),
      allowNull: false,
    },
    answer6: {
      type: DataTypes.ENUM(
        "Munkabér",
        "Befektetések hozama",
        "Passzív jövedelemforrások"
      ),
      allowNull: false,
    },
    answer7: {
      type: DataTypes.ENUM(
        "Diák",
        "Friss diplomás",
        "Középkorú",
        "Pályaelhagyás elött álló"
      ),
      allowNull: false,
    },
    answer8: {
      type: DataTypes.ENUM(
        "Karrierépítés",
        "Váltás a munkaerőpiacon",
        "Családalapítás"
      ),
      allowNull: false,
    },
    answer9: {
      type: DataTypes.ENUM("Kezdő", "Tapasztalt"),
      allowNull: false,
    },
    answer10: {
      type: DataTypes.ENUM(
        "Konzervatív, alacsony hozam",
        "Kiegyensúlyozott, közepes hozam",
        "Kockázatos, magas hozam"
      ),
      allowNull: false,
    },
    answer11: {
      type: DataTypes.ENUM(
        "Nem vagyok tisztában",
        "Részben tisztában vagyok",
        "Jól tájékozott vagyok",
        "Nagyon jól tájékozott vagyok"
      ),
      allowNull: false,
    },
    answer12: {
      type: DataTypes.ENUM(
        "Pénzügyi trendek",
        "Befektetési lehetőségek",
        "Gazdasági stabilitás",
        "Infláció és kamat"
      ),
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: "surveys",
  }
);

export default Survey;
