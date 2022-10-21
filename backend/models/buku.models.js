import { Sequelize } from "sequelize";
import DatabaseConnection from "../config/database.config.js";

const { DataTypes } = Sequelize;

const Buku = DatabaseConnection.define(
  "buku",
  {
    id_buku: DataTypes.STRING,
    judul_buku: DataTypes.STRING,
    pengarang: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    tahun_terbit: DataTypes.INTEGER,
    gambar: DataTypes.STRING,
    bahasa: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Buku;

(async () => {
  await DatabaseConnection.sync();
})();
