import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config()

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_VENDOR = process.env.DB_VENDOR;

const DatabaseConnection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_VENDOR,
});

export default DatabaseConnection;
