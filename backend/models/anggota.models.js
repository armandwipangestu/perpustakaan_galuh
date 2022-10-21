import { Sequelize } from "sequelize";
import DatabaseConnection from "../config/database.config.js";

const { DataTypes } = Sequelize;

const Anggota = DatabaseConnection.define(
  "anggota",
  {
    id_anggota: DataTypes.STRING,
    nama_anggota: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_telepon: DataTypes.INTEGER(13),
  },
  {
    freezeTableName: true,
  }
);

export default Anggota;

(async () => {
  await DatabaseConnection.sync();
})();
