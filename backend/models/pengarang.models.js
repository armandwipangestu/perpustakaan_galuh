import { Sequelize } from "sequelize";
import DatabaseConnection from "../config/database.config.js";

const { DataTypes } = Sequelize;

const Pengarang = DatabaseConnection.define(
  "pengarang",
  {
    pengarang: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Pengarang;

(async () => {
  await DatabaseConnection.sync();
})();
