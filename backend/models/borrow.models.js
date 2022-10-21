import { Sequelize } from "sequelize";
import DatabaseConnection from "../config/database.config.js";

const { DataTypes } = Sequelize;

const BorrowsBook = DatabaseConnection.define(
  "borrows",
  {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    borrow_book_title: DataTypes.STRING,
    borrowing_date: DataTypes.DATE,
    return_date: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

export default BorrowsBook;

(async () => {
  await DatabaseConnection.sync();
})();
