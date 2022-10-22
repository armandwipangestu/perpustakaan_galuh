import { Sequelize } from "sequelize";
import DatabaseConnection from "../config/database.config.js";

const { DataTypes } = Sequelize;

const PengembalianBuku = DatabaseConnection.define(
  "pengembalian",
  {
    nama_peminjam: DataTypes.STRING,
    judul_buku: DataTypes.STRING,
    tanggal_pinjam: DataTypes.STRING,
    tanggal_kembali: DataTypes.STRING,
    tanggal_pengembalian: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default PengembalianBuku;

(async () => {
  await DatabaseConnection.sync();
})();
