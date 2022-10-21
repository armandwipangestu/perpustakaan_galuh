import { Sequelize } from "sequelize";

const db_name = "developer_test";
const db_host = "localhost";
const db_user = "root";
const db_pass = "roottoor";
const db_vendor = "mysql";

const DatabaseConnection = new Sequelize(db_name, db_user, db_pass, {
  host: db_host,
  dialect: db_vendor,
});

export default DatabaseConnection;
