import mysql from "mysql2/promise";

export const poolConnection = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "",
  database: process.env.DATABASE || "savera"
});
