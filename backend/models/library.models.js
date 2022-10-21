import { Sequelize } from "sequelize";
import DatabaseConnection from "../config/database.config.js";

const { DataTypes } = Sequelize;

const LibraryBooks = DatabaseConnection.define(
  "books",
  {
    title: DataTypes.TEXT,
    author: DataTypes.TEXT,
    cover: DataTypes.TEXT,
    category: DataTypes.TEXT,
    year_published: DataTypes.TEXT,
    publisher: DataTypes.TEXT,
    language: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

export default LibraryBooks;

(async () => {
  await DatabaseConnection.sync();
})();
