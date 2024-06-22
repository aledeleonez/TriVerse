import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Triathlons from "../models/triathlons.js";

const Swims = sequelize.define("Swims", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  triathlonId: {
    type: DataTypes.INTEGER,
    references: {
      model: Triathlons,
      key: "id",
    },
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  distance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  avgPace: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Swims.belongsTo(Triathlons, { foreignKey: "triathlonId" });
export default Swims;
