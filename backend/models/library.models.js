import { Sequelize } from "sequelize";
import DatabaseConnection from "../config/database.config.js";

const { DataTypes } = Sequelize;

const LibraryBooks = DatabaseConnection.define(
  "books",
  {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    cover: DataTypes.TEXT,
    category: DataTypes.STRING,
    year_published: DataTypes.INTEGER(4),
    publisher: DataTypes.STRING,
    language: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default LibraryBooks;

(async () => {
  await DatabaseConnection.sync();
})();
