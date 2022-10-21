import { Sequelize } from "sequelize";
import DatabaseConnection from "../config/database.config.js";

const { DataTypes } = Sequelize;

const LoansBook = DatabaseConnection.define(
  "loans",
  {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    borrowing_date: DataTypes.DATE,
    return_date: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

export default LoansBook;

(async () => {
  await DatabaseConnection.sync();
})();
