import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Triathlons from "../models/triathlons.js";

const Cyclings = sequelize.define("Cyclings", {
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
  avgSpeed: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  map: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
Cyclings.belongsTo(Triathlons, { foreignKey: "triathlonId" });

export default Cyclings;
