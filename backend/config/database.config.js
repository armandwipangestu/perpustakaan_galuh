import { Sequelize } from "sequelize";

const db_name = "armandwi_perpustakaan_galuh";
const db_host = "armandwipangestu.my.id";
const db_user = "armandwi_perpustakaan_galuh";
const db_pass = "O$gWqiR[f-ew";
const db_vendor = "mysql";

const DatabaseConnection = new Sequelize(db_name, db_user, db_pass, {
  host: db_host,
  port: 3306,
  dialect: db_vendor,
});

export default DatabaseConnection;
