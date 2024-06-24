import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Users from "./users.js";

const Triathlons = sequelize.define(
  "Triathlons",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
Triathlons.belongsTo(Users, { foreignKey: "userId" });

export default Triathlons;
