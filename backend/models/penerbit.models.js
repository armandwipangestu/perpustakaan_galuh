import { Sequelize } from "sequelize";
import DatabaseConnection from "../config/database.config.js";

const { DataTypes } = Sequelize;

const Penerbit = DatabaseConnection.define(
  "penerbit",
  {
    penerbit: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Penerbit;

(async () => {
  await DatabaseConnection.sync();
})();
