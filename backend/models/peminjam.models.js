import { Sequelize } from "sequelize";
import DatabaseConnection from "../config/database.config.js";

const { DataTypes } = Sequelize;

const PeminjamBuku = DatabaseConnection.define(
  "peminjam",
  {
    id_peminjam: DataTypes.STRING,
    nama_peminjam: DataTypes.STRING,
    judul_buku: DataTypes.STRING,
    tanggal_pinjam: DataTypes.STRING,
    tanggal_kembali: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default PeminjamBuku;

(async () => {
  await DatabaseConnection.sync();
})();
