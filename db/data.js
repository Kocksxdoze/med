const mysql = require("mysql2/promise");
const sequilize = require("sequelize");
require("dotenv").config();

async function data(sql) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql);

  return results;
}

const sequelizeNew = new Sequelize({
  database: "med",
  username: "medA",
  password: "",
  dialect: "mysql",
});
